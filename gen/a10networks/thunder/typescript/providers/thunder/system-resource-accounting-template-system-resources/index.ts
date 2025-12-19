// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_system_resources
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemResourceAccountingTemplateSystemResourcesAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_system_resources#id SystemResourceAccountingTemplateSystemResourcesA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_system_resources#template_name SystemResourceAccountingTemplateSystemResourcesA#template_name}
  */
  readonly templateName: string;
  /**
  * Enter the threshold as a percentage (Threshold in percentage(default is 100%))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_system_resources#threshold SystemResourceAccountingTemplateSystemResourcesA#threshold}
  */
  readonly threshold?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_system_resources#uuid SystemResourceAccountingTemplateSystemResourcesA#uuid}
  */
  readonly uuid?: string;
  /**
  * bw_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_system_resources#bw_limit_cfg SystemResourceAccountingTemplateSystemResourcesA#bw_limit_cfg}
  */
  readonly bwLimitCfg?: SystemResourceAccountingTemplateSystemResourcesBwLimitCfgA;
  /**
  * concurrent_session_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_system_resources#concurrent_session_limit_cfg SystemResourceAccountingTemplateSystemResourcesA#concurrent_session_limit_cfg}
  */
  readonly concurrentSessionLimitCfg?: SystemResourceAccountingTemplateSystemResourcesConcurrentSessionLimitCfgA;
  /**
  * fwcps_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_system_resources#fwcps_limit_cfg SystemResourceAccountingTemplateSystemResourcesA#fwcps_limit_cfg}
  */
  readonly fwcpsLimitCfg?: SystemResourceAccountingTemplateSystemResourcesFwcpsLimitCfgA;
  /**
  * l4_session_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_system_resources#l4_session_limit_cfg SystemResourceAccountingTemplateSystemResourcesA#l4_session_limit_cfg}
  */
  readonly l4SessionLimitCfg?: SystemResourceAccountingTemplateSystemResourcesL4SessionLimitCfgA;
  /**
  * l4cps_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_system_resources#l4cps_limit_cfg SystemResourceAccountingTemplateSystemResourcesA#l4cps_limit_cfg}
  */
  readonly l4CpsLimitCfg?: SystemResourceAccountingTemplateSystemResourcesL4CpsLimitCfgA;
  /**
  * l7cps_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_system_resources#l7cps_limit_cfg SystemResourceAccountingTemplateSystemResourcesA#l7cps_limit_cfg}
  */
  readonly l7CpsLimitCfg?: SystemResourceAccountingTemplateSystemResourcesL7CpsLimitCfgA;
  /**
  * natcps_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_system_resources#natcps_limit_cfg SystemResourceAccountingTemplateSystemResourcesA#natcps_limit_cfg}
  */
  readonly natcpsLimitCfg?: SystemResourceAccountingTemplateSystemResourcesNatcpsLimitCfgA;
  /**
  * ssl_throughput_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_system_resources#ssl_throughput_limit_cfg SystemResourceAccountingTemplateSystemResourcesA#ssl_throughput_limit_cfg}
  */
  readonly sslThroughputLimitCfg?: SystemResourceAccountingTemplateSystemResourcesSslThroughputLimitCfgA;
  /**
  * sslcps_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_system_resources#sslcps_limit_cfg SystemResourceAccountingTemplateSystemResourcesA#sslcps_limit_cfg}
  */
  readonly sslcpsLimitCfg?: SystemResourceAccountingTemplateSystemResourcesSslcpsLimitCfgA;
}
export interface SystemResourceAccountingTemplateSystemResourcesBwLimitCfgA {
  /**
  * Enter the bandwidth limit in mbps (Bandwidth limit in Mbit/s (no limits applied by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_system_resources#bw_limit_max SystemResourceAccountingTemplateSystemResourcesA#bw_limit_max}
  */
  readonly bwLimitMax?: number;
  /**
  * Disable watermark (90% drop, keep existing sessions, drop  new sessions)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_system_resources#bw_limit_watermark_disable SystemResourceAccountingTemplateSystemResourcesA#bw_limit_watermark_disable}
  */
  readonly bwLimitWatermarkDisable?: number;
}

