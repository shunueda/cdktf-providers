// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemResourceAccountingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#id SystemResourceAccountingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#uuid SystemResourceAccountingA#uuid}
  */
  readonly uuid?: string;
  /**
  * template_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#template_list SystemResourceAccountingA#template_list}
  */
  readonly templateList?: SystemResourceAccountingTemplateListStructA[] | cdktf.IResolvable;
}
export interface SystemResourceAccountingTemplateListAppResourcesCacheTemplateCfgA {
  /**
  * Enter the number of cache-template allowed (cache-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#cache_template_max SystemResourceAccountingA#cache_template_max}
  */
  readonly cacheTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#cache_template_min_guarantee SystemResourceAccountingA#cache_template_min_guarantee}
  */
  readonly cacheTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesCacheTemplateCfgAToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesCacheTemplateCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesCacheTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_template_max: cdktf.numberToTerraform(struct!.cacheTemplateMax),
    cache_template_min_guarantee: cdktf.numberToTerraform(struct!.cacheTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesCacheTemplateCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesCacheTemplateCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesCacheTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_template_max: {
      value: cdktf.numberToHclTerraform(struct!.cacheTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.cacheTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesCacheTemplateCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesCacheTemplateCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTemplateMax = this._cacheTemplateMax;
    }
    if (this._cacheTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTemplateMinGuarantee = this._cacheTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesCacheTemplateCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheTemplateMax = undefined;
      this._cacheTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheTemplateMax = value.cacheTemplateMax;
      this._cacheTemplateMinGuarantee = value.cacheTemplateMinGuarantee;
    }
  }

  // cache_template_max - computed: false, optional: true, required: false
  private _cacheTemplateMax?: number; 
  public get cacheTemplateMax() {
    return this.getNumberAttribute('cache_template_max');
  }
  public set cacheTemplateMax(value: number) {
    this._cacheTemplateMax = value;
  }
  public resetCacheTemplateMax() {
    this._cacheTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTemplateMaxInput() {
    return this._cacheTemplateMax;
  }

  // cache_template_min_guarantee - computed: false, optional: true, required: false
  private _cacheTemplateMinGuarantee?: number; 
  public get cacheTemplateMinGuarantee() {
    return this.getNumberAttribute('cache_template_min_guarantee');
  }
  public set cacheTemplateMinGuarantee(value: number) {
    this._cacheTemplateMinGuarantee = value;
  }
  public resetCacheTemplateMinGuarantee() {
    this._cacheTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTemplateMinGuaranteeInput() {
    return this._cacheTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesClientSslTemplateCfgA {
  /**
  * Enter the number of client-ssl-template allowed (client-ssl-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#client_ssl_template_max SystemResourceAccountingA#client_ssl_template_max}
  */
  readonly clientSslTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#client_ssl_template_min_guarantee SystemResourceAccountingA#client_ssl_template_min_guarantee}
  */
  readonly clientSslTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesClientSslTemplateCfgAToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesClientSslTemplateCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesClientSslTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ssl_template_max: cdktf.numberToTerraform(struct!.clientSslTemplateMax),
    client_ssl_template_min_guarantee: cdktf.numberToTerraform(struct!.clientSslTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesClientSslTemplateCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesClientSslTemplateCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesClientSslTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ssl_template_max: {
      value: cdktf.numberToHclTerraform(struct!.clientSslTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_ssl_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.clientSslTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesClientSslTemplateCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesClientSslTemplateCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientSslTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSslTemplateMax = this._clientSslTemplateMax;
    }
    if (this._clientSslTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSslTemplateMinGuarantee = this._clientSslTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesClientSslTemplateCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientSslTemplateMax = undefined;
      this._clientSslTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientSslTemplateMax = value.clientSslTemplateMax;
      this._clientSslTemplateMinGuarantee = value.clientSslTemplateMinGuarantee;
    }
  }

  // client_ssl_template_max - computed: false, optional: true, required: false
  private _clientSslTemplateMax?: number; 
  public get clientSslTemplateMax() {
    return this.getNumberAttribute('client_ssl_template_max');
  }
  public set clientSslTemplateMax(value: number) {
    this._clientSslTemplateMax = value;
  }
  public resetClientSslTemplateMax() {
    this._clientSslTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSslTemplateMaxInput() {
    return this._clientSslTemplateMax;
  }

  // client_ssl_template_min_guarantee - computed: false, optional: true, required: false
  private _clientSslTemplateMinGuarantee?: number; 
  public get clientSslTemplateMinGuarantee() {
    return this.getNumberAttribute('client_ssl_template_min_guarantee');
  }
  public set clientSslTemplateMinGuarantee(value: number) {
    this._clientSslTemplateMinGuarantee = value;
  }
  public resetClientSslTemplateMinGuarantee() {
    this._clientSslTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSslTemplateMinGuaranteeInput() {
    return this._clientSslTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesConnReuseTemplateCfgA {
  /**
  * Enter the number of conn-reuse-template allowed (conn-reuse-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#conn_reuse_template_max SystemResourceAccountingA#conn_reuse_template_max}
  */
  readonly connReuseTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#conn_reuse_template_min_guarantee SystemResourceAccountingA#conn_reuse_template_min_guarantee}
  */
  readonly connReuseTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesConnReuseTemplateCfgAToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesConnReuseTemplateCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesConnReuseTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conn_reuse_template_max: cdktf.numberToTerraform(struct!.connReuseTemplateMax),
    conn_reuse_template_min_guarantee: cdktf.numberToTerraform(struct!.connReuseTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesConnReuseTemplateCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesConnReuseTemplateCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesConnReuseTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conn_reuse_template_max: {
      value: cdktf.numberToHclTerraform(struct!.connReuseTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_reuse_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.connReuseTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesConnReuseTemplateCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesConnReuseTemplateCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connReuseTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.connReuseTemplateMax = this._connReuseTemplateMax;
    }
    if (this._connReuseTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.connReuseTemplateMinGuarantee = this._connReuseTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesConnReuseTemplateCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connReuseTemplateMax = undefined;
      this._connReuseTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connReuseTemplateMax = value.connReuseTemplateMax;
      this._connReuseTemplateMinGuarantee = value.connReuseTemplateMinGuarantee;
    }
  }

  // conn_reuse_template_max - computed: false, optional: true, required: false
  private _connReuseTemplateMax?: number; 
  public get connReuseTemplateMax() {
    return this.getNumberAttribute('conn_reuse_template_max');
  }
  public set connReuseTemplateMax(value: number) {
    this._connReuseTemplateMax = value;
  }
  public resetConnReuseTemplateMax() {
    this._connReuseTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connReuseTemplateMaxInput() {
    return this._connReuseTemplateMax;
  }

  // conn_reuse_template_min_guarantee - computed: false, optional: true, required: false
  private _connReuseTemplateMinGuarantee?: number; 
  public get connReuseTemplateMinGuarantee() {
    return this.getNumberAttribute('conn_reuse_template_min_guarantee');
  }
  public set connReuseTemplateMinGuarantee(value: number) {
    this._connReuseTemplateMinGuarantee = value;
  }
  public resetConnReuseTemplateMinGuarantee() {
    this._connReuseTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connReuseTemplateMinGuaranteeInput() {
    return this._connReuseTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesFastTcpTemplateCfgA {
  /**
  * Enter the number of fast-tcp-template allowed (fast-tcp-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#fast_tcp_template_max SystemResourceAccountingA#fast_tcp_template_max}
  */
  readonly fastTcpTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#fast_tcp_template_min_guarantee SystemResourceAccountingA#fast_tcp_template_min_guarantee}
  */
  readonly fastTcpTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesFastTcpTemplateCfgAToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesFastTcpTemplateCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesFastTcpTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fast_tcp_template_max: cdktf.numberToTerraform(struct!.fastTcpTemplateMax),
    fast_tcp_template_min_guarantee: cdktf.numberToTerraform(struct!.fastTcpTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesFastTcpTemplateCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesFastTcpTemplateCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesFastTcpTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fast_tcp_template_max: {
      value: cdktf.numberToHclTerraform(struct!.fastTcpTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fast_tcp_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.fastTcpTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesFastTcpTemplateCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesFastTcpTemplateCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fastTcpTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastTcpTemplateMax = this._fastTcpTemplateMax;
    }
    if (this._fastTcpTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastTcpTemplateMinGuarantee = this._fastTcpTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesFastTcpTemplateCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fastTcpTemplateMax = undefined;
      this._fastTcpTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fastTcpTemplateMax = value.fastTcpTemplateMax;
      this._fastTcpTemplateMinGuarantee = value.fastTcpTemplateMinGuarantee;
    }
  }

  // fast_tcp_template_max - computed: false, optional: true, required: false
  private _fastTcpTemplateMax?: number; 
  public get fastTcpTemplateMax() {
    return this.getNumberAttribute('fast_tcp_template_max');
  }
  public set fastTcpTemplateMax(value: number) {
    this._fastTcpTemplateMax = value;
  }
  public resetFastTcpTemplateMax() {
    this._fastTcpTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastTcpTemplateMaxInput() {
    return this._fastTcpTemplateMax;
  }

  // fast_tcp_template_min_guarantee - computed: false, optional: true, required: false
  private _fastTcpTemplateMinGuarantee?: number; 
  public get fastTcpTemplateMinGuarantee() {
    return this.getNumberAttribute('fast_tcp_template_min_guarantee');
  }
  public set fastTcpTemplateMinGuarantee(value: number) {
    this._fastTcpTemplateMinGuarantee = value;
  }
  public resetFastTcpTemplateMinGuarantee() {
    this._fastTcpTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastTcpTemplateMinGuaranteeInput() {
    return this._fastTcpTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesFastUdpTemplateCfgA {
  /**
  * Enter the number of fast-udp-template allowed (fast-udp-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#fast_udp_template_max SystemResourceAccountingA#fast_udp_template_max}
  */
  readonly fastUdpTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#fast_udp_template_min_guarantee SystemResourceAccountingA#fast_udp_template_min_guarantee}
  */
  readonly fastUdpTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesFastUdpTemplateCfgAToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesFastUdpTemplateCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesFastUdpTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fast_udp_template_max: cdktf.numberToTerraform(struct!.fastUdpTemplateMax),
    fast_udp_template_min_guarantee: cdktf.numberToTerraform(struct!.fastUdpTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesFastUdpTemplateCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesFastUdpTemplateCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesFastUdpTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fast_udp_template_max: {
      value: cdktf.numberToHclTerraform(struct!.fastUdpTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fast_udp_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.fastUdpTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesFastUdpTemplateCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesFastUdpTemplateCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fastUdpTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastUdpTemplateMax = this._fastUdpTemplateMax;
    }
    if (this._fastUdpTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastUdpTemplateMinGuarantee = this._fastUdpTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesFastUdpTemplateCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fastUdpTemplateMax = undefined;
      this._fastUdpTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fastUdpTemplateMax = value.fastUdpTemplateMax;
      this._fastUdpTemplateMinGuarantee = value.fastUdpTemplateMinGuarantee;
    }
  }

  // fast_udp_template_max - computed: false, optional: true, required: false
  private _fastUdpTemplateMax?: number; 
  public get fastUdpTemplateMax() {
    return this.getNumberAttribute('fast_udp_template_max');
  }
  public set fastUdpTemplateMax(value: number) {
    this._fastUdpTemplateMax = value;
  }
  public resetFastUdpTemplateMax() {
    this._fastUdpTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastUdpTemplateMaxInput() {
    return this._fastUdpTemplateMax;
  }

  // fast_udp_template_min_guarantee - computed: false, optional: true, required: false
  private _fastUdpTemplateMinGuarantee?: number; 
  public get fastUdpTemplateMinGuarantee() {
    return this.getNumberAttribute('fast_udp_template_min_guarantee');
  }
  public set fastUdpTemplateMinGuarantee(value: number) {
    this._fastUdpTemplateMinGuarantee = value;
  }
  public resetFastUdpTemplateMinGuarantee() {
    this._fastUdpTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastUdpTemplateMinGuaranteeInput() {
    return this._fastUdpTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesFixTemplateCfgA {
  /**
  * Enter the number of fix-template allowed (fix-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#fix_template_max SystemResourceAccountingA#fix_template_max}
  */
  readonly fixTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#fix_template_min_guarantee SystemResourceAccountingA#fix_template_min_guarantee}
  */
  readonly fixTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesFixTemplateCfgAToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesFixTemplateCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesFixTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fix_template_max: cdktf.numberToTerraform(struct!.fixTemplateMax),
    fix_template_min_guarantee: cdktf.numberToTerraform(struct!.fixTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesFixTemplateCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesFixTemplateCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesFixTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fix_template_max: {
      value: cdktf.numberToHclTerraform(struct!.fixTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fix_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.fixTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesFixTemplateCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesFixTemplateCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixTemplateMax = this._fixTemplateMax;
    }
    if (this._fixTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixTemplateMinGuarantee = this._fixTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesFixTemplateCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixTemplateMax = undefined;
      this._fixTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixTemplateMax = value.fixTemplateMax;
      this._fixTemplateMinGuarantee = value.fixTemplateMinGuarantee;
    }
  }

  // fix_template_max - computed: false, optional: true, required: false
  private _fixTemplateMax?: number; 
  public get fixTemplateMax() {
    return this.getNumberAttribute('fix_template_max');
  }
  public set fixTemplateMax(value: number) {
    this._fixTemplateMax = value;
  }
  public resetFixTemplateMax() {
    this._fixTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixTemplateMaxInput() {
    return this._fixTemplateMax;
  }

  // fix_template_min_guarantee - computed: false, optional: true, required: false
  private _fixTemplateMinGuarantee?: number; 
  public get fixTemplateMinGuarantee() {
    return this.getNumberAttribute('fix_template_min_guarantee');
  }
  public set fixTemplateMinGuarantee(value: number) {
    this._fixTemplateMinGuarantee = value;
  }
  public resetFixTemplateMinGuarantee() {
    this._fixTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixTemplateMinGuaranteeInput() {
    return this._fixTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesGslbDeviceCfgA {
  /**
  * Enter the number of gslb-device allowed (gslb-device count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_device_max SystemResourceAccountingA#gslb_device_max}
  */
  readonly gslbDeviceMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_device_min_guarantee SystemResourceAccountingA#gslb_device_min_guarantee}
  */
  readonly gslbDeviceMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesGslbDeviceCfgAToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbDeviceCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbDeviceCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_device_max: cdktf.numberToTerraform(struct!.gslbDeviceMax),
    gslb_device_min_guarantee: cdktf.numberToTerraform(struct!.gslbDeviceMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesGslbDeviceCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbDeviceCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbDeviceCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_device_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbDeviceMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_device_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbDeviceMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesGslbDeviceCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesGslbDeviceCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbDeviceMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbDeviceMax = this._gslbDeviceMax;
    }
    if (this._gslbDeviceMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbDeviceMinGuarantee = this._gslbDeviceMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesGslbDeviceCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbDeviceMax = undefined;
      this._gslbDeviceMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbDeviceMax = value.gslbDeviceMax;
      this._gslbDeviceMinGuarantee = value.gslbDeviceMinGuarantee;
    }
  }

  // gslb_device_max - computed: false, optional: true, required: false
  private _gslbDeviceMax?: number; 
  public get gslbDeviceMax() {
    return this.getNumberAttribute('gslb_device_max');
  }
  public set gslbDeviceMax(value: number) {
    this._gslbDeviceMax = value;
  }
  public resetGslbDeviceMax() {
    this._gslbDeviceMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbDeviceMaxInput() {
    return this._gslbDeviceMax;
  }

  // gslb_device_min_guarantee - computed: false, optional: true, required: false
  private _gslbDeviceMinGuarantee?: number; 
  public get gslbDeviceMinGuarantee() {
    return this.getNumberAttribute('gslb_device_min_guarantee');
  }
  public set gslbDeviceMinGuarantee(value: number) {
    this._gslbDeviceMinGuarantee = value;
  }
  public resetGslbDeviceMinGuarantee() {
    this._gslbDeviceMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbDeviceMinGuaranteeInput() {
    return this._gslbDeviceMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesGslbGeoLocationCfgA {
  /**
  * Enter the number of gslb-geo-location allowed (gslb-geo-location count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_geo_location_max SystemResourceAccountingA#gslb_geo_location_max}
  */
  readonly gslbGeoLocationMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_geo_location_min_guarantee SystemResourceAccountingA#gslb_geo_location_min_guarantee}
  */
  readonly gslbGeoLocationMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesGslbGeoLocationCfgAToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbGeoLocationCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbGeoLocationCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_geo_location_max: cdktf.numberToTerraform(struct!.gslbGeoLocationMax),
    gslb_geo_location_min_guarantee: cdktf.numberToTerraform(struct!.gslbGeoLocationMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesGslbGeoLocationCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbGeoLocationCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbGeoLocationCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_geo_location_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbGeoLocationMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_geo_location_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbGeoLocationMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesGslbGeoLocationCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesGslbGeoLocationCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbGeoLocationMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbGeoLocationMax = this._gslbGeoLocationMax;
    }
    if (this._gslbGeoLocationMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbGeoLocationMinGuarantee = this._gslbGeoLocationMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesGslbGeoLocationCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbGeoLocationMax = undefined;
      this._gslbGeoLocationMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbGeoLocationMax = value.gslbGeoLocationMax;
      this._gslbGeoLocationMinGuarantee = value.gslbGeoLocationMinGuarantee;
    }
  }

  // gslb_geo_location_max - computed: false, optional: true, required: false
  private _gslbGeoLocationMax?: number; 
  public get gslbGeoLocationMax() {
    return this.getNumberAttribute('gslb_geo_location_max');
  }
  public set gslbGeoLocationMax(value: number) {
    this._gslbGeoLocationMax = value;
  }
  public resetGslbGeoLocationMax() {
    this._gslbGeoLocationMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbGeoLocationMaxInput() {
    return this._gslbGeoLocationMax;
  }

  // gslb_geo_location_min_guarantee - computed: false, optional: true, required: false
  private _gslbGeoLocationMinGuarantee?: number; 
  public get gslbGeoLocationMinGuarantee() {
    return this.getNumberAttribute('gslb_geo_location_min_guarantee');
  }
  public set gslbGeoLocationMinGuarantee(value: number) {
    this._gslbGeoLocationMinGuarantee = value;
  }
  public resetGslbGeoLocationMinGuarantee() {
    this._gslbGeoLocationMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbGeoLocationMinGuaranteeInput() {
    return this._gslbGeoLocationMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesGslbIpListCfgA {
  /**
  * Enter the number of gslb-ip-list allowed (gslb-ip-list count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_ip_list_max SystemResourceAccountingA#gslb_ip_list_max}
  */
  readonly gslbIpListMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_ip_list_min_guarantee SystemResourceAccountingA#gslb_ip_list_min_guarantee}
  */
  readonly gslbIpListMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesGslbIpListCfgAToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbIpListCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbIpListCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_ip_list_max: cdktf.numberToTerraform(struct!.gslbIpListMax),
    gslb_ip_list_min_guarantee: cdktf.numberToTerraform(struct!.gslbIpListMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesGslbIpListCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbIpListCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbIpListCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_ip_list_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbIpListMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_ip_list_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbIpListMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesGslbIpListCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesGslbIpListCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbIpListMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbIpListMax = this._gslbIpListMax;
    }
    if (this._gslbIpListMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbIpListMinGuarantee = this._gslbIpListMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesGslbIpListCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbIpListMax = undefined;
      this._gslbIpListMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbIpListMax = value.gslbIpListMax;
      this._gslbIpListMinGuarantee = value.gslbIpListMinGuarantee;
    }
  }

  // gslb_ip_list_max - computed: false, optional: true, required: false
  private _gslbIpListMax?: number; 
  public get gslbIpListMax() {
    return this.getNumberAttribute('gslb_ip_list_max');
  }
  public set gslbIpListMax(value: number) {
    this._gslbIpListMax = value;
  }
  public resetGslbIpListMax() {
    this._gslbIpListMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbIpListMaxInput() {
    return this._gslbIpListMax;
  }

  // gslb_ip_list_min_guarantee - computed: false, optional: true, required: false
  private _gslbIpListMinGuarantee?: number; 
  public get gslbIpListMinGuarantee() {
    return this.getNumberAttribute('gslb_ip_list_min_guarantee');
  }
  public set gslbIpListMinGuarantee(value: number) {
    this._gslbIpListMinGuarantee = value;
  }
  public resetGslbIpListMinGuarantee() {
    this._gslbIpListMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbIpListMinGuaranteeInput() {
    return this._gslbIpListMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesGslbPolicyCfgA {
  /**
  * Enter the number of gslb-policy allowed (gslb-policy count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_policy_max SystemResourceAccountingA#gslb_policy_max}
  */
  readonly gslbPolicyMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_policy_min_guarantee SystemResourceAccountingA#gslb_policy_min_guarantee}
  */
  readonly gslbPolicyMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesGslbPolicyCfgAToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbPolicyCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbPolicyCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_policy_max: cdktf.numberToTerraform(struct!.gslbPolicyMax),
    gslb_policy_min_guarantee: cdktf.numberToTerraform(struct!.gslbPolicyMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesGslbPolicyCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbPolicyCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbPolicyCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_policy_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbPolicyMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_policy_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbPolicyMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesGslbPolicyCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesGslbPolicyCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbPolicyMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbPolicyMax = this._gslbPolicyMax;
    }
    if (this._gslbPolicyMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbPolicyMinGuarantee = this._gslbPolicyMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesGslbPolicyCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbPolicyMax = undefined;
      this._gslbPolicyMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbPolicyMax = value.gslbPolicyMax;
      this._gslbPolicyMinGuarantee = value.gslbPolicyMinGuarantee;
    }
  }

  // gslb_policy_max - computed: false, optional: true, required: false
  private _gslbPolicyMax?: number; 
  public get gslbPolicyMax() {
    return this.getNumberAttribute('gslb_policy_max');
  }
  public set gslbPolicyMax(value: number) {
    this._gslbPolicyMax = value;
  }
  public resetGslbPolicyMax() {
    this._gslbPolicyMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbPolicyMaxInput() {
    return this._gslbPolicyMax;
  }

  // gslb_policy_min_guarantee - computed: false, optional: true, required: false
  private _gslbPolicyMinGuarantee?: number; 
  public get gslbPolicyMinGuarantee() {
    return this.getNumberAttribute('gslb_policy_min_guarantee');
  }
  public set gslbPolicyMinGuarantee(value: number) {
    this._gslbPolicyMinGuarantee = value;
  }
  public resetGslbPolicyMinGuarantee() {
    this._gslbPolicyMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbPolicyMinGuaranteeInput() {
    return this._gslbPolicyMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesGslbServiceCfgA {
  /**
  * Enter the number of gslb-service allowed (gslb-service count (default is max-value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_service_max SystemResourceAccountingA#gslb_service_max}
  */
  readonly gslbServiceMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_service_min_guarantee SystemResourceAccountingA#gslb_service_min_guarantee}
  */
  readonly gslbServiceMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesGslbServiceCfgAToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbServiceCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbServiceCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_service_max: cdktf.numberToTerraform(struct!.gslbServiceMax),
    gslb_service_min_guarantee: cdktf.numberToTerraform(struct!.gslbServiceMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesGslbServiceCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbServiceCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbServiceCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_service_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbServiceMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_service_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbServiceMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesGslbServiceCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesGslbServiceCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbServiceMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServiceMax = this._gslbServiceMax;
    }
    if (this._gslbServiceMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServiceMinGuarantee = this._gslbServiceMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesGslbServiceCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbServiceMax = undefined;
      this._gslbServiceMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbServiceMax = value.gslbServiceMax;
      this._gslbServiceMinGuarantee = value.gslbServiceMinGuarantee;
    }
  }

  // gslb_service_max - computed: false, optional: true, required: false
  private _gslbServiceMax?: number; 
  public get gslbServiceMax() {
    return this.getNumberAttribute('gslb_service_max');
  }
  public set gslbServiceMax(value: number) {
    this._gslbServiceMax = value;
  }
  public resetGslbServiceMax() {
    this._gslbServiceMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServiceMaxInput() {
    return this._gslbServiceMax;
  }

  // gslb_service_min_guarantee - computed: false, optional: true, required: false
  private _gslbServiceMinGuarantee?: number; 
  public get gslbServiceMinGuarantee() {
    return this.getNumberAttribute('gslb_service_min_guarantee');
  }
  public set gslbServiceMinGuarantee(value: number) {
    this._gslbServiceMinGuarantee = value;
  }
  public resetGslbServiceMinGuarantee() {
    this._gslbServiceMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServiceMinGuaranteeInput() {
    return this._gslbServiceMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesGslbServiceIpCfgA {
  /**
  * Enter the number of gslb-service-ip allowed (gslb-service-ip count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_service_ip_max SystemResourceAccountingA#gslb_service_ip_max}
  */
  readonly gslbServiceIpMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_service_ip_min_guarantee SystemResourceAccountingA#gslb_service_ip_min_guarantee}
  */
  readonly gslbServiceIpMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesGslbServiceIpCfgAToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbServiceIpCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbServiceIpCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_service_ip_max: cdktf.numberToTerraform(struct!.gslbServiceIpMax),
    gslb_service_ip_min_guarantee: cdktf.numberToTerraform(struct!.gslbServiceIpMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesGslbServiceIpCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbServiceIpCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbServiceIpCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_service_ip_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbServiceIpMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_service_ip_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbServiceIpMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesGslbServiceIpCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesGslbServiceIpCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbServiceIpMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServiceIpMax = this._gslbServiceIpMax;
    }
    if (this._gslbServiceIpMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServiceIpMinGuarantee = this._gslbServiceIpMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesGslbServiceIpCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbServiceIpMax = undefined;
      this._gslbServiceIpMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbServiceIpMax = value.gslbServiceIpMax;
      this._gslbServiceIpMinGuarantee = value.gslbServiceIpMinGuarantee;
    }
  }

  // gslb_service_ip_max - computed: false, optional: true, required: false
  private _gslbServiceIpMax?: number; 
  public get gslbServiceIpMax() {
    return this.getNumberAttribute('gslb_service_ip_max');
  }
  public set gslbServiceIpMax(value: number) {
    this._gslbServiceIpMax = value;
  }
  public resetGslbServiceIpMax() {
    this._gslbServiceIpMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServiceIpMaxInput() {
    return this._gslbServiceIpMax;
  }

  // gslb_service_ip_min_guarantee - computed: false, optional: true, required: false
  private _gslbServiceIpMinGuarantee?: number; 
  public get gslbServiceIpMinGuarantee() {
    return this.getNumberAttribute('gslb_service_ip_min_guarantee');
  }
  public set gslbServiceIpMinGuarantee(value: number) {
    this._gslbServiceIpMinGuarantee = value;
  }
  public resetGslbServiceIpMinGuarantee() {
    this._gslbServiceIpMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServiceIpMinGuaranteeInput() {
    return this._gslbServiceIpMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesGslbServicePortCfgA {
  /**
  * Enter the number of gslb-service-port allowed ( gslb-service-port count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_service_port_max SystemResourceAccountingA#gslb_service_port_max}
  */
  readonly gslbServicePortMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_service_port_min_guarantee SystemResourceAccountingA#gslb_service_port_min_guarantee}
  */
  readonly gslbServicePortMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesGslbServicePortCfgAToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbServicePortCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbServicePortCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_service_port_max: cdktf.numberToTerraform(struct!.gslbServicePortMax),
    gslb_service_port_min_guarantee: cdktf.numberToTerraform(struct!.gslbServicePortMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesGslbServicePortCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbServicePortCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbServicePortCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_service_port_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbServicePortMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_service_port_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbServicePortMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesGslbServicePortCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesGslbServicePortCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbServicePortMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServicePortMax = this._gslbServicePortMax;
    }
    if (this._gslbServicePortMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServicePortMinGuarantee = this._gslbServicePortMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesGslbServicePortCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbServicePortMax = undefined;
      this._gslbServicePortMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbServicePortMax = value.gslbServicePortMax;
      this._gslbServicePortMinGuarantee = value.gslbServicePortMinGuarantee;
    }
  }

  // gslb_service_port_max - computed: false, optional: true, required: false
  private _gslbServicePortMax?: number; 
  public get gslbServicePortMax() {
    return this.getNumberAttribute('gslb_service_port_max');
  }
  public set gslbServicePortMax(value: number) {
    this._gslbServicePortMax = value;
  }
  public resetGslbServicePortMax() {
    this._gslbServicePortMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServicePortMaxInput() {
    return this._gslbServicePortMax;
  }

  // gslb_service_port_min_guarantee - computed: false, optional: true, required: false
  private _gslbServicePortMinGuarantee?: number; 
  public get gslbServicePortMinGuarantee() {
    return this.getNumberAttribute('gslb_service_port_min_guarantee');
  }
  public set gslbServicePortMinGuarantee(value: number) {
    this._gslbServicePortMinGuarantee = value;
  }
  public resetGslbServicePortMinGuarantee() {
    this._gslbServicePortMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServicePortMinGuaranteeInput() {
    return this._gslbServicePortMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesGslbSiteCfgA {
  /**
  * Enter the number of gslb-site allowed (gslb-site count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_site_max SystemResourceAccountingA#gslb_site_max}
  */
  readonly gslbSiteMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_site_min_guarantee SystemResourceAccountingA#gslb_site_min_guarantee}
  */
  readonly gslbSiteMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesGslbSiteCfgAToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbSiteCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbSiteCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_site_max: cdktf.numberToTerraform(struct!.gslbSiteMax),
    gslb_site_min_guarantee: cdktf.numberToTerraform(struct!.gslbSiteMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesGslbSiteCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbSiteCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbSiteCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_site_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbSiteMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_site_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbSiteMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesGslbSiteCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesGslbSiteCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbSiteMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbSiteMax = this._gslbSiteMax;
    }
    if (this._gslbSiteMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbSiteMinGuarantee = this._gslbSiteMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesGslbSiteCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbSiteMax = undefined;
      this._gslbSiteMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbSiteMax = value.gslbSiteMax;
      this._gslbSiteMinGuarantee = value.gslbSiteMinGuarantee;
    }
  }

  // gslb_site_max - computed: false, optional: true, required: false
  private _gslbSiteMax?: number; 
  public get gslbSiteMax() {
    return this.getNumberAttribute('gslb_site_max');
  }
  public set gslbSiteMax(value: number) {
    this._gslbSiteMax = value;
  }
  public resetGslbSiteMax() {
    this._gslbSiteMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSiteMaxInput() {
    return this._gslbSiteMax;
  }

  // gslb_site_min_guarantee - computed: false, optional: true, required: false
  private _gslbSiteMinGuarantee?: number; 
  public get gslbSiteMinGuarantee() {
    return this.getNumberAttribute('gslb_site_min_guarantee');
  }
  public set gslbSiteMinGuarantee(value: number) {
    this._gslbSiteMinGuarantee = value;
  }
  public resetGslbSiteMinGuarantee() {
    this._gslbSiteMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSiteMinGuaranteeInput() {
    return this._gslbSiteMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesGslbSvcGroupCfgA {
  /**
  * Enter the number of gslb-svc-group allowed (gslb-svc-group count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_svc_group_max SystemResourceAccountingA#gslb_svc_group_max}
  */
  readonly gslbSvcGroupMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_svc_group_min_guarantee SystemResourceAccountingA#gslb_svc_group_min_guarantee}
  */
  readonly gslbSvcGroupMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesGslbSvcGroupCfgAToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbSvcGroupCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbSvcGroupCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_svc_group_max: cdktf.numberToTerraform(struct!.gslbSvcGroupMax),
    gslb_svc_group_min_guarantee: cdktf.numberToTerraform(struct!.gslbSvcGroupMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesGslbSvcGroupCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbSvcGroupCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbSvcGroupCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_svc_group_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbSvcGroupMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_svc_group_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbSvcGroupMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesGslbSvcGroupCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesGslbSvcGroupCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbSvcGroupMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbSvcGroupMax = this._gslbSvcGroupMax;
    }
    if (this._gslbSvcGroupMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbSvcGroupMinGuarantee = this._gslbSvcGroupMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesGslbSvcGroupCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbSvcGroupMax = undefined;
      this._gslbSvcGroupMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbSvcGroupMax = value.gslbSvcGroupMax;
      this._gslbSvcGroupMinGuarantee = value.gslbSvcGroupMinGuarantee;
    }
  }

  // gslb_svc_group_max - computed: false, optional: true, required: false
  private _gslbSvcGroupMax?: number; 
  public get gslbSvcGroupMax() {
    return this.getNumberAttribute('gslb_svc_group_max');
  }
  public set gslbSvcGroupMax(value: number) {
    this._gslbSvcGroupMax = value;
  }
  public resetGslbSvcGroupMax() {
    this._gslbSvcGroupMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSvcGroupMaxInput() {
    return this._gslbSvcGroupMax;
  }

  // gslb_svc_group_min_guarantee - computed: false, optional: true, required: false
  private _gslbSvcGroupMinGuarantee?: number; 
  public get gslbSvcGroupMinGuarantee() {
    return this.getNumberAttribute('gslb_svc_group_min_guarantee');
  }
  public set gslbSvcGroupMinGuarantee(value: number) {
    this._gslbSvcGroupMinGuarantee = value;
  }
  public resetGslbSvcGroupMinGuarantee() {
    this._gslbSvcGroupMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSvcGroupMinGuaranteeInput() {
    return this._gslbSvcGroupMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesGslbTemplateCfgA {
  /**
  * Enter the number of gslb-template allowed (gslb-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_template_max SystemResourceAccountingA#gslb_template_max}
  */
  readonly gslbTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_template_min_guarantee SystemResourceAccountingA#gslb_template_min_guarantee}
  */
  readonly gslbTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesGslbTemplateCfgAToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbTemplateCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_template_max: cdktf.numberToTerraform(struct!.gslbTemplateMax),
    gslb_template_min_guarantee: cdktf.numberToTerraform(struct!.gslbTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesGslbTemplateCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbTemplateCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_template_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesGslbTemplateCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesGslbTemplateCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbTemplateMax = this._gslbTemplateMax;
    }
    if (this._gslbTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbTemplateMinGuarantee = this._gslbTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesGslbTemplateCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbTemplateMax = undefined;
      this._gslbTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbTemplateMax = value.gslbTemplateMax;
      this._gslbTemplateMinGuarantee = value.gslbTemplateMinGuarantee;
    }
  }

  // gslb_template_max - computed: false, optional: true, required: false
  private _gslbTemplateMax?: number; 
  public get gslbTemplateMax() {
    return this.getNumberAttribute('gslb_template_max');
  }
  public set gslbTemplateMax(value: number) {
    this._gslbTemplateMax = value;
  }
  public resetGslbTemplateMax() {
    this._gslbTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbTemplateMaxInput() {
    return this._gslbTemplateMax;
  }

  // gslb_template_min_guarantee - computed: false, optional: true, required: false
  private _gslbTemplateMinGuarantee?: number; 
  public get gslbTemplateMinGuarantee() {
    return this.getNumberAttribute('gslb_template_min_guarantee');
  }
  public set gslbTemplateMinGuarantee(value: number) {
    this._gslbTemplateMinGuarantee = value;
  }
  public resetGslbTemplateMinGuarantee() {
    this._gslbTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbTemplateMinGuaranteeInput() {
    return this._gslbTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesGslbZoneCfgA {
  /**
  * Enter the number of gslb-zone allowed (gslb-zone count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_zone_max SystemResourceAccountingA#gslb_zone_max}
  */
  readonly gslbZoneMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_zone_min_guarantee SystemResourceAccountingA#gslb_zone_min_guarantee}
  */
  readonly gslbZoneMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesGslbZoneCfgAToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbZoneCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbZoneCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_zone_max: cdktf.numberToTerraform(struct!.gslbZoneMax),
    gslb_zone_min_guarantee: cdktf.numberToTerraform(struct!.gslbZoneMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesGslbZoneCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbZoneCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbZoneCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_zone_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbZoneMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_zone_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbZoneMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesGslbZoneCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesGslbZoneCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbZoneMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbZoneMax = this._gslbZoneMax;
    }
    if (this._gslbZoneMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbZoneMinGuarantee = this._gslbZoneMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesGslbZoneCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbZoneMax = undefined;
      this._gslbZoneMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbZoneMax = value.gslbZoneMax;
      this._gslbZoneMinGuarantee = value.gslbZoneMinGuarantee;
    }
  }

  // gslb_zone_max - computed: false, optional: true, required: false
  private _gslbZoneMax?: number; 
  public get gslbZoneMax() {
    return this.getNumberAttribute('gslb_zone_max');
  }
  public set gslbZoneMax(value: number) {
    this._gslbZoneMax = value;
  }
  public resetGslbZoneMax() {
    this._gslbZoneMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbZoneMaxInput() {
    return this._gslbZoneMax;
  }

  // gslb_zone_min_guarantee - computed: false, optional: true, required: false
  private _gslbZoneMinGuarantee?: number; 
  public get gslbZoneMinGuarantee() {
    return this.getNumberAttribute('gslb_zone_min_guarantee');
  }
  public set gslbZoneMinGuarantee(value: number) {
    this._gslbZoneMinGuarantee = value;
  }
  public resetGslbZoneMinGuarantee() {
    this._gslbZoneMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbZoneMinGuaranteeInput() {
    return this._gslbZoneMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesHealthMonitorCfgA {
  /**
  * Enter the number of health monitors allowed (health-monitor count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#health_monitor_max SystemResourceAccountingA#health_monitor_max}
  */
  readonly healthMonitorMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#health_monitor_min_guarantee SystemResourceAccountingA#health_monitor_min_guarantee}
  */
  readonly healthMonitorMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesHealthMonitorCfgAToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesHealthMonitorCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesHealthMonitorCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_monitor_max: cdktf.numberToTerraform(struct!.healthMonitorMax),
    health_monitor_min_guarantee: cdktf.numberToTerraform(struct!.healthMonitorMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesHealthMonitorCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesHealthMonitorCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesHealthMonitorCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_monitor_max: {
      value: cdktf.numberToHclTerraform(struct!.healthMonitorMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_monitor_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.healthMonitorMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesHealthMonitorCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesHealthMonitorCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthMonitorMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthMonitorMax = this._healthMonitorMax;
    }
    if (this._healthMonitorMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthMonitorMinGuarantee = this._healthMonitorMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesHealthMonitorCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthMonitorMax = undefined;
      this._healthMonitorMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthMonitorMax = value.healthMonitorMax;
      this._healthMonitorMinGuarantee = value.healthMonitorMinGuarantee;
    }
  }

  // health_monitor_max - computed: false, optional: true, required: false
  private _healthMonitorMax?: number; 
  public get healthMonitorMax() {
    return this.getNumberAttribute('health_monitor_max');
  }
  public set healthMonitorMax(value: number) {
    this._healthMonitorMax = value;
  }
  public resetHealthMonitorMax() {
    this._healthMonitorMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMonitorMaxInput() {
    return this._healthMonitorMax;
  }

  // health_monitor_min_guarantee - computed: false, optional: true, required: false
  private _healthMonitorMinGuarantee?: number; 
  public get healthMonitorMinGuarantee() {
    return this.getNumberAttribute('health_monitor_min_guarantee');
  }
  public set healthMonitorMinGuarantee(value: number) {
    this._healthMonitorMinGuarantee = value;
  }
  public resetHealthMonitorMinGuarantee() {
    this._healthMonitorMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMonitorMinGuaranteeInput() {
    return this._healthMonitorMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesHttpTemplateCfgA {
  /**
  * Enter the number of http-template allowed (http-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#http_template_max SystemResourceAccountingA#http_template_max}
  */
  readonly httpTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#http_template_min_guarantee SystemResourceAccountingA#http_template_min_guarantee}
  */
  readonly httpTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesHttpTemplateCfgAToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesHttpTemplateCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesHttpTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_template_max: cdktf.numberToTerraform(struct!.httpTemplateMax),
    http_template_min_guarantee: cdktf.numberToTerraform(struct!.httpTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesHttpTemplateCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesHttpTemplateCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesHttpTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_template_max: {
      value: cdktf.numberToHclTerraform(struct!.httpTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.httpTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesHttpTemplateCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesHttpTemplateCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpTemplateMax = this._httpTemplateMax;
    }
    if (this._httpTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpTemplateMinGuarantee = this._httpTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesHttpTemplateCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpTemplateMax = undefined;
      this._httpTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpTemplateMax = value.httpTemplateMax;
      this._httpTemplateMinGuarantee = value.httpTemplateMinGuarantee;
    }
  }

  // http_template_max - computed: false, optional: true, required: false
  private _httpTemplateMax?: number; 
  public get httpTemplateMax() {
    return this.getNumberAttribute('http_template_max');
  }
  public set httpTemplateMax(value: number) {
    this._httpTemplateMax = value;
  }
  public resetHttpTemplateMax() {
    this._httpTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTemplateMaxInput() {
    return this._httpTemplateMax;
  }

  // http_template_min_guarantee - computed: false, optional: true, required: false
  private _httpTemplateMinGuarantee?: number; 
  public get httpTemplateMinGuarantee() {
    return this.getNumberAttribute('http_template_min_guarantee');
  }
  public set httpTemplateMinGuarantee(value: number) {
    this._httpTemplateMinGuarantee = value;
  }
  public resetHttpTemplateMinGuarantee() {
    this._httpTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTemplateMinGuaranteeInput() {
    return this._httpTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesLinkCostTemplateCfgA {
  /**
  * Enter the number of link-cost-template allowed (link-cost-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#link_cost_template_max SystemResourceAccountingA#link_cost_template_max}
  */
  readonly linkCostTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#link_cost_template_min_guarantee SystemResourceAccountingA#link_cost_template_min_guarantee}
  */
  readonly linkCostTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesLinkCostTemplateCfgAToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesLinkCostTemplateCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesLinkCostTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    link_cost_template_max: cdktf.numberToTerraform(struct!.linkCostTemplateMax),
    link_cost_template_min_guarantee: cdktf.numberToTerraform(struct!.linkCostTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesLinkCostTemplateCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesLinkCostTemplateCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesLinkCostTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    link_cost_template_max: {
      value: cdktf.numberToHclTerraform(struct!.linkCostTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_cost_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.linkCostTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesLinkCostTemplateCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesLinkCostTemplateCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linkCostTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkCostTemplateMax = this._linkCostTemplateMax;
    }
    if (this._linkCostTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkCostTemplateMinGuarantee = this._linkCostTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesLinkCostTemplateCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._linkCostTemplateMax = undefined;
      this._linkCostTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._linkCostTemplateMax = value.linkCostTemplateMax;
      this._linkCostTemplateMinGuarantee = value.linkCostTemplateMinGuarantee;
    }
  }

  // link_cost_template_max - computed: false, optional: true, required: false
  private _linkCostTemplateMax?: number; 
  public get linkCostTemplateMax() {
    return this.getNumberAttribute('link_cost_template_max');
  }
  public set linkCostTemplateMax(value: number) {
    this._linkCostTemplateMax = value;
  }
  public resetLinkCostTemplateMax() {
    this._linkCostTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkCostTemplateMaxInput() {
    return this._linkCostTemplateMax;
  }

  // link_cost_template_min_guarantee - computed: false, optional: true, required: false
  private _linkCostTemplateMinGuarantee?: number; 
  public get linkCostTemplateMinGuarantee() {
    return this.getNumberAttribute('link_cost_template_min_guarantee');
  }
  public set linkCostTemplateMinGuarantee(value: number) {
    this._linkCostTemplateMinGuarantee = value;
  }
  public resetLinkCostTemplateMinGuarantee() {
    this._linkCostTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkCostTemplateMinGuaranteeInput() {
    return this._linkCostTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesPbslbEntryCfgA {
  /**
  * Enter the number of pbslb-entry allowed (pbslb-entry count)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#pbslb_entry_max SystemResourceAccountingA#pbslb_entry_max}
  */
  readonly pbslbEntryMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#pbslb_entry_min_guarantee SystemResourceAccountingA#pbslb_entry_min_guarantee}
  */
  readonly pbslbEntryMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesPbslbEntryCfgAToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesPbslbEntryCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesPbslbEntryCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pbslb_entry_max: cdktf.numberToTerraform(struct!.pbslbEntryMax),
    pbslb_entry_min_guarantee: cdktf.numberToTerraform(struct!.pbslbEntryMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesPbslbEntryCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesPbslbEntryCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesPbslbEntryCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pbslb_entry_max: {
      value: cdktf.numberToHclTerraform(struct!.pbslbEntryMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pbslb_entry_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.pbslbEntryMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesPbslbEntryCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesPbslbEntryCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pbslbEntryMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbslbEntryMax = this._pbslbEntryMax;
    }
    if (this._pbslbEntryMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbslbEntryMinGuarantee = this._pbslbEntryMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesPbslbEntryCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pbslbEntryMax = undefined;
      this._pbslbEntryMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pbslbEntryMax = value.pbslbEntryMax;
      this._pbslbEntryMinGuarantee = value.pbslbEntryMinGuarantee;
    }
  }

  // pbslb_entry_max - computed: false, optional: true, required: false
  private _pbslbEntryMax?: number; 
  public get pbslbEntryMax() {
    return this.getNumberAttribute('pbslb_entry_max');
  }
  public set pbslbEntryMax(value: number) {
    this._pbslbEntryMax = value;
  }
  public resetPbslbEntryMax() {
    this._pbslbEntryMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbslbEntryMaxInput() {
    return this._pbslbEntryMax;
  }

  // pbslb_entry_min_guarantee - computed: false, optional: true, required: false
  private _pbslbEntryMinGuarantee?: number; 
  public get pbslbEntryMinGuarantee() {
    return this.getNumberAttribute('pbslb_entry_min_guarantee');
  }
  public set pbslbEntryMinGuarantee(value: number) {
    this._pbslbEntryMinGuarantee = value;
  }
  public resetPbslbEntryMinGuarantee() {
    this._pbslbEntryMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbslbEntryMinGuaranteeInput() {
    return this._pbslbEntryMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesPersistCookieTemplateCfgA {
  /**
  * Enter the number of persist-cookie-template allowed (persist-cookie-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#persist_cookie_template_max SystemResourceAccountingA#persist_cookie_template_max}
  */
  readonly persistCookieTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#persist_cookie_template_min_guarantee SystemResourceAccountingA#persist_cookie_template_min_guarantee}
  */
  readonly persistCookieTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesPersistCookieTemplateCfgAToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesPersistCookieTemplateCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesPersistCookieTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    persist_cookie_template_max: cdktf.numberToTerraform(struct!.persistCookieTemplateMax),
    persist_cookie_template_min_guarantee: cdktf.numberToTerraform(struct!.persistCookieTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesPersistCookieTemplateCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesPersistCookieTemplateCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesPersistCookieTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    persist_cookie_template_max: {
      value: cdktf.numberToHclTerraform(struct!.persistCookieTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persist_cookie_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.persistCookieTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesPersistCookieTemplateCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesPersistCookieTemplateCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._persistCookieTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistCookieTemplateMax = this._persistCookieTemplateMax;
    }
    if (this._persistCookieTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistCookieTemplateMinGuarantee = this._persistCookieTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesPersistCookieTemplateCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._persistCookieTemplateMax = undefined;
      this._persistCookieTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._persistCookieTemplateMax = value.persistCookieTemplateMax;
      this._persistCookieTemplateMinGuarantee = value.persistCookieTemplateMinGuarantee;
    }
  }

  // persist_cookie_template_max - computed: false, optional: true, required: false
  private _persistCookieTemplateMax?: number; 
  public get persistCookieTemplateMax() {
    return this.getNumberAttribute('persist_cookie_template_max');
  }
  public set persistCookieTemplateMax(value: number) {
    this._persistCookieTemplateMax = value;
  }
  public resetPersistCookieTemplateMax() {
    this._persistCookieTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistCookieTemplateMaxInput() {
    return this._persistCookieTemplateMax;
  }

  // persist_cookie_template_min_guarantee - computed: false, optional: true, required: false
  private _persistCookieTemplateMinGuarantee?: number; 
  public get persistCookieTemplateMinGuarantee() {
    return this.getNumberAttribute('persist_cookie_template_min_guarantee');
  }
  public set persistCookieTemplateMinGuarantee(value: number) {
    this._persistCookieTemplateMinGuarantee = value;
  }
  public resetPersistCookieTemplateMinGuarantee() {
    this._persistCookieTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistCookieTemplateMinGuaranteeInput() {
    return this._persistCookieTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesPersistSrcipTemplateCfgA {
  /**
  * Enter the number of persist-srcip-template allowed (persist-source-ip-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#persist_srcip_template_max SystemResourceAccountingA#persist_srcip_template_max}
  */
  readonly persistSrcipTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#persist_srcip_template_min_guarantee SystemResourceAccountingA#persist_srcip_template_min_guarantee}
  */
  readonly persistSrcipTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesPersistSrcipTemplateCfgAToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesPersistSrcipTemplateCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesPersistSrcipTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    persist_srcip_template_max: cdktf.numberToTerraform(struct!.persistSrcipTemplateMax),
    persist_srcip_template_min_guarantee: cdktf.numberToTerraform(struct!.persistSrcipTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesPersistSrcipTemplateCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesPersistSrcipTemplateCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesPersistSrcipTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    persist_srcip_template_max: {
      value: cdktf.numberToHclTerraform(struct!.persistSrcipTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persist_srcip_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.persistSrcipTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesPersistSrcipTemplateCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesPersistSrcipTemplateCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._persistSrcipTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistSrcipTemplateMax = this._persistSrcipTemplateMax;
    }
    if (this._persistSrcipTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistSrcipTemplateMinGuarantee = this._persistSrcipTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesPersistSrcipTemplateCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._persistSrcipTemplateMax = undefined;
      this._persistSrcipTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._persistSrcipTemplateMax = value.persistSrcipTemplateMax;
      this._persistSrcipTemplateMinGuarantee = value.persistSrcipTemplateMinGuarantee;
    }
  }

  // persist_srcip_template_max - computed: false, optional: true, required: false
  private _persistSrcipTemplateMax?: number; 
  public get persistSrcipTemplateMax() {
    return this.getNumberAttribute('persist_srcip_template_max');
  }
  public set persistSrcipTemplateMax(value: number) {
    this._persistSrcipTemplateMax = value;
  }
  public resetPersistSrcipTemplateMax() {
    this._persistSrcipTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistSrcipTemplateMaxInput() {
    return this._persistSrcipTemplateMax;
  }

  // persist_srcip_template_min_guarantee - computed: false, optional: true, required: false
  private _persistSrcipTemplateMinGuarantee?: number; 
  public get persistSrcipTemplateMinGuarantee() {
    return this.getNumberAttribute('persist_srcip_template_min_guarantee');
  }
  public set persistSrcipTemplateMinGuarantee(value: number) {
    this._persistSrcipTemplateMinGuarantee = value;
  }
  public resetPersistSrcipTemplateMinGuarantee() {
    this._persistSrcipTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistSrcipTemplateMinGuaranteeInput() {
    return this._persistSrcipTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesProxyTemplateCfgA {
  /**
  * Enter the number of proxy-template allowed (server-ssl-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#proxy_template_max SystemResourceAccountingA#proxy_template_max}
  */
  readonly proxyTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#proxy_template_min_guarantee SystemResourceAccountingA#proxy_template_min_guarantee}
  */
  readonly proxyTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesProxyTemplateCfgAToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesProxyTemplateCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesProxyTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proxy_template_max: cdktf.numberToTerraform(struct!.proxyTemplateMax),
    proxy_template_min_guarantee: cdktf.numberToTerraform(struct!.proxyTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesProxyTemplateCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesProxyTemplateCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesProxyTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proxy_template_max: {
      value: cdktf.numberToHclTerraform(struct!.proxyTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.proxyTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesProxyTemplateCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesProxyTemplateCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proxyTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyTemplateMax = this._proxyTemplateMax;
    }
    if (this._proxyTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyTemplateMinGuarantee = this._proxyTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesProxyTemplateCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._proxyTemplateMax = undefined;
      this._proxyTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._proxyTemplateMax = value.proxyTemplateMax;
      this._proxyTemplateMinGuarantee = value.proxyTemplateMinGuarantee;
    }
  }

  // proxy_template_max - computed: false, optional: true, required: false
  private _proxyTemplateMax?: number; 
  public get proxyTemplateMax() {
    return this.getNumberAttribute('proxy_template_max');
  }
  public set proxyTemplateMax(value: number) {
    this._proxyTemplateMax = value;
  }
  public resetProxyTemplateMax() {
    this._proxyTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTemplateMaxInput() {
    return this._proxyTemplateMax;
  }

  // proxy_template_min_guarantee - computed: false, optional: true, required: false
  private _proxyTemplateMinGuarantee?: number; 
  public get proxyTemplateMinGuarantee() {
    return this.getNumberAttribute('proxy_template_min_guarantee');
  }
  public set proxyTemplateMinGuarantee(value: number) {
    this._proxyTemplateMinGuarantee = value;
  }
  public resetProxyTemplateMinGuarantee() {
    this._proxyTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTemplateMinGuaranteeInput() {
    return this._proxyTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesRealPortCfgA {
  /**
  * Enter the number of real-ports allowed (real-port count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#real_port_max SystemResourceAccountingA#real_port_max}
  */
  readonly realPortMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#real_port_min_guarantee SystemResourceAccountingA#real_port_min_guarantee}
  */
  readonly realPortMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesRealPortCfgAToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesRealPortCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesRealPortCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    real_port_max: cdktf.numberToTerraform(struct!.realPortMax),
    real_port_min_guarantee: cdktf.numberToTerraform(struct!.realPortMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesRealPortCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesRealPortCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesRealPortCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    real_port_max: {
      value: cdktf.numberToHclTerraform(struct!.realPortMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    real_port_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.realPortMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesRealPortCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesRealPortCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._realPortMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.realPortMax = this._realPortMax;
    }
    if (this._realPortMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.realPortMinGuarantee = this._realPortMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesRealPortCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._realPortMax = undefined;
      this._realPortMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._realPortMax = value.realPortMax;
      this._realPortMinGuarantee = value.realPortMinGuarantee;
    }
  }

  // real_port_max - computed: false, optional: true, required: false
  private _realPortMax?: number; 
  public get realPortMax() {
    return this.getNumberAttribute('real_port_max');
  }
  public set realPortMax(value: number) {
    this._realPortMax = value;
  }
  public resetRealPortMax() {
    this._realPortMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realPortMaxInput() {
    return this._realPortMax;
  }

  // real_port_min_guarantee - computed: false, optional: true, required: false
  private _realPortMinGuarantee?: number; 
  public get realPortMinGuarantee() {
    return this.getNumberAttribute('real_port_min_guarantee');
  }
  public set realPortMinGuarantee(value: number) {
    this._realPortMinGuarantee = value;
  }
  public resetRealPortMinGuarantee() {
    this._realPortMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realPortMinGuaranteeInput() {
    return this._realPortMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesRealServerCfgA {
  /**
  * Enter the number of real-servers allowed (real-server count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#real_server_max SystemResourceAccountingA#real_server_max}
  */
  readonly realServerMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#real_server_min_guarantee SystemResourceAccountingA#real_server_min_guarantee}
  */
  readonly realServerMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesRealServerCfgAToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesRealServerCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesRealServerCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    real_server_max: cdktf.numberToTerraform(struct!.realServerMax),
    real_server_min_guarantee: cdktf.numberToTerraform(struct!.realServerMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesRealServerCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesRealServerCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesRealServerCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    real_server_max: {
      value: cdktf.numberToHclTerraform(struct!.realServerMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    real_server_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.realServerMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesRealServerCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesRealServerCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._realServerMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.realServerMax = this._realServerMax;
    }
    if (this._realServerMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.realServerMinGuarantee = this._realServerMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesRealServerCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._realServerMax = undefined;
      this._realServerMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._realServerMax = value.realServerMax;
      this._realServerMinGuarantee = value.realServerMinGuarantee;
    }
  }

  // real_server_max - computed: false, optional: true, required: false
  private _realServerMax?: number; 
  public get realServerMax() {
    return this.getNumberAttribute('real_server_max');
  }
  public set realServerMax(value: number) {
    this._realServerMax = value;
  }
  public resetRealServerMax() {
    this._realServerMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realServerMaxInput() {
    return this._realServerMax;
  }

  // real_server_min_guarantee - computed: false, optional: true, required: false
  private _realServerMinGuarantee?: number; 
  public get realServerMinGuarantee() {
    return this.getNumberAttribute('real_server_min_guarantee');
  }
  public set realServerMinGuarantee(value: number) {
    this._realServerMinGuarantee = value;
  }
  public resetRealServerMinGuarantee() {
    this._realServerMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realServerMinGuaranteeInput() {
    return this._realServerMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesServerSslTemplateCfgA {
  /**
  * Enter the number of server-ssl-template allowed (server-ssl-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#server_ssl_template_max SystemResourceAccountingA#server_ssl_template_max}
  */
  readonly serverSslTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#server_ssl_template_min_guarantee SystemResourceAccountingA#server_ssl_template_min_guarantee}
  */
  readonly serverSslTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesServerSslTemplateCfgAToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesServerSslTemplateCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesServerSslTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_ssl_template_max: cdktf.numberToTerraform(struct!.serverSslTemplateMax),
    server_ssl_template_min_guarantee: cdktf.numberToTerraform(struct!.serverSslTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesServerSslTemplateCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesServerSslTemplateCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesServerSslTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_ssl_template_max: {
      value: cdktf.numberToHclTerraform(struct!.serverSslTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_ssl_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.serverSslTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesServerSslTemplateCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesServerSslTemplateCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverSslTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSslTemplateMax = this._serverSslTemplateMax;
    }
    if (this._serverSslTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSslTemplateMinGuarantee = this._serverSslTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesServerSslTemplateCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serverSslTemplateMax = undefined;
      this._serverSslTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serverSslTemplateMax = value.serverSslTemplateMax;
      this._serverSslTemplateMinGuarantee = value.serverSslTemplateMinGuarantee;
    }
  }

  // server_ssl_template_max - computed: false, optional: true, required: false
  private _serverSslTemplateMax?: number; 
  public get serverSslTemplateMax() {
    return this.getNumberAttribute('server_ssl_template_max');
  }
  public set serverSslTemplateMax(value: number) {
    this._serverSslTemplateMax = value;
  }
  public resetServerSslTemplateMax() {
    this._serverSslTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSslTemplateMaxInput() {
    return this._serverSslTemplateMax;
  }

  // server_ssl_template_min_guarantee - computed: false, optional: true, required: false
  private _serverSslTemplateMinGuarantee?: number; 
  public get serverSslTemplateMinGuarantee() {
    return this.getNumberAttribute('server_ssl_template_min_guarantee');
  }
  public set serverSslTemplateMinGuarantee(value: number) {
    this._serverSslTemplateMinGuarantee = value;
  }
  public resetServerSslTemplateMinGuarantee() {
    this._serverSslTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSslTemplateMinGuaranteeInput() {
    return this._serverSslTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesServiceGroupCfgA {
  /**
  * Enter the number of service groups allowed (service-group count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#service_group_max SystemResourceAccountingA#service_group_max}
  */
  readonly serviceGroupMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#service_group_min_guarantee SystemResourceAccountingA#service_group_min_guarantee}
  */
  readonly serviceGroupMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesServiceGroupCfgAToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesServiceGroupCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesServiceGroupCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_group_max: cdktf.numberToTerraform(struct!.serviceGroupMax),
    service_group_min_guarantee: cdktf.numberToTerraform(struct!.serviceGroupMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesServiceGroupCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesServiceGroupCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesServiceGroupCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_group_max: {
      value: cdktf.numberToHclTerraform(struct!.serviceGroupMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_group_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.serviceGroupMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesServiceGroupCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesServiceGroupCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceGroupMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroupMax = this._serviceGroupMax;
    }
    if (this._serviceGroupMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroupMinGuarantee = this._serviceGroupMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesServiceGroupCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceGroupMax = undefined;
      this._serviceGroupMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceGroupMax = value.serviceGroupMax;
      this._serviceGroupMinGuarantee = value.serviceGroupMinGuarantee;
    }
  }

  // service_group_max - computed: false, optional: true, required: false
  private _serviceGroupMax?: number; 
  public get serviceGroupMax() {
    return this.getNumberAttribute('service_group_max');
  }
  public set serviceGroupMax(value: number) {
    this._serviceGroupMax = value;
  }
  public resetServiceGroupMax() {
    this._serviceGroupMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupMaxInput() {
    return this._serviceGroupMax;
  }

  // service_group_min_guarantee - computed: false, optional: true, required: false
  private _serviceGroupMinGuarantee?: number; 
  public get serviceGroupMinGuarantee() {
    return this.getNumberAttribute('service_group_min_guarantee');
  }
  public set serviceGroupMinGuarantee(value: number) {
    this._serviceGroupMinGuarantee = value;
  }
  public resetServiceGroupMinGuarantee() {
    this._serviceGroupMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupMinGuaranteeInput() {
    return this._serviceGroupMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesStreamTemplateCfgA {
  /**
  * Enter the number of stream-template allowed (server-ssl-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#stream_template_max SystemResourceAccountingA#stream_template_max}
  */
  readonly streamTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#stream_template_min_guarantee SystemResourceAccountingA#stream_template_min_guarantee}
  */
  readonly streamTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesStreamTemplateCfgAToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesStreamTemplateCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesStreamTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stream_template_max: cdktf.numberToTerraform(struct!.streamTemplateMax),
    stream_template_min_guarantee: cdktf.numberToTerraform(struct!.streamTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesStreamTemplateCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesStreamTemplateCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesStreamTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stream_template_max: {
      value: cdktf.numberToHclTerraform(struct!.streamTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.streamTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesStreamTemplateCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesStreamTemplateCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._streamTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamTemplateMax = this._streamTemplateMax;
    }
    if (this._streamTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamTemplateMinGuarantee = this._streamTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesStreamTemplateCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._streamTemplateMax = undefined;
      this._streamTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._streamTemplateMax = value.streamTemplateMax;
      this._streamTemplateMinGuarantee = value.streamTemplateMinGuarantee;
    }
  }

  // stream_template_max - computed: false, optional: true, required: false
  private _streamTemplateMax?: number; 
  public get streamTemplateMax() {
    return this.getNumberAttribute('stream_template_max');
  }
  public set streamTemplateMax(value: number) {
    this._streamTemplateMax = value;
  }
  public resetStreamTemplateMax() {
    this._streamTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamTemplateMaxInput() {
    return this._streamTemplateMax;
  }

  // stream_template_min_guarantee - computed: false, optional: true, required: false
  private _streamTemplateMinGuarantee?: number; 
  public get streamTemplateMinGuarantee() {
    return this.getNumberAttribute('stream_template_min_guarantee');
  }
  public set streamTemplateMinGuarantee(value: number) {
    this._streamTemplateMinGuarantee = value;
  }
  public resetStreamTemplateMinGuarantee() {
    this._streamTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamTemplateMinGuaranteeInput() {
    return this._streamTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesVirtualPortCfgA {
  /**
  * Enter the number of virtual-port allowed (virtual-port count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#virtual_port_max SystemResourceAccountingA#virtual_port_max}
  */
  readonly virtualPortMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#virtual_port_min_guarantee SystemResourceAccountingA#virtual_port_min_guarantee}
  */
  readonly virtualPortMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesVirtualPortCfgAToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesVirtualPortCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesVirtualPortCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_port_max: cdktf.numberToTerraform(struct!.virtualPortMax),
    virtual_port_min_guarantee: cdktf.numberToTerraform(struct!.virtualPortMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesVirtualPortCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesVirtualPortCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesVirtualPortCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_port_max: {
      value: cdktf.numberToHclTerraform(struct!.virtualPortMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_port_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.virtualPortMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesVirtualPortCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesVirtualPortCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualPortMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualPortMax = this._virtualPortMax;
    }
    if (this._virtualPortMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualPortMinGuarantee = this._virtualPortMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesVirtualPortCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._virtualPortMax = undefined;
      this._virtualPortMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._virtualPortMax = value.virtualPortMax;
      this._virtualPortMinGuarantee = value.virtualPortMinGuarantee;
    }
  }

  // virtual_port_max - computed: false, optional: true, required: false
  private _virtualPortMax?: number; 
  public get virtualPortMax() {
    return this.getNumberAttribute('virtual_port_max');
  }
  public set virtualPortMax(value: number) {
    this._virtualPortMax = value;
  }
  public resetVirtualPortMax() {
    this._virtualPortMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPortMaxInput() {
    return this._virtualPortMax;
  }

  // virtual_port_min_guarantee - computed: false, optional: true, required: false
  private _virtualPortMinGuarantee?: number; 
  public get virtualPortMinGuarantee() {
    return this.getNumberAttribute('virtual_port_min_guarantee');
  }
  public set virtualPortMinGuarantee(value: number) {
    this._virtualPortMinGuarantee = value;
  }
  public resetVirtualPortMinGuarantee() {
    this._virtualPortMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPortMinGuaranteeInput() {
    return this._virtualPortMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesVirtualServerCfgA {
  /**
  * Enter the number of virtual-servers allowed (virtual-server count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#virtual_server_max SystemResourceAccountingA#virtual_server_max}
  */
  readonly virtualServerMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#virtual_server_min_guarantee SystemResourceAccountingA#virtual_server_min_guarantee}
  */
  readonly virtualServerMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesVirtualServerCfgAToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesVirtualServerCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesVirtualServerCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_server_max: cdktf.numberToTerraform(struct!.virtualServerMax),
    virtual_server_min_guarantee: cdktf.numberToTerraform(struct!.virtualServerMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesVirtualServerCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesVirtualServerCfgAOutputReference | SystemResourceAccountingTemplateListAppResourcesVirtualServerCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_server_max: {
      value: cdktf.numberToHclTerraform(struct!.virtualServerMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_server_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.virtualServerMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesVirtualServerCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesVirtualServerCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualServerMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServerMax = this._virtualServerMax;
    }
    if (this._virtualServerMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServerMinGuarantee = this._virtualServerMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesVirtualServerCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._virtualServerMax = undefined;
      this._virtualServerMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._virtualServerMax = value.virtualServerMax;
      this._virtualServerMinGuarantee = value.virtualServerMinGuarantee;
    }
  }

  // virtual_server_max - computed: false, optional: true, required: false
  private _virtualServerMax?: number; 
  public get virtualServerMax() {
    return this.getNumberAttribute('virtual_server_max');
  }
  public set virtualServerMax(value: number) {
    this._virtualServerMax = value;
  }
  public resetVirtualServerMax() {
    this._virtualServerMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerMaxInput() {
    return this._virtualServerMax;
  }

  // virtual_server_min_guarantee - computed: false, optional: true, required: false
  private _virtualServerMinGuarantee?: number; 
  public get virtualServerMinGuarantee() {
    return this.getNumberAttribute('virtual_server_min_guarantee');
  }
  public set virtualServerMinGuarantee(value: number) {
    this._virtualServerMinGuarantee = value;
  }
  public resetVirtualServerMinGuarantee() {
    this._virtualServerMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerMinGuaranteeInput() {
    return this._virtualServerMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesA {
  /**
  * Enter the threshold as a percentage (Threshold in percentage(default is 100%))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#threshold SystemResourceAccountingA#threshold}
  */
  readonly threshold?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#uuid SystemResourceAccountingA#uuid}
  */
  readonly uuid?: string;
  /**
  * cache_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#cache_template_cfg SystemResourceAccountingA#cache_template_cfg}
  */
  readonly cacheTemplateCfg?: SystemResourceAccountingTemplateListAppResourcesCacheTemplateCfgA;
  /**
  * client_ssl_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#client_ssl_template_cfg SystemResourceAccountingA#client_ssl_template_cfg}
  */
  readonly clientSslTemplateCfg?: SystemResourceAccountingTemplateListAppResourcesClientSslTemplateCfgA;
  /**
  * conn_reuse_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#conn_reuse_template_cfg SystemResourceAccountingA#conn_reuse_template_cfg}
  */
  readonly connReuseTemplateCfg?: SystemResourceAccountingTemplateListAppResourcesConnReuseTemplateCfgA;
  /**
  * fast_tcp_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#fast_tcp_template_cfg SystemResourceAccountingA#fast_tcp_template_cfg}
  */
  readonly fastTcpTemplateCfg?: SystemResourceAccountingTemplateListAppResourcesFastTcpTemplateCfgA;
  /**
  * fast_udp_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#fast_udp_template_cfg SystemResourceAccountingA#fast_udp_template_cfg}
  */
  readonly fastUdpTemplateCfg?: SystemResourceAccountingTemplateListAppResourcesFastUdpTemplateCfgA;
  /**
  * fix_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#fix_template_cfg SystemResourceAccountingA#fix_template_cfg}
  */
  readonly fixTemplateCfg?: SystemResourceAccountingTemplateListAppResourcesFixTemplateCfgA;
  /**
  * gslb_device_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_device_cfg SystemResourceAccountingA#gslb_device_cfg}
  */
  readonly gslbDeviceCfg?: SystemResourceAccountingTemplateListAppResourcesGslbDeviceCfgA;
  /**
  * gslb_geo_location_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_geo_location_cfg SystemResourceAccountingA#gslb_geo_location_cfg}
  */
  readonly gslbGeoLocationCfg?: SystemResourceAccountingTemplateListAppResourcesGslbGeoLocationCfgA;
  /**
  * gslb_ip_list_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_ip_list_cfg SystemResourceAccountingA#gslb_ip_list_cfg}
  */
  readonly gslbIpListCfg?: SystemResourceAccountingTemplateListAppResourcesGslbIpListCfgA;
  /**
  * gslb_policy_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_policy_cfg SystemResourceAccountingA#gslb_policy_cfg}
  */
  readonly gslbPolicyCfg?: SystemResourceAccountingTemplateListAppResourcesGslbPolicyCfgA;
  /**
  * gslb_service_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_service_cfg SystemResourceAccountingA#gslb_service_cfg}
  */
  readonly gslbServiceCfg?: SystemResourceAccountingTemplateListAppResourcesGslbServiceCfgA;
  /**
  * gslb_service_ip_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_service_ip_cfg SystemResourceAccountingA#gslb_service_ip_cfg}
  */
  readonly gslbServiceIpCfg?: SystemResourceAccountingTemplateListAppResourcesGslbServiceIpCfgA;
  /**
  * gslb_service_port_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_service_port_cfg SystemResourceAccountingA#gslb_service_port_cfg}
  */
  readonly gslbServicePortCfg?: SystemResourceAccountingTemplateListAppResourcesGslbServicePortCfgA;
  /**
  * gslb_site_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_site_cfg SystemResourceAccountingA#gslb_site_cfg}
  */
  readonly gslbSiteCfg?: SystemResourceAccountingTemplateListAppResourcesGslbSiteCfgA;
  /**
  * gslb_svc_group_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_svc_group_cfg SystemResourceAccountingA#gslb_svc_group_cfg}
  */
  readonly gslbSvcGroupCfg?: SystemResourceAccountingTemplateListAppResourcesGslbSvcGroupCfgA;
  /**
  * gslb_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_template_cfg SystemResourceAccountingA#gslb_template_cfg}
  */
  readonly gslbTemplateCfg?: SystemResourceAccountingTemplateListAppResourcesGslbTemplateCfgA;
  /**
  * gslb_zone_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#gslb_zone_cfg SystemResourceAccountingA#gslb_zone_cfg}
  */
  readonly gslbZoneCfg?: SystemResourceAccountingTemplateListAppResourcesGslbZoneCfgA;
  /**
  * health_monitor_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#health_monitor_cfg SystemResourceAccountingA#health_monitor_cfg}
  */
  readonly healthMonitorCfg?: SystemResourceAccountingTemplateListAppResourcesHealthMonitorCfgA;
  /**
  * http_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#http_template_cfg SystemResourceAccountingA#http_template_cfg}
  */
  readonly httpTemplateCfg?: SystemResourceAccountingTemplateListAppResourcesHttpTemplateCfgA;
  /**
  * link_cost_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#link_cost_template_cfg SystemResourceAccountingA#link_cost_template_cfg}
  */
  readonly linkCostTemplateCfg?: SystemResourceAccountingTemplateListAppResourcesLinkCostTemplateCfgA;
  /**
  * pbslb_entry_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#pbslb_entry_cfg SystemResourceAccountingA#pbslb_entry_cfg}
  */
  readonly pbslbEntryCfg?: SystemResourceAccountingTemplateListAppResourcesPbslbEntryCfgA;
  /**
  * persist_cookie_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#persist_cookie_template_cfg SystemResourceAccountingA#persist_cookie_template_cfg}
  */
  readonly persistCookieTemplateCfg?: SystemResourceAccountingTemplateListAppResourcesPersistCookieTemplateCfgA;
  /**
  * persist_srcip_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#persist_srcip_template_cfg SystemResourceAccountingA#persist_srcip_template_cfg}
  */
  readonly persistSrcipTemplateCfg?: SystemResourceAccountingTemplateListAppResourcesPersistSrcipTemplateCfgA;
  /**
  * proxy_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#proxy_template_cfg SystemResourceAccountingA#proxy_template_cfg}
  */
  readonly proxyTemplateCfg?: SystemResourceAccountingTemplateListAppResourcesProxyTemplateCfgA;
  /**
  * real_port_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#real_port_cfg SystemResourceAccountingA#real_port_cfg}
  */
  readonly realPortCfg?: SystemResourceAccountingTemplateListAppResourcesRealPortCfgA;
  /**
  * real_server_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#real_server_cfg SystemResourceAccountingA#real_server_cfg}
  */
  readonly realServerCfg?: SystemResourceAccountingTemplateListAppResourcesRealServerCfgA;
  /**
  * server_ssl_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#server_ssl_template_cfg SystemResourceAccountingA#server_ssl_template_cfg}
  */
  readonly serverSslTemplateCfg?: SystemResourceAccountingTemplateListAppResourcesServerSslTemplateCfgA;
  /**
  * service_group_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#service_group_cfg SystemResourceAccountingA#service_group_cfg}
  */
  readonly serviceGroupCfg?: SystemResourceAccountingTemplateListAppResourcesServiceGroupCfgA;
  /**
  * stream_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#stream_template_cfg SystemResourceAccountingA#stream_template_cfg}
  */
  readonly streamTemplateCfg?: SystemResourceAccountingTemplateListAppResourcesStreamTemplateCfgA;
  /**
  * virtual_port_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#virtual_port_cfg SystemResourceAccountingA#virtual_port_cfg}
  */
  readonly virtualPortCfg?: SystemResourceAccountingTemplateListAppResourcesVirtualPortCfgA;
  /**
  * virtual_server_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#virtual_server_cfg SystemResourceAccountingA#virtual_server_cfg}
  */
  readonly virtualServerCfg?: SystemResourceAccountingTemplateListAppResourcesVirtualServerCfgA;
}

export function systemResourceAccountingTemplateListAppResourcesAToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesAOutputReference | SystemResourceAccountingTemplateListAppResourcesA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    cache_template_cfg: systemResourceAccountingTemplateListAppResourcesCacheTemplateCfgAToTerraform(struct!.cacheTemplateCfg),
    client_ssl_template_cfg: systemResourceAccountingTemplateListAppResourcesClientSslTemplateCfgAToTerraform(struct!.clientSslTemplateCfg),
    conn_reuse_template_cfg: systemResourceAccountingTemplateListAppResourcesConnReuseTemplateCfgAToTerraform(struct!.connReuseTemplateCfg),
    fast_tcp_template_cfg: systemResourceAccountingTemplateListAppResourcesFastTcpTemplateCfgAToTerraform(struct!.fastTcpTemplateCfg),
    fast_udp_template_cfg: systemResourceAccountingTemplateListAppResourcesFastUdpTemplateCfgAToTerraform(struct!.fastUdpTemplateCfg),
    fix_template_cfg: systemResourceAccountingTemplateListAppResourcesFixTemplateCfgAToTerraform(struct!.fixTemplateCfg),
    gslb_device_cfg: systemResourceAccountingTemplateListAppResourcesGslbDeviceCfgAToTerraform(struct!.gslbDeviceCfg),
    gslb_geo_location_cfg: systemResourceAccountingTemplateListAppResourcesGslbGeoLocationCfgAToTerraform(struct!.gslbGeoLocationCfg),
    gslb_ip_list_cfg: systemResourceAccountingTemplateListAppResourcesGslbIpListCfgAToTerraform(struct!.gslbIpListCfg),
    gslb_policy_cfg: systemResourceAccountingTemplateListAppResourcesGslbPolicyCfgAToTerraform(struct!.gslbPolicyCfg),
    gslb_service_cfg: systemResourceAccountingTemplateListAppResourcesGslbServiceCfgAToTerraform(struct!.gslbServiceCfg),
    gslb_service_ip_cfg: systemResourceAccountingTemplateListAppResourcesGslbServiceIpCfgAToTerraform(struct!.gslbServiceIpCfg),
    gslb_service_port_cfg: systemResourceAccountingTemplateListAppResourcesGslbServicePortCfgAToTerraform(struct!.gslbServicePortCfg),
    gslb_site_cfg: systemResourceAccountingTemplateListAppResourcesGslbSiteCfgAToTerraform(struct!.gslbSiteCfg),
    gslb_svc_group_cfg: systemResourceAccountingTemplateListAppResourcesGslbSvcGroupCfgAToTerraform(struct!.gslbSvcGroupCfg),
    gslb_template_cfg: systemResourceAccountingTemplateListAppResourcesGslbTemplateCfgAToTerraform(struct!.gslbTemplateCfg),
    gslb_zone_cfg: systemResourceAccountingTemplateListAppResourcesGslbZoneCfgAToTerraform(struct!.gslbZoneCfg),
    health_monitor_cfg: systemResourceAccountingTemplateListAppResourcesHealthMonitorCfgAToTerraform(struct!.healthMonitorCfg),
    http_template_cfg: systemResourceAccountingTemplateListAppResourcesHttpTemplateCfgAToTerraform(struct!.httpTemplateCfg),
    link_cost_template_cfg: systemResourceAccountingTemplateListAppResourcesLinkCostTemplateCfgAToTerraform(struct!.linkCostTemplateCfg),
    pbslb_entry_cfg: systemResourceAccountingTemplateListAppResourcesPbslbEntryCfgAToTerraform(struct!.pbslbEntryCfg),
    persist_cookie_template_cfg: systemResourceAccountingTemplateListAppResourcesPersistCookieTemplateCfgAToTerraform(struct!.persistCookieTemplateCfg),
    persist_srcip_template_cfg: systemResourceAccountingTemplateListAppResourcesPersistSrcipTemplateCfgAToTerraform(struct!.persistSrcipTemplateCfg),
    proxy_template_cfg: systemResourceAccountingTemplateListAppResourcesProxyTemplateCfgAToTerraform(struct!.proxyTemplateCfg),
    real_port_cfg: systemResourceAccountingTemplateListAppResourcesRealPortCfgAToTerraform(struct!.realPortCfg),
    real_server_cfg: systemResourceAccountingTemplateListAppResourcesRealServerCfgAToTerraform(struct!.realServerCfg),
    server_ssl_template_cfg: systemResourceAccountingTemplateListAppResourcesServerSslTemplateCfgAToTerraform(struct!.serverSslTemplateCfg),
    service_group_cfg: systemResourceAccountingTemplateListAppResourcesServiceGroupCfgAToTerraform(struct!.serviceGroupCfg),
    stream_template_cfg: systemResourceAccountingTemplateListAppResourcesStreamTemplateCfgAToTerraform(struct!.streamTemplateCfg),
    virtual_port_cfg: systemResourceAccountingTemplateListAppResourcesVirtualPortCfgAToTerraform(struct!.virtualPortCfg),
    virtual_server_cfg: systemResourceAccountingTemplateListAppResourcesVirtualServerCfgAToTerraform(struct!.virtualServerCfg),
  }
}


export function systemResourceAccountingTemplateListAppResourcesAToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesAOutputReference | SystemResourceAccountingTemplateListAppResourcesA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_template_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesCacheTemplateCfgAToHclTerraform(struct!.cacheTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesCacheTemplateCfgAList",
    },
    client_ssl_template_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesClientSslTemplateCfgAToHclTerraform(struct!.clientSslTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesClientSslTemplateCfgAList",
    },
    conn_reuse_template_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesConnReuseTemplateCfgAToHclTerraform(struct!.connReuseTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesConnReuseTemplateCfgAList",
    },
    fast_tcp_template_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesFastTcpTemplateCfgAToHclTerraform(struct!.fastTcpTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesFastTcpTemplateCfgAList",
    },
    fast_udp_template_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesFastUdpTemplateCfgAToHclTerraform(struct!.fastUdpTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesFastUdpTemplateCfgAList",
    },
    fix_template_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesFixTemplateCfgAToHclTerraform(struct!.fixTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesFixTemplateCfgAList",
    },
    gslb_device_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesGslbDeviceCfgAToHclTerraform(struct!.gslbDeviceCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesGslbDeviceCfgAList",
    },
    gslb_geo_location_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesGslbGeoLocationCfgAToHclTerraform(struct!.gslbGeoLocationCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesGslbGeoLocationCfgAList",
    },
    gslb_ip_list_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesGslbIpListCfgAToHclTerraform(struct!.gslbIpListCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesGslbIpListCfgAList",
    },
    gslb_policy_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesGslbPolicyCfgAToHclTerraform(struct!.gslbPolicyCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesGslbPolicyCfgAList",
    },
    gslb_service_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesGslbServiceCfgAToHclTerraform(struct!.gslbServiceCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesGslbServiceCfgAList",
    },
    gslb_service_ip_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesGslbServiceIpCfgAToHclTerraform(struct!.gslbServiceIpCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesGslbServiceIpCfgAList",
    },
    gslb_service_port_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesGslbServicePortCfgAToHclTerraform(struct!.gslbServicePortCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesGslbServicePortCfgAList",
    },
    gslb_site_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesGslbSiteCfgAToHclTerraform(struct!.gslbSiteCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesGslbSiteCfgAList",
    },
    gslb_svc_group_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesGslbSvcGroupCfgAToHclTerraform(struct!.gslbSvcGroupCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesGslbSvcGroupCfgAList",
    },
    gslb_template_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesGslbTemplateCfgAToHclTerraform(struct!.gslbTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesGslbTemplateCfgAList",
    },
    gslb_zone_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesGslbZoneCfgAToHclTerraform(struct!.gslbZoneCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesGslbZoneCfgAList",
    },
    health_monitor_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesHealthMonitorCfgAToHclTerraform(struct!.healthMonitorCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesHealthMonitorCfgAList",
    },
    http_template_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesHttpTemplateCfgAToHclTerraform(struct!.httpTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesHttpTemplateCfgAList",
    },
    link_cost_template_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesLinkCostTemplateCfgAToHclTerraform(struct!.linkCostTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesLinkCostTemplateCfgAList",
    },
    pbslb_entry_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesPbslbEntryCfgAToHclTerraform(struct!.pbslbEntryCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesPbslbEntryCfgAList",
    },
    persist_cookie_template_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesPersistCookieTemplateCfgAToHclTerraform(struct!.persistCookieTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesPersistCookieTemplateCfgAList",
    },
    persist_srcip_template_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesPersistSrcipTemplateCfgAToHclTerraform(struct!.persistSrcipTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesPersistSrcipTemplateCfgAList",
    },
    proxy_template_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesProxyTemplateCfgAToHclTerraform(struct!.proxyTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesProxyTemplateCfgAList",
    },
    real_port_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesRealPortCfgAToHclTerraform(struct!.realPortCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesRealPortCfgAList",
    },
    real_server_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesRealServerCfgAToHclTerraform(struct!.realServerCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesRealServerCfgAList",
    },
    server_ssl_template_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesServerSslTemplateCfgAToHclTerraform(struct!.serverSslTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesServerSslTemplateCfgAList",
    },
    service_group_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesServiceGroupCfgAToHclTerraform(struct!.serviceGroupCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesServiceGroupCfgAList",
    },
    stream_template_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesStreamTemplateCfgAToHclTerraform(struct!.streamTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesStreamTemplateCfgAList",
    },
    virtual_port_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesVirtualPortCfgAToHclTerraform(struct!.virtualPortCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesVirtualPortCfgAList",
    },
    virtual_server_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesVirtualServerCfgAToHclTerraform(struct!.virtualServerCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesVirtualServerCfgAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._cacheTemplateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTemplateCfg = this._cacheTemplateCfg?.internalValue;
    }
    if (this._clientSslTemplateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSslTemplateCfg = this._clientSslTemplateCfg?.internalValue;
    }
    if (this._connReuseTemplateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connReuseTemplateCfg = this._connReuseTemplateCfg?.internalValue;
    }
    if (this._fastTcpTemplateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastTcpTemplateCfg = this._fastTcpTemplateCfg?.internalValue;
    }
    if (this._fastUdpTemplateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastUdpTemplateCfg = this._fastUdpTemplateCfg?.internalValue;
    }
    if (this._fixTemplateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixTemplateCfg = this._fixTemplateCfg?.internalValue;
    }
    if (this._gslbDeviceCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbDeviceCfg = this._gslbDeviceCfg?.internalValue;
    }
    if (this._gslbGeoLocationCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbGeoLocationCfg = this._gslbGeoLocationCfg?.internalValue;
    }
    if (this._gslbIpListCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbIpListCfg = this._gslbIpListCfg?.internalValue;
    }
    if (this._gslbPolicyCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbPolicyCfg = this._gslbPolicyCfg?.internalValue;
    }
    if (this._gslbServiceCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServiceCfg = this._gslbServiceCfg?.internalValue;
    }
    if (this._gslbServiceIpCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServiceIpCfg = this._gslbServiceIpCfg?.internalValue;
    }
    if (this._gslbServicePortCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServicePortCfg = this._gslbServicePortCfg?.internalValue;
    }
    if (this._gslbSiteCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbSiteCfg = this._gslbSiteCfg?.internalValue;
    }
    if (this._gslbSvcGroupCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbSvcGroupCfg = this._gslbSvcGroupCfg?.internalValue;
    }
    if (this._gslbTemplateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbTemplateCfg = this._gslbTemplateCfg?.internalValue;
    }
    if (this._gslbZoneCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbZoneCfg = this._gslbZoneCfg?.internalValue;
    }
    if (this._healthMonitorCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthMonitorCfg = this._healthMonitorCfg?.internalValue;
    }
    if (this._httpTemplateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpTemplateCfg = this._httpTemplateCfg?.internalValue;
    }
    if (this._linkCostTemplateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkCostTemplateCfg = this._linkCostTemplateCfg?.internalValue;
    }
    if (this._pbslbEntryCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbslbEntryCfg = this._pbslbEntryCfg?.internalValue;
    }
    if (this._persistCookieTemplateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistCookieTemplateCfg = this._persistCookieTemplateCfg?.internalValue;
    }
    if (this._persistSrcipTemplateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistSrcipTemplateCfg = this._persistSrcipTemplateCfg?.internalValue;
    }
    if (this._proxyTemplateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyTemplateCfg = this._proxyTemplateCfg?.internalValue;
    }
    if (this._realPortCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.realPortCfg = this._realPortCfg?.internalValue;
    }
    if (this._realServerCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.realServerCfg = this._realServerCfg?.internalValue;
    }
    if (this._serverSslTemplateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSslTemplateCfg = this._serverSslTemplateCfg?.internalValue;
    }
    if (this._serviceGroupCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroupCfg = this._serviceGroupCfg?.internalValue;
    }
    if (this._streamTemplateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamTemplateCfg = this._streamTemplateCfg?.internalValue;
    }
    if (this._virtualPortCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualPortCfg = this._virtualPortCfg?.internalValue;
    }
    if (this._virtualServerCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServerCfg = this._virtualServerCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threshold = undefined;
      this._uuid = undefined;
      this._cacheTemplateCfg.internalValue = undefined;
      this._clientSslTemplateCfg.internalValue = undefined;
      this._connReuseTemplateCfg.internalValue = undefined;
      this._fastTcpTemplateCfg.internalValue = undefined;
      this._fastUdpTemplateCfg.internalValue = undefined;
      this._fixTemplateCfg.internalValue = undefined;
      this._gslbDeviceCfg.internalValue = undefined;
      this._gslbGeoLocationCfg.internalValue = undefined;
      this._gslbIpListCfg.internalValue = undefined;
      this._gslbPolicyCfg.internalValue = undefined;
      this._gslbServiceCfg.internalValue = undefined;
      this._gslbServiceIpCfg.internalValue = undefined;
      this._gslbServicePortCfg.internalValue = undefined;
      this._gslbSiteCfg.internalValue = undefined;
      this._gslbSvcGroupCfg.internalValue = undefined;
      this._gslbTemplateCfg.internalValue = undefined;
      this._gslbZoneCfg.internalValue = undefined;
      this._healthMonitorCfg.internalValue = undefined;
      this._httpTemplateCfg.internalValue = undefined;
      this._linkCostTemplateCfg.internalValue = undefined;
      this._pbslbEntryCfg.internalValue = undefined;
      this._persistCookieTemplateCfg.internalValue = undefined;
      this._persistSrcipTemplateCfg.internalValue = undefined;
      this._proxyTemplateCfg.internalValue = undefined;
      this._realPortCfg.internalValue = undefined;
      this._realServerCfg.internalValue = undefined;
      this._serverSslTemplateCfg.internalValue = undefined;
      this._serviceGroupCfg.internalValue = undefined;
      this._streamTemplateCfg.internalValue = undefined;
      this._virtualPortCfg.internalValue = undefined;
      this._virtualServerCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threshold = value.threshold;
      this._uuid = value.uuid;
      this._cacheTemplateCfg.internalValue = value.cacheTemplateCfg;
      this._clientSslTemplateCfg.internalValue = value.clientSslTemplateCfg;
      this._connReuseTemplateCfg.internalValue = value.connReuseTemplateCfg;
      this._fastTcpTemplateCfg.internalValue = value.fastTcpTemplateCfg;
      this._fastUdpTemplateCfg.internalValue = value.fastUdpTemplateCfg;
      this._fixTemplateCfg.internalValue = value.fixTemplateCfg;
      this._gslbDeviceCfg.internalValue = value.gslbDeviceCfg;
      this._gslbGeoLocationCfg.internalValue = value.gslbGeoLocationCfg;
      this._gslbIpListCfg.internalValue = value.gslbIpListCfg;
      this._gslbPolicyCfg.internalValue = value.gslbPolicyCfg;
      this._gslbServiceCfg.internalValue = value.gslbServiceCfg;
      this._gslbServiceIpCfg.internalValue = value.gslbServiceIpCfg;
      this._gslbServicePortCfg.internalValue = value.gslbServicePortCfg;
      this._gslbSiteCfg.internalValue = value.gslbSiteCfg;
      this._gslbSvcGroupCfg.internalValue = value.gslbSvcGroupCfg;
      this._gslbTemplateCfg.internalValue = value.gslbTemplateCfg;
      this._gslbZoneCfg.internalValue = value.gslbZoneCfg;
      this._healthMonitorCfg.internalValue = value.healthMonitorCfg;
      this._httpTemplateCfg.internalValue = value.httpTemplateCfg;
      this._linkCostTemplateCfg.internalValue = value.linkCostTemplateCfg;
      this._pbslbEntryCfg.internalValue = value.pbslbEntryCfg;
      this._persistCookieTemplateCfg.internalValue = value.persistCookieTemplateCfg;
      this._persistSrcipTemplateCfg.internalValue = value.persistSrcipTemplateCfg;
      this._proxyTemplateCfg.internalValue = value.proxyTemplateCfg;
      this._realPortCfg.internalValue = value.realPortCfg;
      this._realServerCfg.internalValue = value.realServerCfg;
      this._serverSslTemplateCfg.internalValue = value.serverSslTemplateCfg;
      this._serviceGroupCfg.internalValue = value.serviceGroupCfg;
      this._streamTemplateCfg.internalValue = value.streamTemplateCfg;
      this._virtualPortCfg.internalValue = value.virtualPortCfg;
      this._virtualServerCfg.internalValue = value.virtualServerCfg;
    }
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // cache_template_cfg - computed: false, optional: true, required: false
  private _cacheTemplateCfg = new SystemResourceAccountingTemplateListAppResourcesCacheTemplateCfgAOutputReference(this, "cache_template_cfg");
  public get cacheTemplateCfg() {
    return this._cacheTemplateCfg;
  }
  public putCacheTemplateCfg(value: SystemResourceAccountingTemplateListAppResourcesCacheTemplateCfgA) {
    this._cacheTemplateCfg.internalValue = value;
  }
  public resetCacheTemplateCfg() {
    this._cacheTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTemplateCfgInput() {
    return this._cacheTemplateCfg.internalValue;
  }

  // client_ssl_template_cfg - computed: false, optional: true, required: false
  private _clientSslTemplateCfg = new SystemResourceAccountingTemplateListAppResourcesClientSslTemplateCfgAOutputReference(this, "client_ssl_template_cfg");
  public get clientSslTemplateCfg() {
    return this._clientSslTemplateCfg;
  }
  public putClientSslTemplateCfg(value: SystemResourceAccountingTemplateListAppResourcesClientSslTemplateCfgA) {
    this._clientSslTemplateCfg.internalValue = value;
  }
  public resetClientSslTemplateCfg() {
    this._clientSslTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSslTemplateCfgInput() {
    return this._clientSslTemplateCfg.internalValue;
  }

  // conn_reuse_template_cfg - computed: false, optional: true, required: false
  private _connReuseTemplateCfg = new SystemResourceAccountingTemplateListAppResourcesConnReuseTemplateCfgAOutputReference(this, "conn_reuse_template_cfg");
  public get connReuseTemplateCfg() {
    return this._connReuseTemplateCfg;
  }
  public putConnReuseTemplateCfg(value: SystemResourceAccountingTemplateListAppResourcesConnReuseTemplateCfgA) {
    this._connReuseTemplateCfg.internalValue = value;
  }
  public resetConnReuseTemplateCfg() {
    this._connReuseTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connReuseTemplateCfgInput() {
    return this._connReuseTemplateCfg.internalValue;
  }

  // fast_tcp_template_cfg - computed: false, optional: true, required: false
  private _fastTcpTemplateCfg = new SystemResourceAccountingTemplateListAppResourcesFastTcpTemplateCfgAOutputReference(this, "fast_tcp_template_cfg");
  public get fastTcpTemplateCfg() {
    return this._fastTcpTemplateCfg;
  }
  public putFastTcpTemplateCfg(value: SystemResourceAccountingTemplateListAppResourcesFastTcpTemplateCfgA) {
    this._fastTcpTemplateCfg.internalValue = value;
  }
  public resetFastTcpTemplateCfg() {
    this._fastTcpTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastTcpTemplateCfgInput() {
    return this._fastTcpTemplateCfg.internalValue;
  }

  // fast_udp_template_cfg - computed: false, optional: true, required: false
  private _fastUdpTemplateCfg = new SystemResourceAccountingTemplateListAppResourcesFastUdpTemplateCfgAOutputReference(this, "fast_udp_template_cfg");
  public get fastUdpTemplateCfg() {
    return this._fastUdpTemplateCfg;
  }
  public putFastUdpTemplateCfg(value: SystemResourceAccountingTemplateListAppResourcesFastUdpTemplateCfgA) {
    this._fastUdpTemplateCfg.internalValue = value;
  }
  public resetFastUdpTemplateCfg() {
    this._fastUdpTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastUdpTemplateCfgInput() {
    return this._fastUdpTemplateCfg.internalValue;
  }

  // fix_template_cfg - computed: false, optional: true, required: false
  private _fixTemplateCfg = new SystemResourceAccountingTemplateListAppResourcesFixTemplateCfgAOutputReference(this, "fix_template_cfg");
  public get fixTemplateCfg() {
    return this._fixTemplateCfg;
  }
  public putFixTemplateCfg(value: SystemResourceAccountingTemplateListAppResourcesFixTemplateCfgA) {
    this._fixTemplateCfg.internalValue = value;
  }
  public resetFixTemplateCfg() {
    this._fixTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixTemplateCfgInput() {
    return this._fixTemplateCfg.internalValue;
  }

  // gslb_device_cfg - computed: false, optional: true, required: false
  private _gslbDeviceCfg = new SystemResourceAccountingTemplateListAppResourcesGslbDeviceCfgAOutputReference(this, "gslb_device_cfg");
  public get gslbDeviceCfg() {
    return this._gslbDeviceCfg;
  }
  public putGslbDeviceCfg(value: SystemResourceAccountingTemplateListAppResourcesGslbDeviceCfgA) {
    this._gslbDeviceCfg.internalValue = value;
  }
  public resetGslbDeviceCfg() {
    this._gslbDeviceCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbDeviceCfgInput() {
    return this._gslbDeviceCfg.internalValue;
  }

  // gslb_geo_location_cfg - computed: false, optional: true, required: false
  private _gslbGeoLocationCfg = new SystemResourceAccountingTemplateListAppResourcesGslbGeoLocationCfgAOutputReference(this, "gslb_geo_location_cfg");
  public get gslbGeoLocationCfg() {
    return this._gslbGeoLocationCfg;
  }
  public putGslbGeoLocationCfg(value: SystemResourceAccountingTemplateListAppResourcesGslbGeoLocationCfgA) {
    this._gslbGeoLocationCfg.internalValue = value;
  }
  public resetGslbGeoLocationCfg() {
    this._gslbGeoLocationCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbGeoLocationCfgInput() {
    return this._gslbGeoLocationCfg.internalValue;
  }

  // gslb_ip_list_cfg - computed: false, optional: true, required: false
  private _gslbIpListCfg = new SystemResourceAccountingTemplateListAppResourcesGslbIpListCfgAOutputReference(this, "gslb_ip_list_cfg");
  public get gslbIpListCfg() {
    return this._gslbIpListCfg;
  }
  public putGslbIpListCfg(value: SystemResourceAccountingTemplateListAppResourcesGslbIpListCfgA) {
    this._gslbIpListCfg.internalValue = value;
  }
  public resetGslbIpListCfg() {
    this._gslbIpListCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbIpListCfgInput() {
    return this._gslbIpListCfg.internalValue;
  }

  // gslb_policy_cfg - computed: false, optional: true, required: false
  private _gslbPolicyCfg = new SystemResourceAccountingTemplateListAppResourcesGslbPolicyCfgAOutputReference(this, "gslb_policy_cfg");
  public get gslbPolicyCfg() {
    return this._gslbPolicyCfg;
  }
  public putGslbPolicyCfg(value: SystemResourceAccountingTemplateListAppResourcesGslbPolicyCfgA) {
    this._gslbPolicyCfg.internalValue = value;
  }
  public resetGslbPolicyCfg() {
    this._gslbPolicyCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbPolicyCfgInput() {
    return this._gslbPolicyCfg.internalValue;
  }

  // gslb_service_cfg - computed: false, optional: true, required: false
  private _gslbServiceCfg = new SystemResourceAccountingTemplateListAppResourcesGslbServiceCfgAOutputReference(this, "gslb_service_cfg");
  public get gslbServiceCfg() {
    return this._gslbServiceCfg;
  }
  public putGslbServiceCfg(value: SystemResourceAccountingTemplateListAppResourcesGslbServiceCfgA) {
    this._gslbServiceCfg.internalValue = value;
  }
  public resetGslbServiceCfg() {
    this._gslbServiceCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServiceCfgInput() {
    return this._gslbServiceCfg.internalValue;
  }

  // gslb_service_ip_cfg - computed: false, optional: true, required: false
  private _gslbServiceIpCfg = new SystemResourceAccountingTemplateListAppResourcesGslbServiceIpCfgAOutputReference(this, "gslb_service_ip_cfg");
  public get gslbServiceIpCfg() {
    return this._gslbServiceIpCfg;
  }
  public putGslbServiceIpCfg(value: SystemResourceAccountingTemplateListAppResourcesGslbServiceIpCfgA) {
    this._gslbServiceIpCfg.internalValue = value;
  }
  public resetGslbServiceIpCfg() {
    this._gslbServiceIpCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServiceIpCfgInput() {
    return this._gslbServiceIpCfg.internalValue;
  }

  // gslb_service_port_cfg - computed: false, optional: true, required: false
  private _gslbServicePortCfg = new SystemResourceAccountingTemplateListAppResourcesGslbServicePortCfgAOutputReference(this, "gslb_service_port_cfg");
  public get gslbServicePortCfg() {
    return this._gslbServicePortCfg;
  }
  public putGslbServicePortCfg(value: SystemResourceAccountingTemplateListAppResourcesGslbServicePortCfgA) {
    this._gslbServicePortCfg.internalValue = value;
  }
  public resetGslbServicePortCfg() {
    this._gslbServicePortCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServicePortCfgInput() {
    return this._gslbServicePortCfg.internalValue;
  }

  // gslb_site_cfg - computed: false, optional: true, required: false
  private _gslbSiteCfg = new SystemResourceAccountingTemplateListAppResourcesGslbSiteCfgAOutputReference(this, "gslb_site_cfg");
  public get gslbSiteCfg() {
    return this._gslbSiteCfg;
  }
  public putGslbSiteCfg(value: SystemResourceAccountingTemplateListAppResourcesGslbSiteCfgA) {
    this._gslbSiteCfg.internalValue = value;
  }
  public resetGslbSiteCfg() {
    this._gslbSiteCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSiteCfgInput() {
    return this._gslbSiteCfg.internalValue;
  }

  // gslb_svc_group_cfg - computed: false, optional: true, required: false
  private _gslbSvcGroupCfg = new SystemResourceAccountingTemplateListAppResourcesGslbSvcGroupCfgAOutputReference(this, "gslb_svc_group_cfg");
  public get gslbSvcGroupCfg() {
    return this._gslbSvcGroupCfg;
  }
  public putGslbSvcGroupCfg(value: SystemResourceAccountingTemplateListAppResourcesGslbSvcGroupCfgA) {
    this._gslbSvcGroupCfg.internalValue = value;
  }
  public resetGslbSvcGroupCfg() {
    this._gslbSvcGroupCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSvcGroupCfgInput() {
    return this._gslbSvcGroupCfg.internalValue;
  }

  // gslb_template_cfg - computed: false, optional: true, required: false
  private _gslbTemplateCfg = new SystemResourceAccountingTemplateListAppResourcesGslbTemplateCfgAOutputReference(this, "gslb_template_cfg");
  public get gslbTemplateCfg() {
    return this._gslbTemplateCfg;
  }
  public putGslbTemplateCfg(value: SystemResourceAccountingTemplateListAppResourcesGslbTemplateCfgA) {
    this._gslbTemplateCfg.internalValue = value;
  }
  public resetGslbTemplateCfg() {
    this._gslbTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbTemplateCfgInput() {
    return this._gslbTemplateCfg.internalValue;
  }

  // gslb_zone_cfg - computed: false, optional: true, required: false
  private _gslbZoneCfg = new SystemResourceAccountingTemplateListAppResourcesGslbZoneCfgAOutputReference(this, "gslb_zone_cfg");
  public get gslbZoneCfg() {
    return this._gslbZoneCfg;
  }
  public putGslbZoneCfg(value: SystemResourceAccountingTemplateListAppResourcesGslbZoneCfgA) {
    this._gslbZoneCfg.internalValue = value;
  }
  public resetGslbZoneCfg() {
    this._gslbZoneCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbZoneCfgInput() {
    return this._gslbZoneCfg.internalValue;
  }

  // health_monitor_cfg - computed: false, optional: true, required: false
  private _healthMonitorCfg = new SystemResourceAccountingTemplateListAppResourcesHealthMonitorCfgAOutputReference(this, "health_monitor_cfg");
  public get healthMonitorCfg() {
    return this._healthMonitorCfg;
  }
  public putHealthMonitorCfg(value: SystemResourceAccountingTemplateListAppResourcesHealthMonitorCfgA) {
    this._healthMonitorCfg.internalValue = value;
  }
  public resetHealthMonitorCfg() {
    this._healthMonitorCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMonitorCfgInput() {
    return this._healthMonitorCfg.internalValue;
  }

  // http_template_cfg - computed: false, optional: true, required: false
  private _httpTemplateCfg = new SystemResourceAccountingTemplateListAppResourcesHttpTemplateCfgAOutputReference(this, "http_template_cfg");
  public get httpTemplateCfg() {
    return this._httpTemplateCfg;
  }
  public putHttpTemplateCfg(value: SystemResourceAccountingTemplateListAppResourcesHttpTemplateCfgA) {
    this._httpTemplateCfg.internalValue = value;
  }
  public resetHttpTemplateCfg() {
    this._httpTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTemplateCfgInput() {
    return this._httpTemplateCfg.internalValue;
  }

  // link_cost_template_cfg - computed: false, optional: true, required: false
  private _linkCostTemplateCfg = new SystemResourceAccountingTemplateListAppResourcesLinkCostTemplateCfgAOutputReference(this, "link_cost_template_cfg");
  public get linkCostTemplateCfg() {
    return this._linkCostTemplateCfg;
  }
  public putLinkCostTemplateCfg(value: SystemResourceAccountingTemplateListAppResourcesLinkCostTemplateCfgA) {
    this._linkCostTemplateCfg.internalValue = value;
  }
  public resetLinkCostTemplateCfg() {
    this._linkCostTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkCostTemplateCfgInput() {
    return this._linkCostTemplateCfg.internalValue;
  }

  // pbslb_entry_cfg - computed: false, optional: true, required: false
  private _pbslbEntryCfg = new SystemResourceAccountingTemplateListAppResourcesPbslbEntryCfgAOutputReference(this, "pbslb_entry_cfg");
  public get pbslbEntryCfg() {
    return this._pbslbEntryCfg;
  }
  public putPbslbEntryCfg(value: SystemResourceAccountingTemplateListAppResourcesPbslbEntryCfgA) {
    this._pbslbEntryCfg.internalValue = value;
  }
  public resetPbslbEntryCfg() {
    this._pbslbEntryCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbslbEntryCfgInput() {
    return this._pbslbEntryCfg.internalValue;
  }

  // persist_cookie_template_cfg - computed: false, optional: true, required: false
  private _persistCookieTemplateCfg = new SystemResourceAccountingTemplateListAppResourcesPersistCookieTemplateCfgAOutputReference(this, "persist_cookie_template_cfg");
  public get persistCookieTemplateCfg() {
    return this._persistCookieTemplateCfg;
  }
  public putPersistCookieTemplateCfg(value: SystemResourceAccountingTemplateListAppResourcesPersistCookieTemplateCfgA) {
    this._persistCookieTemplateCfg.internalValue = value;
  }
  public resetPersistCookieTemplateCfg() {
    this._persistCookieTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistCookieTemplateCfgInput() {
    return this._persistCookieTemplateCfg.internalValue;
  }

  // persist_srcip_template_cfg - computed: false, optional: true, required: false
  private _persistSrcipTemplateCfg = new SystemResourceAccountingTemplateListAppResourcesPersistSrcipTemplateCfgAOutputReference(this, "persist_srcip_template_cfg");
  public get persistSrcipTemplateCfg() {
    return this._persistSrcipTemplateCfg;
  }
  public putPersistSrcipTemplateCfg(value: SystemResourceAccountingTemplateListAppResourcesPersistSrcipTemplateCfgA) {
    this._persistSrcipTemplateCfg.internalValue = value;
  }
  public resetPersistSrcipTemplateCfg() {
    this._persistSrcipTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistSrcipTemplateCfgInput() {
    return this._persistSrcipTemplateCfg.internalValue;
  }

  // proxy_template_cfg - computed: false, optional: true, required: false
  private _proxyTemplateCfg = new SystemResourceAccountingTemplateListAppResourcesProxyTemplateCfgAOutputReference(this, "proxy_template_cfg");
  public get proxyTemplateCfg() {
    return this._proxyTemplateCfg;
  }
  public putProxyTemplateCfg(value: SystemResourceAccountingTemplateListAppResourcesProxyTemplateCfgA) {
    this._proxyTemplateCfg.internalValue = value;
  }
  public resetProxyTemplateCfg() {
    this._proxyTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTemplateCfgInput() {
    return this._proxyTemplateCfg.internalValue;
  }

  // real_port_cfg - computed: false, optional: true, required: false
  private _realPortCfg = new SystemResourceAccountingTemplateListAppResourcesRealPortCfgAOutputReference(this, "real_port_cfg");
  public get realPortCfg() {
    return this._realPortCfg;
  }
  public putRealPortCfg(value: SystemResourceAccountingTemplateListAppResourcesRealPortCfgA) {
    this._realPortCfg.internalValue = value;
  }
  public resetRealPortCfg() {
    this._realPortCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realPortCfgInput() {
    return this._realPortCfg.internalValue;
  }

  // real_server_cfg - computed: false, optional: true, required: false
  private _realServerCfg = new SystemResourceAccountingTemplateListAppResourcesRealServerCfgAOutputReference(this, "real_server_cfg");
  public get realServerCfg() {
    return this._realServerCfg;
  }
  public putRealServerCfg(value: SystemResourceAccountingTemplateListAppResourcesRealServerCfgA) {
    this._realServerCfg.internalValue = value;
  }
  public resetRealServerCfg() {
    this._realServerCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realServerCfgInput() {
    return this._realServerCfg.internalValue;
  }

  // server_ssl_template_cfg - computed: false, optional: true, required: false
  private _serverSslTemplateCfg = new SystemResourceAccountingTemplateListAppResourcesServerSslTemplateCfgAOutputReference(this, "server_ssl_template_cfg");
  public get serverSslTemplateCfg() {
    return this._serverSslTemplateCfg;
  }
  public putServerSslTemplateCfg(value: SystemResourceAccountingTemplateListAppResourcesServerSslTemplateCfgA) {
    this._serverSslTemplateCfg.internalValue = value;
  }
  public resetServerSslTemplateCfg() {
    this._serverSslTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSslTemplateCfgInput() {
    return this._serverSslTemplateCfg.internalValue;
  }

  // service_group_cfg - computed: false, optional: true, required: false
  private _serviceGroupCfg = new SystemResourceAccountingTemplateListAppResourcesServiceGroupCfgAOutputReference(this, "service_group_cfg");
  public get serviceGroupCfg() {
    return this._serviceGroupCfg;
  }
  public putServiceGroupCfg(value: SystemResourceAccountingTemplateListAppResourcesServiceGroupCfgA) {
    this._serviceGroupCfg.internalValue = value;
  }
  public resetServiceGroupCfg() {
    this._serviceGroupCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupCfgInput() {
    return this._serviceGroupCfg.internalValue;
  }

  // stream_template_cfg - computed: false, optional: true, required: false
  private _streamTemplateCfg = new SystemResourceAccountingTemplateListAppResourcesStreamTemplateCfgAOutputReference(this, "stream_template_cfg");
  public get streamTemplateCfg() {
    return this._streamTemplateCfg;
  }
  public putStreamTemplateCfg(value: SystemResourceAccountingTemplateListAppResourcesStreamTemplateCfgA) {
    this._streamTemplateCfg.internalValue = value;
  }
  public resetStreamTemplateCfg() {
    this._streamTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamTemplateCfgInput() {
    return this._streamTemplateCfg.internalValue;
  }

  // virtual_port_cfg - computed: false, optional: true, required: false
  private _virtualPortCfg = new SystemResourceAccountingTemplateListAppResourcesVirtualPortCfgAOutputReference(this, "virtual_port_cfg");
  public get virtualPortCfg() {
    return this._virtualPortCfg;
  }
  public putVirtualPortCfg(value: SystemResourceAccountingTemplateListAppResourcesVirtualPortCfgA) {
    this._virtualPortCfg.internalValue = value;
  }
  public resetVirtualPortCfg() {
    this._virtualPortCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPortCfgInput() {
    return this._virtualPortCfg.internalValue;
  }

  // virtual_server_cfg - computed: false, optional: true, required: false
  private _virtualServerCfg = new SystemResourceAccountingTemplateListAppResourcesVirtualServerCfgAOutputReference(this, "virtual_server_cfg");
  public get virtualServerCfg() {
    return this._virtualServerCfg;
  }
  public putVirtualServerCfg(value: SystemResourceAccountingTemplateListAppResourcesVirtualServerCfgA) {
    this._virtualServerCfg.internalValue = value;
  }
  public resetVirtualServerCfg() {
    this._virtualServerCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerCfgInput() {
    return this._virtualServerCfg.internalValue;
  }
}
export interface SystemResourceAccountingTemplateListNetworkResourcesIpv4AclLineCfgA {
  /**
  * Enter the number of ACL lines allowed (IPV4 ACL lines (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#ipv4_acl_line_max SystemResourceAccountingA#ipv4_acl_line_max}
  */
  readonly ipv4AclLineMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#ipv4_acl_line_min_guarantee SystemResourceAccountingA#ipv4_acl_line_min_guarantee}
  */
  readonly ipv4AclLineMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListNetworkResourcesIpv4AclLineCfgAToTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesIpv4AclLineCfgAOutputReference | SystemResourceAccountingTemplateListNetworkResourcesIpv4AclLineCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_acl_line_max: cdktf.numberToTerraform(struct!.ipv4AclLineMax),
    ipv4_acl_line_min_guarantee: cdktf.numberToTerraform(struct!.ipv4AclLineMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListNetworkResourcesIpv4AclLineCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesIpv4AclLineCfgAOutputReference | SystemResourceAccountingTemplateListNetworkResourcesIpv4AclLineCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_acl_line_max: {
      value: cdktf.numberToHclTerraform(struct!.ipv4AclLineMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_acl_line_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.ipv4AclLineMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListNetworkResourcesIpv4AclLineCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListNetworkResourcesIpv4AclLineCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4AclLineMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AclLineMax = this._ipv4AclLineMax;
    }
    if (this._ipv4AclLineMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AclLineMinGuarantee = this._ipv4AclLineMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListNetworkResourcesIpv4AclLineCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4AclLineMax = undefined;
      this._ipv4AclLineMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4AclLineMax = value.ipv4AclLineMax;
      this._ipv4AclLineMinGuarantee = value.ipv4AclLineMinGuarantee;
    }
  }

  // ipv4_acl_line_max - computed: false, optional: true, required: false
  private _ipv4AclLineMax?: number; 
  public get ipv4AclLineMax() {
    return this.getNumberAttribute('ipv4_acl_line_max');
  }
  public set ipv4AclLineMax(value: number) {
    this._ipv4AclLineMax = value;
  }
  public resetIpv4AclLineMax() {
    this._ipv4AclLineMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AclLineMaxInput() {
    return this._ipv4AclLineMax;
  }

  // ipv4_acl_line_min_guarantee - computed: false, optional: true, required: false
  private _ipv4AclLineMinGuarantee?: number; 
  public get ipv4AclLineMinGuarantee() {
    return this.getNumberAttribute('ipv4_acl_line_min_guarantee');
  }
  public set ipv4AclLineMinGuarantee(value: number) {
    this._ipv4AclLineMinGuarantee = value;
  }
  public resetIpv4AclLineMinGuarantee() {
    this._ipv4AclLineMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AclLineMinGuaranteeInput() {
    return this._ipv4AclLineMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListNetworkResourcesIpv6AclLineCfgA {
  /**
  * Enter the number of ACL lines allowed (IPV6 ACL lines (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#ipv6_acl_line_max SystemResourceAccountingA#ipv6_acl_line_max}
  */
  readonly ipv6AclLineMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#ipv6_acl_line_min_guarantee SystemResourceAccountingA#ipv6_acl_line_min_guarantee}
  */
  readonly ipv6AclLineMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListNetworkResourcesIpv6AclLineCfgAToTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesIpv6AclLineCfgAOutputReference | SystemResourceAccountingTemplateListNetworkResourcesIpv6AclLineCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_acl_line_max: cdktf.numberToTerraform(struct!.ipv6AclLineMax),
    ipv6_acl_line_min_guarantee: cdktf.numberToTerraform(struct!.ipv6AclLineMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListNetworkResourcesIpv6AclLineCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesIpv6AclLineCfgAOutputReference | SystemResourceAccountingTemplateListNetworkResourcesIpv6AclLineCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_acl_line_max: {
      value: cdktf.numberToHclTerraform(struct!.ipv6AclLineMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_acl_line_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.ipv6AclLineMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListNetworkResourcesIpv6AclLineCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListNetworkResourcesIpv6AclLineCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6AclLineMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AclLineMax = this._ipv6AclLineMax;
    }
    if (this._ipv6AclLineMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AclLineMinGuarantee = this._ipv6AclLineMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListNetworkResourcesIpv6AclLineCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6AclLineMax = undefined;
      this._ipv6AclLineMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6AclLineMax = value.ipv6AclLineMax;
      this._ipv6AclLineMinGuarantee = value.ipv6AclLineMinGuarantee;
    }
  }

  // ipv6_acl_line_max - computed: false, optional: true, required: false
  private _ipv6AclLineMax?: number; 
  public get ipv6AclLineMax() {
    return this.getNumberAttribute('ipv6_acl_line_max');
  }
  public set ipv6AclLineMax(value: number) {
    this._ipv6AclLineMax = value;
  }
  public resetIpv6AclLineMax() {
    this._ipv6AclLineMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AclLineMaxInput() {
    return this._ipv6AclLineMax;
  }

  // ipv6_acl_line_min_guarantee - computed: false, optional: true, required: false
  private _ipv6AclLineMinGuarantee?: number; 
  public get ipv6AclLineMinGuarantee() {
    return this.getNumberAttribute('ipv6_acl_line_min_guarantee');
  }
  public set ipv6AclLineMinGuarantee(value: number) {
    this._ipv6AclLineMinGuarantee = value;
  }
  public resetIpv6AclLineMinGuarantee() {
    this._ipv6AclLineMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AclLineMinGuaranteeInput() {
    return this._ipv6AclLineMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListNetworkResourcesObjectGroupCfgA {
  /**
  * Enter the number of object groups allowed (Object group (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#object_group_max SystemResourceAccountingA#object_group_max}
  */
  readonly objectGroupMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#object_group_min_guarantee SystemResourceAccountingA#object_group_min_guarantee}
  */
  readonly objectGroupMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListNetworkResourcesObjectGroupCfgAToTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesObjectGroupCfgAOutputReference | SystemResourceAccountingTemplateListNetworkResourcesObjectGroupCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_group_max: cdktf.numberToTerraform(struct!.objectGroupMax),
    object_group_min_guarantee: cdktf.numberToTerraform(struct!.objectGroupMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListNetworkResourcesObjectGroupCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesObjectGroupCfgAOutputReference | SystemResourceAccountingTemplateListNetworkResourcesObjectGroupCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_group_max: {
      value: cdktf.numberToHclTerraform(struct!.objectGroupMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_group_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.objectGroupMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListNetworkResourcesObjectGroupCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListNetworkResourcesObjectGroupCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectGroupMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectGroupMax = this._objectGroupMax;
    }
    if (this._objectGroupMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectGroupMinGuarantee = this._objectGroupMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListNetworkResourcesObjectGroupCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objectGroupMax = undefined;
      this._objectGroupMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objectGroupMax = value.objectGroupMax;
      this._objectGroupMinGuarantee = value.objectGroupMinGuarantee;
    }
  }

  // object_group_max - computed: false, optional: true, required: false
  private _objectGroupMax?: number; 
  public get objectGroupMax() {
    return this.getNumberAttribute('object_group_max');
  }
  public set objectGroupMax(value: number) {
    this._objectGroupMax = value;
  }
  public resetObjectGroupMax() {
    this._objectGroupMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectGroupMaxInput() {
    return this._objectGroupMax;
  }

  // object_group_min_guarantee - computed: false, optional: true, required: false
  private _objectGroupMinGuarantee?: number; 
  public get objectGroupMinGuarantee() {
    return this.getNumberAttribute('object_group_min_guarantee');
  }
  public set objectGroupMinGuarantee(value: number) {
    this._objectGroupMinGuarantee = value;
  }
  public resetObjectGroupMinGuarantee() {
    this._objectGroupMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectGroupMinGuaranteeInput() {
    return this._objectGroupMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListNetworkResourcesObjectGroupClauseCfgA {
  /**
  * Enter the number of object group clauses allowed (Object group clauses (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#object_group_clause_max SystemResourceAccountingA#object_group_clause_max}
  */
  readonly objectGroupClauseMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#object_group_clause_min_guarantee SystemResourceAccountingA#object_group_clause_min_guarantee}
  */
  readonly objectGroupClauseMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListNetworkResourcesObjectGroupClauseCfgAToTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesObjectGroupClauseCfgAOutputReference | SystemResourceAccountingTemplateListNetworkResourcesObjectGroupClauseCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_group_clause_max: cdktf.numberToTerraform(struct!.objectGroupClauseMax),
    object_group_clause_min_guarantee: cdktf.numberToTerraform(struct!.objectGroupClauseMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListNetworkResourcesObjectGroupClauseCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesObjectGroupClauseCfgAOutputReference | SystemResourceAccountingTemplateListNetworkResourcesObjectGroupClauseCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_group_clause_max: {
      value: cdktf.numberToHclTerraform(struct!.objectGroupClauseMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_group_clause_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.objectGroupClauseMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListNetworkResourcesObjectGroupClauseCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListNetworkResourcesObjectGroupClauseCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectGroupClauseMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectGroupClauseMax = this._objectGroupClauseMax;
    }
    if (this._objectGroupClauseMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectGroupClauseMinGuarantee = this._objectGroupClauseMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListNetworkResourcesObjectGroupClauseCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objectGroupClauseMax = undefined;
      this._objectGroupClauseMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objectGroupClauseMax = value.objectGroupClauseMax;
      this._objectGroupClauseMinGuarantee = value.objectGroupClauseMinGuarantee;
    }
  }

  // object_group_clause_max - computed: false, optional: true, required: false
  private _objectGroupClauseMax?: number; 
  public get objectGroupClauseMax() {
    return this.getNumberAttribute('object_group_clause_max');
  }
  public set objectGroupClauseMax(value: number) {
    this._objectGroupClauseMax = value;
  }
  public resetObjectGroupClauseMax() {
    this._objectGroupClauseMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectGroupClauseMaxInput() {
    return this._objectGroupClauseMax;
  }

  // object_group_clause_min_guarantee - computed: false, optional: true, required: false
  private _objectGroupClauseMinGuarantee?: number; 
  public get objectGroupClauseMinGuarantee() {
    return this.getNumberAttribute('object_group_clause_min_guarantee');
  }
  public set objectGroupClauseMinGuarantee(value: number) {
    this._objectGroupClauseMinGuarantee = value;
  }
  public resetObjectGroupClauseMinGuarantee() {
    this._objectGroupClauseMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectGroupClauseMinGuaranteeInput() {
    return this._objectGroupClauseMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListNetworkResourcesStaticArpCfgA {
  /**
  * Enter the number of static arp entries allowed (Static arp (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#static_arp_max SystemResourceAccountingA#static_arp_max}
  */
  readonly staticArpMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#static_arp_min_guarantee SystemResourceAccountingA#static_arp_min_guarantee}
  */
  readonly staticArpMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListNetworkResourcesStaticArpCfgAToTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesStaticArpCfgAOutputReference | SystemResourceAccountingTemplateListNetworkResourcesStaticArpCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_arp_max: cdktf.numberToTerraform(struct!.staticArpMax),
    static_arp_min_guarantee: cdktf.numberToTerraform(struct!.staticArpMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListNetworkResourcesStaticArpCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesStaticArpCfgAOutputReference | SystemResourceAccountingTemplateListNetworkResourcesStaticArpCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_arp_max: {
      value: cdktf.numberToHclTerraform(struct!.staticArpMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_arp_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.staticArpMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListNetworkResourcesStaticArpCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListNetworkResourcesStaticArpCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticArpMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticArpMax = this._staticArpMax;
    }
    if (this._staticArpMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticArpMinGuarantee = this._staticArpMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListNetworkResourcesStaticArpCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticArpMax = undefined;
      this._staticArpMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticArpMax = value.staticArpMax;
      this._staticArpMinGuarantee = value.staticArpMinGuarantee;
    }
  }

  // static_arp_max - computed: false, optional: true, required: false
  private _staticArpMax?: number; 
  public get staticArpMax() {
    return this.getNumberAttribute('static_arp_max');
  }
  public set staticArpMax(value: number) {
    this._staticArpMax = value;
  }
  public resetStaticArpMax() {
    this._staticArpMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticArpMaxInput() {
    return this._staticArpMax;
  }

  // static_arp_min_guarantee - computed: false, optional: true, required: false
  private _staticArpMinGuarantee?: number; 
  public get staticArpMinGuarantee() {
    return this.getNumberAttribute('static_arp_min_guarantee');
  }
  public set staticArpMinGuarantee(value: number) {
    this._staticArpMinGuarantee = value;
  }
  public resetStaticArpMinGuarantee() {
    this._staticArpMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticArpMinGuaranteeInput() {
    return this._staticArpMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListNetworkResourcesStaticIpv4RouteCfgA {
  /**
  * Enter the number of static ipv4 routes allowed (Static ipv4 routes (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#static_ipv4_route_max SystemResourceAccountingA#static_ipv4_route_max}
  */
  readonly staticIpv4RouteMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#static_ipv4_route_min_guarantee SystemResourceAccountingA#static_ipv4_route_min_guarantee}
  */
  readonly staticIpv4RouteMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListNetworkResourcesStaticIpv4RouteCfgAToTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesStaticIpv4RouteCfgAOutputReference | SystemResourceAccountingTemplateListNetworkResourcesStaticIpv4RouteCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_ipv4_route_max: cdktf.numberToTerraform(struct!.staticIpv4RouteMax),
    static_ipv4_route_min_guarantee: cdktf.numberToTerraform(struct!.staticIpv4RouteMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListNetworkResourcesStaticIpv4RouteCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesStaticIpv4RouteCfgAOutputReference | SystemResourceAccountingTemplateListNetworkResourcesStaticIpv4RouteCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_ipv4_route_max: {
      value: cdktf.numberToHclTerraform(struct!.staticIpv4RouteMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_ipv4_route_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.staticIpv4RouteMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListNetworkResourcesStaticIpv4RouteCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListNetworkResourcesStaticIpv4RouteCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticIpv4RouteMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv4RouteMax = this._staticIpv4RouteMax;
    }
    if (this._staticIpv4RouteMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv4RouteMinGuarantee = this._staticIpv4RouteMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListNetworkResourcesStaticIpv4RouteCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticIpv4RouteMax = undefined;
      this._staticIpv4RouteMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticIpv4RouteMax = value.staticIpv4RouteMax;
      this._staticIpv4RouteMinGuarantee = value.staticIpv4RouteMinGuarantee;
    }
  }

  // static_ipv4_route_max - computed: false, optional: true, required: false
  private _staticIpv4RouteMax?: number; 
  public get staticIpv4RouteMax() {
    return this.getNumberAttribute('static_ipv4_route_max');
  }
  public set staticIpv4RouteMax(value: number) {
    this._staticIpv4RouteMax = value;
  }
  public resetStaticIpv4RouteMax() {
    this._staticIpv4RouteMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv4RouteMaxInput() {
    return this._staticIpv4RouteMax;
  }

  // static_ipv4_route_min_guarantee - computed: false, optional: true, required: false
  private _staticIpv4RouteMinGuarantee?: number; 
  public get staticIpv4RouteMinGuarantee() {
    return this.getNumberAttribute('static_ipv4_route_min_guarantee');
  }
  public set staticIpv4RouteMinGuarantee(value: number) {
    this._staticIpv4RouteMinGuarantee = value;
  }
  public resetStaticIpv4RouteMinGuarantee() {
    this._staticIpv4RouteMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv4RouteMinGuaranteeInput() {
    return this._staticIpv4RouteMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListNetworkResourcesStaticIpv6RouteCfgA {
  /**
  * Enter the number of static ipv6 routes allowed (Static ipv6 routes (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#static_ipv6_route_max SystemResourceAccountingA#static_ipv6_route_max}
  */
  readonly staticIpv6RouteMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#static_ipv6_route_min_guarantee SystemResourceAccountingA#static_ipv6_route_min_guarantee}
  */
  readonly staticIpv6RouteMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListNetworkResourcesStaticIpv6RouteCfgAToTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesStaticIpv6RouteCfgAOutputReference | SystemResourceAccountingTemplateListNetworkResourcesStaticIpv6RouteCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_ipv6_route_max: cdktf.numberToTerraform(struct!.staticIpv6RouteMax),
    static_ipv6_route_min_guarantee: cdktf.numberToTerraform(struct!.staticIpv6RouteMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListNetworkResourcesStaticIpv6RouteCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesStaticIpv6RouteCfgAOutputReference | SystemResourceAccountingTemplateListNetworkResourcesStaticIpv6RouteCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_ipv6_route_max: {
      value: cdktf.numberToHclTerraform(struct!.staticIpv6RouteMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_ipv6_route_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.staticIpv6RouteMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListNetworkResourcesStaticIpv6RouteCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListNetworkResourcesStaticIpv6RouteCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticIpv6RouteMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv6RouteMax = this._staticIpv6RouteMax;
    }
    if (this._staticIpv6RouteMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv6RouteMinGuarantee = this._staticIpv6RouteMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListNetworkResourcesStaticIpv6RouteCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticIpv6RouteMax = undefined;
      this._staticIpv6RouteMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticIpv6RouteMax = value.staticIpv6RouteMax;
      this._staticIpv6RouteMinGuarantee = value.staticIpv6RouteMinGuarantee;
    }
  }

  // static_ipv6_route_max - computed: false, optional: true, required: false
  private _staticIpv6RouteMax?: number; 
  public get staticIpv6RouteMax() {
    return this.getNumberAttribute('static_ipv6_route_max');
  }
  public set staticIpv6RouteMax(value: number) {
    this._staticIpv6RouteMax = value;
  }
  public resetStaticIpv6RouteMax() {
    this._staticIpv6RouteMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv6RouteMaxInput() {
    return this._staticIpv6RouteMax;
  }

  // static_ipv6_route_min_guarantee - computed: false, optional: true, required: false
  private _staticIpv6RouteMinGuarantee?: number; 
  public get staticIpv6RouteMinGuarantee() {
    return this.getNumberAttribute('static_ipv6_route_min_guarantee');
  }
  public set staticIpv6RouteMinGuarantee(value: number) {
    this._staticIpv6RouteMinGuarantee = value;
  }
  public resetStaticIpv6RouteMinGuarantee() {
    this._staticIpv6RouteMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv6RouteMinGuaranteeInput() {
    return this._staticIpv6RouteMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListNetworkResourcesStaticMacCfgA {
  /**
  * Enter the number of static MAC entries allowed (Static MACs (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#static_mac_max SystemResourceAccountingA#static_mac_max}
  */
  readonly staticMacMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#static_mac_min_guarantee SystemResourceAccountingA#static_mac_min_guarantee}
  */
  readonly staticMacMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListNetworkResourcesStaticMacCfgAToTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesStaticMacCfgAOutputReference | SystemResourceAccountingTemplateListNetworkResourcesStaticMacCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_mac_max: cdktf.numberToTerraform(struct!.staticMacMax),
    static_mac_min_guarantee: cdktf.numberToTerraform(struct!.staticMacMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListNetworkResourcesStaticMacCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesStaticMacCfgAOutputReference | SystemResourceAccountingTemplateListNetworkResourcesStaticMacCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_mac_max: {
      value: cdktf.numberToHclTerraform(struct!.staticMacMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_mac_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.staticMacMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListNetworkResourcesStaticMacCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListNetworkResourcesStaticMacCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticMacMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticMacMax = this._staticMacMax;
    }
    if (this._staticMacMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticMacMinGuarantee = this._staticMacMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListNetworkResourcesStaticMacCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticMacMax = undefined;
      this._staticMacMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticMacMax = value.staticMacMax;
      this._staticMacMinGuarantee = value.staticMacMinGuarantee;
    }
  }

  // static_mac_max - computed: false, optional: true, required: false
  private _staticMacMax?: number; 
  public get staticMacMax() {
    return this.getNumberAttribute('static_mac_max');
  }
  public set staticMacMax(value: number) {
    this._staticMacMax = value;
  }
  public resetStaticMacMax() {
    this._staticMacMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticMacMaxInput() {
    return this._staticMacMax;
  }

  // static_mac_min_guarantee - computed: false, optional: true, required: false
  private _staticMacMinGuarantee?: number; 
  public get staticMacMinGuarantee() {
    return this.getNumberAttribute('static_mac_min_guarantee');
  }
  public set staticMacMinGuarantee(value: number) {
    this._staticMacMinGuarantee = value;
  }
  public resetStaticMacMinGuarantee() {
    this._staticMacMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticMacMinGuaranteeInput() {
    return this._staticMacMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListNetworkResourcesStaticNeighborCfgA {
  /**
  * Enter the number of static neighbor entries allowed (Static neighbors (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#static_neighbor_max SystemResourceAccountingA#static_neighbor_max}
  */
  readonly staticNeighborMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#static_neighbor_min_guarantee SystemResourceAccountingA#static_neighbor_min_guarantee}
  */
  readonly staticNeighborMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListNetworkResourcesStaticNeighborCfgAToTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesStaticNeighborCfgAOutputReference | SystemResourceAccountingTemplateListNetworkResourcesStaticNeighborCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_neighbor_max: cdktf.numberToTerraform(struct!.staticNeighborMax),
    static_neighbor_min_guarantee: cdktf.numberToTerraform(struct!.staticNeighborMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListNetworkResourcesStaticNeighborCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesStaticNeighborCfgAOutputReference | SystemResourceAccountingTemplateListNetworkResourcesStaticNeighborCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_neighbor_max: {
      value: cdktf.numberToHclTerraform(struct!.staticNeighborMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_neighbor_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.staticNeighborMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListNetworkResourcesStaticNeighborCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListNetworkResourcesStaticNeighborCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticNeighborMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticNeighborMax = this._staticNeighborMax;
    }
    if (this._staticNeighborMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticNeighborMinGuarantee = this._staticNeighborMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListNetworkResourcesStaticNeighborCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticNeighborMax = undefined;
      this._staticNeighborMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticNeighborMax = value.staticNeighborMax;
      this._staticNeighborMinGuarantee = value.staticNeighborMinGuarantee;
    }
  }

  // static_neighbor_max - computed: false, optional: true, required: false
  private _staticNeighborMax?: number; 
  public get staticNeighborMax() {
    return this.getNumberAttribute('static_neighbor_max');
  }
  public set staticNeighborMax(value: number) {
    this._staticNeighborMax = value;
  }
  public resetStaticNeighborMax() {
    this._staticNeighborMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNeighborMaxInput() {
    return this._staticNeighborMax;
  }

  // static_neighbor_min_guarantee - computed: false, optional: true, required: false
  private _staticNeighborMinGuarantee?: number; 
  public get staticNeighborMinGuarantee() {
    return this.getNumberAttribute('static_neighbor_min_guarantee');
  }
  public set staticNeighborMinGuarantee(value: number) {
    this._staticNeighborMinGuarantee = value;
  }
  public resetStaticNeighborMinGuarantee() {
    this._staticNeighborMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNeighborMinGuaranteeInput() {
    return this._staticNeighborMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListNetworkResourcesA {
  /**
  * Enter the threshold as a percentage (Threshold in percentage(default is 100%))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#threshold SystemResourceAccountingA#threshold}
  */
  readonly threshold?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#uuid SystemResourceAccountingA#uuid}
  */
  readonly uuid?: string;
  /**
  * ipv4_acl_line_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#ipv4_acl_line_cfg SystemResourceAccountingA#ipv4_acl_line_cfg}
  */
  readonly ipv4AclLineCfg?: SystemResourceAccountingTemplateListNetworkResourcesIpv4AclLineCfgA;
  /**
  * ipv6_acl_line_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#ipv6_acl_line_cfg SystemResourceAccountingA#ipv6_acl_line_cfg}
  */
  readonly ipv6AclLineCfg?: SystemResourceAccountingTemplateListNetworkResourcesIpv6AclLineCfgA;
  /**
  * object_group_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#object_group_cfg SystemResourceAccountingA#object_group_cfg}
  */
  readonly objectGroupCfg?: SystemResourceAccountingTemplateListNetworkResourcesObjectGroupCfgA;
  /**
  * object_group_clause_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#object_group_clause_cfg SystemResourceAccountingA#object_group_clause_cfg}
  */
  readonly objectGroupClauseCfg?: SystemResourceAccountingTemplateListNetworkResourcesObjectGroupClauseCfgA;
  /**
  * static_arp_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#static_arp_cfg SystemResourceAccountingA#static_arp_cfg}
  */
  readonly staticArpCfg?: SystemResourceAccountingTemplateListNetworkResourcesStaticArpCfgA;
  /**
  * static_ipv4_route_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#static_ipv4_route_cfg SystemResourceAccountingA#static_ipv4_route_cfg}
  */
  readonly staticIpv4RouteCfg?: SystemResourceAccountingTemplateListNetworkResourcesStaticIpv4RouteCfgA;
  /**
  * static_ipv6_route_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#static_ipv6_route_cfg SystemResourceAccountingA#static_ipv6_route_cfg}
  */
  readonly staticIpv6RouteCfg?: SystemResourceAccountingTemplateListNetworkResourcesStaticIpv6RouteCfgA;
  /**
  * static_mac_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#static_mac_cfg SystemResourceAccountingA#static_mac_cfg}
  */
  readonly staticMacCfg?: SystemResourceAccountingTemplateListNetworkResourcesStaticMacCfgA;
  /**
  * static_neighbor_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#static_neighbor_cfg SystemResourceAccountingA#static_neighbor_cfg}
  */
  readonly staticNeighborCfg?: SystemResourceAccountingTemplateListNetworkResourcesStaticNeighborCfgA;
}

export function systemResourceAccountingTemplateListNetworkResourcesAToTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesAOutputReference | SystemResourceAccountingTemplateListNetworkResourcesA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    ipv4_acl_line_cfg: systemResourceAccountingTemplateListNetworkResourcesIpv4AclLineCfgAToTerraform(struct!.ipv4AclLineCfg),
    ipv6_acl_line_cfg: systemResourceAccountingTemplateListNetworkResourcesIpv6AclLineCfgAToTerraform(struct!.ipv6AclLineCfg),
    object_group_cfg: systemResourceAccountingTemplateListNetworkResourcesObjectGroupCfgAToTerraform(struct!.objectGroupCfg),
    object_group_clause_cfg: systemResourceAccountingTemplateListNetworkResourcesObjectGroupClauseCfgAToTerraform(struct!.objectGroupClauseCfg),
    static_arp_cfg: systemResourceAccountingTemplateListNetworkResourcesStaticArpCfgAToTerraform(struct!.staticArpCfg),
    static_ipv4_route_cfg: systemResourceAccountingTemplateListNetworkResourcesStaticIpv4RouteCfgAToTerraform(struct!.staticIpv4RouteCfg),
    static_ipv6_route_cfg: systemResourceAccountingTemplateListNetworkResourcesStaticIpv6RouteCfgAToTerraform(struct!.staticIpv6RouteCfg),
    static_mac_cfg: systemResourceAccountingTemplateListNetworkResourcesStaticMacCfgAToTerraform(struct!.staticMacCfg),
    static_neighbor_cfg: systemResourceAccountingTemplateListNetworkResourcesStaticNeighborCfgAToTerraform(struct!.staticNeighborCfg),
  }
}


export function systemResourceAccountingTemplateListNetworkResourcesAToHclTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesAOutputReference | SystemResourceAccountingTemplateListNetworkResourcesA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_acl_line_cfg: {
      value: systemResourceAccountingTemplateListNetworkResourcesIpv4AclLineCfgAToHclTerraform(struct!.ipv4AclLineCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListNetworkResourcesIpv4AclLineCfgAList",
    },
    ipv6_acl_line_cfg: {
      value: systemResourceAccountingTemplateListNetworkResourcesIpv6AclLineCfgAToHclTerraform(struct!.ipv6AclLineCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListNetworkResourcesIpv6AclLineCfgAList",
    },
    object_group_cfg: {
      value: systemResourceAccountingTemplateListNetworkResourcesObjectGroupCfgAToHclTerraform(struct!.objectGroupCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListNetworkResourcesObjectGroupCfgAList",
    },
    object_group_clause_cfg: {
      value: systemResourceAccountingTemplateListNetworkResourcesObjectGroupClauseCfgAToHclTerraform(struct!.objectGroupClauseCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListNetworkResourcesObjectGroupClauseCfgAList",
    },
    static_arp_cfg: {
      value: systemResourceAccountingTemplateListNetworkResourcesStaticArpCfgAToHclTerraform(struct!.staticArpCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListNetworkResourcesStaticArpCfgAList",
    },
    static_ipv4_route_cfg: {
      value: systemResourceAccountingTemplateListNetworkResourcesStaticIpv4RouteCfgAToHclTerraform(struct!.staticIpv4RouteCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListNetworkResourcesStaticIpv4RouteCfgAList",
    },
    static_ipv6_route_cfg: {
      value: systemResourceAccountingTemplateListNetworkResourcesStaticIpv6RouteCfgAToHclTerraform(struct!.staticIpv6RouteCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListNetworkResourcesStaticIpv6RouteCfgAList",
    },
    static_mac_cfg: {
      value: systemResourceAccountingTemplateListNetworkResourcesStaticMacCfgAToHclTerraform(struct!.staticMacCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListNetworkResourcesStaticMacCfgAList",
    },
    static_neighbor_cfg: {
      value: systemResourceAccountingTemplateListNetworkResourcesStaticNeighborCfgAToHclTerraform(struct!.staticNeighborCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListNetworkResourcesStaticNeighborCfgAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListNetworkResourcesAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListNetworkResourcesA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ipv4AclLineCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AclLineCfg = this._ipv4AclLineCfg?.internalValue;
    }
    if (this._ipv6AclLineCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AclLineCfg = this._ipv6AclLineCfg?.internalValue;
    }
    if (this._objectGroupCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectGroupCfg = this._objectGroupCfg?.internalValue;
    }
    if (this._objectGroupClauseCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectGroupClauseCfg = this._objectGroupClauseCfg?.internalValue;
    }
    if (this._staticArpCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticArpCfg = this._staticArpCfg?.internalValue;
    }
    if (this._staticIpv4RouteCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv4RouteCfg = this._staticIpv4RouteCfg?.internalValue;
    }
    if (this._staticIpv6RouteCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv6RouteCfg = this._staticIpv6RouteCfg?.internalValue;
    }
    if (this._staticMacCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticMacCfg = this._staticMacCfg?.internalValue;
    }
    if (this._staticNeighborCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticNeighborCfg = this._staticNeighborCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListNetworkResourcesA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threshold = undefined;
      this._uuid = undefined;
      this._ipv4AclLineCfg.internalValue = undefined;
      this._ipv6AclLineCfg.internalValue = undefined;
      this._objectGroupCfg.internalValue = undefined;
      this._objectGroupClauseCfg.internalValue = undefined;
      this._staticArpCfg.internalValue = undefined;
      this._staticIpv4RouteCfg.internalValue = undefined;
      this._staticIpv6RouteCfg.internalValue = undefined;
      this._staticMacCfg.internalValue = undefined;
      this._staticNeighborCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threshold = value.threshold;
      this._uuid = value.uuid;
      this._ipv4AclLineCfg.internalValue = value.ipv4AclLineCfg;
      this._ipv6AclLineCfg.internalValue = value.ipv6AclLineCfg;
      this._objectGroupCfg.internalValue = value.objectGroupCfg;
      this._objectGroupClauseCfg.internalValue = value.objectGroupClauseCfg;
      this._staticArpCfg.internalValue = value.staticArpCfg;
      this._staticIpv4RouteCfg.internalValue = value.staticIpv4RouteCfg;
      this._staticIpv6RouteCfg.internalValue = value.staticIpv6RouteCfg;
      this._staticMacCfg.internalValue = value.staticMacCfg;
      this._staticNeighborCfg.internalValue = value.staticNeighborCfg;
    }
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // ipv4_acl_line_cfg - computed: false, optional: true, required: false
  private _ipv4AclLineCfg = new SystemResourceAccountingTemplateListNetworkResourcesIpv4AclLineCfgAOutputReference(this, "ipv4_acl_line_cfg");
  public get ipv4AclLineCfg() {
    return this._ipv4AclLineCfg;
  }
  public putIpv4AclLineCfg(value: SystemResourceAccountingTemplateListNetworkResourcesIpv4AclLineCfgA) {
    this._ipv4AclLineCfg.internalValue = value;
  }
  public resetIpv4AclLineCfg() {
    this._ipv4AclLineCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AclLineCfgInput() {
    return this._ipv4AclLineCfg.internalValue;
  }

  // ipv6_acl_line_cfg - computed: false, optional: true, required: false
  private _ipv6AclLineCfg = new SystemResourceAccountingTemplateListNetworkResourcesIpv6AclLineCfgAOutputReference(this, "ipv6_acl_line_cfg");
  public get ipv6AclLineCfg() {
    return this._ipv6AclLineCfg;
  }
  public putIpv6AclLineCfg(value: SystemResourceAccountingTemplateListNetworkResourcesIpv6AclLineCfgA) {
    this._ipv6AclLineCfg.internalValue = value;
  }
  public resetIpv6AclLineCfg() {
    this._ipv6AclLineCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AclLineCfgInput() {
    return this._ipv6AclLineCfg.internalValue;
  }

  // object_group_cfg - computed: false, optional: true, required: false
  private _objectGroupCfg = new SystemResourceAccountingTemplateListNetworkResourcesObjectGroupCfgAOutputReference(this, "object_group_cfg");
  public get objectGroupCfg() {
    return this._objectGroupCfg;
  }
  public putObjectGroupCfg(value: SystemResourceAccountingTemplateListNetworkResourcesObjectGroupCfgA) {
    this._objectGroupCfg.internalValue = value;
  }
  public resetObjectGroupCfg() {
    this._objectGroupCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectGroupCfgInput() {
    return this._objectGroupCfg.internalValue;
  }

  // object_group_clause_cfg - computed: false, optional: true, required: false
  private _objectGroupClauseCfg = new SystemResourceAccountingTemplateListNetworkResourcesObjectGroupClauseCfgAOutputReference(this, "object_group_clause_cfg");
  public get objectGroupClauseCfg() {
    return this._objectGroupClauseCfg;
  }
  public putObjectGroupClauseCfg(value: SystemResourceAccountingTemplateListNetworkResourcesObjectGroupClauseCfgA) {
    this._objectGroupClauseCfg.internalValue = value;
  }
  public resetObjectGroupClauseCfg() {
    this._objectGroupClauseCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectGroupClauseCfgInput() {
    return this._objectGroupClauseCfg.internalValue;
  }

  // static_arp_cfg - computed: false, optional: true, required: false
  private _staticArpCfg = new SystemResourceAccountingTemplateListNetworkResourcesStaticArpCfgAOutputReference(this, "static_arp_cfg");
  public get staticArpCfg() {
    return this._staticArpCfg;
  }
  public putStaticArpCfg(value: SystemResourceAccountingTemplateListNetworkResourcesStaticArpCfgA) {
    this._staticArpCfg.internalValue = value;
  }
  public resetStaticArpCfg() {
    this._staticArpCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticArpCfgInput() {
    return this._staticArpCfg.internalValue;
  }

  // static_ipv4_route_cfg - computed: false, optional: true, required: false
  private _staticIpv4RouteCfg = new SystemResourceAccountingTemplateListNetworkResourcesStaticIpv4RouteCfgAOutputReference(this, "static_ipv4_route_cfg");
  public get staticIpv4RouteCfg() {
    return this._staticIpv4RouteCfg;
  }
  public putStaticIpv4RouteCfg(value: SystemResourceAccountingTemplateListNetworkResourcesStaticIpv4RouteCfgA) {
    this._staticIpv4RouteCfg.internalValue = value;
  }
  public resetStaticIpv4RouteCfg() {
    this._staticIpv4RouteCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv4RouteCfgInput() {
    return this._staticIpv4RouteCfg.internalValue;
  }

  // static_ipv6_route_cfg - computed: false, optional: true, required: false
  private _staticIpv6RouteCfg = new SystemResourceAccountingTemplateListNetworkResourcesStaticIpv6RouteCfgAOutputReference(this, "static_ipv6_route_cfg");
  public get staticIpv6RouteCfg() {
    return this._staticIpv6RouteCfg;
  }
  public putStaticIpv6RouteCfg(value: SystemResourceAccountingTemplateListNetworkResourcesStaticIpv6RouteCfgA) {
    this._staticIpv6RouteCfg.internalValue = value;
  }
  public resetStaticIpv6RouteCfg() {
    this._staticIpv6RouteCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv6RouteCfgInput() {
    return this._staticIpv6RouteCfg.internalValue;
  }

  // static_mac_cfg - computed: false, optional: true, required: false
  private _staticMacCfg = new SystemResourceAccountingTemplateListNetworkResourcesStaticMacCfgAOutputReference(this, "static_mac_cfg");
  public get staticMacCfg() {
    return this._staticMacCfg;
  }
  public putStaticMacCfg(value: SystemResourceAccountingTemplateListNetworkResourcesStaticMacCfgA) {
    this._staticMacCfg.internalValue = value;
  }
  public resetStaticMacCfg() {
    this._staticMacCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticMacCfgInput() {
    return this._staticMacCfg.internalValue;
  }

  // static_neighbor_cfg - computed: false, optional: true, required: false
  private _staticNeighborCfg = new SystemResourceAccountingTemplateListNetworkResourcesStaticNeighborCfgAOutputReference(this, "static_neighbor_cfg");
  public get staticNeighborCfg() {
    return this._staticNeighborCfg;
  }
  public putStaticNeighborCfg(value: SystemResourceAccountingTemplateListNetworkResourcesStaticNeighborCfgA) {
    this._staticNeighborCfg.internalValue = value;
  }
  public resetStaticNeighborCfg() {
    this._staticNeighborCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNeighborCfgInput() {
    return this._staticNeighborCfg.internalValue;
  }
}
export interface SystemResourceAccountingTemplateListSystemResourcesBwLimitCfgA {
  /**
  * Enter the bandwidth limit in mbps (Bandwidth limit in Mbit/s (no limits applied by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#bw_limit_max SystemResourceAccountingA#bw_limit_max}
  */
  readonly bwLimitMax?: number;
  /**
  * Disable watermark (90% drop, keep existing sessions, drop  new sessions)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#bw_limit_watermark_disable SystemResourceAccountingA#bw_limit_watermark_disable}
  */
  readonly bwLimitWatermarkDisable?: number;
}

export function systemResourceAccountingTemplateListSystemResourcesBwLimitCfgAToTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesBwLimitCfgAOutputReference | SystemResourceAccountingTemplateListSystemResourcesBwLimitCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bw_limit_max: cdktf.numberToTerraform(struct!.bwLimitMax),
    bw_limit_watermark_disable: cdktf.numberToTerraform(struct!.bwLimitWatermarkDisable),
  }
}


export function systemResourceAccountingTemplateListSystemResourcesBwLimitCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesBwLimitCfgAOutputReference | SystemResourceAccountingTemplateListSystemResourcesBwLimitCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bw_limit_max: {
      value: cdktf.numberToHclTerraform(struct!.bwLimitMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bw_limit_watermark_disable: {
      value: cdktf.numberToHclTerraform(struct!.bwLimitWatermarkDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListSystemResourcesBwLimitCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListSystemResourcesBwLimitCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bwLimitMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwLimitMax = this._bwLimitMax;
    }
    if (this._bwLimitWatermarkDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwLimitWatermarkDisable = this._bwLimitWatermarkDisable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListSystemResourcesBwLimitCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bwLimitMax = undefined;
      this._bwLimitWatermarkDisable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bwLimitMax = value.bwLimitMax;
      this._bwLimitWatermarkDisable = value.bwLimitWatermarkDisable;
    }
  }

  // bw_limit_max - computed: false, optional: true, required: false
  private _bwLimitMax?: number; 
  public get bwLimitMax() {
    return this.getNumberAttribute('bw_limit_max');
  }
  public set bwLimitMax(value: number) {
    this._bwLimitMax = value;
  }
  public resetBwLimitMax() {
    this._bwLimitMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwLimitMaxInput() {
    return this._bwLimitMax;
  }

  // bw_limit_watermark_disable - computed: false, optional: true, required: false
  private _bwLimitWatermarkDisable?: number; 
  public get bwLimitWatermarkDisable() {
    return this.getNumberAttribute('bw_limit_watermark_disable');
  }
  public set bwLimitWatermarkDisable(value: number) {
    this._bwLimitWatermarkDisable = value;
  }
  public resetBwLimitWatermarkDisable() {
    this._bwLimitWatermarkDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwLimitWatermarkDisableInput() {
    return this._bwLimitWatermarkDisable;
  }
}
export interface SystemResourceAccountingTemplateListSystemResourcesConcurrentSessionLimitCfgA {
  /**
  * Enter the Concurrent Session limit (cps) (Concurrent-Session cps limit (no limits applied by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#concurrent_session_limit_max SystemResourceAccountingA#concurrent_session_limit_max}
  */
  readonly concurrentSessionLimitMax?: number;
}

export function systemResourceAccountingTemplateListSystemResourcesConcurrentSessionLimitCfgAToTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesConcurrentSessionLimitCfgAOutputReference | SystemResourceAccountingTemplateListSystemResourcesConcurrentSessionLimitCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrent_session_limit_max: cdktf.numberToTerraform(struct!.concurrentSessionLimitMax),
  }
}


export function systemResourceAccountingTemplateListSystemResourcesConcurrentSessionLimitCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesConcurrentSessionLimitCfgAOutputReference | SystemResourceAccountingTemplateListSystemResourcesConcurrentSessionLimitCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrent_session_limit_max: {
      value: cdktf.numberToHclTerraform(struct!.concurrentSessionLimitMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListSystemResourcesConcurrentSessionLimitCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListSystemResourcesConcurrentSessionLimitCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrentSessionLimitMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentSessionLimitMax = this._concurrentSessionLimitMax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListSystemResourcesConcurrentSessionLimitCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._concurrentSessionLimitMax = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._concurrentSessionLimitMax = value.concurrentSessionLimitMax;
    }
  }

  // concurrent_session_limit_max - computed: false, optional: true, required: false
  private _concurrentSessionLimitMax?: number; 
  public get concurrentSessionLimitMax() {
    return this.getNumberAttribute('concurrent_session_limit_max');
  }
  public set concurrentSessionLimitMax(value: number) {
    this._concurrentSessionLimitMax = value;
  }
  public resetConcurrentSessionLimitMax() {
    this._concurrentSessionLimitMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentSessionLimitMaxInput() {
    return this._concurrentSessionLimitMax;
  }
}
export interface SystemResourceAccountingTemplateListSystemResourcesFwcpsLimitCfgA {
  /**
  * Enter the Firewall cps limit (Firewall cps limit (no limits applied by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#fwcps_limit_max SystemResourceAccountingA#fwcps_limit_max}
  */
  readonly fwcpsLimitMax?: number;
}

export function systemResourceAccountingTemplateListSystemResourcesFwcpsLimitCfgAToTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesFwcpsLimitCfgAOutputReference | SystemResourceAccountingTemplateListSystemResourcesFwcpsLimitCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fwcps_limit_max: cdktf.numberToTerraform(struct!.fwcpsLimitMax),
  }
}


export function systemResourceAccountingTemplateListSystemResourcesFwcpsLimitCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesFwcpsLimitCfgAOutputReference | SystemResourceAccountingTemplateListSystemResourcesFwcpsLimitCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fwcps_limit_max: {
      value: cdktf.numberToHclTerraform(struct!.fwcpsLimitMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListSystemResourcesFwcpsLimitCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListSystemResourcesFwcpsLimitCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fwcpsLimitMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwcpsLimitMax = this._fwcpsLimitMax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListSystemResourcesFwcpsLimitCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fwcpsLimitMax = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fwcpsLimitMax = value.fwcpsLimitMax;
    }
  }

  // fwcps_limit_max - computed: false, optional: true, required: false
  private _fwcpsLimitMax?: number; 
  public get fwcpsLimitMax() {
    return this.getNumberAttribute('fwcps_limit_max');
  }
  public set fwcpsLimitMax(value: number) {
    this._fwcpsLimitMax = value;
  }
  public resetFwcpsLimitMax() {
    this._fwcpsLimitMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwcpsLimitMaxInput() {
    return this._fwcpsLimitMax;
  }
}
export interface SystemResourceAccountingTemplateListSystemResourcesL4SessionLimitCfgA {
  /**
  * Enter the l4 session limit in % (0.01% to 99.99%) (Enter a number from 0.01 to 99.99 (up to 2 digits precision))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#l4_session_limit_max SystemResourceAccountingA#l4_session_limit_max}
  */
  readonly l4SessionLimitMax?: string;
  /**
  * minimum guaranteed value in % (up to 2 digits precision) (Enter a number from 0 to 99.99)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#l4_session_limit_min_guarantee SystemResourceAccountingA#l4_session_limit_min_guarantee}
  */
  readonly l4SessionLimitMinGuarantee?: string;
}

export function systemResourceAccountingTemplateListSystemResourcesL4SessionLimitCfgAToTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesL4SessionLimitCfgAOutputReference | SystemResourceAccountingTemplateListSystemResourcesL4SessionLimitCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    l4_session_limit_max: cdktf.stringToTerraform(struct!.l4SessionLimitMax),
    l4_session_limit_min_guarantee: cdktf.stringToTerraform(struct!.l4SessionLimitMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListSystemResourcesL4SessionLimitCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesL4SessionLimitCfgAOutputReference | SystemResourceAccountingTemplateListSystemResourcesL4SessionLimitCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    l4_session_limit_max: {
      value: cdktf.stringToHclTerraform(struct!.l4SessionLimitMax),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l4_session_limit_min_guarantee: {
      value: cdktf.stringToHclTerraform(struct!.l4SessionLimitMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListSystemResourcesL4SessionLimitCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListSystemResourcesL4SessionLimitCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._l4SessionLimitMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4SessionLimitMax = this._l4SessionLimitMax;
    }
    if (this._l4SessionLimitMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4SessionLimitMinGuarantee = this._l4SessionLimitMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListSystemResourcesL4SessionLimitCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._l4SessionLimitMax = undefined;
      this._l4SessionLimitMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._l4SessionLimitMax = value.l4SessionLimitMax;
      this._l4SessionLimitMinGuarantee = value.l4SessionLimitMinGuarantee;
    }
  }

  // l4_session_limit_max - computed: false, optional: true, required: false
  private _l4SessionLimitMax?: string; 
  public get l4SessionLimitMax() {
    return this.getStringAttribute('l4_session_limit_max');
  }
  public set l4SessionLimitMax(value: string) {
    this._l4SessionLimitMax = value;
  }
  public resetL4SessionLimitMax() {
    this._l4SessionLimitMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4SessionLimitMaxInput() {
    return this._l4SessionLimitMax;
  }

  // l4_session_limit_min_guarantee - computed: false, optional: true, required: false
  private _l4SessionLimitMinGuarantee?: string; 
  public get l4SessionLimitMinGuarantee() {
    return this.getStringAttribute('l4_session_limit_min_guarantee');
  }
  public set l4SessionLimitMinGuarantee(value: string) {
    this._l4SessionLimitMinGuarantee = value;
  }
  public resetL4SessionLimitMinGuarantee() {
    this._l4SessionLimitMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4SessionLimitMinGuaranteeInput() {
    return this._l4SessionLimitMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListSystemResourcesL4CpsLimitCfgA {
  /**
  * Enter the L4 cps limit (L4 cps limit (no limits applied by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#l4cps_limit_max SystemResourceAccountingA#l4cps_limit_max}
  */
  readonly l4CpsLimitMax?: number;
}

export function systemResourceAccountingTemplateListSystemResourcesL4CpsLimitCfgAToTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesL4CpsLimitCfgAOutputReference | SystemResourceAccountingTemplateListSystemResourcesL4CpsLimitCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    l4cps_limit_max: cdktf.numberToTerraform(struct!.l4CpsLimitMax),
  }
}


export function systemResourceAccountingTemplateListSystemResourcesL4CpsLimitCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesL4CpsLimitCfgAOutputReference | SystemResourceAccountingTemplateListSystemResourcesL4CpsLimitCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    l4cps_limit_max: {
      value: cdktf.numberToHclTerraform(struct!.l4CpsLimitMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListSystemResourcesL4CpsLimitCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListSystemResourcesL4CpsLimitCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._l4CpsLimitMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4CpsLimitMax = this._l4CpsLimitMax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListSystemResourcesL4CpsLimitCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._l4CpsLimitMax = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._l4CpsLimitMax = value.l4CpsLimitMax;
    }
  }

  // l4cps_limit_max - computed: false, optional: true, required: false
  private _l4CpsLimitMax?: number; 
  public get l4CpsLimitMax() {
    return this.getNumberAttribute('l4cps_limit_max');
  }
  public set l4CpsLimitMax(value: number) {
    this._l4CpsLimitMax = value;
  }
  public resetL4CpsLimitMax() {
    this._l4CpsLimitMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4CpsLimitMaxInput() {
    return this._l4CpsLimitMax;
  }
}
export interface SystemResourceAccountingTemplateListSystemResourcesL7CpsLimitCfgA {
  /**
  * L7cps-limit (L7 cps limit (no limits applied by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#l7cps_limit_max SystemResourceAccountingA#l7cps_limit_max}
  */
  readonly l7CpsLimitMax?: number;
}

export function systemResourceAccountingTemplateListSystemResourcesL7CpsLimitCfgAToTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesL7CpsLimitCfgAOutputReference | SystemResourceAccountingTemplateListSystemResourcesL7CpsLimitCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    l7cps_limit_max: cdktf.numberToTerraform(struct!.l7CpsLimitMax),
  }
}


export function systemResourceAccountingTemplateListSystemResourcesL7CpsLimitCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesL7CpsLimitCfgAOutputReference | SystemResourceAccountingTemplateListSystemResourcesL7CpsLimitCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    l7cps_limit_max: {
      value: cdktf.numberToHclTerraform(struct!.l7CpsLimitMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListSystemResourcesL7CpsLimitCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListSystemResourcesL7CpsLimitCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._l7CpsLimitMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.l7CpsLimitMax = this._l7CpsLimitMax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListSystemResourcesL7CpsLimitCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._l7CpsLimitMax = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._l7CpsLimitMax = value.l7CpsLimitMax;
    }
  }

  // l7cps_limit_max - computed: false, optional: true, required: false
  private _l7CpsLimitMax?: number; 
  public get l7CpsLimitMax() {
    return this.getNumberAttribute('l7cps_limit_max');
  }
  public set l7CpsLimitMax(value: number) {
    this._l7CpsLimitMax = value;
  }
  public resetL7CpsLimitMax() {
    this._l7CpsLimitMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7CpsLimitMaxInput() {
    return this._l7CpsLimitMax;
  }
}
export interface SystemResourceAccountingTemplateListSystemResourcesNatcpsLimitCfgA {
  /**
  * Enter the Nat cps limit (NAT cps limit (no limits applied by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#natcps_limit_max SystemResourceAccountingA#natcps_limit_max}
  */
  readonly natcpsLimitMax?: number;
}

export function systemResourceAccountingTemplateListSystemResourcesNatcpsLimitCfgAToTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesNatcpsLimitCfgAOutputReference | SystemResourceAccountingTemplateListSystemResourcesNatcpsLimitCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    natcps_limit_max: cdktf.numberToTerraform(struct!.natcpsLimitMax),
  }
}


export function systemResourceAccountingTemplateListSystemResourcesNatcpsLimitCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesNatcpsLimitCfgAOutputReference | SystemResourceAccountingTemplateListSystemResourcesNatcpsLimitCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    natcps_limit_max: {
      value: cdktf.numberToHclTerraform(struct!.natcpsLimitMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListSystemResourcesNatcpsLimitCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListSystemResourcesNatcpsLimitCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._natcpsLimitMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.natcpsLimitMax = this._natcpsLimitMax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListSystemResourcesNatcpsLimitCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._natcpsLimitMax = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._natcpsLimitMax = value.natcpsLimitMax;
    }
  }

  // natcps_limit_max - computed: false, optional: true, required: false
  private _natcpsLimitMax?: number; 
  public get natcpsLimitMax() {
    return this.getNumberAttribute('natcps_limit_max');
  }
  public set natcpsLimitMax(value: number) {
    this._natcpsLimitMax = value;
  }
  public resetNatcpsLimitMax() {
    this._natcpsLimitMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natcpsLimitMaxInput() {
    return this._natcpsLimitMax;
  }
}
export interface SystemResourceAccountingTemplateListSystemResourcesSslThroughputLimitCfgA {
  /**
  * Enter the ssl throughput limit in mbps (SSL Througput limit in Mbit/s (no limits applied by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#ssl_throughput_limit_max SystemResourceAccountingA#ssl_throughput_limit_max}
  */
  readonly sslThroughputLimitMax?: number;
  /**
  * Disable watermark (90% drop, keep existing sessions, drop  new sessions)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#ssl_throughput_limit_watermark_disable SystemResourceAccountingA#ssl_throughput_limit_watermark_disable}
  */
  readonly sslThroughputLimitWatermarkDisable?: number;
}

export function systemResourceAccountingTemplateListSystemResourcesSslThroughputLimitCfgAToTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesSslThroughputLimitCfgAOutputReference | SystemResourceAccountingTemplateListSystemResourcesSslThroughputLimitCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssl_throughput_limit_max: cdktf.numberToTerraform(struct!.sslThroughputLimitMax),
    ssl_throughput_limit_watermark_disable: cdktf.numberToTerraform(struct!.sslThroughputLimitWatermarkDisable),
  }
}


export function systemResourceAccountingTemplateListSystemResourcesSslThroughputLimitCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesSslThroughputLimitCfgAOutputReference | SystemResourceAccountingTemplateListSystemResourcesSslThroughputLimitCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssl_throughput_limit_max: {
      value: cdktf.numberToHclTerraform(struct!.sslThroughputLimitMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_throughput_limit_watermark_disable: {
      value: cdktf.numberToHclTerraform(struct!.sslThroughputLimitWatermarkDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListSystemResourcesSslThroughputLimitCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListSystemResourcesSslThroughputLimitCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sslThroughputLimitMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslThroughputLimitMax = this._sslThroughputLimitMax;
    }
    if (this._sslThroughputLimitWatermarkDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslThroughputLimitWatermarkDisable = this._sslThroughputLimitWatermarkDisable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListSystemResourcesSslThroughputLimitCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sslThroughputLimitMax = undefined;
      this._sslThroughputLimitWatermarkDisable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sslThroughputLimitMax = value.sslThroughputLimitMax;
      this._sslThroughputLimitWatermarkDisable = value.sslThroughputLimitWatermarkDisable;
    }
  }

  // ssl_throughput_limit_max - computed: false, optional: true, required: false
  private _sslThroughputLimitMax?: number; 
  public get sslThroughputLimitMax() {
    return this.getNumberAttribute('ssl_throughput_limit_max');
  }
  public set sslThroughputLimitMax(value: number) {
    this._sslThroughputLimitMax = value;
  }
  public resetSslThroughputLimitMax() {
    this._sslThroughputLimitMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslThroughputLimitMaxInput() {
    return this._sslThroughputLimitMax;
  }

  // ssl_throughput_limit_watermark_disable - computed: false, optional: true, required: false
  private _sslThroughputLimitWatermarkDisable?: number; 
  public get sslThroughputLimitWatermarkDisable() {
    return this.getNumberAttribute('ssl_throughput_limit_watermark_disable');
  }
  public set sslThroughputLimitWatermarkDisable(value: number) {
    this._sslThroughputLimitWatermarkDisable = value;
  }
  public resetSslThroughputLimitWatermarkDisable() {
    this._sslThroughputLimitWatermarkDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslThroughputLimitWatermarkDisableInput() {
    return this._sslThroughputLimitWatermarkDisable;
  }
}
export interface SystemResourceAccountingTemplateListSystemResourcesSslcpsLimitCfgA {
  /**
  * Enter the SSL cps limit (SSL cps limit (no limits applied by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#sslcps_limit_max SystemResourceAccountingA#sslcps_limit_max}
  */
  readonly sslcpsLimitMax?: number;
}

export function systemResourceAccountingTemplateListSystemResourcesSslcpsLimitCfgAToTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesSslcpsLimitCfgAOutputReference | SystemResourceAccountingTemplateListSystemResourcesSslcpsLimitCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sslcps_limit_max: cdktf.numberToTerraform(struct!.sslcpsLimitMax),
  }
}


export function systemResourceAccountingTemplateListSystemResourcesSslcpsLimitCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesSslcpsLimitCfgAOutputReference | SystemResourceAccountingTemplateListSystemResourcesSslcpsLimitCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sslcps_limit_max: {
      value: cdktf.numberToHclTerraform(struct!.sslcpsLimitMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListSystemResourcesSslcpsLimitCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListSystemResourcesSslcpsLimitCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sslcpsLimitMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslcpsLimitMax = this._sslcpsLimitMax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListSystemResourcesSslcpsLimitCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sslcpsLimitMax = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sslcpsLimitMax = value.sslcpsLimitMax;
    }
  }

  // sslcps_limit_max - computed: false, optional: true, required: false
  private _sslcpsLimitMax?: number; 
  public get sslcpsLimitMax() {
    return this.getNumberAttribute('sslcps_limit_max');
  }
  public set sslcpsLimitMax(value: number) {
    this._sslcpsLimitMax = value;
  }
  public resetSslcpsLimitMax() {
    this._sslcpsLimitMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslcpsLimitMaxInput() {
    return this._sslcpsLimitMax;
  }
}
export interface SystemResourceAccountingTemplateListSystemResourcesA {
  /**
  * Enter the threshold as a percentage (Threshold in percentage(default is 100%))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#threshold SystemResourceAccountingA#threshold}
  */
  readonly threshold?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#uuid SystemResourceAccountingA#uuid}
  */
  readonly uuid?: string;
  /**
  * bw_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#bw_limit_cfg SystemResourceAccountingA#bw_limit_cfg}
  */
  readonly bwLimitCfg?: SystemResourceAccountingTemplateListSystemResourcesBwLimitCfgA;
  /**
  * concurrent_session_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#concurrent_session_limit_cfg SystemResourceAccountingA#concurrent_session_limit_cfg}
  */
  readonly concurrentSessionLimitCfg?: SystemResourceAccountingTemplateListSystemResourcesConcurrentSessionLimitCfgA;
  /**
  * fwcps_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#fwcps_limit_cfg SystemResourceAccountingA#fwcps_limit_cfg}
  */
  readonly fwcpsLimitCfg?: SystemResourceAccountingTemplateListSystemResourcesFwcpsLimitCfgA;
  /**
  * l4_session_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#l4_session_limit_cfg SystemResourceAccountingA#l4_session_limit_cfg}
  */
  readonly l4SessionLimitCfg?: SystemResourceAccountingTemplateListSystemResourcesL4SessionLimitCfgA;
  /**
  * l4cps_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#l4cps_limit_cfg SystemResourceAccountingA#l4cps_limit_cfg}
  */
  readonly l4CpsLimitCfg?: SystemResourceAccountingTemplateListSystemResourcesL4CpsLimitCfgA;
  /**
  * l7cps_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#l7cps_limit_cfg SystemResourceAccountingA#l7cps_limit_cfg}
  */
  readonly l7CpsLimitCfg?: SystemResourceAccountingTemplateListSystemResourcesL7CpsLimitCfgA;
  /**
  * natcps_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#natcps_limit_cfg SystemResourceAccountingA#natcps_limit_cfg}
  */
  readonly natcpsLimitCfg?: SystemResourceAccountingTemplateListSystemResourcesNatcpsLimitCfgA;
  /**
  * ssl_throughput_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#ssl_throughput_limit_cfg SystemResourceAccountingA#ssl_throughput_limit_cfg}
  */
  readonly sslThroughputLimitCfg?: SystemResourceAccountingTemplateListSystemResourcesSslThroughputLimitCfgA;
  /**
  * sslcps_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#sslcps_limit_cfg SystemResourceAccountingA#sslcps_limit_cfg}
  */
  readonly sslcpsLimitCfg?: SystemResourceAccountingTemplateListSystemResourcesSslcpsLimitCfgA;
}

export function systemResourceAccountingTemplateListSystemResourcesAToTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesAOutputReference | SystemResourceAccountingTemplateListSystemResourcesA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    bw_limit_cfg: systemResourceAccountingTemplateListSystemResourcesBwLimitCfgAToTerraform(struct!.bwLimitCfg),
    concurrent_session_limit_cfg: systemResourceAccountingTemplateListSystemResourcesConcurrentSessionLimitCfgAToTerraform(struct!.concurrentSessionLimitCfg),
    fwcps_limit_cfg: systemResourceAccountingTemplateListSystemResourcesFwcpsLimitCfgAToTerraform(struct!.fwcpsLimitCfg),
    l4_session_limit_cfg: systemResourceAccountingTemplateListSystemResourcesL4SessionLimitCfgAToTerraform(struct!.l4SessionLimitCfg),
    l4cps_limit_cfg: systemResourceAccountingTemplateListSystemResourcesL4CpsLimitCfgAToTerraform(struct!.l4CpsLimitCfg),
    l7cps_limit_cfg: systemResourceAccountingTemplateListSystemResourcesL7CpsLimitCfgAToTerraform(struct!.l7CpsLimitCfg),
    natcps_limit_cfg: systemResourceAccountingTemplateListSystemResourcesNatcpsLimitCfgAToTerraform(struct!.natcpsLimitCfg),
    ssl_throughput_limit_cfg: systemResourceAccountingTemplateListSystemResourcesSslThroughputLimitCfgAToTerraform(struct!.sslThroughputLimitCfg),
    sslcps_limit_cfg: systemResourceAccountingTemplateListSystemResourcesSslcpsLimitCfgAToTerraform(struct!.sslcpsLimitCfg),
  }
}


export function systemResourceAccountingTemplateListSystemResourcesAToHclTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesAOutputReference | SystemResourceAccountingTemplateListSystemResourcesA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bw_limit_cfg: {
      value: systemResourceAccountingTemplateListSystemResourcesBwLimitCfgAToHclTerraform(struct!.bwLimitCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListSystemResourcesBwLimitCfgAList",
    },
    concurrent_session_limit_cfg: {
      value: systemResourceAccountingTemplateListSystemResourcesConcurrentSessionLimitCfgAToHclTerraform(struct!.concurrentSessionLimitCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListSystemResourcesConcurrentSessionLimitCfgAList",
    },
    fwcps_limit_cfg: {
      value: systemResourceAccountingTemplateListSystemResourcesFwcpsLimitCfgAToHclTerraform(struct!.fwcpsLimitCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListSystemResourcesFwcpsLimitCfgAList",
    },
    l4_session_limit_cfg: {
      value: systemResourceAccountingTemplateListSystemResourcesL4SessionLimitCfgAToHclTerraform(struct!.l4SessionLimitCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListSystemResourcesL4SessionLimitCfgAList",
    },
    l4cps_limit_cfg: {
      value: systemResourceAccountingTemplateListSystemResourcesL4CpsLimitCfgAToHclTerraform(struct!.l4CpsLimitCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListSystemResourcesL4CpsLimitCfgAList",
    },
    l7cps_limit_cfg: {
      value: systemResourceAccountingTemplateListSystemResourcesL7CpsLimitCfgAToHclTerraform(struct!.l7CpsLimitCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListSystemResourcesL7CpsLimitCfgAList",
    },
    natcps_limit_cfg: {
      value: systemResourceAccountingTemplateListSystemResourcesNatcpsLimitCfgAToHclTerraform(struct!.natcpsLimitCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListSystemResourcesNatcpsLimitCfgAList",
    },
    ssl_throughput_limit_cfg: {
      value: systemResourceAccountingTemplateListSystemResourcesSslThroughputLimitCfgAToHclTerraform(struct!.sslThroughputLimitCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListSystemResourcesSslThroughputLimitCfgAList",
    },
    sslcps_limit_cfg: {
      value: systemResourceAccountingTemplateListSystemResourcesSslcpsLimitCfgAToHclTerraform(struct!.sslcpsLimitCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListSystemResourcesSslcpsLimitCfgAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListSystemResourcesAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListSystemResourcesA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._bwLimitCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwLimitCfg = this._bwLimitCfg?.internalValue;
    }
    if (this._concurrentSessionLimitCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentSessionLimitCfg = this._concurrentSessionLimitCfg?.internalValue;
    }
    if (this._fwcpsLimitCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwcpsLimitCfg = this._fwcpsLimitCfg?.internalValue;
    }
    if (this._l4SessionLimitCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4SessionLimitCfg = this._l4SessionLimitCfg?.internalValue;
    }
    if (this._l4CpsLimitCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4CpsLimitCfg = this._l4CpsLimitCfg?.internalValue;
    }
    if (this._l7CpsLimitCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l7CpsLimitCfg = this._l7CpsLimitCfg?.internalValue;
    }
    if (this._natcpsLimitCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.natcpsLimitCfg = this._natcpsLimitCfg?.internalValue;
    }
    if (this._sslThroughputLimitCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslThroughputLimitCfg = this._sslThroughputLimitCfg?.internalValue;
    }
    if (this._sslcpsLimitCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslcpsLimitCfg = this._sslcpsLimitCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListSystemResourcesA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threshold = undefined;
      this._uuid = undefined;
      this._bwLimitCfg.internalValue = undefined;
      this._concurrentSessionLimitCfg.internalValue = undefined;
      this._fwcpsLimitCfg.internalValue = undefined;
      this._l4SessionLimitCfg.internalValue = undefined;
      this._l4CpsLimitCfg.internalValue = undefined;
      this._l7CpsLimitCfg.internalValue = undefined;
      this._natcpsLimitCfg.internalValue = undefined;
      this._sslThroughputLimitCfg.internalValue = undefined;
      this._sslcpsLimitCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threshold = value.threshold;
      this._uuid = value.uuid;
      this._bwLimitCfg.internalValue = value.bwLimitCfg;
      this._concurrentSessionLimitCfg.internalValue = value.concurrentSessionLimitCfg;
      this._fwcpsLimitCfg.internalValue = value.fwcpsLimitCfg;
      this._l4SessionLimitCfg.internalValue = value.l4SessionLimitCfg;
      this._l4CpsLimitCfg.internalValue = value.l4CpsLimitCfg;
      this._l7CpsLimitCfg.internalValue = value.l7CpsLimitCfg;
      this._natcpsLimitCfg.internalValue = value.natcpsLimitCfg;
      this._sslThroughputLimitCfg.internalValue = value.sslThroughputLimitCfg;
      this._sslcpsLimitCfg.internalValue = value.sslcpsLimitCfg;
    }
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // bw_limit_cfg - computed: false, optional: true, required: false
  private _bwLimitCfg = new SystemResourceAccountingTemplateListSystemResourcesBwLimitCfgAOutputReference(this, "bw_limit_cfg");
  public get bwLimitCfg() {
    return this._bwLimitCfg;
  }
  public putBwLimitCfg(value: SystemResourceAccountingTemplateListSystemResourcesBwLimitCfgA) {
    this._bwLimitCfg.internalValue = value;
  }
  public resetBwLimitCfg() {
    this._bwLimitCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwLimitCfgInput() {
    return this._bwLimitCfg.internalValue;
  }

  // concurrent_session_limit_cfg - computed: false, optional: true, required: false
  private _concurrentSessionLimitCfg = new SystemResourceAccountingTemplateListSystemResourcesConcurrentSessionLimitCfgAOutputReference(this, "concurrent_session_limit_cfg");
  public get concurrentSessionLimitCfg() {
    return this._concurrentSessionLimitCfg;
  }
  public putConcurrentSessionLimitCfg(value: SystemResourceAccountingTemplateListSystemResourcesConcurrentSessionLimitCfgA) {
    this._concurrentSessionLimitCfg.internalValue = value;
  }
  public resetConcurrentSessionLimitCfg() {
    this._concurrentSessionLimitCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentSessionLimitCfgInput() {
    return this._concurrentSessionLimitCfg.internalValue;
  }

  // fwcps_limit_cfg - computed: false, optional: true, required: false
  private _fwcpsLimitCfg = new SystemResourceAccountingTemplateListSystemResourcesFwcpsLimitCfgAOutputReference(this, "fwcps_limit_cfg");
  public get fwcpsLimitCfg() {
    return this._fwcpsLimitCfg;
  }
  public putFwcpsLimitCfg(value: SystemResourceAccountingTemplateListSystemResourcesFwcpsLimitCfgA) {
    this._fwcpsLimitCfg.internalValue = value;
  }
  public resetFwcpsLimitCfg() {
    this._fwcpsLimitCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwcpsLimitCfgInput() {
    return this._fwcpsLimitCfg.internalValue;
  }

  // l4_session_limit_cfg - computed: false, optional: true, required: false
  private _l4SessionLimitCfg = new SystemResourceAccountingTemplateListSystemResourcesL4SessionLimitCfgAOutputReference(this, "l4_session_limit_cfg");
  public get l4SessionLimitCfg() {
    return this._l4SessionLimitCfg;
  }
  public putL4SessionLimitCfg(value: SystemResourceAccountingTemplateListSystemResourcesL4SessionLimitCfgA) {
    this._l4SessionLimitCfg.internalValue = value;
  }
  public resetL4SessionLimitCfg() {
    this._l4SessionLimitCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4SessionLimitCfgInput() {
    return this._l4SessionLimitCfg.internalValue;
  }

  // l4cps_limit_cfg - computed: false, optional: true, required: false
  private _l4CpsLimitCfg = new SystemResourceAccountingTemplateListSystemResourcesL4CpsLimitCfgAOutputReference(this, "l4cps_limit_cfg");
  public get l4CpsLimitCfg() {
    return this._l4CpsLimitCfg;
  }
  public putL4CpsLimitCfg(value: SystemResourceAccountingTemplateListSystemResourcesL4CpsLimitCfgA) {
    this._l4CpsLimitCfg.internalValue = value;
  }
  public resetL4CpsLimitCfg() {
    this._l4CpsLimitCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4CpsLimitCfgInput() {
    return this._l4CpsLimitCfg.internalValue;
  }

  // l7cps_limit_cfg - computed: false, optional: true, required: false
  private _l7CpsLimitCfg = new SystemResourceAccountingTemplateListSystemResourcesL7CpsLimitCfgAOutputReference(this, "l7cps_limit_cfg");
  public get l7CpsLimitCfg() {
    return this._l7CpsLimitCfg;
  }
  public putL7CpsLimitCfg(value: SystemResourceAccountingTemplateListSystemResourcesL7CpsLimitCfgA) {
    this._l7CpsLimitCfg.internalValue = value;
  }
  public resetL7CpsLimitCfg() {
    this._l7CpsLimitCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7CpsLimitCfgInput() {
    return this._l7CpsLimitCfg.internalValue;
  }

  // natcps_limit_cfg - computed: false, optional: true, required: false
  private _natcpsLimitCfg = new SystemResourceAccountingTemplateListSystemResourcesNatcpsLimitCfgAOutputReference(this, "natcps_limit_cfg");
  public get natcpsLimitCfg() {
    return this._natcpsLimitCfg;
  }
  public putNatcpsLimitCfg(value: SystemResourceAccountingTemplateListSystemResourcesNatcpsLimitCfgA) {
    this._natcpsLimitCfg.internalValue = value;
  }
  public resetNatcpsLimitCfg() {
    this._natcpsLimitCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natcpsLimitCfgInput() {
    return this._natcpsLimitCfg.internalValue;
  }

  // ssl_throughput_limit_cfg - computed: false, optional: true, required: false
  private _sslThroughputLimitCfg = new SystemResourceAccountingTemplateListSystemResourcesSslThroughputLimitCfgAOutputReference(this, "ssl_throughput_limit_cfg");
  public get sslThroughputLimitCfg() {
    return this._sslThroughputLimitCfg;
  }
  public putSslThroughputLimitCfg(value: SystemResourceAccountingTemplateListSystemResourcesSslThroughputLimitCfgA) {
    this._sslThroughputLimitCfg.internalValue = value;
  }
  public resetSslThroughputLimitCfg() {
    this._sslThroughputLimitCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslThroughputLimitCfgInput() {
    return this._sslThroughputLimitCfg.internalValue;
  }

  // sslcps_limit_cfg - computed: false, optional: true, required: false
  private _sslcpsLimitCfg = new SystemResourceAccountingTemplateListSystemResourcesSslcpsLimitCfgAOutputReference(this, "sslcps_limit_cfg");
  public get sslcpsLimitCfg() {
    return this._sslcpsLimitCfg;
  }
  public putSslcpsLimitCfg(value: SystemResourceAccountingTemplateListSystemResourcesSslcpsLimitCfgA) {
    this._sslcpsLimitCfg.internalValue = value;
  }
  public resetSslcpsLimitCfg() {
    this._sslcpsLimitCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslcpsLimitCfgInput() {
    return this._sslcpsLimitCfg.internalValue;
  }
}
export interface SystemResourceAccountingTemplateListStructA {
  /**
  * Enter template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#name SystemResourceAccountingA#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#user_tag SystemResourceAccountingA#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#uuid SystemResourceAccountingA#uuid}
  */
  readonly uuid?: string;
  /**
  * app_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#app_resources SystemResourceAccountingA#app_resources}
  */
  readonly appResources?: SystemResourceAccountingTemplateListAppResourcesA;
  /**
  * network_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#network_resources SystemResourceAccountingA#network_resources}
  */
  readonly networkResources?: SystemResourceAccountingTemplateListNetworkResourcesA;
  /**
  * system_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#system_resources SystemResourceAccountingA#system_resources}
  */
  readonly systemResources?: SystemResourceAccountingTemplateListSystemResourcesA;
}

export function systemResourceAccountingTemplateListStructAToTerraform(struct?: SystemResourceAccountingTemplateListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    app_resources: systemResourceAccountingTemplateListAppResourcesAToTerraform(struct!.appResources),
    network_resources: systemResourceAccountingTemplateListNetworkResourcesAToTerraform(struct!.networkResources),
    system_resources: systemResourceAccountingTemplateListSystemResourcesAToTerraform(struct!.systemResources),
  }
}


export function systemResourceAccountingTemplateListStructAToHclTerraform(struct?: SystemResourceAccountingTemplateListStructA | cdktf.IResolvable): any {
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
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_resources: {
      value: systemResourceAccountingTemplateListAppResourcesAToHclTerraform(struct!.appResources),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesAList",
    },
    network_resources: {
      value: systemResourceAccountingTemplateListNetworkResourcesAToHclTerraform(struct!.networkResources),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListNetworkResourcesAList",
    },
    system_resources: {
      value: systemResourceAccountingTemplateListSystemResourcesAToHclTerraform(struct!.systemResources),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListSystemResourcesAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemResourceAccountingTemplateListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._appResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appResources = this._appResources?.internalValue;
    }
    if (this._networkResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkResources = this._networkResources?.internalValue;
    }
    if (this._systemResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemResources = this._systemResources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._appResources.internalValue = undefined;
      this._networkResources.internalValue = undefined;
      this._systemResources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._appResources.internalValue = value.appResources;
      this._networkResources.internalValue = value.networkResources;
      this._systemResources.internalValue = value.systemResources;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // app_resources - computed: false, optional: true, required: false
  private _appResources = new SystemResourceAccountingTemplateListAppResourcesAOutputReference(this, "app_resources");
  public get appResources() {
    return this._appResources;
  }
  public putAppResources(value: SystemResourceAccountingTemplateListAppResourcesA) {
    this._appResources.internalValue = value;
  }
  public resetAppResources() {
    this._appResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appResourcesInput() {
    return this._appResources.internalValue;
  }

  // network_resources - computed: false, optional: true, required: false
  private _networkResources = new SystemResourceAccountingTemplateListNetworkResourcesAOutputReference(this, "network_resources");
  public get networkResources() {
    return this._networkResources;
  }
  public putNetworkResources(value: SystemResourceAccountingTemplateListNetworkResourcesA) {
    this._networkResources.internalValue = value;
  }
  public resetNetworkResources() {
    this._networkResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkResourcesInput() {
    return this._networkResources.internalValue;
  }

  // system_resources - computed: false, optional: true, required: false
  private _systemResources = new SystemResourceAccountingTemplateListSystemResourcesAOutputReference(this, "system_resources");
  public get systemResources() {
    return this._systemResources;
  }
  public putSystemResources(value: SystemResourceAccountingTemplateListSystemResourcesA) {
    this._systemResources.internalValue = value;
  }
  public resetSystemResources() {
    this._systemResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemResourcesInput() {
    return this._systemResources.internalValue;
  }
}

export class SystemResourceAccountingTemplateListStructAList extends cdktf.ComplexList {
  public internalValue? : SystemResourceAccountingTemplateListStructA[] | cdktf.IResolvable

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
  public get(index: number): SystemResourceAccountingTemplateListStructAOutputReference {
    return new SystemResourceAccountingTemplateListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting thunder_system_resource_accounting}
*/
export class SystemResourceAccountingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_resource_accounting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemResourceAccountingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemResourceAccountingA to import
  * @param importFromId The id of the existing SystemResourceAccountingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemResourceAccountingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_resource_accounting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting thunder_system_resource_accounting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemResourceAccountingAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemResourceAccountingAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_resource_accounting',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._uuid = config.uuid;
    this._templateList.internalValue = config.templateList;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // template_list - computed: false, optional: true, required: false
  private _templateList = new SystemResourceAccountingTemplateListStructAList(this, "template_list", false);
  public get templateList() {
    return this._templateList;
  }
  public putTemplateList(value: SystemResourceAccountingTemplateListStructA[] | cdktf.IResolvable) {
    this._templateList.internalValue = value;
  }
  public resetTemplateList() {
    this._templateList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateListInput() {
    return this._templateList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      template_list: cdktf.listMapper(systemResourceAccountingTemplateListStructAToTerraform, true)(this._templateList.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_list: {
        value: cdktf.listMapperHcl(systemResourceAccountingTemplateListStructAToHclTerraform, true)(this._templateList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
