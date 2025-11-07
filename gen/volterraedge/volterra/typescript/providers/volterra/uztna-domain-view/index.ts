// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UztnaDomainViewConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#access_url UztnaDomainView#access_url}
  */
  readonly accessUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#annotations UztnaDomainView#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#description UztnaDomainView#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#disable UztnaDomainView#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#id UztnaDomainView#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#labels UztnaDomainView#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#name UztnaDomainView#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#namespace UztnaDomainView#namespace}
  */
  readonly namespace: string;
  /**
  * app_vip_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#app_vip_pool UztnaDomainView#app_vip_pool}
  */
  readonly appVipPool?: UztnaDomainViewAppVipPool;
  /**
  * cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#cert UztnaDomainView#cert}
  */
  readonly cert: UztnaDomainViewCert;
  /**
  * gateways block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#gateways UztnaDomainView#gateways}
  */
  readonly gateways: UztnaDomainViewGateways;
  /**
  * lease_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#lease_pool UztnaDomainView#lease_pool}
  */
  readonly leasePool?: UztnaDomainViewLeasePool;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#policy UztnaDomainView#policy}
  */
  readonly policy?: UztnaDomainViewPolicy;
}
export interface UztnaDomainViewAppVipPoolIpv4AppVipPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#name UztnaDomainView#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#namespace UztnaDomainView#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#tenant UztnaDomainView#tenant}
  */
  readonly tenant?: string;
}