export function systemResourceAccountingTemplateSystemResourcesBwLimitCfgAToTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesBwLimitCfgAOutputReference | SystemResourceAccountingTemplateSystemResourcesBwLimitCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bw_limit_max: cdktf.numberToTerraform(struct!.bwLimitMax),
    bw_limit_watermark_disable: cdktf.numberToTerraform(struct!.bwLimitWatermarkDisable),
  }
}


export function systemResourceAccountingTemplateSystemResourcesBwLimitCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesBwLimitCfgAOutputReference | SystemResourceAccountingTemplateSystemResourcesBwLimitCfgA): any {
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

export class SystemResourceAccountingTemplateSystemResourcesBwLimitCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateSystemResourcesBwLimitCfgA | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateSystemResourcesBwLimitCfgA | undefined) {
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
export interface SystemResourceAccountingTemplateSystemResourcesConcurrentSessionLimitCfgA {
  /**
  * Enter the Concurrent Session limit (cps) (Concurrent-Session cps limit (no limits applied by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_system_resources#concurrent_session_limit_max SystemResourceAccountingTemplateSystemResourcesA#concurrent_session_limit_max}
  */
  readonly concurrentSessionLimitMax?: number;
}

export function systemResourceAccountingTemplateSystemResourcesConcurrentSessionLimitCfgAToTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesConcurrentSessionLimitCfgAOutputReference | SystemResourceAccountingTemplateSystemResourcesConcurrentSessionLimitCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrent_session_limit_max: cdktf.numberToTerraform(struct!.concurrentSessionLimitMax),
  }
}


export function systemResourceAccountingTemplateSystemResourcesConcurrentSessionLimitCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesConcurrentSessionLimitCfgAOutputReference | SystemResourceAccountingTemplateSystemResourcesConcurrentSessionLimitCfgA): any {
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

export class SystemResourceAccountingTemplateSystemResourcesConcurrentSessionLimitCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateSystemResourcesConcurrentSessionLimitCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrentSessionLimitMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentSessionLimitMax = this._concurrentSessionLimitMax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateSystemResourcesConcurrentSessionLimitCfgA | undefined) {
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
export interface SystemResourceAccountingTemplateSystemResourcesFwcpsLimitCfgA {
  /**
  * Enter the Firewall cps limit (Firewall cps limit (no limits applied by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_system_resources#fwcps_limit_max SystemResourceAccountingTemplateSystemResourcesA#fwcps_limit_max}
  */
  readonly fwcpsLimitMax?: number;
}

export function systemResourceAccountingTemplateSystemResourcesFwcpsLimitCfgAToTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesFwcpsLimitCfgAOutputReference | SystemResourceAccountingTemplateSystemResourcesFwcpsLimitCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fwcps_limit_max: cdktf.numberToTerraform(struct!.fwcpsLimitMax),
  }
}


export function systemResourceAccountingTemplateSystemResourcesFwcpsLimitCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesFwcpsLimitCfgAOutputReference | SystemResourceAccountingTemplateSystemResourcesFwcpsLimitCfgA): any {
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

export class SystemResourceAccountingTemplateSystemResourcesFwcpsLimitCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateSystemResourcesFwcpsLimitCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fwcpsLimitMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwcpsLimitMax = this._fwcpsLimitMax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateSystemResourcesFwcpsLimitCfgA | undefined) {
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
export interface SystemResourceAccountingTemplateSystemResourcesL4SessionLimitCfgA {
  /**
  * Enter the l4 session limit in % (0.01% to 99.99%) (Enter a number from 0.01 to 99.99 (up to 2 digits precision))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_system_resources#l4_session_limit_max SystemResourceAccountingTemplateSystemResourcesA#l4_session_limit_max}
  */
  readonly l4SessionLimitMax?: string;
  /**
  * minimum guaranteed value in % (up to 2 digits precision) (Enter a number from 0 to 99.99)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_system_resources#l4_session_limit_min_guarantee SystemResourceAccountingTemplateSystemResourcesA#l4_session_limit_min_guarantee}
  */
  readonly l4SessionLimitMinGuarantee?: string;
}

export function systemResourceAccountingTemplateSystemResourcesL4SessionLimitCfgAToTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesL4SessionLimitCfgAOutputReference | SystemResourceAccountingTemplateSystemResourcesL4SessionLimitCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    l4_session_limit_max: cdktf.stringToTerraform(struct!.l4SessionLimitMax),
    l4_session_limit_min_guarantee: cdktf.stringToTerraform(struct!.l4SessionLimitMinGuarantee),
  }
}


