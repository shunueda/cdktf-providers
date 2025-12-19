// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemResourceAccountingTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#id SystemResourceAccountingTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enter template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#name SystemResourceAccountingTemplate#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#user_tag SystemResourceAccountingTemplate#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#uuid SystemResourceAccountingTemplate#uuid}
  */
  readonly uuid?: string;
  /**
  * app_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#app_resources SystemResourceAccountingTemplate#app_resources}
  */
  readonly appResources?: SystemResourceAccountingTemplateAppResources;
  /**
  * network_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#network_resources SystemResourceAccountingTemplate#network_resources}
  */
  readonly networkResources?: SystemResourceAccountingTemplateNetworkResources;
  /**
  * system_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#system_resources SystemResourceAccountingTemplate#system_resources}
  */
  readonly systemResources?: SystemResourceAccountingTemplateSystemResources;
}
export interface SystemResourceAccountingTemplateAppResourcesCacheTemplateCfg {
  /**
  * Enter the number of cache-template allowed (cache-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#cache_template_max SystemResourceAccountingTemplate#cache_template_max}
  */
  readonly cacheTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#cache_template_min_guarantee SystemResourceAccountingTemplate#cache_template_min_guarantee}
  */
  readonly cacheTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesCacheTemplateCfgToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesCacheTemplateCfgOutputReference | SystemResourceAccountingTemplateAppResourcesCacheTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_template_max: cdktf.numberToTerraform(struct!.cacheTemplateMax),
    cache_template_min_guarantee: cdktf.numberToTerraform(struct!.cacheTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesCacheTemplateCfgToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesCacheTemplateCfgOutputReference | SystemResourceAccountingTemplateAppResourcesCacheTemplateCfg): any {
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

export class SystemResourceAccountingTemplateAppResourcesCacheTemplateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesCacheTemplateCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesCacheTemplateCfg | undefined) {
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
export interface SystemResourceAccountingTemplateAppResourcesClientSslTemplateCfg {
  /**
  * Enter the number of client-ssl-template allowed (client-ssl-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#client_ssl_template_max SystemResourceAccountingTemplate#client_ssl_template_max}
  */
  readonly clientSslTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#client_ssl_template_min_guarantee SystemResourceAccountingTemplate#client_ssl_template_min_guarantee}
  */
  readonly clientSslTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesClientSslTemplateCfgToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesClientSslTemplateCfgOutputReference | SystemResourceAccountingTemplateAppResourcesClientSslTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ssl_template_max: cdktf.numberToTerraform(struct!.clientSslTemplateMax),
    client_ssl_template_min_guarantee: cdktf.numberToTerraform(struct!.clientSslTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesClientSslTemplateCfgToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesClientSslTemplateCfgOutputReference | SystemResourceAccountingTemplateAppResourcesClientSslTemplateCfg): any {
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

export class SystemResourceAccountingTemplateAppResourcesClientSslTemplateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesClientSslTemplateCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesClientSslTemplateCfg | undefined) {
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
export interface SystemResourceAccountingTemplateAppResourcesConnReuseTemplateCfg {
  /**
  * Enter the number of conn-reuse-template allowed (conn-reuse-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#conn_reuse_template_max SystemResourceAccountingTemplate#conn_reuse_template_max}
  */
  readonly connReuseTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#conn_reuse_template_min_guarantee SystemResourceAccountingTemplate#conn_reuse_template_min_guarantee}
  */
  readonly connReuseTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesConnReuseTemplateCfgToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesConnReuseTemplateCfgOutputReference | SystemResourceAccountingTemplateAppResourcesConnReuseTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conn_reuse_template_max: cdktf.numberToTerraform(struct!.connReuseTemplateMax),
    conn_reuse_template_min_guarantee: cdktf.numberToTerraform(struct!.connReuseTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesConnReuseTemplateCfgToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesConnReuseTemplateCfgOutputReference | SystemResourceAccountingTemplateAppResourcesConnReuseTemplateCfg): any {
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

export class SystemResourceAccountingTemplateAppResourcesConnReuseTemplateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesConnReuseTemplateCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesConnReuseTemplateCfg | undefined) {
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
export interface SystemResourceAccountingTemplateAppResourcesFastTcpTemplateCfg {
  /**
  * Enter the number of fast-tcp-template allowed (fast-tcp-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#fast_tcp_template_max SystemResourceAccountingTemplate#fast_tcp_template_max}
  */
  readonly fastTcpTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#fast_tcp_template_min_guarantee SystemResourceAccountingTemplate#fast_tcp_template_min_guarantee}
  */
  readonly fastTcpTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesFastTcpTemplateCfgToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesFastTcpTemplateCfgOutputReference | SystemResourceAccountingTemplateAppResourcesFastTcpTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fast_tcp_template_max: cdktf.numberToTerraform(struct!.fastTcpTemplateMax),
    fast_tcp_template_min_guarantee: cdktf.numberToTerraform(struct!.fastTcpTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesFastTcpTemplateCfgToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesFastTcpTemplateCfgOutputReference | SystemResourceAccountingTemplateAppResourcesFastTcpTemplateCfg): any {
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

export class SystemResourceAccountingTemplateAppResourcesFastTcpTemplateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesFastTcpTemplateCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesFastTcpTemplateCfg | undefined) {
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
export interface SystemResourceAccountingTemplateAppResourcesFastUdpTemplateCfg {
  /**
  * Enter the number of fast-udp-template allowed (fast-udp-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#fast_udp_template_max SystemResourceAccountingTemplate#fast_udp_template_max}
  */
  readonly fastUdpTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#fast_udp_template_min_guarantee SystemResourceAccountingTemplate#fast_udp_template_min_guarantee}
  */
  readonly fastUdpTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesFastUdpTemplateCfgToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesFastUdpTemplateCfgOutputReference | SystemResourceAccountingTemplateAppResourcesFastUdpTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fast_udp_template_max: cdktf.numberToTerraform(struct!.fastUdpTemplateMax),
    fast_udp_template_min_guarantee: cdktf.numberToTerraform(struct!.fastUdpTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesFastUdpTemplateCfgToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesFastUdpTemplateCfgOutputReference | SystemResourceAccountingTemplateAppResourcesFastUdpTemplateCfg): any {
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

export class SystemResourceAccountingTemplateAppResourcesFastUdpTemplateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesFastUdpTemplateCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesFastUdpTemplateCfg | undefined) {
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
export interface SystemResourceAccountingTemplateAppResourcesFixTemplateCfg {
  /**
  * Enter the number of fix-template allowed (fix-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#fix_template_max SystemResourceAccountingTemplate#fix_template_max}
  */
  readonly fixTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#fix_template_min_guarantee SystemResourceAccountingTemplate#fix_template_min_guarantee}
  */
  readonly fixTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesFixTemplateCfgToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesFixTemplateCfgOutputReference | SystemResourceAccountingTemplateAppResourcesFixTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fix_template_max: cdktf.numberToTerraform(struct!.fixTemplateMax),
    fix_template_min_guarantee: cdktf.numberToTerraform(struct!.fixTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesFixTemplateCfgToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesFixTemplateCfgOutputReference | SystemResourceAccountingTemplateAppResourcesFixTemplateCfg): any {
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

export class SystemResourceAccountingTemplateAppResourcesFixTemplateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesFixTemplateCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesFixTemplateCfg | undefined) {
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
export interface SystemResourceAccountingTemplateAppResourcesGslbDeviceCfg {
  /**
  * Enter the number of gslb-device allowed (gslb-device count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_device_max SystemResourceAccountingTemplate#gslb_device_max}
  */
  readonly gslbDeviceMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_device_min_guarantee SystemResourceAccountingTemplate#gslb_device_min_guarantee}
  */
  readonly gslbDeviceMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesGslbDeviceCfgToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbDeviceCfgOutputReference | SystemResourceAccountingTemplateAppResourcesGslbDeviceCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_device_max: cdktf.numberToTerraform(struct!.gslbDeviceMax),
    gslb_device_min_guarantee: cdktf.numberToTerraform(struct!.gslbDeviceMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesGslbDeviceCfgToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbDeviceCfgOutputReference | SystemResourceAccountingTemplateAppResourcesGslbDeviceCfg): any {
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

export class SystemResourceAccountingTemplateAppResourcesGslbDeviceCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesGslbDeviceCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesGslbDeviceCfg | undefined) {
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
export interface SystemResourceAccountingTemplateAppResourcesGslbGeoLocationCfg {
  /**
  * Enter the number of gslb-geo-location allowed (gslb-geo-location count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_geo_location_max SystemResourceAccountingTemplate#gslb_geo_location_max}
  */
  readonly gslbGeoLocationMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_geo_location_min_guarantee SystemResourceAccountingTemplate#gslb_geo_location_min_guarantee}
  */
  readonly gslbGeoLocationMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesGslbGeoLocationCfgToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbGeoLocationCfgOutputReference | SystemResourceAccountingTemplateAppResourcesGslbGeoLocationCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_geo_location_max: cdktf.numberToTerraform(struct!.gslbGeoLocationMax),
    gslb_geo_location_min_guarantee: cdktf.numberToTerraform(struct!.gslbGeoLocationMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesGslbGeoLocationCfgToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbGeoLocationCfgOutputReference | SystemResourceAccountingTemplateAppResourcesGslbGeoLocationCfg): any {
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

export class SystemResourceAccountingTemplateAppResourcesGslbGeoLocationCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesGslbGeoLocationCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesGslbGeoLocationCfg | undefined) {
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
export interface SystemResourceAccountingTemplateAppResourcesGslbIpListCfg {
  /**
  * Enter the number of gslb-ip-list allowed (gslb-ip-list count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_ip_list_max SystemResourceAccountingTemplate#gslb_ip_list_max}
  */
  readonly gslbIpListMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_ip_list_min_guarantee SystemResourceAccountingTemplate#gslb_ip_list_min_guarantee}
  */
  readonly gslbIpListMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesGslbIpListCfgToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbIpListCfgOutputReference | SystemResourceAccountingTemplateAppResourcesGslbIpListCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_ip_list_max: cdktf.numberToTerraform(struct!.gslbIpListMax),
    gslb_ip_list_min_guarantee: cdktf.numberToTerraform(struct!.gslbIpListMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesGslbIpListCfgToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbIpListCfgOutputReference | SystemResourceAccountingTemplateAppResourcesGslbIpListCfg): any {
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

export class SystemResourceAccountingTemplateAppResourcesGslbIpListCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesGslbIpListCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesGslbIpListCfg | undefined) {
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
export interface SystemResourceAccountingTemplateAppResourcesGslbPolicyCfg {
  /**
  * Enter the number of gslb-policy allowed (gslb-policy count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_policy_max SystemResourceAccountingTemplate#gslb_policy_max}
  */
  readonly gslbPolicyMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_policy_min_guarantee SystemResourceAccountingTemplate#gslb_policy_min_guarantee}
  */
  readonly gslbPolicyMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesGslbPolicyCfgToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbPolicyCfgOutputReference | SystemResourceAccountingTemplateAppResourcesGslbPolicyCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_policy_max: cdktf.numberToTerraform(struct!.gslbPolicyMax),
    gslb_policy_min_guarantee: cdktf.numberToTerraform(struct!.gslbPolicyMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesGslbPolicyCfgToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbPolicyCfgOutputReference | SystemResourceAccountingTemplateAppResourcesGslbPolicyCfg): any {
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

export class SystemResourceAccountingTemplateAppResourcesGslbPolicyCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesGslbPolicyCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesGslbPolicyCfg | undefined) {
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
export interface SystemResourceAccountingTemplateAppResourcesGslbServiceCfg {
  /**
  * Enter the number of gslb-service allowed (gslb-service count (default is max-value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_service_max SystemResourceAccountingTemplate#gslb_service_max}
  */
  readonly gslbServiceMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_service_min_guarantee SystemResourceAccountingTemplate#gslb_service_min_guarantee}
  */
  readonly gslbServiceMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesGslbServiceCfgToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbServiceCfgOutputReference | SystemResourceAccountingTemplateAppResourcesGslbServiceCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_service_max: cdktf.numberToTerraform(struct!.gslbServiceMax),
    gslb_service_min_guarantee: cdktf.numberToTerraform(struct!.gslbServiceMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesGslbServiceCfgToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbServiceCfgOutputReference | SystemResourceAccountingTemplateAppResourcesGslbServiceCfg): any {
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

export class SystemResourceAccountingTemplateAppResourcesGslbServiceCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesGslbServiceCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesGslbServiceCfg | undefined) {
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
export interface SystemResourceAccountingTemplateAppResourcesGslbServiceIpCfg {
  /**
  * Enter the number of gslb-service-ip allowed (gslb-service-ip count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_service_ip_max SystemResourceAccountingTemplate#gslb_service_ip_max}
  */
  readonly gslbServiceIpMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_service_ip_min_guarantee SystemResourceAccountingTemplate#gslb_service_ip_min_guarantee}
  */
  readonly gslbServiceIpMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesGslbServiceIpCfgToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbServiceIpCfgOutputReference | SystemResourceAccountingTemplateAppResourcesGslbServiceIpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_service_ip_max: cdktf.numberToTerraform(struct!.gslbServiceIpMax),
    gslb_service_ip_min_guarantee: cdktf.numberToTerraform(struct!.gslbServiceIpMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesGslbServiceIpCfgToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbServiceIpCfgOutputReference | SystemResourceAccountingTemplateAppResourcesGslbServiceIpCfg): any {
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

export class SystemResourceAccountingTemplateAppResourcesGslbServiceIpCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesGslbServiceIpCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesGslbServiceIpCfg | undefined) {
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
export interface SystemResourceAccountingTemplateAppResourcesGslbServicePortCfg {
  /**
  * Enter the number of gslb-service-port allowed ( gslb-service-port count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_service_port_max SystemResourceAccountingTemplate#gslb_service_port_max}
  */
  readonly gslbServicePortMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_service_port_min_guarantee SystemResourceAccountingTemplate#gslb_service_port_min_guarantee}
  */
  readonly gslbServicePortMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesGslbServicePortCfgToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbServicePortCfgOutputReference | SystemResourceAccountingTemplateAppResourcesGslbServicePortCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_service_port_max: cdktf.numberToTerraform(struct!.gslbServicePortMax),
    gslb_service_port_min_guarantee: cdktf.numberToTerraform(struct!.gslbServicePortMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesGslbServicePortCfgToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbServicePortCfgOutputReference | SystemResourceAccountingTemplateAppResourcesGslbServicePortCfg): any {
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

export class SystemResourceAccountingTemplateAppResourcesGslbServicePortCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesGslbServicePortCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesGslbServicePortCfg | undefined) {
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
export interface SystemResourceAccountingTemplateAppResourcesGslbSiteCfg {
  /**
  * Enter the number of gslb-site allowed (gslb-site count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_site_max SystemResourceAccountingTemplate#gslb_site_max}
  */
  readonly gslbSiteMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_site_min_guarantee SystemResourceAccountingTemplate#gslb_site_min_guarantee}
  */
  readonly gslbSiteMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesGslbSiteCfgToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbSiteCfgOutputReference | SystemResourceAccountingTemplateAppResourcesGslbSiteCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_site_max: cdktf.numberToTerraform(struct!.gslbSiteMax),
    gslb_site_min_guarantee: cdktf.numberToTerraform(struct!.gslbSiteMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesGslbSiteCfgToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbSiteCfgOutputReference | SystemResourceAccountingTemplateAppResourcesGslbSiteCfg): any {
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

export class SystemResourceAccountingTemplateAppResourcesGslbSiteCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesGslbSiteCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesGslbSiteCfg | undefined) {
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
export interface SystemResourceAccountingTemplateAppResourcesGslbSvcGroupCfg {
  /**
  * Enter the number of gslb-svc-group allowed (gslb-svc-group count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_svc_group_max SystemResourceAccountingTemplate#gslb_svc_group_max}
  */
  readonly gslbSvcGroupMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_svc_group_min_guarantee SystemResourceAccountingTemplate#gslb_svc_group_min_guarantee}
  */
  readonly gslbSvcGroupMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesGslbSvcGroupCfgToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbSvcGroupCfgOutputReference | SystemResourceAccountingTemplateAppResourcesGslbSvcGroupCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_svc_group_max: cdktf.numberToTerraform(struct!.gslbSvcGroupMax),
    gslb_svc_group_min_guarantee: cdktf.numberToTerraform(struct!.gslbSvcGroupMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesGslbSvcGroupCfgToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbSvcGroupCfgOutputReference | SystemResourceAccountingTemplateAppResourcesGslbSvcGroupCfg): any {
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

export class SystemResourceAccountingTemplateAppResourcesGslbSvcGroupCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesGslbSvcGroupCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesGslbSvcGroupCfg | undefined) {
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
export interface SystemResourceAccountingTemplateAppResourcesGslbTemplateCfg {
  /**
  * Enter the number of gslb-template allowed (gslb-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_template_max SystemResourceAccountingTemplate#gslb_template_max}
  */
  readonly gslbTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_template_min_guarantee SystemResourceAccountingTemplate#gslb_template_min_guarantee}
  */
  readonly gslbTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesGslbTemplateCfgToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbTemplateCfgOutputReference | SystemResourceAccountingTemplateAppResourcesGslbTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_template_max: cdktf.numberToTerraform(struct!.gslbTemplateMax),
    gslb_template_min_guarantee: cdktf.numberToTerraform(struct!.gslbTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesGslbTemplateCfgToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbTemplateCfgOutputReference | SystemResourceAccountingTemplateAppResourcesGslbTemplateCfg): any {
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

export class SystemResourceAccountingTemplateAppResourcesGslbTemplateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesGslbTemplateCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesGslbTemplateCfg | undefined) {
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
export interface SystemResourceAccountingTemplateAppResourcesGslbZoneCfg {
  /**
  * Enter the number of gslb-zone allowed (gslb-zone count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_zone_max SystemResourceAccountingTemplate#gslb_zone_max}
  */
  readonly gslbZoneMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_zone_min_guarantee SystemResourceAccountingTemplate#gslb_zone_min_guarantee}
  */
  readonly gslbZoneMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesGslbZoneCfgToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbZoneCfgOutputReference | SystemResourceAccountingTemplateAppResourcesGslbZoneCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_zone_max: cdktf.numberToTerraform(struct!.gslbZoneMax),
    gslb_zone_min_guarantee: cdktf.numberToTerraform(struct!.gslbZoneMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesGslbZoneCfgToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbZoneCfgOutputReference | SystemResourceAccountingTemplateAppResourcesGslbZoneCfg): any {
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

export class SystemResourceAccountingTemplateAppResourcesGslbZoneCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesGslbZoneCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesGslbZoneCfg | undefined) {
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
export interface SystemResourceAccountingTemplateAppResourcesHealthMonitorCfg {
  /**
  * Enter the number of health monitors allowed (health-monitor count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#health_monitor_max SystemResourceAccountingTemplate#health_monitor_max}
  */
  readonly healthMonitorMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#health_monitor_min_guarantee SystemResourceAccountingTemplate#health_monitor_min_guarantee}
  */
  readonly healthMonitorMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesHealthMonitorCfgToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesHealthMonitorCfgOutputReference | SystemResourceAccountingTemplateAppResourcesHealthMonitorCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_monitor_max: cdktf.numberToTerraform(struct!.healthMonitorMax),
    health_monitor_min_guarantee: cdktf.numberToTerraform(struct!.healthMonitorMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesHealthMonitorCfgToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesHealthMonitorCfgOutputReference | SystemResourceAccountingTemplateAppResourcesHealthMonitorCfg): any {
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

export class SystemResourceAccountingTemplateAppResourcesHealthMonitorCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesHealthMonitorCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesHealthMonitorCfg | undefined) {
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
export interface SystemResourceAccountingTemplateAppResourcesHttpTemplateCfg {
  /**
  * Enter the number of http-template allowed (http-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#http_template_max SystemResourceAccountingTemplate#http_template_max}
  */
  readonly httpTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#http_template_min_guarantee SystemResourceAccountingTemplate#http_template_min_guarantee}
  */
  readonly httpTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesHttpTemplateCfgToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesHttpTemplateCfgOutputReference | SystemResourceAccountingTemplateAppResourcesHttpTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_template_max: cdktf.numberToTerraform(struct!.httpTemplateMax),
    http_template_min_guarantee: cdktf.numberToTerraform(struct!.httpTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesHttpTemplateCfgToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesHttpTemplateCfgOutputReference | SystemResourceAccountingTemplateAppResourcesHttpTemplateCfg): any {
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

export class SystemResourceAccountingTemplateAppResourcesHttpTemplateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesHttpTemplateCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesHttpTemplateCfg | undefined) {
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
export interface SystemResourceAccountingTemplateAppResourcesLinkCostTemplateCfg {
  /**
  * Enter the number of link-cost-template allowed (link-cost-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#link_cost_template_max SystemResourceAccountingTemplate#link_cost_template_max}
  */
  readonly linkCostTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#link_cost_template_min_guarantee SystemResourceAccountingTemplate#link_cost_template_min_guarantee}
  */
  readonly linkCostTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesLinkCostTemplateCfgToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesLinkCostTemplateCfgOutputReference | SystemResourceAccountingTemplateAppResourcesLinkCostTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    link_cost_template_max: cdktf.numberToTerraform(struct!.linkCostTemplateMax),
    link_cost_template_min_guarantee: cdktf.numberToTerraform(struct!.linkCostTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesLinkCostTemplateCfgToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesLinkCostTemplateCfgOutputReference | SystemResourceAccountingTemplateAppResourcesLinkCostTemplateCfg): any {
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

export class SystemResourceAccountingTemplateAppResourcesLinkCostTemplateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesLinkCostTemplateCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesLinkCostTemplateCfg | undefined) {
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
export interface SystemResourceAccountingTemplateAppResourcesPbslbEntryCfg {
  /**
  * Enter the number of pbslb-entry allowed (pbslb-entry count)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#pbslb_entry_max SystemResourceAccountingTemplate#pbslb_entry_max}
  */
  readonly pbslbEntryMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#pbslb_entry_min_guarantee SystemResourceAccountingTemplate#pbslb_entry_min_guarantee}
  */
  readonly pbslbEntryMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesPbslbEntryCfgToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesPbslbEntryCfgOutputReference | SystemResourceAccountingTemplateAppResourcesPbslbEntryCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pbslb_entry_max: cdktf.numberToTerraform(struct!.pbslbEntryMax),
    pbslb_entry_min_guarantee: cdktf.numberToTerraform(struct!.pbslbEntryMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesPbslbEntryCfgToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesPbslbEntryCfgOutputReference | SystemResourceAccountingTemplateAppResourcesPbslbEntryCfg): any {
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

export class SystemResourceAccountingTemplateAppResourcesPbslbEntryCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesPbslbEntryCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesPbslbEntryCfg | undefined) {
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
export interface SystemResourceAccountingTemplateAppResourcesPersistCookieTemplateCfg {
  /**
  * Enter the number of persist-cookie-template allowed (persist-cookie-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#persist_cookie_template_max SystemResourceAccountingTemplate#persist_cookie_template_max}
  */
  readonly persistCookieTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#persist_cookie_template_min_guarantee SystemResourceAccountingTemplate#persist_cookie_template_min_guarantee}
  */
  readonly persistCookieTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesPersistCookieTemplateCfgToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesPersistCookieTemplateCfgOutputReference | SystemResourceAccountingTemplateAppResourcesPersistCookieTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    persist_cookie_template_max: cdktf.numberToTerraform(struct!.persistCookieTemplateMax),
    persist_cookie_template_min_guarantee: cdktf.numberToTerraform(struct!.persistCookieTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesPersistCookieTemplateCfgToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesPersistCookieTemplateCfgOutputReference | SystemResourceAccountingTemplateAppResourcesPersistCookieTemplateCfg): any {
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

export class SystemResourceAccountingTemplateAppResourcesPersistCookieTemplateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesPersistCookieTemplateCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesPersistCookieTemplateCfg | undefined) {
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
export interface SystemResourceAccountingTemplateAppResourcesPersistSrcipTemplateCfg {
  /**
  * Enter the number of persist-srcip-template allowed (persist-source-ip-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#persist_srcip_template_max SystemResourceAccountingTemplate#persist_srcip_template_max}
  */
  readonly persistSrcipTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#persist_srcip_template_min_guarantee SystemResourceAccountingTemplate#persist_srcip_template_min_guarantee}
  */
  readonly persistSrcipTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesPersistSrcipTemplateCfgToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesPersistSrcipTemplateCfgOutputReference | SystemResourceAccountingTemplateAppResourcesPersistSrcipTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    persist_srcip_template_max: cdktf.numberToTerraform(struct!.persistSrcipTemplateMax),
    persist_srcip_template_min_guarantee: cdktf.numberToTerraform(struct!.persistSrcipTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesPersistSrcipTemplateCfgToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesPersistSrcipTemplateCfgOutputReference | SystemResourceAccountingTemplateAppResourcesPersistSrcipTemplateCfg): any {
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

export class SystemResourceAccountingTemplateAppResourcesPersistSrcipTemplateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesPersistSrcipTemplateCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesPersistSrcipTemplateCfg | undefined) {
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
export interface SystemResourceAccountingTemplateAppResourcesProxyTemplateCfg {
  /**
  * Enter the number of proxy-template allowed (server-ssl-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#proxy_template_max SystemResourceAccountingTemplate#proxy_template_max}
  */
  readonly proxyTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#proxy_template_min_guarantee SystemResourceAccountingTemplate#proxy_template_min_guarantee}
  */
  readonly proxyTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesProxyTemplateCfgToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesProxyTemplateCfgOutputReference | SystemResourceAccountingTemplateAppResourcesProxyTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proxy_template_max: cdktf.numberToTerraform(struct!.proxyTemplateMax),
    proxy_template_min_guarantee: cdktf.numberToTerraform(struct!.proxyTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesProxyTemplateCfgToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesProxyTemplateCfgOutputReference | SystemResourceAccountingTemplateAppResourcesProxyTemplateCfg): any {
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

export class SystemResourceAccountingTemplateAppResourcesProxyTemplateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesProxyTemplateCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesProxyTemplateCfg | undefined) {
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
export interface SystemResourceAccountingTemplateAppResourcesRealPortCfg {
  /**
  * Enter the number of real-ports allowed (real-port count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#real_port_max SystemResourceAccountingTemplate#real_port_max}
  */
  readonly realPortMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#real_port_min_guarantee SystemResourceAccountingTemplate#real_port_min_guarantee}
  */
  readonly realPortMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesRealPortCfgToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesRealPortCfgOutputReference | SystemResourceAccountingTemplateAppResourcesRealPortCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    real_port_max: cdktf.numberToTerraform(struct!.realPortMax),
    real_port_min_guarantee: cdktf.numberToTerraform(struct!.realPortMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesRealPortCfgToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesRealPortCfgOutputReference | SystemResourceAccountingTemplateAppResourcesRealPortCfg): any {
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

export class SystemResourceAccountingTemplateAppResourcesRealPortCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesRealPortCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesRealPortCfg | undefined) {
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
export interface SystemResourceAccountingTemplateAppResourcesRealServerCfg {
  /**
  * Enter the number of real-servers allowed (real-server count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#real_server_max SystemResourceAccountingTemplate#real_server_max}
  */
  readonly realServerMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#real_server_min_guarantee SystemResourceAccountingTemplate#real_server_min_guarantee}
  */
  readonly realServerMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesRealServerCfgToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesRealServerCfgOutputReference | SystemResourceAccountingTemplateAppResourcesRealServerCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    real_server_max: cdktf.numberToTerraform(struct!.realServerMax),
    real_server_min_guarantee: cdktf.numberToTerraform(struct!.realServerMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesRealServerCfgToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesRealServerCfgOutputReference | SystemResourceAccountingTemplateAppResourcesRealServerCfg): any {
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

export class SystemResourceAccountingTemplateAppResourcesRealServerCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesRealServerCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesRealServerCfg | undefined) {
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
export interface SystemResourceAccountingTemplateAppResourcesServerSslTemplateCfg {
  /**
  * Enter the number of server-ssl-template allowed (server-ssl-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#server_ssl_template_max SystemResourceAccountingTemplate#server_ssl_template_max}
  */
  readonly serverSslTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#server_ssl_template_min_guarantee SystemResourceAccountingTemplate#server_ssl_template_min_guarantee}
  */
  readonly serverSslTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesServerSslTemplateCfgToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesServerSslTemplateCfgOutputReference | SystemResourceAccountingTemplateAppResourcesServerSslTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_ssl_template_max: cdktf.numberToTerraform(struct!.serverSslTemplateMax),
    server_ssl_template_min_guarantee: cdktf.numberToTerraform(struct!.serverSslTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesServerSslTemplateCfgToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesServerSslTemplateCfgOutputReference | SystemResourceAccountingTemplateAppResourcesServerSslTemplateCfg): any {
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

export class SystemResourceAccountingTemplateAppResourcesServerSslTemplateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesServerSslTemplateCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesServerSslTemplateCfg | undefined) {
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
export interface SystemResourceAccountingTemplateAppResourcesServiceGroupCfg {
  /**
  * Enter the number of service groups allowed (service-group count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#service_group_max SystemResourceAccountingTemplate#service_group_max}
  */
  readonly serviceGroupMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#service_group_min_guarantee SystemResourceAccountingTemplate#service_group_min_guarantee}
  */
  readonly serviceGroupMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesServiceGroupCfgToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesServiceGroupCfgOutputReference | SystemResourceAccountingTemplateAppResourcesServiceGroupCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_group_max: cdktf.numberToTerraform(struct!.serviceGroupMax),
    service_group_min_guarantee: cdktf.numberToTerraform(struct!.serviceGroupMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesServiceGroupCfgToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesServiceGroupCfgOutputReference | SystemResourceAccountingTemplateAppResourcesServiceGroupCfg): any {
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

export class SystemResourceAccountingTemplateAppResourcesServiceGroupCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesServiceGroupCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesServiceGroupCfg | undefined) {
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
export interface SystemResourceAccountingTemplateAppResourcesStreamTemplateCfg {
  /**
  * Enter the number of stream-template allowed (server-ssl-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#stream_template_max SystemResourceAccountingTemplate#stream_template_max}
  */
  readonly streamTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#stream_template_min_guarantee SystemResourceAccountingTemplate#stream_template_min_guarantee}
  */
  readonly streamTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesStreamTemplateCfgToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesStreamTemplateCfgOutputReference | SystemResourceAccountingTemplateAppResourcesStreamTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stream_template_max: cdktf.numberToTerraform(struct!.streamTemplateMax),
    stream_template_min_guarantee: cdktf.numberToTerraform(struct!.streamTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesStreamTemplateCfgToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesStreamTemplateCfgOutputReference | SystemResourceAccountingTemplateAppResourcesStreamTemplateCfg): any {
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

export class SystemResourceAccountingTemplateAppResourcesStreamTemplateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesStreamTemplateCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesStreamTemplateCfg | undefined) {
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
export interface SystemResourceAccountingTemplateAppResourcesVirtualPortCfg {
  /**
  * Enter the number of virtual-port allowed (virtual-port count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#virtual_port_max SystemResourceAccountingTemplate#virtual_port_max}
  */
  readonly virtualPortMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#virtual_port_min_guarantee SystemResourceAccountingTemplate#virtual_port_min_guarantee}
  */
  readonly virtualPortMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesVirtualPortCfgToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesVirtualPortCfgOutputReference | SystemResourceAccountingTemplateAppResourcesVirtualPortCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_port_max: cdktf.numberToTerraform(struct!.virtualPortMax),
    virtual_port_min_guarantee: cdktf.numberToTerraform(struct!.virtualPortMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesVirtualPortCfgToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesVirtualPortCfgOutputReference | SystemResourceAccountingTemplateAppResourcesVirtualPortCfg): any {
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

export class SystemResourceAccountingTemplateAppResourcesVirtualPortCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesVirtualPortCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesVirtualPortCfg | undefined) {
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
export interface SystemResourceAccountingTemplateAppResourcesVirtualServerCfg {
  /**
  * Enter the number of virtual-servers allowed (virtual-server count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#virtual_server_max SystemResourceAccountingTemplate#virtual_server_max}
  */
  readonly virtualServerMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#virtual_server_min_guarantee SystemResourceAccountingTemplate#virtual_server_min_guarantee}
  */
  readonly virtualServerMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesVirtualServerCfgToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesVirtualServerCfgOutputReference | SystemResourceAccountingTemplateAppResourcesVirtualServerCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_server_max: cdktf.numberToTerraform(struct!.virtualServerMax),
    virtual_server_min_guarantee: cdktf.numberToTerraform(struct!.virtualServerMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesVirtualServerCfgToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesVirtualServerCfgOutputReference | SystemResourceAccountingTemplateAppResourcesVirtualServerCfg): any {
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

export class SystemResourceAccountingTemplateAppResourcesVirtualServerCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesVirtualServerCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesVirtualServerCfg | undefined) {
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
export interface SystemResourceAccountingTemplateAppResources {
  /**
  * Enter the threshold as a percentage (Threshold in percentage(default is 100%))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#threshold SystemResourceAccountingTemplate#threshold}
  */
  readonly threshold?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#uuid SystemResourceAccountingTemplate#uuid}
  */
  readonly uuid?: string;
  /**
  * cache_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#cache_template_cfg SystemResourceAccountingTemplate#cache_template_cfg}
  */
  readonly cacheTemplateCfg?: SystemResourceAccountingTemplateAppResourcesCacheTemplateCfg;
  /**
  * client_ssl_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#client_ssl_template_cfg SystemResourceAccountingTemplate#client_ssl_template_cfg}
  */
  readonly clientSslTemplateCfg?: SystemResourceAccountingTemplateAppResourcesClientSslTemplateCfg;
  /**
  * conn_reuse_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#conn_reuse_template_cfg SystemResourceAccountingTemplate#conn_reuse_template_cfg}
  */
  readonly connReuseTemplateCfg?: SystemResourceAccountingTemplateAppResourcesConnReuseTemplateCfg;
  /**
  * fast_tcp_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#fast_tcp_template_cfg SystemResourceAccountingTemplate#fast_tcp_template_cfg}
  */
  readonly fastTcpTemplateCfg?: SystemResourceAccountingTemplateAppResourcesFastTcpTemplateCfg;
  /**
  * fast_udp_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#fast_udp_template_cfg SystemResourceAccountingTemplate#fast_udp_template_cfg}
  */
  readonly fastUdpTemplateCfg?: SystemResourceAccountingTemplateAppResourcesFastUdpTemplateCfg;
  /**
  * fix_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#fix_template_cfg SystemResourceAccountingTemplate#fix_template_cfg}
  */
  readonly fixTemplateCfg?: SystemResourceAccountingTemplateAppResourcesFixTemplateCfg;
  /**
  * gslb_device_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_device_cfg SystemResourceAccountingTemplate#gslb_device_cfg}
  */
  readonly gslbDeviceCfg?: SystemResourceAccountingTemplateAppResourcesGslbDeviceCfg;
  /**
  * gslb_geo_location_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_geo_location_cfg SystemResourceAccountingTemplate#gslb_geo_location_cfg}
  */
  readonly gslbGeoLocationCfg?: SystemResourceAccountingTemplateAppResourcesGslbGeoLocationCfg;
  /**
  * gslb_ip_list_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_ip_list_cfg SystemResourceAccountingTemplate#gslb_ip_list_cfg}
  */
  readonly gslbIpListCfg?: SystemResourceAccountingTemplateAppResourcesGslbIpListCfg;
  /**
  * gslb_policy_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_policy_cfg SystemResourceAccountingTemplate#gslb_policy_cfg}
  */
  readonly gslbPolicyCfg?: SystemResourceAccountingTemplateAppResourcesGslbPolicyCfg;
  /**
  * gslb_service_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_service_cfg SystemResourceAccountingTemplate#gslb_service_cfg}
  */
  readonly gslbServiceCfg?: SystemResourceAccountingTemplateAppResourcesGslbServiceCfg;
  /**
  * gslb_service_ip_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_service_ip_cfg SystemResourceAccountingTemplate#gslb_service_ip_cfg}
  */
  readonly gslbServiceIpCfg?: SystemResourceAccountingTemplateAppResourcesGslbServiceIpCfg;
  /**
  * gslb_service_port_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_service_port_cfg SystemResourceAccountingTemplate#gslb_service_port_cfg}
  */
  readonly gslbServicePortCfg?: SystemResourceAccountingTemplateAppResourcesGslbServicePortCfg;
  /**
  * gslb_site_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_site_cfg SystemResourceAccountingTemplate#gslb_site_cfg}
  */
  readonly gslbSiteCfg?: SystemResourceAccountingTemplateAppResourcesGslbSiteCfg;
  /**
  * gslb_svc_group_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_svc_group_cfg SystemResourceAccountingTemplate#gslb_svc_group_cfg}
  */
  readonly gslbSvcGroupCfg?: SystemResourceAccountingTemplateAppResourcesGslbSvcGroupCfg;
  /**
  * gslb_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_template_cfg SystemResourceAccountingTemplate#gslb_template_cfg}
  */
  readonly gslbTemplateCfg?: SystemResourceAccountingTemplateAppResourcesGslbTemplateCfg;
  /**
  * gslb_zone_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#gslb_zone_cfg SystemResourceAccountingTemplate#gslb_zone_cfg}
  */
  readonly gslbZoneCfg?: SystemResourceAccountingTemplateAppResourcesGslbZoneCfg;
  /**
  * health_monitor_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#health_monitor_cfg SystemResourceAccountingTemplate#health_monitor_cfg}
  */
  readonly healthMonitorCfg?: SystemResourceAccountingTemplateAppResourcesHealthMonitorCfg;
  /**
  * http_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#http_template_cfg SystemResourceAccountingTemplate#http_template_cfg}
  */
  readonly httpTemplateCfg?: SystemResourceAccountingTemplateAppResourcesHttpTemplateCfg;
  /**
  * link_cost_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#link_cost_template_cfg SystemResourceAccountingTemplate#link_cost_template_cfg}
  */
  readonly linkCostTemplateCfg?: SystemResourceAccountingTemplateAppResourcesLinkCostTemplateCfg;
  /**
  * pbslb_entry_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#pbslb_entry_cfg SystemResourceAccountingTemplate#pbslb_entry_cfg}
  */
  readonly pbslbEntryCfg?: SystemResourceAccountingTemplateAppResourcesPbslbEntryCfg;
  /**
  * persist_cookie_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#persist_cookie_template_cfg SystemResourceAccountingTemplate#persist_cookie_template_cfg}
  */
  readonly persistCookieTemplateCfg?: SystemResourceAccountingTemplateAppResourcesPersistCookieTemplateCfg;
  /**
  * persist_srcip_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#persist_srcip_template_cfg SystemResourceAccountingTemplate#persist_srcip_template_cfg}
  */
  readonly persistSrcipTemplateCfg?: SystemResourceAccountingTemplateAppResourcesPersistSrcipTemplateCfg;
  /**
  * proxy_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#proxy_template_cfg SystemResourceAccountingTemplate#proxy_template_cfg}
  */
  readonly proxyTemplateCfg?: SystemResourceAccountingTemplateAppResourcesProxyTemplateCfg;
  /**
  * real_port_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#real_port_cfg SystemResourceAccountingTemplate#real_port_cfg}
  */
  readonly realPortCfg?: SystemResourceAccountingTemplateAppResourcesRealPortCfg;
  /**
  * real_server_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#real_server_cfg SystemResourceAccountingTemplate#real_server_cfg}
  */
  readonly realServerCfg?: SystemResourceAccountingTemplateAppResourcesRealServerCfg;
  /**
  * server_ssl_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#server_ssl_template_cfg SystemResourceAccountingTemplate#server_ssl_template_cfg}
  */
  readonly serverSslTemplateCfg?: SystemResourceAccountingTemplateAppResourcesServerSslTemplateCfg;
  /**
  * service_group_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#service_group_cfg SystemResourceAccountingTemplate#service_group_cfg}
  */
  readonly serviceGroupCfg?: SystemResourceAccountingTemplateAppResourcesServiceGroupCfg;
  /**
  * stream_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#stream_template_cfg SystemResourceAccountingTemplate#stream_template_cfg}
  */
  readonly streamTemplateCfg?: SystemResourceAccountingTemplateAppResourcesStreamTemplateCfg;
  /**
  * virtual_port_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#virtual_port_cfg SystemResourceAccountingTemplate#virtual_port_cfg}
  */
  readonly virtualPortCfg?: SystemResourceAccountingTemplateAppResourcesVirtualPortCfg;
  /**
  * virtual_server_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#virtual_server_cfg SystemResourceAccountingTemplate#virtual_server_cfg}
  */
  readonly virtualServerCfg?: SystemResourceAccountingTemplateAppResourcesVirtualServerCfg;
}

export function systemResourceAccountingTemplateAppResourcesToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesOutputReference | SystemResourceAccountingTemplateAppResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    cache_template_cfg: systemResourceAccountingTemplateAppResourcesCacheTemplateCfgToTerraform(struct!.cacheTemplateCfg),
    client_ssl_template_cfg: systemResourceAccountingTemplateAppResourcesClientSslTemplateCfgToTerraform(struct!.clientSslTemplateCfg),
    conn_reuse_template_cfg: systemResourceAccountingTemplateAppResourcesConnReuseTemplateCfgToTerraform(struct!.connReuseTemplateCfg),
    fast_tcp_template_cfg: systemResourceAccountingTemplateAppResourcesFastTcpTemplateCfgToTerraform(struct!.fastTcpTemplateCfg),
    fast_udp_template_cfg: systemResourceAccountingTemplateAppResourcesFastUdpTemplateCfgToTerraform(struct!.fastUdpTemplateCfg),
    fix_template_cfg: systemResourceAccountingTemplateAppResourcesFixTemplateCfgToTerraform(struct!.fixTemplateCfg),
    gslb_device_cfg: systemResourceAccountingTemplateAppResourcesGslbDeviceCfgToTerraform(struct!.gslbDeviceCfg),
    gslb_geo_location_cfg: systemResourceAccountingTemplateAppResourcesGslbGeoLocationCfgToTerraform(struct!.gslbGeoLocationCfg),
    gslb_ip_list_cfg: systemResourceAccountingTemplateAppResourcesGslbIpListCfgToTerraform(struct!.gslbIpListCfg),
    gslb_policy_cfg: systemResourceAccountingTemplateAppResourcesGslbPolicyCfgToTerraform(struct!.gslbPolicyCfg),
    gslb_service_cfg: systemResourceAccountingTemplateAppResourcesGslbServiceCfgToTerraform(struct!.gslbServiceCfg),
    gslb_service_ip_cfg: systemResourceAccountingTemplateAppResourcesGslbServiceIpCfgToTerraform(struct!.gslbServiceIpCfg),
    gslb_service_port_cfg: systemResourceAccountingTemplateAppResourcesGslbServicePortCfgToTerraform(struct!.gslbServicePortCfg),
    gslb_site_cfg: systemResourceAccountingTemplateAppResourcesGslbSiteCfgToTerraform(struct!.gslbSiteCfg),
    gslb_svc_group_cfg: systemResourceAccountingTemplateAppResourcesGslbSvcGroupCfgToTerraform(struct!.gslbSvcGroupCfg),
    gslb_template_cfg: systemResourceAccountingTemplateAppResourcesGslbTemplateCfgToTerraform(struct!.gslbTemplateCfg),
    gslb_zone_cfg: systemResourceAccountingTemplateAppResourcesGslbZoneCfgToTerraform(struct!.gslbZoneCfg),
    health_monitor_cfg: systemResourceAccountingTemplateAppResourcesHealthMonitorCfgToTerraform(struct!.healthMonitorCfg),
    http_template_cfg: systemResourceAccountingTemplateAppResourcesHttpTemplateCfgToTerraform(struct!.httpTemplateCfg),
    link_cost_template_cfg: systemResourceAccountingTemplateAppResourcesLinkCostTemplateCfgToTerraform(struct!.linkCostTemplateCfg),
    pbslb_entry_cfg: systemResourceAccountingTemplateAppResourcesPbslbEntryCfgToTerraform(struct!.pbslbEntryCfg),
    persist_cookie_template_cfg: systemResourceAccountingTemplateAppResourcesPersistCookieTemplateCfgToTerraform(struct!.persistCookieTemplateCfg),
    persist_srcip_template_cfg: systemResourceAccountingTemplateAppResourcesPersistSrcipTemplateCfgToTerraform(struct!.persistSrcipTemplateCfg),
    proxy_template_cfg: systemResourceAccountingTemplateAppResourcesProxyTemplateCfgToTerraform(struct!.proxyTemplateCfg),
    real_port_cfg: systemResourceAccountingTemplateAppResourcesRealPortCfgToTerraform(struct!.realPortCfg),
    real_server_cfg: systemResourceAccountingTemplateAppResourcesRealServerCfgToTerraform(struct!.realServerCfg),
    server_ssl_template_cfg: systemResourceAccountingTemplateAppResourcesServerSslTemplateCfgToTerraform(struct!.serverSslTemplateCfg),
    service_group_cfg: systemResourceAccountingTemplateAppResourcesServiceGroupCfgToTerraform(struct!.serviceGroupCfg),
    stream_template_cfg: systemResourceAccountingTemplateAppResourcesStreamTemplateCfgToTerraform(struct!.streamTemplateCfg),
    virtual_port_cfg: systemResourceAccountingTemplateAppResourcesVirtualPortCfgToTerraform(struct!.virtualPortCfg),
    virtual_server_cfg: systemResourceAccountingTemplateAppResourcesVirtualServerCfgToTerraform(struct!.virtualServerCfg),
  }
}


export function systemResourceAccountingTemplateAppResourcesToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesOutputReference | SystemResourceAccountingTemplateAppResources): any {
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
      value: systemResourceAccountingTemplateAppResourcesCacheTemplateCfgToHclTerraform(struct!.cacheTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateAppResourcesCacheTemplateCfgList",
    },
    client_ssl_template_cfg: {
      value: systemResourceAccountingTemplateAppResourcesClientSslTemplateCfgToHclTerraform(struct!.clientSslTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateAppResourcesClientSslTemplateCfgList",
    },
    conn_reuse_template_cfg: {
      value: systemResourceAccountingTemplateAppResourcesConnReuseTemplateCfgToHclTerraform(struct!.connReuseTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateAppResourcesConnReuseTemplateCfgList",
    },
    fast_tcp_template_cfg: {
      value: systemResourceAccountingTemplateAppResourcesFastTcpTemplateCfgToHclTerraform(struct!.fastTcpTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateAppResourcesFastTcpTemplateCfgList",
    },
    fast_udp_template_cfg: {
      value: systemResourceAccountingTemplateAppResourcesFastUdpTemplateCfgToHclTerraform(struct!.fastUdpTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateAppResourcesFastUdpTemplateCfgList",
    },
    fix_template_cfg: {
      value: systemResourceAccountingTemplateAppResourcesFixTemplateCfgToHclTerraform(struct!.fixTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateAppResourcesFixTemplateCfgList",
    },
    gslb_device_cfg: {
      value: systemResourceAccountingTemplateAppResourcesGslbDeviceCfgToHclTerraform(struct!.gslbDeviceCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateAppResourcesGslbDeviceCfgList",
    },
    gslb_geo_location_cfg: {
      value: systemResourceAccountingTemplateAppResourcesGslbGeoLocationCfgToHclTerraform(struct!.gslbGeoLocationCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateAppResourcesGslbGeoLocationCfgList",
    },
    gslb_ip_list_cfg: {
      value: systemResourceAccountingTemplateAppResourcesGslbIpListCfgToHclTerraform(struct!.gslbIpListCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateAppResourcesGslbIpListCfgList",
    },
    gslb_policy_cfg: {
      value: systemResourceAccountingTemplateAppResourcesGslbPolicyCfgToHclTerraform(struct!.gslbPolicyCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateAppResourcesGslbPolicyCfgList",
    },
    gslb_service_cfg: {
      value: systemResourceAccountingTemplateAppResourcesGslbServiceCfgToHclTerraform(struct!.gslbServiceCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateAppResourcesGslbServiceCfgList",
    },
    gslb_service_ip_cfg: {
      value: systemResourceAccountingTemplateAppResourcesGslbServiceIpCfgToHclTerraform(struct!.gslbServiceIpCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateAppResourcesGslbServiceIpCfgList",
    },
    gslb_service_port_cfg: {
      value: systemResourceAccountingTemplateAppResourcesGslbServicePortCfgToHclTerraform(struct!.gslbServicePortCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateAppResourcesGslbServicePortCfgList",
    },
    gslb_site_cfg: {
      value: systemResourceAccountingTemplateAppResourcesGslbSiteCfgToHclTerraform(struct!.gslbSiteCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateAppResourcesGslbSiteCfgList",
    },
    gslb_svc_group_cfg: {
      value: systemResourceAccountingTemplateAppResourcesGslbSvcGroupCfgToHclTerraform(struct!.gslbSvcGroupCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateAppResourcesGslbSvcGroupCfgList",
    },
    gslb_template_cfg: {
      value: systemResourceAccountingTemplateAppResourcesGslbTemplateCfgToHclTerraform(struct!.gslbTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateAppResourcesGslbTemplateCfgList",
    },
    gslb_zone_cfg: {
      value: systemResourceAccountingTemplateAppResourcesGslbZoneCfgToHclTerraform(struct!.gslbZoneCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateAppResourcesGslbZoneCfgList",
    },
    health_monitor_cfg: {
      value: systemResourceAccountingTemplateAppResourcesHealthMonitorCfgToHclTerraform(struct!.healthMonitorCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateAppResourcesHealthMonitorCfgList",
    },
    http_template_cfg: {
      value: systemResourceAccountingTemplateAppResourcesHttpTemplateCfgToHclTerraform(struct!.httpTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateAppResourcesHttpTemplateCfgList",
    },
    link_cost_template_cfg: {
      value: systemResourceAccountingTemplateAppResourcesLinkCostTemplateCfgToHclTerraform(struct!.linkCostTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateAppResourcesLinkCostTemplateCfgList",
    },
    pbslb_entry_cfg: {
      value: systemResourceAccountingTemplateAppResourcesPbslbEntryCfgToHclTerraform(struct!.pbslbEntryCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateAppResourcesPbslbEntryCfgList",
    },
    persist_cookie_template_cfg: {
      value: systemResourceAccountingTemplateAppResourcesPersistCookieTemplateCfgToHclTerraform(struct!.persistCookieTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateAppResourcesPersistCookieTemplateCfgList",
    },
    persist_srcip_template_cfg: {
      value: systemResourceAccountingTemplateAppResourcesPersistSrcipTemplateCfgToHclTerraform(struct!.persistSrcipTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateAppResourcesPersistSrcipTemplateCfgList",
    },
    proxy_template_cfg: {
      value: systemResourceAccountingTemplateAppResourcesProxyTemplateCfgToHclTerraform(struct!.proxyTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateAppResourcesProxyTemplateCfgList",
    },
    real_port_cfg: {
      value: systemResourceAccountingTemplateAppResourcesRealPortCfgToHclTerraform(struct!.realPortCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateAppResourcesRealPortCfgList",
    },
    real_server_cfg: {
      value: systemResourceAccountingTemplateAppResourcesRealServerCfgToHclTerraform(struct!.realServerCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateAppResourcesRealServerCfgList",
    },
    server_ssl_template_cfg: {
      value: systemResourceAccountingTemplateAppResourcesServerSslTemplateCfgToHclTerraform(struct!.serverSslTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateAppResourcesServerSslTemplateCfgList",
    },
    service_group_cfg: {
      value: systemResourceAccountingTemplateAppResourcesServiceGroupCfgToHclTerraform(struct!.serviceGroupCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateAppResourcesServiceGroupCfgList",
    },
    stream_template_cfg: {
      value: systemResourceAccountingTemplateAppResourcesStreamTemplateCfgToHclTerraform(struct!.streamTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateAppResourcesStreamTemplateCfgList",
    },
    virtual_port_cfg: {
      value: systemResourceAccountingTemplateAppResourcesVirtualPortCfgToHclTerraform(struct!.virtualPortCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateAppResourcesVirtualPortCfgList",
    },
    virtual_server_cfg: {
      value: systemResourceAccountingTemplateAppResourcesVirtualServerCfgToHclTerraform(struct!.virtualServerCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateAppResourcesVirtualServerCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateAppResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResources | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateAppResources | undefined) {
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
  private _cacheTemplateCfg = new SystemResourceAccountingTemplateAppResourcesCacheTemplateCfgOutputReference(this, "cache_template_cfg");
  public get cacheTemplateCfg() {
    return this._cacheTemplateCfg;
  }
  public putCacheTemplateCfg(value: SystemResourceAccountingTemplateAppResourcesCacheTemplateCfg) {
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
  private _clientSslTemplateCfg = new SystemResourceAccountingTemplateAppResourcesClientSslTemplateCfgOutputReference(this, "client_ssl_template_cfg");
  public get clientSslTemplateCfg() {
    return this._clientSslTemplateCfg;
  }
  public putClientSslTemplateCfg(value: SystemResourceAccountingTemplateAppResourcesClientSslTemplateCfg) {
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
  private _connReuseTemplateCfg = new SystemResourceAccountingTemplateAppResourcesConnReuseTemplateCfgOutputReference(this, "conn_reuse_template_cfg");
  public get connReuseTemplateCfg() {
    return this._connReuseTemplateCfg;
  }
  public putConnReuseTemplateCfg(value: SystemResourceAccountingTemplateAppResourcesConnReuseTemplateCfg) {
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
  private _fastTcpTemplateCfg = new SystemResourceAccountingTemplateAppResourcesFastTcpTemplateCfgOutputReference(this, "fast_tcp_template_cfg");
  public get fastTcpTemplateCfg() {
    return this._fastTcpTemplateCfg;
  }
  public putFastTcpTemplateCfg(value: SystemResourceAccountingTemplateAppResourcesFastTcpTemplateCfg) {
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
  private _fastUdpTemplateCfg = new SystemResourceAccountingTemplateAppResourcesFastUdpTemplateCfgOutputReference(this, "fast_udp_template_cfg");
  public get fastUdpTemplateCfg() {
    return this._fastUdpTemplateCfg;
  }
  public putFastUdpTemplateCfg(value: SystemResourceAccountingTemplateAppResourcesFastUdpTemplateCfg) {
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
  private _fixTemplateCfg = new SystemResourceAccountingTemplateAppResourcesFixTemplateCfgOutputReference(this, "fix_template_cfg");
  public get fixTemplateCfg() {
    return this._fixTemplateCfg;
  }
  public putFixTemplateCfg(value: SystemResourceAccountingTemplateAppResourcesFixTemplateCfg) {
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
  private _gslbDeviceCfg = new SystemResourceAccountingTemplateAppResourcesGslbDeviceCfgOutputReference(this, "gslb_device_cfg");
  public get gslbDeviceCfg() {
    return this._gslbDeviceCfg;
  }
  public putGslbDeviceCfg(value: SystemResourceAccountingTemplateAppResourcesGslbDeviceCfg) {
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
  private _gslbGeoLocationCfg = new SystemResourceAccountingTemplateAppResourcesGslbGeoLocationCfgOutputReference(this, "gslb_geo_location_cfg");
  public get gslbGeoLocationCfg() {
    return this._gslbGeoLocationCfg;
  }
  public putGslbGeoLocationCfg(value: SystemResourceAccountingTemplateAppResourcesGslbGeoLocationCfg) {
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
  private _gslbIpListCfg = new SystemResourceAccountingTemplateAppResourcesGslbIpListCfgOutputReference(this, "gslb_ip_list_cfg");
  public get gslbIpListCfg() {
    return this._gslbIpListCfg;
  }
  public putGslbIpListCfg(value: SystemResourceAccountingTemplateAppResourcesGslbIpListCfg) {
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
  private _gslbPolicyCfg = new SystemResourceAccountingTemplateAppResourcesGslbPolicyCfgOutputReference(this, "gslb_policy_cfg");
  public get gslbPolicyCfg() {
    return this._gslbPolicyCfg;
  }
  public putGslbPolicyCfg(value: SystemResourceAccountingTemplateAppResourcesGslbPolicyCfg) {
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
  private _gslbServiceCfg = new SystemResourceAccountingTemplateAppResourcesGslbServiceCfgOutputReference(this, "gslb_service_cfg");
  public get gslbServiceCfg() {
    return this._gslbServiceCfg;
  }
  public putGslbServiceCfg(value: SystemResourceAccountingTemplateAppResourcesGslbServiceCfg) {
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
  private _gslbServiceIpCfg = new SystemResourceAccountingTemplateAppResourcesGslbServiceIpCfgOutputReference(this, "gslb_service_ip_cfg");
  public get gslbServiceIpCfg() {
    return this._gslbServiceIpCfg;
  }
  public putGslbServiceIpCfg(value: SystemResourceAccountingTemplateAppResourcesGslbServiceIpCfg) {
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
  private _gslbServicePortCfg = new SystemResourceAccountingTemplateAppResourcesGslbServicePortCfgOutputReference(this, "gslb_service_port_cfg");
  public get gslbServicePortCfg() {
    return this._gslbServicePortCfg;
  }
  public putGslbServicePortCfg(value: SystemResourceAccountingTemplateAppResourcesGslbServicePortCfg) {
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
  private _gslbSiteCfg = new SystemResourceAccountingTemplateAppResourcesGslbSiteCfgOutputReference(this, "gslb_site_cfg");
  public get gslbSiteCfg() {
    return this._gslbSiteCfg;
  }
  public putGslbSiteCfg(value: SystemResourceAccountingTemplateAppResourcesGslbSiteCfg) {
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
  private _gslbSvcGroupCfg = new SystemResourceAccountingTemplateAppResourcesGslbSvcGroupCfgOutputReference(this, "gslb_svc_group_cfg");
  public get gslbSvcGroupCfg() {
    return this._gslbSvcGroupCfg;
  }
  public putGslbSvcGroupCfg(value: SystemResourceAccountingTemplateAppResourcesGslbSvcGroupCfg) {
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
  private _gslbTemplateCfg = new SystemResourceAccountingTemplateAppResourcesGslbTemplateCfgOutputReference(this, "gslb_template_cfg");
  public get gslbTemplateCfg() {
    return this._gslbTemplateCfg;
  }
  public putGslbTemplateCfg(value: SystemResourceAccountingTemplateAppResourcesGslbTemplateCfg) {
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
  private _gslbZoneCfg = new SystemResourceAccountingTemplateAppResourcesGslbZoneCfgOutputReference(this, "gslb_zone_cfg");
  public get gslbZoneCfg() {
    return this._gslbZoneCfg;
  }
  public putGslbZoneCfg(value: SystemResourceAccountingTemplateAppResourcesGslbZoneCfg) {
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
  private _healthMonitorCfg = new SystemResourceAccountingTemplateAppResourcesHealthMonitorCfgOutputReference(this, "health_monitor_cfg");
  public get healthMonitorCfg() {
    return this._healthMonitorCfg;
  }
  public putHealthMonitorCfg(value: SystemResourceAccountingTemplateAppResourcesHealthMonitorCfg) {
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
  private _httpTemplateCfg = new SystemResourceAccountingTemplateAppResourcesHttpTemplateCfgOutputReference(this, "http_template_cfg");
  public get httpTemplateCfg() {
    return this._httpTemplateCfg;
  }
  public putHttpTemplateCfg(value: SystemResourceAccountingTemplateAppResourcesHttpTemplateCfg) {
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
  private _linkCostTemplateCfg = new SystemResourceAccountingTemplateAppResourcesLinkCostTemplateCfgOutputReference(this, "link_cost_template_cfg");
  public get linkCostTemplateCfg() {
    return this._linkCostTemplateCfg;
  }
  public putLinkCostTemplateCfg(value: SystemResourceAccountingTemplateAppResourcesLinkCostTemplateCfg) {
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
  private _pbslbEntryCfg = new SystemResourceAccountingTemplateAppResourcesPbslbEntryCfgOutputReference(this, "pbslb_entry_cfg");
  public get pbslbEntryCfg() {
    return this._pbslbEntryCfg;
  }
  public putPbslbEntryCfg(value: SystemResourceAccountingTemplateAppResourcesPbslbEntryCfg) {
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
  private _persistCookieTemplateCfg = new SystemResourceAccountingTemplateAppResourcesPersistCookieTemplateCfgOutputReference(this, "persist_cookie_template_cfg");
  public get persistCookieTemplateCfg() {
    return this._persistCookieTemplateCfg;
  }
  public putPersistCookieTemplateCfg(value: SystemResourceAccountingTemplateAppResourcesPersistCookieTemplateCfg) {
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
  private _persistSrcipTemplateCfg = new SystemResourceAccountingTemplateAppResourcesPersistSrcipTemplateCfgOutputReference(this, "persist_srcip_template_cfg");
  public get persistSrcipTemplateCfg() {
    return this._persistSrcipTemplateCfg;
  }
  public putPersistSrcipTemplateCfg(value: SystemResourceAccountingTemplateAppResourcesPersistSrcipTemplateCfg) {
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
  private _proxyTemplateCfg = new SystemResourceAccountingTemplateAppResourcesProxyTemplateCfgOutputReference(this, "proxy_template_cfg");
  public get proxyTemplateCfg() {
    return this._proxyTemplateCfg;
  }
  public putProxyTemplateCfg(value: SystemResourceAccountingTemplateAppResourcesProxyTemplateCfg) {
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
  private _realPortCfg = new SystemResourceAccountingTemplateAppResourcesRealPortCfgOutputReference(this, "real_port_cfg");
  public get realPortCfg() {
    return this._realPortCfg;
  }
  public putRealPortCfg(value: SystemResourceAccountingTemplateAppResourcesRealPortCfg) {
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
  private _realServerCfg = new SystemResourceAccountingTemplateAppResourcesRealServerCfgOutputReference(this, "real_server_cfg");
  public get realServerCfg() {
    return this._realServerCfg;
  }
  public putRealServerCfg(value: SystemResourceAccountingTemplateAppResourcesRealServerCfg) {
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
  private _serverSslTemplateCfg = new SystemResourceAccountingTemplateAppResourcesServerSslTemplateCfgOutputReference(this, "server_ssl_template_cfg");
  public get serverSslTemplateCfg() {
    return this._serverSslTemplateCfg;
  }
  public putServerSslTemplateCfg(value: SystemResourceAccountingTemplateAppResourcesServerSslTemplateCfg) {
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
  private _serviceGroupCfg = new SystemResourceAccountingTemplateAppResourcesServiceGroupCfgOutputReference(this, "service_group_cfg");
  public get serviceGroupCfg() {
    return this._serviceGroupCfg;
  }
  public putServiceGroupCfg(value: SystemResourceAccountingTemplateAppResourcesServiceGroupCfg) {
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
  private _streamTemplateCfg = new SystemResourceAccountingTemplateAppResourcesStreamTemplateCfgOutputReference(this, "stream_template_cfg");
  public get streamTemplateCfg() {
    return this._streamTemplateCfg;
  }
  public putStreamTemplateCfg(value: SystemResourceAccountingTemplateAppResourcesStreamTemplateCfg) {
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
  private _virtualPortCfg = new SystemResourceAccountingTemplateAppResourcesVirtualPortCfgOutputReference(this, "virtual_port_cfg");
  public get virtualPortCfg() {
    return this._virtualPortCfg;
  }
  public putVirtualPortCfg(value: SystemResourceAccountingTemplateAppResourcesVirtualPortCfg) {
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
  private _virtualServerCfg = new SystemResourceAccountingTemplateAppResourcesVirtualServerCfgOutputReference(this, "virtual_server_cfg");
  public get virtualServerCfg() {
    return this._virtualServerCfg;
  }
  public putVirtualServerCfg(value: SystemResourceAccountingTemplateAppResourcesVirtualServerCfg) {
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
export interface SystemResourceAccountingTemplateNetworkResourcesIpv4AclLineCfg {
  /**
  * Enter the number of ACL lines allowed (IPV4 ACL lines (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#ipv4_acl_line_max SystemResourceAccountingTemplate#ipv4_acl_line_max}
  */
  readonly ipv4AclLineMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#ipv4_acl_line_min_guarantee SystemResourceAccountingTemplate#ipv4_acl_line_min_guarantee}
  */
  readonly ipv4AclLineMinGuarantee?: number;
}

export function systemResourceAccountingTemplateNetworkResourcesIpv4AclLineCfgToTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesIpv4AclLineCfgOutputReference | SystemResourceAccountingTemplateNetworkResourcesIpv4AclLineCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_acl_line_max: cdktf.numberToTerraform(struct!.ipv4AclLineMax),
    ipv4_acl_line_min_guarantee: cdktf.numberToTerraform(struct!.ipv4AclLineMinGuarantee),
  }
}


export function systemResourceAccountingTemplateNetworkResourcesIpv4AclLineCfgToHclTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesIpv4AclLineCfgOutputReference | SystemResourceAccountingTemplateNetworkResourcesIpv4AclLineCfg): any {
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

export class SystemResourceAccountingTemplateNetworkResourcesIpv4AclLineCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateNetworkResourcesIpv4AclLineCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateNetworkResourcesIpv4AclLineCfg | undefined) {
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
export interface SystemResourceAccountingTemplateNetworkResourcesIpv6AclLineCfg {
  /**
  * Enter the number of ACL lines allowed (IPV6 ACL lines (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#ipv6_acl_line_max SystemResourceAccountingTemplate#ipv6_acl_line_max}
  */
  readonly ipv6AclLineMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#ipv6_acl_line_min_guarantee SystemResourceAccountingTemplate#ipv6_acl_line_min_guarantee}
  */
  readonly ipv6AclLineMinGuarantee?: number;
}

export function systemResourceAccountingTemplateNetworkResourcesIpv6AclLineCfgToTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesIpv6AclLineCfgOutputReference | SystemResourceAccountingTemplateNetworkResourcesIpv6AclLineCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_acl_line_max: cdktf.numberToTerraform(struct!.ipv6AclLineMax),
    ipv6_acl_line_min_guarantee: cdktf.numberToTerraform(struct!.ipv6AclLineMinGuarantee),
  }
}


export function systemResourceAccountingTemplateNetworkResourcesIpv6AclLineCfgToHclTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesIpv6AclLineCfgOutputReference | SystemResourceAccountingTemplateNetworkResourcesIpv6AclLineCfg): any {
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

export class SystemResourceAccountingTemplateNetworkResourcesIpv6AclLineCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateNetworkResourcesIpv6AclLineCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateNetworkResourcesIpv6AclLineCfg | undefined) {
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
export interface SystemResourceAccountingTemplateNetworkResourcesObjectGroupCfg {
  /**
  * Enter the number of object groups allowed (Object group (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#object_group_max SystemResourceAccountingTemplate#object_group_max}
  */
  readonly objectGroupMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#object_group_min_guarantee SystemResourceAccountingTemplate#object_group_min_guarantee}
  */
  readonly objectGroupMinGuarantee?: number;
}

export function systemResourceAccountingTemplateNetworkResourcesObjectGroupCfgToTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesObjectGroupCfgOutputReference | SystemResourceAccountingTemplateNetworkResourcesObjectGroupCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_group_max: cdktf.numberToTerraform(struct!.objectGroupMax),
    object_group_min_guarantee: cdktf.numberToTerraform(struct!.objectGroupMinGuarantee),
  }
}


export function systemResourceAccountingTemplateNetworkResourcesObjectGroupCfgToHclTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesObjectGroupCfgOutputReference | SystemResourceAccountingTemplateNetworkResourcesObjectGroupCfg): any {
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

export class SystemResourceAccountingTemplateNetworkResourcesObjectGroupCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateNetworkResourcesObjectGroupCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateNetworkResourcesObjectGroupCfg | undefined) {
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
export interface SystemResourceAccountingTemplateNetworkResourcesObjectGroupClauseCfg {
  /**
  * Enter the number of object group clauses allowed (Object group clauses (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#object_group_clause_max SystemResourceAccountingTemplate#object_group_clause_max}
  */
  readonly objectGroupClauseMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#object_group_clause_min_guarantee SystemResourceAccountingTemplate#object_group_clause_min_guarantee}
  */
  readonly objectGroupClauseMinGuarantee?: number;
}

export function systemResourceAccountingTemplateNetworkResourcesObjectGroupClauseCfgToTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesObjectGroupClauseCfgOutputReference | SystemResourceAccountingTemplateNetworkResourcesObjectGroupClauseCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_group_clause_max: cdktf.numberToTerraform(struct!.objectGroupClauseMax),
    object_group_clause_min_guarantee: cdktf.numberToTerraform(struct!.objectGroupClauseMinGuarantee),
  }
}


export function systemResourceAccountingTemplateNetworkResourcesObjectGroupClauseCfgToHclTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesObjectGroupClauseCfgOutputReference | SystemResourceAccountingTemplateNetworkResourcesObjectGroupClauseCfg): any {
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

export class SystemResourceAccountingTemplateNetworkResourcesObjectGroupClauseCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateNetworkResourcesObjectGroupClauseCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateNetworkResourcesObjectGroupClauseCfg | undefined) {
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
export interface SystemResourceAccountingTemplateNetworkResourcesStaticArpCfg {
  /**
  * Enter the number of static arp entries allowed (Static arp (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#static_arp_max SystemResourceAccountingTemplate#static_arp_max}
  */
  readonly staticArpMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#static_arp_min_guarantee SystemResourceAccountingTemplate#static_arp_min_guarantee}
  */
  readonly staticArpMinGuarantee?: number;
}

export function systemResourceAccountingTemplateNetworkResourcesStaticArpCfgToTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesStaticArpCfgOutputReference | SystemResourceAccountingTemplateNetworkResourcesStaticArpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_arp_max: cdktf.numberToTerraform(struct!.staticArpMax),
    static_arp_min_guarantee: cdktf.numberToTerraform(struct!.staticArpMinGuarantee),
  }
}


export function systemResourceAccountingTemplateNetworkResourcesStaticArpCfgToHclTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesStaticArpCfgOutputReference | SystemResourceAccountingTemplateNetworkResourcesStaticArpCfg): any {
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

export class SystemResourceAccountingTemplateNetworkResourcesStaticArpCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateNetworkResourcesStaticArpCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateNetworkResourcesStaticArpCfg | undefined) {
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
export interface SystemResourceAccountingTemplateNetworkResourcesStaticIpv4RouteCfg {
  /**
  * Enter the number of static ipv4 routes allowed (Static ipv4 routes (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#static_ipv4_route_max SystemResourceAccountingTemplate#static_ipv4_route_max}
  */
  readonly staticIpv4RouteMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#static_ipv4_route_min_guarantee SystemResourceAccountingTemplate#static_ipv4_route_min_guarantee}
  */
  readonly staticIpv4RouteMinGuarantee?: number;
}

export function systemResourceAccountingTemplateNetworkResourcesStaticIpv4RouteCfgToTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesStaticIpv4RouteCfgOutputReference | SystemResourceAccountingTemplateNetworkResourcesStaticIpv4RouteCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_ipv4_route_max: cdktf.numberToTerraform(struct!.staticIpv4RouteMax),
    static_ipv4_route_min_guarantee: cdktf.numberToTerraform(struct!.staticIpv4RouteMinGuarantee),
  }
}


export function systemResourceAccountingTemplateNetworkResourcesStaticIpv4RouteCfgToHclTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesStaticIpv4RouteCfgOutputReference | SystemResourceAccountingTemplateNetworkResourcesStaticIpv4RouteCfg): any {
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

export class SystemResourceAccountingTemplateNetworkResourcesStaticIpv4RouteCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateNetworkResourcesStaticIpv4RouteCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateNetworkResourcesStaticIpv4RouteCfg | undefined) {
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
export interface SystemResourceAccountingTemplateNetworkResourcesStaticIpv6RouteCfg {
  /**
  * Enter the number of static ipv6 routes allowed (Static ipv6 routes (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#static_ipv6_route_max SystemResourceAccountingTemplate#static_ipv6_route_max}
  */
  readonly staticIpv6RouteMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#static_ipv6_route_min_guarantee SystemResourceAccountingTemplate#static_ipv6_route_min_guarantee}
  */
  readonly staticIpv6RouteMinGuarantee?: number;
}

export function systemResourceAccountingTemplateNetworkResourcesStaticIpv6RouteCfgToTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesStaticIpv6RouteCfgOutputReference | SystemResourceAccountingTemplateNetworkResourcesStaticIpv6RouteCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_ipv6_route_max: cdktf.numberToTerraform(struct!.staticIpv6RouteMax),
    static_ipv6_route_min_guarantee: cdktf.numberToTerraform(struct!.staticIpv6RouteMinGuarantee),
  }
}


export function systemResourceAccountingTemplateNetworkResourcesStaticIpv6RouteCfgToHclTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesStaticIpv6RouteCfgOutputReference | SystemResourceAccountingTemplateNetworkResourcesStaticIpv6RouteCfg): any {
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

export class SystemResourceAccountingTemplateNetworkResourcesStaticIpv6RouteCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateNetworkResourcesStaticIpv6RouteCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateNetworkResourcesStaticIpv6RouteCfg | undefined) {
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
export interface SystemResourceAccountingTemplateNetworkResourcesStaticMacCfg {
  /**
  * Enter the number of static MAC entries allowed (Static MACs (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#static_mac_max SystemResourceAccountingTemplate#static_mac_max}
  */
  readonly staticMacMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#static_mac_min_guarantee SystemResourceAccountingTemplate#static_mac_min_guarantee}
  */
  readonly staticMacMinGuarantee?: number;
}

export function systemResourceAccountingTemplateNetworkResourcesStaticMacCfgToTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesStaticMacCfgOutputReference | SystemResourceAccountingTemplateNetworkResourcesStaticMacCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_mac_max: cdktf.numberToTerraform(struct!.staticMacMax),
    static_mac_min_guarantee: cdktf.numberToTerraform(struct!.staticMacMinGuarantee),
  }
}


export function systemResourceAccountingTemplateNetworkResourcesStaticMacCfgToHclTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesStaticMacCfgOutputReference | SystemResourceAccountingTemplateNetworkResourcesStaticMacCfg): any {
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

export class SystemResourceAccountingTemplateNetworkResourcesStaticMacCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateNetworkResourcesStaticMacCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateNetworkResourcesStaticMacCfg | undefined) {
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
export interface SystemResourceAccountingTemplateNetworkResourcesStaticNeighborCfg {
  /**
  * Enter the number of static neighbor entries allowed (Static neighbors (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#static_neighbor_max SystemResourceAccountingTemplate#static_neighbor_max}
  */
  readonly staticNeighborMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#static_neighbor_min_guarantee SystemResourceAccountingTemplate#static_neighbor_min_guarantee}
  */
  readonly staticNeighborMinGuarantee?: number;
}

export function systemResourceAccountingTemplateNetworkResourcesStaticNeighborCfgToTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesStaticNeighborCfgOutputReference | SystemResourceAccountingTemplateNetworkResourcesStaticNeighborCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_neighbor_max: cdktf.numberToTerraform(struct!.staticNeighborMax),
    static_neighbor_min_guarantee: cdktf.numberToTerraform(struct!.staticNeighborMinGuarantee),
  }
}


export function systemResourceAccountingTemplateNetworkResourcesStaticNeighborCfgToHclTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesStaticNeighborCfgOutputReference | SystemResourceAccountingTemplateNetworkResourcesStaticNeighborCfg): any {
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

export class SystemResourceAccountingTemplateNetworkResourcesStaticNeighborCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateNetworkResourcesStaticNeighborCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateNetworkResourcesStaticNeighborCfg | undefined) {
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
export interface SystemResourceAccountingTemplateNetworkResources {
  /**
  * Enter the threshold as a percentage (Threshold in percentage(default is 100%))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#threshold SystemResourceAccountingTemplate#threshold}
  */
  readonly threshold?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#uuid SystemResourceAccountingTemplate#uuid}
  */
  readonly uuid?: string;
  /**
  * ipv4_acl_line_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#ipv4_acl_line_cfg SystemResourceAccountingTemplate#ipv4_acl_line_cfg}
  */
  readonly ipv4AclLineCfg?: SystemResourceAccountingTemplateNetworkResourcesIpv4AclLineCfg;
  /**
  * ipv6_acl_line_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#ipv6_acl_line_cfg SystemResourceAccountingTemplate#ipv6_acl_line_cfg}
  */
  readonly ipv6AclLineCfg?: SystemResourceAccountingTemplateNetworkResourcesIpv6AclLineCfg;
  /**
  * object_group_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#object_group_cfg SystemResourceAccountingTemplate#object_group_cfg}
  */
  readonly objectGroupCfg?: SystemResourceAccountingTemplateNetworkResourcesObjectGroupCfg;
  /**
  * object_group_clause_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#object_group_clause_cfg SystemResourceAccountingTemplate#object_group_clause_cfg}
  */
  readonly objectGroupClauseCfg?: SystemResourceAccountingTemplateNetworkResourcesObjectGroupClauseCfg;
  /**
  * static_arp_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#static_arp_cfg SystemResourceAccountingTemplate#static_arp_cfg}
  */
  readonly staticArpCfg?: SystemResourceAccountingTemplateNetworkResourcesStaticArpCfg;
  /**
  * static_ipv4_route_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#static_ipv4_route_cfg SystemResourceAccountingTemplate#static_ipv4_route_cfg}
  */
  readonly staticIpv4RouteCfg?: SystemResourceAccountingTemplateNetworkResourcesStaticIpv4RouteCfg;
  /**
  * static_ipv6_route_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#static_ipv6_route_cfg SystemResourceAccountingTemplate#static_ipv6_route_cfg}
  */
  readonly staticIpv6RouteCfg?: SystemResourceAccountingTemplateNetworkResourcesStaticIpv6RouteCfg;
  /**
  * static_mac_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#static_mac_cfg SystemResourceAccountingTemplate#static_mac_cfg}
  */
  readonly staticMacCfg?: SystemResourceAccountingTemplateNetworkResourcesStaticMacCfg;
  /**
  * static_neighbor_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#static_neighbor_cfg SystemResourceAccountingTemplate#static_neighbor_cfg}
  */
  readonly staticNeighborCfg?: SystemResourceAccountingTemplateNetworkResourcesStaticNeighborCfg;
}

export function systemResourceAccountingTemplateNetworkResourcesToTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesOutputReference | SystemResourceAccountingTemplateNetworkResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    ipv4_acl_line_cfg: systemResourceAccountingTemplateNetworkResourcesIpv4AclLineCfgToTerraform(struct!.ipv4AclLineCfg),
    ipv6_acl_line_cfg: systemResourceAccountingTemplateNetworkResourcesIpv6AclLineCfgToTerraform(struct!.ipv6AclLineCfg),
    object_group_cfg: systemResourceAccountingTemplateNetworkResourcesObjectGroupCfgToTerraform(struct!.objectGroupCfg),
    object_group_clause_cfg: systemResourceAccountingTemplateNetworkResourcesObjectGroupClauseCfgToTerraform(struct!.objectGroupClauseCfg),
    static_arp_cfg: systemResourceAccountingTemplateNetworkResourcesStaticArpCfgToTerraform(struct!.staticArpCfg),
    static_ipv4_route_cfg: systemResourceAccountingTemplateNetworkResourcesStaticIpv4RouteCfgToTerraform(struct!.staticIpv4RouteCfg),
    static_ipv6_route_cfg: systemResourceAccountingTemplateNetworkResourcesStaticIpv6RouteCfgToTerraform(struct!.staticIpv6RouteCfg),
    static_mac_cfg: systemResourceAccountingTemplateNetworkResourcesStaticMacCfgToTerraform(struct!.staticMacCfg),
    static_neighbor_cfg: systemResourceAccountingTemplateNetworkResourcesStaticNeighborCfgToTerraform(struct!.staticNeighborCfg),
  }
}


export function systemResourceAccountingTemplateNetworkResourcesToHclTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesOutputReference | SystemResourceAccountingTemplateNetworkResources): any {
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
      value: systemResourceAccountingTemplateNetworkResourcesIpv4AclLineCfgToHclTerraform(struct!.ipv4AclLineCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateNetworkResourcesIpv4AclLineCfgList",
    },
    ipv6_acl_line_cfg: {
      value: systemResourceAccountingTemplateNetworkResourcesIpv6AclLineCfgToHclTerraform(struct!.ipv6AclLineCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateNetworkResourcesIpv6AclLineCfgList",
    },
    object_group_cfg: {
      value: systemResourceAccountingTemplateNetworkResourcesObjectGroupCfgToHclTerraform(struct!.objectGroupCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateNetworkResourcesObjectGroupCfgList",
    },
    object_group_clause_cfg: {
      value: systemResourceAccountingTemplateNetworkResourcesObjectGroupClauseCfgToHclTerraform(struct!.objectGroupClauseCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateNetworkResourcesObjectGroupClauseCfgList",
    },
    static_arp_cfg: {
      value: systemResourceAccountingTemplateNetworkResourcesStaticArpCfgToHclTerraform(struct!.staticArpCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateNetworkResourcesStaticArpCfgList",
    },
    static_ipv4_route_cfg: {
      value: systemResourceAccountingTemplateNetworkResourcesStaticIpv4RouteCfgToHclTerraform(struct!.staticIpv4RouteCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateNetworkResourcesStaticIpv4RouteCfgList",
    },
    static_ipv6_route_cfg: {
      value: systemResourceAccountingTemplateNetworkResourcesStaticIpv6RouteCfgToHclTerraform(struct!.staticIpv6RouteCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateNetworkResourcesStaticIpv6RouteCfgList",
    },
    static_mac_cfg: {
      value: systemResourceAccountingTemplateNetworkResourcesStaticMacCfgToHclTerraform(struct!.staticMacCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateNetworkResourcesStaticMacCfgList",
    },
    static_neighbor_cfg: {
      value: systemResourceAccountingTemplateNetworkResourcesStaticNeighborCfgToHclTerraform(struct!.staticNeighborCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateNetworkResourcesStaticNeighborCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateNetworkResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateNetworkResources | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateNetworkResources | undefined) {
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
  private _ipv4AclLineCfg = new SystemResourceAccountingTemplateNetworkResourcesIpv4AclLineCfgOutputReference(this, "ipv4_acl_line_cfg");
  public get ipv4AclLineCfg() {
    return this._ipv4AclLineCfg;
  }
  public putIpv4AclLineCfg(value: SystemResourceAccountingTemplateNetworkResourcesIpv4AclLineCfg) {
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
  private _ipv6AclLineCfg = new SystemResourceAccountingTemplateNetworkResourcesIpv6AclLineCfgOutputReference(this, "ipv6_acl_line_cfg");
  public get ipv6AclLineCfg() {
    return this._ipv6AclLineCfg;
  }
  public putIpv6AclLineCfg(value: SystemResourceAccountingTemplateNetworkResourcesIpv6AclLineCfg) {
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
  private _objectGroupCfg = new SystemResourceAccountingTemplateNetworkResourcesObjectGroupCfgOutputReference(this, "object_group_cfg");
  public get objectGroupCfg() {
    return this._objectGroupCfg;
  }
  public putObjectGroupCfg(value: SystemResourceAccountingTemplateNetworkResourcesObjectGroupCfg) {
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
  private _objectGroupClauseCfg = new SystemResourceAccountingTemplateNetworkResourcesObjectGroupClauseCfgOutputReference(this, "object_group_clause_cfg");
  public get objectGroupClauseCfg() {
    return this._objectGroupClauseCfg;
  }
  public putObjectGroupClauseCfg(value: SystemResourceAccountingTemplateNetworkResourcesObjectGroupClauseCfg) {
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
  private _staticArpCfg = new SystemResourceAccountingTemplateNetworkResourcesStaticArpCfgOutputReference(this, "static_arp_cfg");
  public get staticArpCfg() {
    return this._staticArpCfg;
  }
  public putStaticArpCfg(value: SystemResourceAccountingTemplateNetworkResourcesStaticArpCfg) {
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
  private _staticIpv4RouteCfg = new SystemResourceAccountingTemplateNetworkResourcesStaticIpv4RouteCfgOutputReference(this, "static_ipv4_route_cfg");
  public get staticIpv4RouteCfg() {
    return this._staticIpv4RouteCfg;
  }
  public putStaticIpv4RouteCfg(value: SystemResourceAccountingTemplateNetworkResourcesStaticIpv4RouteCfg) {
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
  private _staticIpv6RouteCfg = new SystemResourceAccountingTemplateNetworkResourcesStaticIpv6RouteCfgOutputReference(this, "static_ipv6_route_cfg");
  public get staticIpv6RouteCfg() {
    return this._staticIpv6RouteCfg;
  }
  public putStaticIpv6RouteCfg(value: SystemResourceAccountingTemplateNetworkResourcesStaticIpv6RouteCfg) {
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
  private _staticMacCfg = new SystemResourceAccountingTemplateNetworkResourcesStaticMacCfgOutputReference(this, "static_mac_cfg");
  public get staticMacCfg() {
    return this._staticMacCfg;
  }
  public putStaticMacCfg(value: SystemResourceAccountingTemplateNetworkResourcesStaticMacCfg) {
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
  private _staticNeighborCfg = new SystemResourceAccountingTemplateNetworkResourcesStaticNeighborCfgOutputReference(this, "static_neighbor_cfg");
  public get staticNeighborCfg() {
    return this._staticNeighborCfg;
  }
  public putStaticNeighborCfg(value: SystemResourceAccountingTemplateNetworkResourcesStaticNeighborCfg) {
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
export interface SystemResourceAccountingTemplateSystemResourcesBwLimitCfg {
  /**
  * Enter the bandwidth limit in mbps (Bandwidth limit in Mbit/s (no limits applied by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#bw_limit_max SystemResourceAccountingTemplate#bw_limit_max}
  */
  readonly bwLimitMax?: number;
  /**
  * Disable watermark (90% drop, keep existing sessions, drop  new sessions)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#bw_limit_watermark_disable SystemResourceAccountingTemplate#bw_limit_watermark_disable}
  */
  readonly bwLimitWatermarkDisable?: number;
}

export function systemResourceAccountingTemplateSystemResourcesBwLimitCfgToTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesBwLimitCfgOutputReference | SystemResourceAccountingTemplateSystemResourcesBwLimitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bw_limit_max: cdktf.numberToTerraform(struct!.bwLimitMax),
    bw_limit_watermark_disable: cdktf.numberToTerraform(struct!.bwLimitWatermarkDisable),
  }
}


export function systemResourceAccountingTemplateSystemResourcesBwLimitCfgToHclTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesBwLimitCfgOutputReference | SystemResourceAccountingTemplateSystemResourcesBwLimitCfg): any {
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

export class SystemResourceAccountingTemplateSystemResourcesBwLimitCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateSystemResourcesBwLimitCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateSystemResourcesBwLimitCfg | undefined) {
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
export interface SystemResourceAccountingTemplateSystemResourcesConcurrentSessionLimitCfg {
  /**
  * Enter the Concurrent Session limit (cps) (Concurrent-Session cps limit (no limits applied by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#concurrent_session_limit_max SystemResourceAccountingTemplate#concurrent_session_limit_max}
  */
  readonly concurrentSessionLimitMax?: number;
}

export function systemResourceAccountingTemplateSystemResourcesConcurrentSessionLimitCfgToTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesConcurrentSessionLimitCfgOutputReference | SystemResourceAccountingTemplateSystemResourcesConcurrentSessionLimitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrent_session_limit_max: cdktf.numberToTerraform(struct!.concurrentSessionLimitMax),
  }
}


export function systemResourceAccountingTemplateSystemResourcesConcurrentSessionLimitCfgToHclTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesConcurrentSessionLimitCfgOutputReference | SystemResourceAccountingTemplateSystemResourcesConcurrentSessionLimitCfg): any {
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

export class SystemResourceAccountingTemplateSystemResourcesConcurrentSessionLimitCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateSystemResourcesConcurrentSessionLimitCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrentSessionLimitMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentSessionLimitMax = this._concurrentSessionLimitMax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateSystemResourcesConcurrentSessionLimitCfg | undefined) {
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
export interface SystemResourceAccountingTemplateSystemResourcesFwcpsLimitCfg {
  /**
  * Enter the Firewall cps limit (Firewall cps limit (no limits applied by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#fwcps_limit_max SystemResourceAccountingTemplate#fwcps_limit_max}
  */
  readonly fwcpsLimitMax?: number;
}

export function systemResourceAccountingTemplateSystemResourcesFwcpsLimitCfgToTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesFwcpsLimitCfgOutputReference | SystemResourceAccountingTemplateSystemResourcesFwcpsLimitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fwcps_limit_max: cdktf.numberToTerraform(struct!.fwcpsLimitMax),
  }
}


export function systemResourceAccountingTemplateSystemResourcesFwcpsLimitCfgToHclTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesFwcpsLimitCfgOutputReference | SystemResourceAccountingTemplateSystemResourcesFwcpsLimitCfg): any {
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

export class SystemResourceAccountingTemplateSystemResourcesFwcpsLimitCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateSystemResourcesFwcpsLimitCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fwcpsLimitMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwcpsLimitMax = this._fwcpsLimitMax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateSystemResourcesFwcpsLimitCfg | undefined) {
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
export interface SystemResourceAccountingTemplateSystemResourcesL4SessionLimitCfg {
  /**
  * Enter the l4 session limit in % (0.01% to 99.99%) (Enter a number from 0.01 to 99.99 (up to 2 digits precision))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#l4_session_limit_max SystemResourceAccountingTemplate#l4_session_limit_max}
  */
  readonly l4SessionLimitMax?: string;
  /**
  * minimum guaranteed value in % (up to 2 digits precision) (Enter a number from 0 to 99.99)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#l4_session_limit_min_guarantee SystemResourceAccountingTemplate#l4_session_limit_min_guarantee}
  */
  readonly l4SessionLimitMinGuarantee?: string;
}

export function systemResourceAccountingTemplateSystemResourcesL4SessionLimitCfgToTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesL4SessionLimitCfgOutputReference | SystemResourceAccountingTemplateSystemResourcesL4SessionLimitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    l4_session_limit_max: cdktf.stringToTerraform(struct!.l4SessionLimitMax),
    l4_session_limit_min_guarantee: cdktf.stringToTerraform(struct!.l4SessionLimitMinGuarantee),
  }
}


export function systemResourceAccountingTemplateSystemResourcesL4SessionLimitCfgToHclTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesL4SessionLimitCfgOutputReference | SystemResourceAccountingTemplateSystemResourcesL4SessionLimitCfg): any {
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

export class SystemResourceAccountingTemplateSystemResourcesL4SessionLimitCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateSystemResourcesL4SessionLimitCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateSystemResourcesL4SessionLimitCfg | undefined) {
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
export interface SystemResourceAccountingTemplateSystemResourcesL4CpsLimitCfg {
  /**
  * Enter the L4 cps limit (L4 cps limit (no limits applied by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#l4cps_limit_max SystemResourceAccountingTemplate#l4cps_limit_max}
  */
  readonly l4CpsLimitMax?: number;
}

export function systemResourceAccountingTemplateSystemResourcesL4CpsLimitCfgToTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesL4CpsLimitCfgOutputReference | SystemResourceAccountingTemplateSystemResourcesL4CpsLimitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    l4cps_limit_max: cdktf.numberToTerraform(struct!.l4CpsLimitMax),
  }
}


export function systemResourceAccountingTemplateSystemResourcesL4CpsLimitCfgToHclTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesL4CpsLimitCfgOutputReference | SystemResourceAccountingTemplateSystemResourcesL4CpsLimitCfg): any {
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

export class SystemResourceAccountingTemplateSystemResourcesL4CpsLimitCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateSystemResourcesL4CpsLimitCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._l4CpsLimitMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4CpsLimitMax = this._l4CpsLimitMax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateSystemResourcesL4CpsLimitCfg | undefined) {
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
export interface SystemResourceAccountingTemplateSystemResourcesL7CpsLimitCfg {
  /**
  * L7cps-limit (L7 cps limit (no limits applied by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#l7cps_limit_max SystemResourceAccountingTemplate#l7cps_limit_max}
  */
  readonly l7CpsLimitMax?: number;
}

export function systemResourceAccountingTemplateSystemResourcesL7CpsLimitCfgToTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesL7CpsLimitCfgOutputReference | SystemResourceAccountingTemplateSystemResourcesL7CpsLimitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    l7cps_limit_max: cdktf.numberToTerraform(struct!.l7CpsLimitMax),
  }
}


export function systemResourceAccountingTemplateSystemResourcesL7CpsLimitCfgToHclTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesL7CpsLimitCfgOutputReference | SystemResourceAccountingTemplateSystemResourcesL7CpsLimitCfg): any {
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

export class SystemResourceAccountingTemplateSystemResourcesL7CpsLimitCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateSystemResourcesL7CpsLimitCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._l7CpsLimitMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.l7CpsLimitMax = this._l7CpsLimitMax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateSystemResourcesL7CpsLimitCfg | undefined) {
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
export interface SystemResourceAccountingTemplateSystemResourcesNatcpsLimitCfg {
  /**
  * Enter the Nat cps limit (NAT cps limit (no limits applied by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#natcps_limit_max SystemResourceAccountingTemplate#natcps_limit_max}
  */
  readonly natcpsLimitMax?: number;
}

export function systemResourceAccountingTemplateSystemResourcesNatcpsLimitCfgToTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesNatcpsLimitCfgOutputReference | SystemResourceAccountingTemplateSystemResourcesNatcpsLimitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    natcps_limit_max: cdktf.numberToTerraform(struct!.natcpsLimitMax),
  }
}


export function systemResourceAccountingTemplateSystemResourcesNatcpsLimitCfgToHclTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesNatcpsLimitCfgOutputReference | SystemResourceAccountingTemplateSystemResourcesNatcpsLimitCfg): any {
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

export class SystemResourceAccountingTemplateSystemResourcesNatcpsLimitCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateSystemResourcesNatcpsLimitCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._natcpsLimitMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.natcpsLimitMax = this._natcpsLimitMax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateSystemResourcesNatcpsLimitCfg | undefined) {
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
export interface SystemResourceAccountingTemplateSystemResourcesSslThroughputLimitCfg {
  /**
  * Enter the ssl throughput limit in mbps (SSL Througput limit in Mbit/s (no limits applied by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#ssl_throughput_limit_max SystemResourceAccountingTemplate#ssl_throughput_limit_max}
  */
  readonly sslThroughputLimitMax?: number;
  /**
  * Disable watermark (90% drop, keep existing sessions, drop  new sessions)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#ssl_throughput_limit_watermark_disable SystemResourceAccountingTemplate#ssl_throughput_limit_watermark_disable}
  */
  readonly sslThroughputLimitWatermarkDisable?: number;
}

export function systemResourceAccountingTemplateSystemResourcesSslThroughputLimitCfgToTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesSslThroughputLimitCfgOutputReference | SystemResourceAccountingTemplateSystemResourcesSslThroughputLimitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssl_throughput_limit_max: cdktf.numberToTerraform(struct!.sslThroughputLimitMax),
    ssl_throughput_limit_watermark_disable: cdktf.numberToTerraform(struct!.sslThroughputLimitWatermarkDisable),
  }
}


export function systemResourceAccountingTemplateSystemResourcesSslThroughputLimitCfgToHclTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesSslThroughputLimitCfgOutputReference | SystemResourceAccountingTemplateSystemResourcesSslThroughputLimitCfg): any {
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

export class SystemResourceAccountingTemplateSystemResourcesSslThroughputLimitCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateSystemResourcesSslThroughputLimitCfg | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateSystemResourcesSslThroughputLimitCfg | undefined) {
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
export interface SystemResourceAccountingTemplateSystemResourcesSslcpsLimitCfg {
  /**
  * Enter the SSL cps limit (SSL cps limit (no limits applied by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#sslcps_limit_max SystemResourceAccountingTemplate#sslcps_limit_max}
  */
  readonly sslcpsLimitMax?: number;
}

export function systemResourceAccountingTemplateSystemResourcesSslcpsLimitCfgToTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesSslcpsLimitCfgOutputReference | SystemResourceAccountingTemplateSystemResourcesSslcpsLimitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sslcps_limit_max: cdktf.numberToTerraform(struct!.sslcpsLimitMax),
  }
}


export function systemResourceAccountingTemplateSystemResourcesSslcpsLimitCfgToHclTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesSslcpsLimitCfgOutputReference | SystemResourceAccountingTemplateSystemResourcesSslcpsLimitCfg): any {
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

export class SystemResourceAccountingTemplateSystemResourcesSslcpsLimitCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateSystemResourcesSslcpsLimitCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sslcpsLimitMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslcpsLimitMax = this._sslcpsLimitMax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateSystemResourcesSslcpsLimitCfg | undefined) {
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
export interface SystemResourceAccountingTemplateSystemResources {
  /**
  * Enter the threshold as a percentage (Threshold in percentage(default is 100%))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#threshold SystemResourceAccountingTemplate#threshold}
  */
  readonly threshold?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#uuid SystemResourceAccountingTemplate#uuid}
  */
  readonly uuid?: string;
  /**
  * bw_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#bw_limit_cfg SystemResourceAccountingTemplate#bw_limit_cfg}
  */
  readonly bwLimitCfg?: SystemResourceAccountingTemplateSystemResourcesBwLimitCfg;
  /**
  * concurrent_session_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#concurrent_session_limit_cfg SystemResourceAccountingTemplate#concurrent_session_limit_cfg}
  */
  readonly concurrentSessionLimitCfg?: SystemResourceAccountingTemplateSystemResourcesConcurrentSessionLimitCfg;
  /**
  * fwcps_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#fwcps_limit_cfg SystemResourceAccountingTemplate#fwcps_limit_cfg}
  */
  readonly fwcpsLimitCfg?: SystemResourceAccountingTemplateSystemResourcesFwcpsLimitCfg;
  /**
  * l4_session_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#l4_session_limit_cfg SystemResourceAccountingTemplate#l4_session_limit_cfg}
  */
  readonly l4SessionLimitCfg?: SystemResourceAccountingTemplateSystemResourcesL4SessionLimitCfg;
  /**
  * l4cps_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#l4cps_limit_cfg SystemResourceAccountingTemplate#l4cps_limit_cfg}
  */
  readonly l4CpsLimitCfg?: SystemResourceAccountingTemplateSystemResourcesL4CpsLimitCfg;
  /**
  * l7cps_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#l7cps_limit_cfg SystemResourceAccountingTemplate#l7cps_limit_cfg}
  */
  readonly l7CpsLimitCfg?: SystemResourceAccountingTemplateSystemResourcesL7CpsLimitCfg;
  /**
  * natcps_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#natcps_limit_cfg SystemResourceAccountingTemplate#natcps_limit_cfg}
  */
  readonly natcpsLimitCfg?: SystemResourceAccountingTemplateSystemResourcesNatcpsLimitCfg;
  /**
  * ssl_throughput_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#ssl_throughput_limit_cfg SystemResourceAccountingTemplate#ssl_throughput_limit_cfg}
  */
  readonly sslThroughputLimitCfg?: SystemResourceAccountingTemplateSystemResourcesSslThroughputLimitCfg;
  /**
  * sslcps_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#sslcps_limit_cfg SystemResourceAccountingTemplate#sslcps_limit_cfg}
  */
  readonly sslcpsLimitCfg?: SystemResourceAccountingTemplateSystemResourcesSslcpsLimitCfg;
}

export function systemResourceAccountingTemplateSystemResourcesToTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesOutputReference | SystemResourceAccountingTemplateSystemResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    bw_limit_cfg: systemResourceAccountingTemplateSystemResourcesBwLimitCfgToTerraform(struct!.bwLimitCfg),
    concurrent_session_limit_cfg: systemResourceAccountingTemplateSystemResourcesConcurrentSessionLimitCfgToTerraform(struct!.concurrentSessionLimitCfg),
    fwcps_limit_cfg: systemResourceAccountingTemplateSystemResourcesFwcpsLimitCfgToTerraform(struct!.fwcpsLimitCfg),
    l4_session_limit_cfg: systemResourceAccountingTemplateSystemResourcesL4SessionLimitCfgToTerraform(struct!.l4SessionLimitCfg),
    l4cps_limit_cfg: systemResourceAccountingTemplateSystemResourcesL4CpsLimitCfgToTerraform(struct!.l4CpsLimitCfg),
    l7cps_limit_cfg: systemResourceAccountingTemplateSystemResourcesL7CpsLimitCfgToTerraform(struct!.l7CpsLimitCfg),
    natcps_limit_cfg: systemResourceAccountingTemplateSystemResourcesNatcpsLimitCfgToTerraform(struct!.natcpsLimitCfg),
    ssl_throughput_limit_cfg: systemResourceAccountingTemplateSystemResourcesSslThroughputLimitCfgToTerraform(struct!.sslThroughputLimitCfg),
    sslcps_limit_cfg: systemResourceAccountingTemplateSystemResourcesSslcpsLimitCfgToTerraform(struct!.sslcpsLimitCfg),
  }
}


export function systemResourceAccountingTemplateSystemResourcesToHclTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesOutputReference | SystemResourceAccountingTemplateSystemResources): any {
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
      value: systemResourceAccountingTemplateSystemResourcesBwLimitCfgToHclTerraform(struct!.bwLimitCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateSystemResourcesBwLimitCfgList",
    },
    concurrent_session_limit_cfg: {
      value: systemResourceAccountingTemplateSystemResourcesConcurrentSessionLimitCfgToHclTerraform(struct!.concurrentSessionLimitCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateSystemResourcesConcurrentSessionLimitCfgList",
    },
    fwcps_limit_cfg: {
      value: systemResourceAccountingTemplateSystemResourcesFwcpsLimitCfgToHclTerraform(struct!.fwcpsLimitCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateSystemResourcesFwcpsLimitCfgList",
    },
    l4_session_limit_cfg: {
      value: systemResourceAccountingTemplateSystemResourcesL4SessionLimitCfgToHclTerraform(struct!.l4SessionLimitCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateSystemResourcesL4SessionLimitCfgList",
    },
    l4cps_limit_cfg: {
      value: systemResourceAccountingTemplateSystemResourcesL4CpsLimitCfgToHclTerraform(struct!.l4CpsLimitCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateSystemResourcesL4CpsLimitCfgList",
    },
    l7cps_limit_cfg: {
      value: systemResourceAccountingTemplateSystemResourcesL7CpsLimitCfgToHclTerraform(struct!.l7CpsLimitCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateSystemResourcesL7CpsLimitCfgList",
    },
    natcps_limit_cfg: {
      value: systemResourceAccountingTemplateSystemResourcesNatcpsLimitCfgToHclTerraform(struct!.natcpsLimitCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateSystemResourcesNatcpsLimitCfgList",
    },
    ssl_throughput_limit_cfg: {
      value: systemResourceAccountingTemplateSystemResourcesSslThroughputLimitCfgToHclTerraform(struct!.sslThroughputLimitCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateSystemResourcesSslThroughputLimitCfgList",
    },
    sslcps_limit_cfg: {
      value: systemResourceAccountingTemplateSystemResourcesSslcpsLimitCfgToHclTerraform(struct!.sslcpsLimitCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateSystemResourcesSslcpsLimitCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateSystemResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateSystemResources | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateSystemResources | undefined) {
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
  private _bwLimitCfg = new SystemResourceAccountingTemplateSystemResourcesBwLimitCfgOutputReference(this, "bw_limit_cfg");
  public get bwLimitCfg() {
    return this._bwLimitCfg;
  }
  public putBwLimitCfg(value: SystemResourceAccountingTemplateSystemResourcesBwLimitCfg) {
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
  private _concurrentSessionLimitCfg = new SystemResourceAccountingTemplateSystemResourcesConcurrentSessionLimitCfgOutputReference(this, "concurrent_session_limit_cfg");
  public get concurrentSessionLimitCfg() {
    return this._concurrentSessionLimitCfg;
  }
  public putConcurrentSessionLimitCfg(value: SystemResourceAccountingTemplateSystemResourcesConcurrentSessionLimitCfg) {
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
  private _fwcpsLimitCfg = new SystemResourceAccountingTemplateSystemResourcesFwcpsLimitCfgOutputReference(this, "fwcps_limit_cfg");
  public get fwcpsLimitCfg() {
    return this._fwcpsLimitCfg;
  }
  public putFwcpsLimitCfg(value: SystemResourceAccountingTemplateSystemResourcesFwcpsLimitCfg) {
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
  private _l4SessionLimitCfg = new SystemResourceAccountingTemplateSystemResourcesL4SessionLimitCfgOutputReference(this, "l4_session_limit_cfg");
  public get l4SessionLimitCfg() {
    return this._l4SessionLimitCfg;
  }
  public putL4SessionLimitCfg(value: SystemResourceAccountingTemplateSystemResourcesL4SessionLimitCfg) {
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
  private _l4CpsLimitCfg = new SystemResourceAccountingTemplateSystemResourcesL4CpsLimitCfgOutputReference(this, "l4cps_limit_cfg");
  public get l4CpsLimitCfg() {
    return this._l4CpsLimitCfg;
  }
  public putL4CpsLimitCfg(value: SystemResourceAccountingTemplateSystemResourcesL4CpsLimitCfg) {
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
  private _l7CpsLimitCfg = new SystemResourceAccountingTemplateSystemResourcesL7CpsLimitCfgOutputReference(this, "l7cps_limit_cfg");
  public get l7CpsLimitCfg() {
    return this._l7CpsLimitCfg;
  }
  public putL7CpsLimitCfg(value: SystemResourceAccountingTemplateSystemResourcesL7CpsLimitCfg) {
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
  private _natcpsLimitCfg = new SystemResourceAccountingTemplateSystemResourcesNatcpsLimitCfgOutputReference(this, "natcps_limit_cfg");
  public get natcpsLimitCfg() {
    return this._natcpsLimitCfg;
  }
  public putNatcpsLimitCfg(value: SystemResourceAccountingTemplateSystemResourcesNatcpsLimitCfg) {
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
  private _sslThroughputLimitCfg = new SystemResourceAccountingTemplateSystemResourcesSslThroughputLimitCfgOutputReference(this, "ssl_throughput_limit_cfg");
  public get sslThroughputLimitCfg() {
    return this._sslThroughputLimitCfg;
  }
  public putSslThroughputLimitCfg(value: SystemResourceAccountingTemplateSystemResourcesSslThroughputLimitCfg) {
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
  private _sslcpsLimitCfg = new SystemResourceAccountingTemplateSystemResourcesSslcpsLimitCfgOutputReference(this, "sslcps_limit_cfg");
  public get sslcpsLimitCfg() {
    return this._sslcpsLimitCfg;
  }
  public putSslcpsLimitCfg(value: SystemResourceAccountingTemplateSystemResourcesSslcpsLimitCfg) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template thunder_system_resource_accounting_template}
*/
export class SystemResourceAccountingTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_resource_accounting_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemResourceAccountingTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemResourceAccountingTemplate to import
  * @param importFromId The id of the existing SystemResourceAccountingTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemResourceAccountingTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_resource_accounting_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template thunder_system_resource_accounting_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemResourceAccountingTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: SystemResourceAccountingTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_resource_accounting_template',
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
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._appResources.internalValue = config.appResources;
    this._networkResources.internalValue = config.networkResources;
    this._systemResources.internalValue = config.systemResources;
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
  private _appResources = new SystemResourceAccountingTemplateAppResourcesOutputReference(this, "app_resources");
  public get appResources() {
    return this._appResources;
  }
  public putAppResources(value: SystemResourceAccountingTemplateAppResources) {
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
  private _networkResources = new SystemResourceAccountingTemplateNetworkResourcesOutputReference(this, "network_resources");
  public get networkResources() {
    return this._networkResources;
  }
  public putNetworkResources(value: SystemResourceAccountingTemplateNetworkResources) {
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
  private _systemResources = new SystemResourceAccountingTemplateSystemResourcesOutputReference(this, "system_resources");
  public get systemResources() {
    return this._systemResources;
  }
  public putSystemResources(value: SystemResourceAccountingTemplateSystemResources) {
    this._systemResources.internalValue = value;
  }
  public resetSystemResources() {
    this._systemResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemResourcesInput() {
    return this._systemResources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      app_resources: systemResourceAccountingTemplateAppResourcesToTerraform(this._appResources.internalValue),
      network_resources: systemResourceAccountingTemplateNetworkResourcesToTerraform(this._networkResources.internalValue),
      system_resources: systemResourceAccountingTemplateSystemResourcesToTerraform(this._systemResources.internalValue),
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
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      app_resources: {
        value: systemResourceAccountingTemplateAppResourcesToHclTerraform(this._appResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateAppResourcesList",
      },
      network_resources: {
        value: systemResourceAccountingTemplateNetworkResourcesToHclTerraform(this._networkResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateNetworkResourcesList",
      },
      system_resources: {
        value: systemResourceAccountingTemplateSystemResourcesToHclTerraform(this._systemResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateSystemResourcesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
