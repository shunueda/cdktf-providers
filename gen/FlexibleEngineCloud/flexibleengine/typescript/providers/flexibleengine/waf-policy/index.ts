// https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_policy#domains WafPolicy#domains}
  */
  readonly domains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_policy#full_detection WafPolicy#full_detection}
  */
  readonly fullDetection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_policy#id WafPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_policy#level WafPolicy#level}
  */
  readonly level?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_policy#name WafPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_policy#protection_mode WafPolicy#protection_mode}
  */
  readonly protectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_policy#region WafPolicy#region}
  */
  readonly region?: string;
  /**
  * protection_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_policy#protection_status WafPolicy#protection_status}
  */
  readonly protectionStatus?: WafPolicyProtectionStatus;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_policy#timeouts WafPolicy#timeouts}
  */
  readonly timeouts?: WafPolicyTimeouts;
}
export interface WafPolicyProtectionStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_policy#basic_web_protection WafPolicy#basic_web_protection}
  */
  readonly basicWebProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_policy#blacklist WafPolicy#blacklist}
  */
  readonly blacklist?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_policy#cc_protection WafPolicy#cc_protection}
  */
  readonly ccProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_policy#crawler_engine WafPolicy#crawler_engine}
  */
  readonly crawlerEngine?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_policy#crawler_other WafPolicy#crawler_other}
  */
  readonly crawlerOther?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_policy#crawler_scanner WafPolicy#crawler_scanner}
  */
  readonly crawlerScanner?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_policy#crawler_script WafPolicy#crawler_script}
  */
  readonly crawlerScript?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_policy#data_masking WafPolicy#data_masking}
  */
  readonly dataMasking?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_policy#false_alarm_masking WafPolicy#false_alarm_masking}
  */
  readonly falseAlarmMasking?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_policy#general_check WafPolicy#general_check}
  */
  readonly generalCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_policy#precise_protection WafPolicy#precise_protection}
  */
  readonly preciseProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_policy#web_tamper_protection WafPolicy#web_tamper_protection}
  */
  readonly webTamperProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_policy#webshell WafPolicy#webshell}
  */
  readonly webshell?: boolean | cdktf.IResolvable;
}

export function wafPolicyProtectionStatusToTerraform(struct?: WafPolicyProtectionStatusOutputReference | WafPolicyProtectionStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_web_protection: cdktf.booleanToTerraform(struct!.basicWebProtection),
    blacklist: cdktf.booleanToTerraform(struct!.blacklist),
    cc_protection: cdktf.booleanToTerraform(struct!.ccProtection),
    crawler_engine: cdktf.booleanToTerraform(struct!.crawlerEngine),
    crawler_other: cdktf.booleanToTerraform(struct!.crawlerOther),
    crawler_scanner: cdktf.booleanToTerraform(struct!.crawlerScanner),
    crawler_script: cdktf.booleanToTerraform(struct!.crawlerScript),
    data_masking: cdktf.booleanToTerraform(struct!.dataMasking),
    false_alarm_masking: cdktf.booleanToTerraform(struct!.falseAlarmMasking),
    general_check: cdktf.booleanToTerraform(struct!.generalCheck),
    precise_protection: cdktf.booleanToTerraform(struct!.preciseProtection),
    web_tamper_protection: cdktf.booleanToTerraform(struct!.webTamperProtection),
    webshell: cdktf.booleanToTerraform(struct!.webshell),
  }
}