export function systemResourceAccountingTemplateSystemResourcesL4SessionLimitCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesL4SessionLimitCfgAOutputReference | SystemResourceAccountingTemplateSystemResourcesL4SessionLimitCfgA): any {
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

export class SystemResourceAccountingTemplateSystemResourcesL4SessionLimitCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateSystemResourcesL4SessionLimitCfgA | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateSystemResourcesL4SessionLimitCfgA | undefined) {
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
export interface SystemResourceAccountingTemplateSystemResourcesL4CpsLimitCfgA {
  /**
  * Enter the L4 cps limit (L4 cps limit (no limits applied by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_system_resources#l4cps_limit_max SystemResourceAccountingTemplateSystemResourcesA#l4cps_limit_max}
  */
  readonly l4CpsLimitMax?: number;
}

export function systemResourceAccountingTemplateSystemResourcesL4CpsLimitCfgAToTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesL4CpsLimitCfgAOutputReference | SystemResourceAccountingTemplateSystemResourcesL4CpsLimitCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    l4cps_limit_max: cdktf.numberToTerraform(struct!.l4CpsLimitMax),
  }
}


export function systemResourceAccountingTemplateSystemResourcesL4CpsLimitCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesL4CpsLimitCfgAOutputReference | SystemResourceAccountingTemplateSystemResourcesL4CpsLimitCfgA): any {
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

export class SystemResourceAccountingTemplateSystemResourcesL4CpsLimitCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateSystemResourcesL4CpsLimitCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._l4CpsLimitMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4CpsLimitMax = this._l4CpsLimitMax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateSystemResourcesL4CpsLimitCfgA | undefined) {
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
export interface SystemResourceAccountingTemplateSystemResourcesL7CpsLimitCfgA {
  /**
  * L7cps-limit (L7 cps limit (no limits applied by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_system_resources#l7cps_limit_max SystemResourceAccountingTemplateSystemResourcesA#l7cps_limit_max}
  */
  readonly l7CpsLimitMax?: number;
}

export function systemResourceAccountingTemplateSystemResourcesL7CpsLimitCfgAToTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesL7CpsLimitCfgAOutputReference | SystemResourceAccountingTemplateSystemResourcesL7CpsLimitCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    l7cps_limit_max: cdktf.numberToTerraform(struct!.l7CpsLimitMax),
  }
}


export function systemResourceAccountingTemplateSystemResourcesL7CpsLimitCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesL7CpsLimitCfgAOutputReference | SystemResourceAccountingTemplateSystemResourcesL7CpsLimitCfgA): any {
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

export class SystemResourceAccountingTemplateSystemResourcesL7CpsLimitCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateSystemResourcesL7CpsLimitCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._l7CpsLimitMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.l7CpsLimitMax = this._l7CpsLimitMax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateSystemResourcesL7CpsLimitCfgA | undefined) {
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
export interface SystemResourceAccountingTemplateSystemResourcesNatcpsLimitCfgA {
  /**
  * Enter the Nat cps limit (NAT cps limit (no limits applied by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_system_resources#natcps_limit_max SystemResourceAccountingTemplateSystemResourcesA#natcps_limit_max}
  */
  readonly natcpsLimitMax?: number;
}

export function systemResourceAccountingTemplateSystemResourcesNatcpsLimitCfgAToTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesNatcpsLimitCfgAOutputReference | SystemResourceAccountingTemplateSystemResourcesNatcpsLimitCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    natcps_limit_max: cdktf.numberToTerraform(struct!.natcpsLimitMax),
  }
}


