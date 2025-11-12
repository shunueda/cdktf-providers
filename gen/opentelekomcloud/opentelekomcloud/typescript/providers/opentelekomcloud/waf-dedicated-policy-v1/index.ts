// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafDedicatedPolicyV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1#deep_inspection WafDedicatedPolicyV1#deep_inspection}
  */
  readonly deepInspection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1#full_detection WafDedicatedPolicyV1#full_detection}
  */
  readonly fullDetection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1#header_inspection WafDedicatedPolicyV1#header_inspection}
  */
  readonly headerInspection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1#id WafDedicatedPolicyV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1#level WafDedicatedPolicyV1#level}
  */
  readonly level?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1#name WafDedicatedPolicyV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1#protection_mode WafDedicatedPolicyV1#protection_mode}
  */
  readonly protectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1#region WafDedicatedPolicyV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1#shiro_decryption_check WafDedicatedPolicyV1#shiro_decryption_check}
  */
  readonly shiroDecryptionCheck?: boolean | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1#options WafDedicatedPolicyV1#options}
  */
  readonly options?: WafDedicatedPolicyV1Options[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1#timeouts WafDedicatedPolicyV1#timeouts}
  */
  readonly timeouts?: WafDedicatedPolicyV1Timeouts;
}
export interface WafDedicatedPolicyV1Options {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1#anti_crawler WafDedicatedPolicyV1#anti_crawler}
  */
  readonly antiCrawler?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1#anti_leakage WafDedicatedPolicyV1#anti_leakage}
  */
  readonly antiLeakage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1#anti_tamper WafDedicatedPolicyV1#anti_tamper}
  */
  readonly antiTamper?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1#blacklist WafDedicatedPolicyV1#blacklist}
  */
  readonly blacklist?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1#cc WafDedicatedPolicyV1#cc}
  */
  readonly cc?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1#common WafDedicatedPolicyV1#common}
  */
  readonly common?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1#crawler WafDedicatedPolicyV1#crawler}
  */
  readonly crawler?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1#crawler_engine WafDedicatedPolicyV1#crawler_engine}
  */
  readonly crawlerEngine?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1#crawler_other WafDedicatedPolicyV1#crawler_other}
  */
  readonly crawlerOther?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1#crawler_scanner WafDedicatedPolicyV1#crawler_scanner}
  */
  readonly crawlerScanner?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1#crawler_script WafDedicatedPolicyV1#crawler_script}
  */
  readonly crawlerScript?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1#custom WafDedicatedPolicyV1#custom}
  */
  readonly custom?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1#followed_action WafDedicatedPolicyV1#followed_action}
  */
  readonly followedAction?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1#geolocation_access_control WafDedicatedPolicyV1#geolocation_access_control}
  */
  readonly geolocationAccessControl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1#ignore WafDedicatedPolicyV1#ignore}
  */
  readonly ignore?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1#privacy WafDedicatedPolicyV1#privacy}
  */
  readonly privacy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1#web_attack WafDedicatedPolicyV1#web_attack}
  */
  readonly webAttack?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1#web_shell WafDedicatedPolicyV1#web_shell}
  */
  readonly webShell?: boolean | cdktf.IResolvable;
}

export function wafDedicatedPolicyV1OptionsToTerraform(struct?: WafDedicatedPolicyV1Options | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anti_crawler: cdktf.booleanToTerraform(struct!.antiCrawler),
    anti_leakage: cdktf.booleanToTerraform(struct!.antiLeakage),
    anti_tamper: cdktf.booleanToTerraform(struct!.antiTamper),
    blacklist: cdktf.booleanToTerraform(struct!.blacklist),
    cc: cdktf.booleanToTerraform(struct!.cc),
    common: cdktf.booleanToTerraform(struct!.common),
    crawler: cdktf.booleanToTerraform(struct!.crawler),
    crawler_engine: cdktf.booleanToTerraform(struct!.crawlerEngine),
    crawler_other: cdktf.booleanToTerraform(struct!.crawlerOther),
    crawler_scanner: cdktf.booleanToTerraform(struct!.crawlerScanner),
    crawler_script: cdktf.booleanToTerraform(struct!.crawlerScript),
    custom: cdktf.booleanToTerraform(struct!.custom),
    followed_action: cdktf.booleanToTerraform(struct!.followedAction),
    geolocation_access_control: cdktf.booleanToTerraform(struct!.geolocationAccessControl),
    ignore: cdktf.booleanToTerraform(struct!.ignore),
    privacy: cdktf.booleanToTerraform(struct!.privacy),
    web_attack: cdktf.booleanToTerraform(struct!.webAttack),
    web_shell: cdktf.booleanToTerraform(struct!.webShell),
  }
}