export function wafPolicyProtectionStatusToHclTerraform(struct?: WafPolicyProtectionStatusOutputReference | WafPolicyProtectionStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_web_protection: {
      value: cdktf.booleanToHclTerraform(struct!.basicWebProtection),
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
    cc_protection: {
      value: cdktf.booleanToHclTerraform(struct!.ccProtection),
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
    data_masking: {
      value: cdktf.booleanToHclTerraform(struct!.dataMasking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    false_alarm_masking: {
      value: cdktf.booleanToHclTerraform(struct!.falseAlarmMasking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    general_check: {
      value: cdktf.booleanToHclTerraform(struct!.generalCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    precise_protection: {
      value: cdktf.booleanToHclTerraform(struct!.preciseProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    web_tamper_protection: {
      value: cdktf.booleanToHclTerraform(struct!.webTamperProtection),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafPolicyProtectionStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafPolicyProtectionStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicWebProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicWebProtection = this._basicWebProtection;
    }
    if (this._blacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.blacklist = this._blacklist;
    }
    if (this._ccProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccProtection = this._ccProtection;
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
    if (this._dataMasking !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataMasking = this._dataMasking;
    }
    if (this._falseAlarmMasking !== undefined) {
      hasAnyValues = true;
      internalValueResult.falseAlarmMasking = this._falseAlarmMasking;
    }
    if (this._generalCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.generalCheck = this._generalCheck;
    }
    if (this._preciseProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.preciseProtection = this._preciseProtection;
    }
    if (this._webTamperProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.webTamperProtection = this._webTamperProtection;
    }
    if (this._webshell !== undefined) {
      hasAnyValues = true;
      internalValueResult.webshell = this._webshell;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafPolicyProtectionStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._basicWebProtection = undefined;
      this._blacklist = undefined;
      this._ccProtection = undefined;
      this._crawlerEngine = undefined;
      this._crawlerOther = undefined;
      this._crawlerScanner = undefined;
      this._crawlerScript = undefined;
      this._dataMasking = undefined;
      this._falseAlarmMasking = undefined;
      this._generalCheck = undefined;
      this._preciseProtection = undefined;
      this._webTamperProtection = undefined;
      this._webshell = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._basicWebProtection = value.basicWebProtection;
      this._blacklist = value.blacklist;
      this._ccProtection = value.ccProtection;
      this._crawlerEngine = value.crawlerEngine;
      this._crawlerOther = value.crawlerOther;
      this._crawlerScanner = value.crawlerScanner;
      this._crawlerScript = value.crawlerScript;
      this._dataMasking = value.dataMasking;
      this._falseAlarmMasking = value.falseAlarmMasking;
      this._generalCheck = value.generalCheck;
      this._preciseProtection = value.preciseProtection;
      this._webTamperProtection = value.webTamperProtection;
      this._webshell = value.webshell;
    }
  }

  // basic_web_protection - computed: true, optional: true, required: false
  private _basicWebProtection?: boolean | cdktf.IResolvable; 
  public get basicWebProtection() {
    return this.getBooleanAttribute('basic_web_protection');
  }
  public set basicWebProtection(value: boolean | cdktf.IResolvable) {
    this._basicWebProtection = value;
  }
  public resetBasicWebProtection() {
    this._basicWebProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicWebProtectionInput() {
    return this._basicWebProtection;
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

  // cc_protection - computed: true, optional: true, required: false
  private _ccProtection?: boolean | cdktf.IResolvable; 
  public get ccProtection() {
    return this.getBooleanAttribute('cc_protection');
  }
  public set ccProtection(value: boolean | cdktf.IResolvable) {
    this._ccProtection = value;
  }
  public resetCcProtection() {
    this._ccProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccProtectionInput() {
    return this._ccProtection;
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

  // data_masking - computed: true, optional: true, required: false
  private _dataMasking?: boolean | cdktf.IResolvable; 
  public get dataMasking() {
    return this.getBooleanAttribute('data_masking');
  }
  public set dataMasking(value: boolean | cdktf.IResolvable) {
    this._dataMasking = value;
  }
  public resetDataMasking() {
    this._dataMasking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataMaskingInput() {
    return this._dataMasking;
  }

  // false_alarm_masking - computed: true, optional: true, required: false
  private _falseAlarmMasking?: boolean | cdktf.IResolvable; 
  public get falseAlarmMasking() {
    return this.getBooleanAttribute('false_alarm_masking');
  }
  public set falseAlarmMasking(value: boolean | cdktf.IResolvable) {
    this._falseAlarmMasking = value;
  }
  public resetFalseAlarmMasking() {
    this._falseAlarmMasking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get falseAlarmMaskingInput() {
    return this._falseAlarmMasking;
  }

  // general_check - computed: true, optional: true, required: false
  private _generalCheck?: boolean | cdktf.IResolvable; 
  public get generalCheck() {
    return this.getBooleanAttribute('general_check');
  }
  public set generalCheck(value: boolean | cdktf.IResolvable) {
    this._generalCheck = value;
  }
  public resetGeneralCheck() {
    this._generalCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generalCheckInput() {
    return this._generalCheck;
  }

  // precise_protection - computed: true, optional: true, required: false
  private _preciseProtection?: boolean | cdktf.IResolvable; 
  public get preciseProtection() {
    return this.getBooleanAttribute('precise_protection');
  }
  public set preciseProtection(value: boolean | cdktf.IResolvable) {
    this._preciseProtection = value;
  }
  public resetPreciseProtection() {
    this._preciseProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preciseProtectionInput() {
    return this._preciseProtection;
  }

  // web_tamper_protection - computed: true, optional: true, required: false
  private _webTamperProtection?: boolean | cdktf.IResolvable; 
  public get webTamperProtection() {
    return this.getBooleanAttribute('web_tamper_protection');
  }
  public set webTamperProtection(value: boolean | cdktf.IResolvable) {
    this._webTamperProtection = value;
  }
  public resetWebTamperProtection() {
    this._webTamperProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webTamperProtectionInput() {
    return this._webTamperProtection;
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
}
export interface WafPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_policy#create WafPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_policy#delete WafPolicy#delete}
  */
  readonly delete?: string;
}

export function wafPolicyTimeoutsToTerraform(struct?: WafPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function wafPolicyTimeoutsToHclTerraform(struct?: WafPolicyTimeouts | cdktf.IResolvable): any {
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

export class WafPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WafPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WafPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_policy flexibleengine_waf_policy}
*/
export class WafPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flexibleengine_waf_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafPolicy to import
  * @param importFromId The id of the existing WafPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flexibleengine_waf_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_policy flexibleengine_waf_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: WafPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'flexibleengine_waf_policy',
      terraformGeneratorMetadata: {
        providerName: 'flexibleengine',
        providerVersion: '1.46.0',
        providerVersionConstraint: '1.46.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domains = config.domains;
    this._fullDetection = config.fullDetection;
    this._id = config.id;
    this._level = config.level;
    this._name = config.name;
    this._protectionMode = config.protectionMode;
    this._region = config.region;
    this._protectionStatus.internalValue = config.protectionStatus;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domains - computed: true, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // full_detection - computed: false, optional: true, required: false
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

  // level - computed: false, optional: true, required: false
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

  // protection_mode - computed: false, optional: true, required: false
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

  // protection_status - computed: false, optional: true, required: false
  private _protectionStatus = new WafPolicyProtectionStatusOutputReference(this, "protection_status");
  public get protectionStatus() {
    return this._protectionStatus;
  }
  public putProtectionStatus(value: WafPolicyProtectionStatus) {
    this._protectionStatus.internalValue = value;
  }
  public resetProtectionStatus() {
    this._protectionStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionStatusInput() {
    return this._protectionStatus.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WafPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WafPolicyTimeouts) {
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
      domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domains),
      full_detection: cdktf.booleanToTerraform(this._fullDetection),
      id: cdktf.stringToTerraform(this._id),
      level: cdktf.numberToTerraform(this._level),
      name: cdktf.stringToTerraform(this._name),
      protection_mode: cdktf.stringToTerraform(this._protectionMode),
      region: cdktf.stringToTerraform(this._region),
      protection_status: wafPolicyProtectionStatusToTerraform(this._protectionStatus.internalValue),
      timeouts: wafPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      full_detection: {
        value: cdktf.booleanToHclTerraform(this._fullDetection),
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
      protection_status: {
        value: wafPolicyProtectionStatusToHclTerraform(this._protectionStatus.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafPolicyProtectionStatusList",
      },
      timeouts: {
        value: wafPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WafPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