export function systemResourceAccountingTemplateSystemResourcesNatcpsLimitCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesNatcpsLimitCfgAOutputReference | SystemResourceAccountingTemplateSystemResourcesNatcpsLimitCfgA): any {
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

export class SystemResourceAccountingTemplateSystemResourcesNatcpsLimitCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateSystemResourcesNatcpsLimitCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._natcpsLimitMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.natcpsLimitMax = this._natcpsLimitMax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateSystemResourcesNatcpsLimitCfgA | undefined) {
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
export interface SystemResourceAccountingTemplateSystemResourcesSslThroughputLimitCfgA {
  /**
  * Enter the ssl throughput limit in mbps (SSL Througput limit in Mbit/s (no limits applied by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_system_resources#ssl_throughput_limit_max SystemResourceAccountingTemplateSystemResourcesA#ssl_throughput_limit_max}
  */
  readonly sslThroughputLimitMax?: number;
  /**
  * Disable watermark (90% drop, keep existing sessions, drop  new sessions)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_system_resources#ssl_throughput_limit_watermark_disable SystemResourceAccountingTemplateSystemResourcesA#ssl_throughput_limit_watermark_disable}
  */
  readonly sslThroughputLimitWatermarkDisable?: number;
}

export function systemResourceAccountingTemplateSystemResourcesSslThroughputLimitCfgAToTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesSslThroughputLimitCfgAOutputReference | SystemResourceAccountingTemplateSystemResourcesSslThroughputLimitCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssl_throughput_limit_max: cdktf.numberToTerraform(struct!.sslThroughputLimitMax),
    ssl_throughput_limit_watermark_disable: cdktf.numberToTerraform(struct!.sslThroughputLimitWatermarkDisable),
  }
}