export function wafDedicatedPolicyV1OptionsToHclTerraform(struct?: WafDedicatedPolicyV1Options | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anti_crawler: {
      value: cdktf.booleanToHclTerraform(struct!.antiCrawler),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    anti_leakage: {
      value: cdktf.booleanToHclTerraform(struct!.antiLeakage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    anti_tamper: {
      value: cdktf.booleanToHclTerraform(struct!.antiTamper),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    blacklist: {
      value: cdktf.booleanToHclTerraform(struct!.blacklist),
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
    followed_action: {
      value: cdktf.booleanToHclTerraform(struct!.followedAction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    geolocation_access_control: {
      value: cdktf.booleanToHclTerraform(struct!.geolocationAccessControl),
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
    web_attack: {
      value: cdktf.booleanToHclTerraform(struct!.webAttack),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    web_shell: {
      value: cdktf.booleanToHclTerraform(struct!.webShell),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafDedicatedPolicyV1OptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafDedicatedPolicyV1Options | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._antiCrawler !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiCrawler = this._antiCrawler;
    }
    if (this._antiLeakage !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiLeakage = this._antiLeakage;
    }
    if (this._antiTamper !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiTamper = this._antiTamper;
    }
    if (this._blacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.blacklist = this._blacklist;
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
    if (this._followedAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.followedAction = this._followedAction;
    }
    if (this._geolocationAccessControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.geolocationAccessControl = this._geolocationAccessControl;
    }
    if (this._ignore !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignore = this._ignore;
    }
    if (this._privacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacy = this._privacy;
    }
    if (this._webAttack !== undefined) {
      hasAnyValues = true;
      internalValueResult.webAttack = this._webAttack;
    }
    if (this._webShell !== undefined) {
      hasAnyValues = true;
      internalValueResult.webShell = this._webShell;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafDedicatedPolicyV1Options | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._antiCrawler = undefined;
      this._antiLeakage = undefined;
      this._antiTamper = undefined;
      this._blacklist = undefined;
      this._cc = undefined;
      this._common = undefined;
      this._crawler = undefined;
      this._crawlerEngine = undefined;
      this._crawlerOther = undefined;
      this._crawlerScanner = undefined;
      this._crawlerScript = undefined;
      this._custom = undefined;
      this._followedAction = undefined;
      this._geolocationAccessControl = undefined;
      this._ignore = undefined;
      this._privacy = undefined;
      this._webAttack = undefined;
      this._webShell = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._antiCrawler = value.antiCrawler;
      this._antiLeakage = value.antiLeakage;
      this._antiTamper = value.antiTamper;
      this._blacklist = value.blacklist;
      this._cc = value.cc;
      this._common = value.common;
      this._crawler = value.crawler;
      this._crawlerEngine = value.crawlerEngine;
      this._crawlerOther = value.crawlerOther;
      this._crawlerScanner = value.crawlerScanner;
      this._crawlerScript = value.crawlerScript;
      this._custom = value.custom;
      this._followedAction = value.followedAction;
      this._geolocationAccessControl = value.geolocationAccessControl;
      this._ignore = value.ignore;
      this._privacy = value.privacy;
      this._webAttack = value.webAttack;
      this._webShell = value.webShell;
    }
  }

  // anti_crawler - computed: true, optional: true, required: false
  private _antiCrawler?: boolean | cdktf.IResolvable; 
  public get antiCrawler() {
    return this.getBooleanAttribute('anti_crawler');
  }
  public set antiCrawler(value: boolean | cdktf.IResolvable) {
    this._antiCrawler = value;
  }
  public resetAntiCrawler() {
    this._antiCrawler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiCrawlerInput() {
    return this._antiCrawler;
  }

  // anti_leakage - computed: true, optional: true, required: false
  private _antiLeakage?: boolean | cdktf.IResolvable; 
  public get antiLeakage() {
    return this.getBooleanAttribute('anti_leakage');
  }
  public set antiLeakage(value: boolean | cdktf.IResolvable) {
    this._antiLeakage = value;
  }
  public resetAntiLeakage() {
    this._antiLeakage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiLeakageInput() {
    return this._antiLeakage;
  }

  // anti_tamper - computed: true, optional: true, required: false
  private _antiTamper?: boolean | cdktf.IResolvable; 
  public get antiTamper() {
    return this.getBooleanAttribute('anti_tamper');
  }
  public set antiTamper(value: boolean | cdktf.IResolvable) {
    this._antiTamper = value;
  }
  public resetAntiTamper() {
    this._antiTamper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiTamperInput() {
    return this._antiTamper;
  }

  // blacklist - computed: true, optional: true, required: false
  private _blacklist?: boolean | cdktf.IResolvable; 
  public get blacklist() {
    return this.getBooleanAttribute('blacklist');
  }
  public set blacklist(value: boolean | cdktf.IResolvable) {
    this._blacklist = value;
  }
  public resetBlacklist() {
    this._blacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistInput() {
    return this._blacklist;
  }

  // bot_enable - computed: true, optional: false, required: false
  public get botEnable() {
    return this.getBooleanAttribute('bot_enable');
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

  // followed_action - computed: true, optional: true, required: false
  private _followedAction?: boolean | cdktf.IResolvable; 
  public get followedAction() {
    return this.getBooleanAttribute('followed_action');
  }
  public set followedAction(value: boolean | cdktf.IResolvable) {
    this._followedAction = value;
  }
  public resetFollowedAction() {
    this._followedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followedActionInput() {
    return this._followedAction;
  }

  // geolocation_access_control - computed: true, optional: true, required: false
  private _geolocationAccessControl?: boolean | cdktf.IResolvable; 
  public get geolocationAccessControl() {
    return this.getBooleanAttribute('geolocation_access_control');
  }
  public set geolocationAccessControl(value: boolean | cdktf.IResolvable) {
    this._geolocationAccessControl = value;
  }
  public resetGeolocationAccessControl() {
    this._geolocationAccessControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocationAccessControlInput() {
    return this._geolocationAccessControl;
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

  // precise - computed: true, optional: false, required: false
  public get precise() {
    return this.getBooleanAttribute('precise');
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

  // web_attack - computed: true, optional: true, required: false
  private _webAttack?: boolean | cdktf.IResolvable; 
  public get webAttack() {
    return this.getBooleanAttribute('web_attack');
  }
  public set webAttack(value: boolean | cdktf.IResolvable) {
    this._webAttack = value;
  }
  public resetWebAttack() {
    this._webAttack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAttackInput() {
    return this._webAttack;
  }

  // web_shell - computed: true, optional: true, required: false
  private _webShell?: boolean | cdktf.IResolvable; 
  public get webShell() {
    return this.getBooleanAttribute('web_shell');
  }
  public set webShell(value: boolean | cdktf.IResolvable) {
    this._webShell = value;
  }
  public resetWebShell() {
    this._webShell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webShellInput() {
    return this._webShell;
  }
}

export class WafDedicatedPolicyV1OptionsList extends cdktf.ComplexList {
  public internalValue? : WafDedicatedPolicyV1Options[] | cdktf.IResolvable

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
  public get(index: number): WafDedicatedPolicyV1OptionsOutputReference {
    return new WafDedicatedPolicyV1OptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafDedicatedPolicyV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1#create WafDedicatedPolicyV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1#delete WafDedicatedPolicyV1#delete}
  */
  readonly delete?: string;
}

export function wafDedicatedPolicyV1TimeoutsToTerraform(struct?: WafDedicatedPolicyV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function wafDedicatedPolicyV1TimeoutsToHclTerraform(struct?: WafDedicatedPolicyV1Timeouts | cdktf.IResolvable): any {
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

export class WafDedicatedPolicyV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WafDedicatedPolicyV1Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WafDedicatedPolicyV1Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1 opentelekomcloud_waf_dedicated_policy_v1}
*/
export class WafDedicatedPolicyV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_waf_dedicated_policy_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafDedicatedPolicyV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafDedicatedPolicyV1 to import
  * @param importFromId The id of the existing WafDedicatedPolicyV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafDedicatedPolicyV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_waf_dedicated_policy_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_policy_v1 opentelekomcloud_waf_dedicated_policy_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafDedicatedPolicyV1Config
  */
  public constructor(scope: Construct, id: string, config: WafDedicatedPolicyV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_waf_dedicated_policy_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.52',
        providerVersionConstraint: '1.36.52'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deepInspection = config.deepInspection;
    this._fullDetection = config.fullDetection;
    this._headerInspection = config.headerInspection;
    this._id = config.id;
    this._level = config.level;
    this._name = config.name;
    this._protectionMode = config.protectionMode;
    this._region = config.region;
    this._shiroDecryptionCheck = config.shiroDecryptionCheck;
    this._options.internalValue = config.options;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // deep_inspection - computed: false, optional: true, required: false
  private _deepInspection?: boolean | cdktf.IResolvable; 
  public get deepInspection() {
    return this.getBooleanAttribute('deep_inspection');
  }
  public set deepInspection(value: boolean | cdktf.IResolvable) {
    this._deepInspection = value;
  }
  public resetDeepInspection() {
    this._deepInspection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deepInspectionInput() {
    return this._deepInspection;
  }

  // domains - computed: true, optional: false, required: false
  public get domains() {
    return this.getListAttribute('domains');
  }

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

  // header_inspection - computed: false, optional: true, required: false
  private _headerInspection?: boolean | cdktf.IResolvable; 
  public get headerInspection() {
    return this.getBooleanAttribute('header_inspection');
  }
  public set headerInspection(value: boolean | cdktf.IResolvable) {
    this._headerInspection = value;
  }
  public resetHeaderInspection() {
    this._headerInspection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInspectionInput() {
    return this._headerInspection;
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

  // protection_mode - computed: true, optional: true, required: false
  private _protectionMode?: string; 
  public get protectionMode() {
    return this.getStringAttribute('protection_mode');
  }
  public set protectionMode(value: string) {
    this._protectionMode = value;
  }
  public resetProtectionMode() {
    this._protectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionModeInput() {
    return this._protectionMode;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // shiro_decryption_check - computed: false, optional: true, required: false
  private _shiroDecryptionCheck?: boolean | cdktf.IResolvable; 
  public get shiroDecryptionCheck() {
    return this.getBooleanAttribute('shiro_decryption_check');
  }
  public set shiroDecryptionCheck(value: boolean | cdktf.IResolvable) {
    this._shiroDecryptionCheck = value;
  }
  public resetShiroDecryptionCheck() {
    this._shiroDecryptionCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shiroDecryptionCheckInput() {
    return this._shiroDecryptionCheck;
  }

  // options - computed: false, optional: true, required: false
  private _options = new WafDedicatedPolicyV1OptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: WafDedicatedPolicyV1Options[] | cdktf.IResolvable) {
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
  private _timeouts = new WafDedicatedPolicyV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WafDedicatedPolicyV1Timeouts) {
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
      deep_inspection: cdktf.booleanToTerraform(this._deepInspection),
      full_detection: cdktf.booleanToTerraform(this._fullDetection),
      header_inspection: cdktf.booleanToTerraform(this._headerInspection),
      id: cdktf.stringToTerraform(this._id),
      level: cdktf.numberToTerraform(this._level),
      name: cdktf.stringToTerraform(this._name),
      protection_mode: cdktf.stringToTerraform(this._protectionMode),
      region: cdktf.stringToTerraform(this._region),
      shiro_decryption_check: cdktf.booleanToTerraform(this._shiroDecryptionCheck),
      options: cdktf.listMapper(wafDedicatedPolicyV1OptionsToTerraform, true)(this._options.internalValue),
      timeouts: wafDedicatedPolicyV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deep_inspection: {
        value: cdktf.booleanToHclTerraform(this._deepInspection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      full_detection: {
        value: cdktf.booleanToHclTerraform(this._fullDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      header_inspection: {
        value: cdktf.booleanToHclTerraform(this._headerInspection),
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
      protection_mode: {
        value: cdktf.stringToHclTerraform(this._protectionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shiro_decryption_check: {
        value: cdktf.booleanToHclTerraform(this._shiroDecryptionCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      options: {
        value: cdktf.listMapperHcl(wafDedicatedPolicyV1OptionsToHclTerraform, true)(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafDedicatedPolicyV1OptionsList",
      },
      timeouts: {
        value: wafDedicatedPolicyV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WafDedicatedPolicyV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
