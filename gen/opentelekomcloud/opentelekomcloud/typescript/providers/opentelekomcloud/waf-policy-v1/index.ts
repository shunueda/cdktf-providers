// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_policy_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafPolicyV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_policy_v1#full_detection WafPolicyV1#full_detection}
  */
  readonly fullDetection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_policy_v1#hosts WafPolicyV1#hosts}
  */
  readonly hosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_policy_v1#id WafPolicyV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_policy_v1#level WafPolicyV1#level}
  */
  readonly level?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_policy_v1#name WafPolicyV1#name}
  */
  readonly name: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_policy_v1#action WafPolicyV1#action}
  */
  readonly action?: WafPolicyV1Action;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_policy_v1#options WafPolicyV1#options}
  */
  readonly options?: WafPolicyV1Options;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_policy_v1#timeouts WafPolicyV1#timeouts}
  */
  readonly timeouts?: WafPolicyV1Timeouts;
}
export interface WafPolicyV1Action {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_policy_v1#category WafPolicyV1#category}
  */
  readonly category: string;
}

export function wafPolicyV1ActionToTerraform(struct?: WafPolicyV1ActionOutputReference | WafPolicyV1Action): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
  }
}


export function wafPolicyV1ActionToHclTerraform(struct?: WafPolicyV1ActionOutputReference | WafPolicyV1Action): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafPolicyV1ActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafPolicyV1Action | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafPolicyV1Action | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._category = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._category = value.category;
    }
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }
}
export interface WafPolicyV1Options {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_policy_v1#antitamper WafPolicyV1#antitamper}
  */
  readonly antitamper?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_policy_v1#cc WafPolicyV1#cc}
  */
  readonly cc?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_policy_v1#common WafPolicyV1#common}
  */
  readonly common?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_policy_v1#crawler WafPolicyV1#crawler}
  */
  readonly crawler?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_policy_v1#crawler_engine WafPolicyV1#crawler_engine}
  */
  readonly crawlerEngine?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_policy_v1#crawler_other WafPolicyV1#crawler_other}
  */
  readonly crawlerOther?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_policy_v1#crawler_scanner WafPolicyV1#crawler_scanner}
  */
  readonly crawlerScanner?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_policy_v1#crawler_script WafPolicyV1#crawler_script}
  */
  readonly crawlerScript?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_policy_v1#custom WafPolicyV1#custom}
  */
  readonly custom?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_policy_v1#ignore WafPolicyV1#ignore}
  */
  readonly ignore?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_policy_v1#privacy WafPolicyV1#privacy}
  */
  readonly privacy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_policy_v1#webattack WafPolicyV1#webattack}
  */
  readonly webattack?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_policy_v1#webshell WafPolicyV1#webshell}
  */
  readonly webshell?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_policy_v1#whiteblackip WafPolicyV1#whiteblackip}
  */
  readonly whiteblackip?: boolean | cdktf.IResolvable;
}

export function wafPolicyV1OptionsToTerraform(struct?: WafPolicyV1OptionsOutputReference | WafPolicyV1Options): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    antitamper: cdktf.booleanToTerraform(struct!.antitamper),
    cc: cdktf.booleanToTerraform(struct!.cc),
    common: cdktf.booleanToTerraform(struct!.common),
    crawler: cdktf.booleanToTerraform(struct!.crawler),
    crawler_engine: cdktf.booleanToTerraform(struct!.crawlerEngine),
    crawler_other: cdktf.booleanToTerraform(struct!.crawlerOther),
    crawler_scanner: cdktf.booleanToTerraform(struct!.crawlerScanner),
    crawler_script: cdktf.booleanToTerraform(struct!.crawlerScript),
    custom: cdktf.booleanToTerraform(struct!.custom),
    ignore: cdktf.booleanToTerraform(struct!.ignore),
    privacy: cdktf.booleanToTerraform(struct!.privacy),
    webattack: cdktf.booleanToTerraform(struct!.webattack),
    webshell: cdktf.booleanToTerraform(struct!.webshell),
    whiteblackip: cdktf.booleanToTerraform(struct!.whiteblackip),
  }
}