export function systemResourceAccountingTemplateSystemResourcesSslThroughputLimitCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesSslThroughputLimitCfgAOutputReference | SystemResourceAccountingTemplateSystemResourcesSslThroughputLimitCfgA): any {
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

export class SystemResourceAccountingTemplateSystemResourcesSslThroughputLimitCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateSystemResourcesSslThroughputLimitCfgA | undefined {
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

  public set internalValue(value: SystemResourceAccountingTemplateSystemResourcesSslThroughputLimitCfgA | undefined) {
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
export interface SystemResourceAccountingTemplateSystemResourcesSslcpsLimitCfgA {
  /**
  * Enter the SSL cps limit (SSL cps limit (no limits applied by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_system_resources#sslcps_limit_max SystemResourceAccountingTemplateSystemResourcesA#sslcps_limit_max}
  */
  readonly sslcpsLimitMax?: number;
}

export function systemResourceAccountingTemplateSystemResourcesSslcpsLimitCfgAToTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesSslcpsLimitCfgAOutputReference | SystemResourceAccountingTemplateSystemResourcesSslcpsLimitCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sslcps_limit_max: cdktf.numberToTerraform(struct!.sslcpsLimitMax),
  }
}


export function systemResourceAccountingTemplateSystemResourcesSslcpsLimitCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateSystemResourcesSslcpsLimitCfgAOutputReference | SystemResourceAccountingTemplateSystemResourcesSslcpsLimitCfgA): any {
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

export class SystemResourceAccountingTemplateSystemResourcesSslcpsLimitCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateSystemResourcesSslcpsLimitCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sslcpsLimitMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslcpsLimitMax = this._sslcpsLimitMax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateSystemResourcesSslcpsLimitCfgA | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_system_resources thunder_system_resource_accounting_template_system_resources}
*/
export class SystemResourceAccountingTemplateSystemResourcesA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_resource_accounting_template_system_resources";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemResourceAccountingTemplateSystemResourcesA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemResourceAccountingTemplateSystemResourcesA to import
  * @param importFromId The id of the existing SystemResourceAccountingTemplateSystemResourcesA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_system_resources#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemResourceAccountingTemplateSystemResourcesA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_resource_accounting_template_system_resources", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_system_resources thunder_system_resource_accounting_template_system_resources} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemResourceAccountingTemplateSystemResourcesAConfig
  */
  public constructor(scope: Construct, id: string, config: SystemResourceAccountingTemplateSystemResourcesAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_resource_accounting_template_system_resources',
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
    this._templateName = config.templateName;
    this._threshold = config.threshold;
    this._uuid = config.uuid;
    this._bwLimitCfg.internalValue = config.bwLimitCfg;
    this._concurrentSessionLimitCfg.internalValue = config.concurrentSessionLimitCfg;
    this._fwcpsLimitCfg.internalValue = config.fwcpsLimitCfg;
    this._l4SessionLimitCfg.internalValue = config.l4SessionLimitCfg;
    this._l4CpsLimitCfg.internalValue = config.l4CpsLimitCfg;
    this._l7CpsLimitCfg.internalValue = config.l7CpsLimitCfg;
    this._natcpsLimitCfg.internalValue = config.natcpsLimitCfg;
    this._sslThroughputLimitCfg.internalValue = config.sslThroughputLimitCfg;
    this._sslcpsLimitCfg.internalValue = config.sslcpsLimitCfg;
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

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
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
  private _bwLimitCfg = new SystemResourceAccountingTemplateSystemResourcesBwLimitCfgAOutputReference(this, "bw_limit_cfg");
  public get bwLimitCfg() {
    return this._bwLimitCfg;
  }
  public putBwLimitCfg(value: SystemResourceAccountingTemplateSystemResourcesBwLimitCfgA) {
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
  private _concurrentSessionLimitCfg = new SystemResourceAccountingTemplateSystemResourcesConcurrentSessionLimitCfgAOutputReference(this, "concurrent_session_limit_cfg");
  public get concurrentSessionLimitCfg() {
    return this._concurrentSessionLimitCfg;
  }
  public putConcurrentSessionLimitCfg(value: SystemResourceAccountingTemplateSystemResourcesConcurrentSessionLimitCfgA) {
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
  private _fwcpsLimitCfg = new SystemResourceAccountingTemplateSystemResourcesFwcpsLimitCfgAOutputReference(this, "fwcps_limit_cfg");
  public get fwcpsLimitCfg() {
    return this._fwcpsLimitCfg;
  }
  public putFwcpsLimitCfg(value: SystemResourceAccountingTemplateSystemResourcesFwcpsLimitCfgA) {
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
  private _l4SessionLimitCfg = new SystemResourceAccountingTemplateSystemResourcesL4SessionLimitCfgAOutputReference(this, "l4_session_limit_cfg");
  public get l4SessionLimitCfg() {
    return this._l4SessionLimitCfg;
  }
  public putL4SessionLimitCfg(value: SystemResourceAccountingTemplateSystemResourcesL4SessionLimitCfgA) {
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
  private _l4CpsLimitCfg = new SystemResourceAccountingTemplateSystemResourcesL4CpsLimitCfgAOutputReference(this, "l4cps_limit_cfg");
  public get l4CpsLimitCfg() {
    return this._l4CpsLimitCfg;
  }
  public putL4CpsLimitCfg(value: SystemResourceAccountingTemplateSystemResourcesL4CpsLimitCfgA) {
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
  private _l7CpsLimitCfg = new SystemResourceAccountingTemplateSystemResourcesL7CpsLimitCfgAOutputReference(this, "l7cps_limit_cfg");
  public get l7CpsLimitCfg() {
    return this._l7CpsLimitCfg;
  }
  public putL7CpsLimitCfg(value: SystemResourceAccountingTemplateSystemResourcesL7CpsLimitCfgA) {
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
  private _natcpsLimitCfg = new SystemResourceAccountingTemplateSystemResourcesNatcpsLimitCfgAOutputReference(this, "natcps_limit_cfg");
  public get natcpsLimitCfg() {
    return this._natcpsLimitCfg;
  }
  public putNatcpsLimitCfg(value: SystemResourceAccountingTemplateSystemResourcesNatcpsLimitCfgA) {
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
  private _sslThroughputLimitCfg = new SystemResourceAccountingTemplateSystemResourcesSslThroughputLimitCfgAOutputReference(this, "ssl_throughput_limit_cfg");
  public get sslThroughputLimitCfg() {
    return this._sslThroughputLimitCfg;
  }
  public putSslThroughputLimitCfg(value: SystemResourceAccountingTemplateSystemResourcesSslThroughputLimitCfgA) {
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
  private _sslcpsLimitCfg = new SystemResourceAccountingTemplateSystemResourcesSslcpsLimitCfgAOutputReference(this, "sslcps_limit_cfg");
  public get sslcpsLimitCfg() {
    return this._sslcpsLimitCfg;
  }
  public putSslcpsLimitCfg(value: SystemResourceAccountingTemplateSystemResourcesSslcpsLimitCfgA) {
    this._sslcpsLimitCfg.internalValue = value;
  }
  public resetSslcpsLimitCfg() {
    this._sslcpsLimitCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslcpsLimitCfgInput() {
    return this._sslcpsLimitCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      template_name: cdktf.stringToTerraform(this._templateName),
      threshold: cdktf.numberToTerraform(this._threshold),
      uuid: cdktf.stringToTerraform(this._uuid),
      bw_limit_cfg: systemResourceAccountingTemplateSystemResourcesBwLimitCfgAToTerraform(this._bwLimitCfg.internalValue),
      concurrent_session_limit_cfg: systemResourceAccountingTemplateSystemResourcesConcurrentSessionLimitCfgAToTerraform(this._concurrentSessionLimitCfg.internalValue),
      fwcps_limit_cfg: systemResourceAccountingTemplateSystemResourcesFwcpsLimitCfgAToTerraform(this._fwcpsLimitCfg.internalValue),
      l4_session_limit_cfg: systemResourceAccountingTemplateSystemResourcesL4SessionLimitCfgAToTerraform(this._l4SessionLimitCfg.internalValue),
      l4cps_limit_cfg: systemResourceAccountingTemplateSystemResourcesL4CpsLimitCfgAToTerraform(this._l4CpsLimitCfg.internalValue),
      l7cps_limit_cfg: systemResourceAccountingTemplateSystemResourcesL7CpsLimitCfgAToTerraform(this._l7CpsLimitCfg.internalValue),
      natcps_limit_cfg: systemResourceAccountingTemplateSystemResourcesNatcpsLimitCfgAToTerraform(this._natcpsLimitCfg.internalValue),
      ssl_throughput_limit_cfg: systemResourceAccountingTemplateSystemResourcesSslThroughputLimitCfgAToTerraform(this._sslThroughputLimitCfg.internalValue),
      sslcps_limit_cfg: systemResourceAccountingTemplateSystemResourcesSslcpsLimitCfgAToTerraform(this._sslcpsLimitCfg.internalValue),
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
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold: {
        value: cdktf.numberToHclTerraform(this._threshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bw_limit_cfg: {
        value: systemResourceAccountingTemplateSystemResourcesBwLimitCfgAToHclTerraform(this._bwLimitCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateSystemResourcesBwLimitCfgAList",
      },
      concurrent_session_limit_cfg: {
        value: systemResourceAccountingTemplateSystemResourcesConcurrentSessionLimitCfgAToHclTerraform(this._concurrentSessionLimitCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateSystemResourcesConcurrentSessionLimitCfgAList",
      },
      fwcps_limit_cfg: {
        value: systemResourceAccountingTemplateSystemResourcesFwcpsLimitCfgAToHclTerraform(this._fwcpsLimitCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateSystemResourcesFwcpsLimitCfgAList",
      },
      l4_session_limit_cfg: {
        value: systemResourceAccountingTemplateSystemResourcesL4SessionLimitCfgAToHclTerraform(this._l4SessionLimitCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateSystemResourcesL4SessionLimitCfgAList",
      },
      l4cps_limit_cfg: {
        value: systemResourceAccountingTemplateSystemResourcesL4CpsLimitCfgAToHclTerraform(this._l4CpsLimitCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateSystemResourcesL4CpsLimitCfgAList",
      },
      l7cps_limit_cfg: {
        value: systemResourceAccountingTemplateSystemResourcesL7CpsLimitCfgAToHclTerraform(this._l7CpsLimitCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateSystemResourcesL7CpsLimitCfgAList",
      },
      natcps_limit_cfg: {
        value: systemResourceAccountingTemplateSystemResourcesNatcpsLimitCfgAToHclTerraform(this._natcpsLimitCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateSystemResourcesNatcpsLimitCfgAList",
      },
      ssl_throughput_limit_cfg: {
        value: systemResourceAccountingTemplateSystemResourcesSslThroughputLimitCfgAToHclTerraform(this._sslThroughputLimitCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateSystemResourcesSslThroughputLimitCfgAList",
      },
      sslcps_limit_cfg: {
        value: systemResourceAccountingTemplateSystemResourcesSslcpsLimitCfgAToHclTerraform(this._sslcpsLimitCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateSystemResourcesSslcpsLimitCfgAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