export function uztnaDomainViewAppVipPoolIpv4AppVipPoolToTerraform(struct?: UztnaDomainViewAppVipPoolIpv4AppVipPoolOutputReference | UztnaDomainViewAppVipPoolIpv4AppVipPool): any {
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


export function uztnaDomainViewAppVipPoolIpv4AppVipPoolToHclTerraform(struct?: UztnaDomainViewAppVipPoolIpv4AppVipPoolOutputReference | UztnaDomainViewAppVipPoolIpv4AppVipPool): any {
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

export class UztnaDomainViewAppVipPoolIpv4AppVipPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaDomainViewAppVipPoolIpv4AppVipPool | undefined {
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

  public set internalValue(value: UztnaDomainViewAppVipPoolIpv4AppVipPool | undefined) {
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
export interface UztnaDomainViewAppVipPool {
  /**
  * ipv4_app_vip_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#ipv4_app_vip_pool UztnaDomainView#ipv4_app_vip_pool}
  */
  readonly ipv4AppVipPool: UztnaDomainViewAppVipPoolIpv4AppVipPool;
}

export function uztnaDomainViewAppVipPoolToTerraform(struct?: UztnaDomainViewAppVipPoolOutputReference | UztnaDomainViewAppVipPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_app_vip_pool: uztnaDomainViewAppVipPoolIpv4AppVipPoolToTerraform(struct!.ipv4AppVipPool),
  }
}


export function uztnaDomainViewAppVipPoolToHclTerraform(struct?: UztnaDomainViewAppVipPoolOutputReference | UztnaDomainViewAppVipPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_app_vip_pool: {
      value: uztnaDomainViewAppVipPoolIpv4AppVipPoolToHclTerraform(struct!.ipv4AppVipPool),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaDomainViewAppVipPoolIpv4AppVipPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaDomainViewAppVipPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaDomainViewAppVipPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4AppVipPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AppVipPool = this._ipv4AppVipPool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaDomainViewAppVipPool | undefined) {
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
  private _ipv4AppVipPool = new UztnaDomainViewAppVipPoolIpv4AppVipPoolOutputReference(this, "ipv4_app_vip_pool");
  public get ipv4AppVipPool() {
    return this._ipv4AppVipPool;
  }
  public putIpv4AppVipPool(value: UztnaDomainViewAppVipPoolIpv4AppVipPool) {
    this._ipv4AppVipPool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AppVipPoolInput() {
    return this._ipv4AppVipPool.internalValue;
  }
}
export interface UztnaDomainViewCertCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#name UztnaDomainView#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#namespace UztnaDomainView#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#tenant UztnaDomainView#tenant}
  */
  readonly tenant?: string;
}

export function uztnaDomainViewCertCertificateToTerraform(struct?: UztnaDomainViewCertCertificateOutputReference | UztnaDomainViewCertCertificate): any {
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


export function uztnaDomainViewCertCertificateToHclTerraform(struct?: UztnaDomainViewCertCertificateOutputReference | UztnaDomainViewCertCertificate): any {
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

export class UztnaDomainViewCertCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaDomainViewCertCertificate | undefined {
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

  public set internalValue(value: UztnaDomainViewCertCertificate | undefined) {
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
export interface UztnaDomainViewCert {
  /**
  * certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#certificate UztnaDomainView#certificate}
  */
  readonly certificate?: UztnaDomainViewCertCertificate;
}

export function uztnaDomainViewCertToTerraform(struct?: UztnaDomainViewCertOutputReference | UztnaDomainViewCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: uztnaDomainViewCertCertificateToTerraform(struct!.certificate),
  }
}


export function uztnaDomainViewCertToHclTerraform(struct?: UztnaDomainViewCertOutputReference | UztnaDomainViewCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: uztnaDomainViewCertCertificateToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaDomainViewCertCertificateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaDomainViewCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaDomainViewCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaDomainViewCert | undefined) {
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
  private _certificate = new UztnaDomainViewCertCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: UztnaDomainViewCertCertificate) {
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
export interface UztnaDomainViewGatewaysPerimeterRe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#all_cloud UztnaDomainView#all_cloud}
  */
  readonly allCloud?: boolean | cdktf.IResolvable;
}

export function uztnaDomainViewGatewaysPerimeterReToTerraform(struct?: UztnaDomainViewGatewaysPerimeterReOutputReference | UztnaDomainViewGatewaysPerimeterRe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_cloud: cdktf.booleanToTerraform(struct!.allCloud),
  }
}


export function uztnaDomainViewGatewaysPerimeterReToHclTerraform(struct?: UztnaDomainViewGatewaysPerimeterReOutputReference | UztnaDomainViewGatewaysPerimeterRe): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaDomainViewGatewaysPerimeterReOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaDomainViewGatewaysPerimeterRe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allCloud !== undefined) {
      hasAnyValues = true;
      internalValueResult.allCloud = this._allCloud;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaDomainViewGatewaysPerimeterRe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allCloud = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allCloud = value.allCloud;
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
}
export interface UztnaDomainViewGatewaysPrivateGatewayUztnaGateway {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#name UztnaDomainView#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#namespace UztnaDomainView#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#tenant UztnaDomainView#tenant}
  */
  readonly tenant?: string;
}

export function uztnaDomainViewGatewaysPrivateGatewayUztnaGatewayToTerraform(struct?: UztnaDomainViewGatewaysPrivateGatewayUztnaGateway | cdktf.IResolvable): any {
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


export function uztnaDomainViewGatewaysPrivateGatewayUztnaGatewayToHclTerraform(struct?: UztnaDomainViewGatewaysPrivateGatewayUztnaGateway | cdktf.IResolvable): any {
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

export class UztnaDomainViewGatewaysPrivateGatewayUztnaGatewayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UztnaDomainViewGatewaysPrivateGatewayUztnaGateway | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UztnaDomainViewGatewaysPrivateGatewayUztnaGateway | cdktf.IResolvable | undefined) {
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

export class UztnaDomainViewGatewaysPrivateGatewayUztnaGatewayList extends cdktf.ComplexList {
  public internalValue? : UztnaDomainViewGatewaysPrivateGatewayUztnaGateway[] | cdktf.IResolvable

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
  public get(index: number): UztnaDomainViewGatewaysPrivateGatewayUztnaGatewayOutputReference {
    return new UztnaDomainViewGatewaysPrivateGatewayUztnaGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UztnaDomainViewGatewaysPrivateGateway {
  /**
  * uztna_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#uztna_gateway UztnaDomainView#uztna_gateway}
  */
  readonly uztnaGateway?: UztnaDomainViewGatewaysPrivateGatewayUztnaGateway[] | cdktf.IResolvable;
}

export function uztnaDomainViewGatewaysPrivateGatewayToTerraform(struct?: UztnaDomainViewGatewaysPrivateGatewayOutputReference | UztnaDomainViewGatewaysPrivateGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uztna_gateway: cdktf.listMapper(uztnaDomainViewGatewaysPrivateGatewayUztnaGatewayToTerraform, true)(struct!.uztnaGateway),
  }
}


export function uztnaDomainViewGatewaysPrivateGatewayToHclTerraform(struct?: UztnaDomainViewGatewaysPrivateGatewayOutputReference | UztnaDomainViewGatewaysPrivateGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uztna_gateway: {
      value: cdktf.listMapperHcl(uztnaDomainViewGatewaysPrivateGatewayUztnaGatewayToHclTerraform, true)(struct!.uztnaGateway),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaDomainViewGatewaysPrivateGatewayUztnaGatewayList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaDomainViewGatewaysPrivateGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaDomainViewGatewaysPrivateGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uztnaGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uztnaGateway = this._uztnaGateway?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaDomainViewGatewaysPrivateGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uztnaGateway.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uztnaGateway.internalValue = value.uztnaGateway;
    }
  }

  // uztna_gateway - computed: false, optional: true, required: false
  private _uztnaGateway = new UztnaDomainViewGatewaysPrivateGatewayUztnaGatewayList(this, "uztna_gateway", false);
  public get uztnaGateway() {
    return this._uztnaGateway;
  }
  public putUztnaGateway(value: UztnaDomainViewGatewaysPrivateGatewayUztnaGateway[] | cdktf.IResolvable) {
    this._uztnaGateway.internalValue = value;
  }
  public resetUztnaGateway() {
    this._uztnaGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uztnaGatewayInput() {
    return this._uztnaGateway.internalValue;
  }
}
export interface UztnaDomainViewGateways {
  /**
  * perimeter_re block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#perimeter_re UztnaDomainView#perimeter_re}
  */
  readonly perimeterRe?: UztnaDomainViewGatewaysPerimeterRe;
  /**
  * private_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#private_gateway UztnaDomainView#private_gateway}
  */
  readonly privateGateway?: UztnaDomainViewGatewaysPrivateGateway;
}

export function uztnaDomainViewGatewaysToTerraform(struct?: UztnaDomainViewGatewaysOutputReference | UztnaDomainViewGateways): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    perimeter_re: uztnaDomainViewGatewaysPerimeterReToTerraform(struct!.perimeterRe),
    private_gateway: uztnaDomainViewGatewaysPrivateGatewayToTerraform(struct!.privateGateway),
  }
}


export function uztnaDomainViewGatewaysToHclTerraform(struct?: UztnaDomainViewGatewaysOutputReference | UztnaDomainViewGateways): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    perimeter_re: {
      value: uztnaDomainViewGatewaysPerimeterReToHclTerraform(struct!.perimeterRe),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaDomainViewGatewaysPerimeterReList",
    },
    private_gateway: {
      value: uztnaDomainViewGatewaysPrivateGatewayToHclTerraform(struct!.privateGateway),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaDomainViewGatewaysPrivateGatewayList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaDomainViewGatewaysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaDomainViewGateways | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perimeterRe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perimeterRe = this._perimeterRe?.internalValue;
    }
    if (this._privateGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateGateway = this._privateGateway?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaDomainViewGateways | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._perimeterRe.internalValue = undefined;
      this._privateGateway.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._perimeterRe.internalValue = value.perimeterRe;
      this._privateGateway.internalValue = value.privateGateway;
    }
  }

  // perimeter_re - computed: false, optional: true, required: false
  private _perimeterRe = new UztnaDomainViewGatewaysPerimeterReOutputReference(this, "perimeter_re");
  public get perimeterRe() {
    return this._perimeterRe;
  }
  public putPerimeterRe(value: UztnaDomainViewGatewaysPerimeterRe) {
    this._perimeterRe.internalValue = value;
  }
  public resetPerimeterRe() {
    this._perimeterRe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perimeterReInput() {
    return this._perimeterRe.internalValue;
  }

  // private_gateway - computed: false, optional: true, required: false
  private _privateGateway = new UztnaDomainViewGatewaysPrivateGatewayOutputReference(this, "private_gateway");
  public get privateGateway() {
    return this._privateGateway;
  }
  public putPrivateGateway(value: UztnaDomainViewGatewaysPrivateGateway) {
    this._privateGateway.internalValue = value;
  }
  public resetPrivateGateway() {
    this._privateGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateGatewayInput() {
    return this._privateGateway.internalValue;
  }
}
export interface UztnaDomainViewLeasePoolIpv4Leasepool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#name UztnaDomainView#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#namespace UztnaDomainView#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#tenant UztnaDomainView#tenant}
  */
  readonly tenant?: string;
}

export function uztnaDomainViewLeasePoolIpv4LeasepoolToTerraform(struct?: UztnaDomainViewLeasePoolIpv4LeasepoolOutputReference | UztnaDomainViewLeasePoolIpv4Leasepool): any {
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


export function uztnaDomainViewLeasePoolIpv4LeasepoolToHclTerraform(struct?: UztnaDomainViewLeasePoolIpv4LeasepoolOutputReference | UztnaDomainViewLeasePoolIpv4Leasepool): any {
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

export class UztnaDomainViewLeasePoolIpv4LeasepoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaDomainViewLeasePoolIpv4Leasepool | undefined {
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

  public set internalValue(value: UztnaDomainViewLeasePoolIpv4Leasepool | undefined) {
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
export interface UztnaDomainViewLeasePool {
  /**
  * ipv4_leasepool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#ipv4_leasepool UztnaDomainView#ipv4_leasepool}
  */
  readonly ipv4Leasepool: UztnaDomainViewLeasePoolIpv4Leasepool;
}

export function uztnaDomainViewLeasePoolToTerraform(struct?: UztnaDomainViewLeasePoolOutputReference | UztnaDomainViewLeasePool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_leasepool: uztnaDomainViewLeasePoolIpv4LeasepoolToTerraform(struct!.ipv4Leasepool),
  }
}


export function uztnaDomainViewLeasePoolToHclTerraform(struct?: UztnaDomainViewLeasePoolOutputReference | UztnaDomainViewLeasePool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_leasepool: {
      value: uztnaDomainViewLeasePoolIpv4LeasepoolToHclTerraform(struct!.ipv4Leasepool),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaDomainViewLeasePoolIpv4LeasepoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaDomainViewLeasePoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaDomainViewLeasePool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Leasepool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Leasepool = this._ipv4Leasepool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaDomainViewLeasePool | undefined) {
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
  private _ipv4Leasepool = new UztnaDomainViewLeasePoolIpv4LeasepoolOutputReference(this, "ipv4_leasepool");
  public get ipv4Leasepool() {
    return this._ipv4Leasepool;
  }
  public putIpv4Leasepool(value: UztnaDomainViewLeasePoolIpv4Leasepool) {
    this._ipv4Leasepool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4LeasepoolInput() {
    return this._ipv4Leasepool.internalValue;
  }
}
export interface UztnaDomainViewPolicyPolicyName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#name UztnaDomainView#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#namespace UztnaDomainView#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#tenant UztnaDomainView#tenant}
  */
  readonly tenant?: string;
}

export function uztnaDomainViewPolicyPolicyNameToTerraform(struct?: UztnaDomainViewPolicyPolicyNameOutputReference | UztnaDomainViewPolicyPolicyName): any {
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


export function uztnaDomainViewPolicyPolicyNameToHclTerraform(struct?: UztnaDomainViewPolicyPolicyNameOutputReference | UztnaDomainViewPolicyPolicyName): any {
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

export class UztnaDomainViewPolicyPolicyNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaDomainViewPolicyPolicyName | undefined {
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

  public set internalValue(value: UztnaDomainViewPolicyPolicyName | undefined) {
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
export interface UztnaDomainViewPolicy {
  /**
  * policy_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#policy_name UztnaDomainView#policy_name}
  */
  readonly policyName?: UztnaDomainViewPolicyPolicyName;
}

export function uztnaDomainViewPolicyToTerraform(struct?: UztnaDomainViewPolicyOutputReference | UztnaDomainViewPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_name: uztnaDomainViewPolicyPolicyNameToTerraform(struct!.policyName),
  }
}


export function uztnaDomainViewPolicyToHclTerraform(struct?: UztnaDomainViewPolicyOutputReference | UztnaDomainViewPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_name: {
      value: uztnaDomainViewPolicyPolicyNameToHclTerraform(struct!.policyName),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaDomainViewPolicyPolicyNameList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaDomainViewPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaDomainViewPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaDomainViewPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policyName.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policyName.internalValue = value.policyName;
    }
  }

  // policy_name - computed: false, optional: true, required: false
  private _policyName = new UztnaDomainViewPolicyPolicyNameOutputReference(this, "policy_name");
  public get policyName() {
    return this._policyName;
  }
  public putPolicyName(value: UztnaDomainViewPolicyPolicyName) {
    this._policyName.internalValue = value;
  }
  public resetPolicyName() {
    this._policyName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view volterra_uztna_domain_view}
*/
export class UztnaDomainView extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_uztna_domain_view";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UztnaDomainView resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UztnaDomainView to import
  * @param importFromId The id of the existing UztnaDomainView that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UztnaDomainView to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_uztna_domain_view", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain_view volterra_uztna_domain_view} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UztnaDomainViewConfig
  */
  public constructor(scope: Construct, id: string, config: UztnaDomainViewConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_uztna_domain_view',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessUrl = config.accessUrl;
    this._annotations = config.annotations;
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

  // access_url - computed: false, optional: false, required: true
  private _accessUrl?: string; 
  public get accessUrl() {
    return this.getStringAttribute('access_url');
  }
  public set accessUrl(value: string) {
    this._accessUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessUrlInput() {
    return this._accessUrl;
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
  private _appVipPool = new UztnaDomainViewAppVipPoolOutputReference(this, "app_vip_pool");
  public get appVipPool() {
    return this._appVipPool;
  }
  public putAppVipPool(value: UztnaDomainViewAppVipPool) {
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
  private _cert = new UztnaDomainViewCertOutputReference(this, "cert");
  public get cert() {
    return this._cert;
  }
  public putCert(value: UztnaDomainViewCert) {
    this._cert.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert.internalValue;
  }

  // gateways - computed: false, optional: false, required: true
  private _gateways = new UztnaDomainViewGatewaysOutputReference(this, "gateways");
  public get gateways() {
    return this._gateways;
  }
  public putGateways(value: UztnaDomainViewGateways) {
    this._gateways.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaysInput() {
    return this._gateways.internalValue;
  }

  // lease_pool - computed: false, optional: true, required: false
  private _leasePool = new UztnaDomainViewLeasePoolOutputReference(this, "lease_pool");
  public get leasePool() {
    return this._leasePool;
  }
  public putLeasePool(value: UztnaDomainViewLeasePool) {
    this._leasePool.internalValue = value;
  }
  public resetLeasePool() {
    this._leasePool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leasePoolInput() {
    return this._leasePool.internalValue;
  }

  // policy - computed: false, optional: true, required: false
  private _policy = new UztnaDomainViewPolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: UztnaDomainViewPolicy) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
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
      access_url: cdktf.stringToTerraform(this._accessUrl),
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      app_vip_pool: uztnaDomainViewAppVipPoolToTerraform(this._appVipPool.internalValue),
      cert: uztnaDomainViewCertToTerraform(this._cert.internalValue),
      gateways: uztnaDomainViewGatewaysToTerraform(this._gateways.internalValue),
      lease_pool: uztnaDomainViewLeasePoolToTerraform(this._leasePool.internalValue),
      policy: uztnaDomainViewPolicyToTerraform(this._policy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_url: {
        value: cdktf.stringToHclTerraform(this._accessUrl),
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
        value: uztnaDomainViewAppVipPoolToHclTerraform(this._appVipPool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UztnaDomainViewAppVipPoolList",
      },
      cert: {
        value: uztnaDomainViewCertToHclTerraform(this._cert.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UztnaDomainViewCertList",
      },
      gateways: {
        value: uztnaDomainViewGatewaysToHclTerraform(this._gateways.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UztnaDomainViewGatewaysList",
      },
      lease_pool: {
        value: uztnaDomainViewLeasePoolToHclTerraform(this._leasePool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UztnaDomainViewLeasePoolList",
      },
      policy: {
        value: uztnaDomainViewPolicyToHclTerraform(this._policy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UztnaDomainViewPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