export function wafPolicyV1OptionsToHclTerraform(struct?: WafPolicyV1OptionsOutputReference | WafPolicyV1Options): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    antitamper: {
      value: cdktf.booleanToHclTerraform(struct!.antitamper),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cc: {
      value: cdktf.booleanToHclTerraform(struct!.cc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    common: {
      value: cdktf.booleanToHclTerraform(struct!.common),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crawler: {
      value: cdktf.booleanToHclTerraform(struct!.crawler),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crawler_engine: {
      value: cdktf.booleanToHclTerraform(struct!.crawlerEngine),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crawler_other: {
      value: cdktf.booleanToHclTerraform(struct!.crawlerOther),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crawler_scanner: {
      value: cdktf.booleanToHclTerraform(struct!.crawlerScanner),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crawler_script: {
      value: cdktf.booleanToHclTerraform(struct!.crawlerScript),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom: {
      value: cdktf.booleanToHclTerraform(struct!.custom),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore: {
      value: cdktf.booleanToHclTerraform(struct!.ignore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    privacy: {
      value: cdktf.booleanToHclTerraform(struct!.privacy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    webattack: {
      value: cdktf.booleanToHclTerraform(struct!.webattack),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    webshell: {
      value: cdktf.booleanToHclTerraform(struct!.webshell),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    whiteblackip: {
      value: cdktf.booleanToHclTerraform(struct!.whiteblackip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafPolicyV1OptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafPolicyV1Options | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._antitamper !== undefined) {
      hasAnyValues = true;
      internalValueResult.antitamper = this._antitamper;
    }
    if (this._cc !== undefined) {
      hasAnyValues = true;
      internalValueResult.cc = this._cc;
    }
    if (this._common !== undefined) {
      hasAnyValues = true;
      internalValueResult.common = this._common;
    }
    if (this._crawler !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawler = this._crawler;
    }
    if (this._crawlerEngine !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlerEngine = this._crawlerEngine;
    }
    if (this._crawlerOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlerOther = this._crawlerOther;
    }
    if (this._crawlerScanner !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlerScanner = this._crawlerScanner;
    }
    if (this._crawlerScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlerScript = this._crawlerScript;
    }
    if (this._custom !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom;
    }
    if (this._ignore !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignore = this._ignore;
    }
    if (this._privacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacy = this._privacy;
    }
    if (this._webattack !== undefined) {
      hasAnyValues = true;
      internalValueResult.webattack = this._webattack;
    }
    if (this._webshell !== undefined) {
      hasAnyValues = true;
      internalValueResult.webshell = this._webshell;
    }
    if (this._whiteblackip !== undefined) {
      hasAnyValues = true;
      internalValueResult.whiteblackip = this._whiteblackip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafPolicyV1Options | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._antitamper = undefined;
      this._cc = undefined;
      this._common = undefined;
      this._crawler = undefined;
      this._crawlerEngine = undefined;
      this._crawlerOther = undefined;
      this._crawlerScanner = undefined;
      this._crawlerScript = undefined;
      this._custom = undefined;
      this._ignore = undefined;
      this._privacy = undefined;
      this._webattack = undefined;
      this._webshell = undefined;
      this._whiteblackip = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._antitamper = value.antitamper;
      this._cc = value.cc;
      this._common = value.common;
      this._crawler = value.crawler;
      this._crawlerEngine = value.crawlerEngine;
      this._crawlerOther = value.crawlerOther;
      this._crawlerScanner = value.crawlerScanner;
      this._crawlerScript = value.crawlerScript;
      this._custom = value.custom;
      this._ignore = value.ignore;
      this._privacy = value.privacy;
      this._webattack = value.webattack;
      this._webshell = value.webshell;
      this._whiteblackip = value.whiteblackip;
    }
  }

  // antitamper - computed: true, optional: true, required: false
  private _antitamper?: boolean | cdktf.IResolvable; 
  public get antitamper() {
    return this.getBooleanAttribute('antitamper');
  }
  public set antitamper(value: boolean | cdktf.IResolvable) {
    this._antitamper = value;
  }
  public resetAntitamper() {
    this._antitamper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antitamperInput() {
    return this._antitamper;
  }

  // cc - computed: true, optional: true, required: false
  private _cc?: boolean | cdktf.IResolvable; 
  public get cc() {
    return this.getBooleanAttribute('cc');
  }
  public set cc(value: boolean | cdktf.IResolvable) {
    this._cc = value;
  }
  public resetCc() {
    this._cc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccInput() {
    return this._cc;
  }

  // common - computed: true, optional: true, required: false
  private _common?: boolean | cdktf.IResolvable; 
  public get common() {
    return this.getBooleanAttribute('common');
  }
  public set common(value: boolean | cdktf.IResolvable) {
    this._common = value;
  }
  public resetCommon() {
    this._common = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonInput() {
    return this._common;
  }

  // crawler - computed: true, optional: true, required: false
  private _crawler?: boolean | cdktf.IResolvable; 
  public get crawler() {
    return this.getBooleanAttribute('crawler');
  }
  public set crawler(value: boolean | cdktf.IResolvable) {
    this._crawler = value;
  }
  public resetCrawler() {
    this._crawler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerInput() {
    return this._crawler;
  }

  // crawler_engine - computed: true, optional: true, required: false
  private _crawlerEngine?: boolean | cdktf.IResolvable; 
  public get crawlerEngine() {
    return this.getBooleanAttribute('crawler_engine');
  }
  public set crawlerEngine(value: boolean | cdktf.IResolvable) {
    this._crawlerEngine = value;
  }
  public resetCrawlerEngine() {
    this._crawlerEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerEngineInput() {
    return this._crawlerEngine;
  }

  // crawler_other - computed: true, optional: true, required: false
  private _crawlerOther?: boolean | cdktf.IResolvable; 
  public get crawlerOther() {
    return this.getBooleanAttribute('crawler_other');
  }
  public set crawlerOther(value: boolean | cdktf.IResolvable) {
    this._crawlerOther = value;
  }
  public resetCrawlerOther() {
    this._crawlerOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerOtherInput() {
    return this._crawlerOther;
  }

  // crawler_scanner - computed: true, optional: true, required: false
  private _crawlerScanner?: boolean | cdktf.IResolvable; 
  public get crawlerScanner() {
    return this.getBooleanAttribute('crawler_scanner');
  }
  public set crawlerScanner(value: boolean | cdktf.IResolvable) {
    this._crawlerScanner = value;
  }
  public resetCrawlerScanner() {
    this._crawlerScanner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerScannerInput() {
    return this._crawlerScanner;
  }

  // crawler_script - computed: true, optional: true, required: false
  private _crawlerScript?: boolean | cdktf.IResolvable; 
  public get crawlerScript() {
    return this.getBooleanAttribute('crawler_script');
  }
  public set crawlerScript(value: boolean | cdktf.IResolvable) {
    this._crawlerScript = value;
  }
  public resetCrawlerScript() {
    this._crawlerScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerScriptInput() {
    return this._crawlerScript;
  }

  // custom - computed: true, optional: true, required: false
  private _custom?: boolean | cdktf.IResolvable; 
  public get custom() {
    return this.getBooleanAttribute('custom');
  }
  public set custom(value: boolean | cdktf.IResolvable) {
    this._custom = value;
  }
  public resetCustom() {
    this._custom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom;
  }

  // ignore - computed: true, optional: true, required: false
  private _ignore?: boolean | cdktf.IResolvable; 
  public get ignore() {
    return this.getBooleanAttribute('ignore');
  }
  public set ignore(value: boolean | cdktf.IResolvable) {
    this._ignore = value;
  }
  public resetIgnore() {
    this._ignore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreInput() {
    return this._ignore;
  }

  // privacy - computed: true, optional: true, required: false
  private _privacy?: boolean | cdktf.IResolvable; 
  public get privacy() {
    return this.getBooleanAttribute('privacy');
  }
  public set privacy(value: boolean | cdktf.IResolvable) {
    this._privacy = value;
  }
  public resetPrivacy() {
    this._privacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyInput() {
    return this._privacy;
  }

  // webattack - computed: true, optional: true, required: false
  private _webattack?: boolean | cdktf.IResolvable; 
  public get webattack() {
    return this.getBooleanAttribute('webattack');
  }
  public set webattack(value: boolean | cdktf.IResolvable) {
    this._webattack = value;
  }
  public resetWebattack() {
    this._webattack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webattackInput() {
    return this._webattack;
  }

  // webshell - computed: true, optional: true, required: false
  private _webshell?: boolean | cdktf.IResolvable; 
  public get webshell() {
    return this.getBooleanAttribute('webshell');
  }
  public set webshell(value: boolean | cdktf.IResolvable) {
    this._webshell = value;
  }
  public resetWebshell() {
    this._webshell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webshellInput() {
    return this._webshell;
  }

  // whiteblackip - computed: true, optional: true, required: false
  private _whiteblackip?: boolean | cdktf.IResolvable; 
  public get whiteblackip() {
    return this.getBooleanAttribute('whiteblackip');
  }
  public set whiteblackip(value: boolean | cdktf.IResolvable) {
    this._whiteblackip = value;
  }
  public resetWhiteblackip() {
    this._whiteblackip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whiteblackipInput() {
    return this._whiteblackip;
  }
}
export interface WafPolicyV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_policy_v1#create WafPolicyV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_policy_v1#delete WafPolicyV1#delete}
  */
  readonly delete?: string;
}

export function wafPolicyV1TimeoutsToTerraform(struct?: WafPolicyV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function wafPolicyV1TimeoutsToHclTerraform(struct?: WafPolicyV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafPolicyV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WafPolicyV1Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafPolicyV1Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_policy_v1 opentelekomcloud_waf_policy_v1}
*/
export class WafPolicyV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_waf_policy_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafPolicyV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafPolicyV1 to import
  * @param importFromId The id of the existing WafPolicyV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_policy_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafPolicyV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_waf_policy_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_policy_v1 opentelekomcloud_waf_policy_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafPolicyV1Config
  */
  public constructor(scope: Construct, id: string, config: WafPolicyV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_waf_policy_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.55',
        providerVersionConstraint: '1.36.55'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fullDetection = config.fullDetection;
    this._hosts = config.hosts;
    this._id = config.id;
    this._level = config.level;
    this._name = config.name;
    this._action.internalValue = config.action;
    this._options.internalValue = config.options;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // full_detection - computed: true, optional: true, required: false
  private _fullDetection?: boolean | cdktf.IResolvable; 
  public get fullDetection() {
    return this.getBooleanAttribute('full_detection');
  }
  public set fullDetection(value: boolean | cdktf.IResolvable) {
    this._fullDetection = value;
  }
  public resetFullDetection() {
    this._fullDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullDetectionInput() {
    return this._fullDetection;
  }

  // hosts - computed: true, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
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

  // level - computed: true, optional: true, required: false
  private _level?: number; 
  public get level() {
    return this.getNumberAttribute('level');
  }
  public set level(value: number) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
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

  // action - computed: false, optional: true, required: false
  private _action = new WafPolicyV1ActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: WafPolicyV1Action) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new WafPolicyV1OptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: WafPolicyV1Options) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WafPolicyV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WafPolicyV1Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      full_detection: cdktf.booleanToTerraform(this._fullDetection),
      hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hosts),
      id: cdktf.stringToTerraform(this._id),
      level: cdktf.numberToTerraform(this._level),
      name: cdktf.stringToTerraform(this._name),
      action: wafPolicyV1ActionToTerraform(this._action.internalValue),
      options: wafPolicyV1OptionsToTerraform(this._options.internalValue),
      timeouts: wafPolicyV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      full_detection: {
        value: cdktf.booleanToHclTerraform(this._fullDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hosts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      level: {
        value: cdktf.numberToHclTerraform(this._level),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action: {
        value: wafPolicyV1ActionToHclTerraform(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafPolicyV1ActionList",
      },
      options: {
        value: wafPolicyV1OptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafPolicyV1OptionsList",
      },
      timeouts: {
        value: wafPolicyV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WafPolicyV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
