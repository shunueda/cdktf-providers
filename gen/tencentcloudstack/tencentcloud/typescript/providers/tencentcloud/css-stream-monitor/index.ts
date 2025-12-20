// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/css_stream_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CssStreamMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * AI asr input index list.(first input index is 1.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/css_stream_monitor#ai_asr_input_index_list CssStreamMonitor#ai_asr_input_index_list}
  */
  readonly aiAsrInputIndexList?: number[];
  /**
  * If enable format diagnose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/css_stream_monitor#ai_format_diagnose CssStreamMonitor#ai_format_diagnose}
  */
  readonly aiFormatDiagnose?: number;
  /**
  * Ai ocr input index list(first input index is 1.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/css_stream_monitor#ai_ocr_input_index_list CssStreamMonitor#ai_ocr_input_index_list}
  */
  readonly aiOcrInputIndexList?: number[];
  /**
  * If store monitor event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/css_stream_monitor#allow_monitor_report CssStreamMonitor#allow_monitor_report}
  */
  readonly allowMonitorReport?: number;
  /**
  * Asr language.0: close.1: Chinese2: English3: Japanese4: Korean.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/css_stream_monitor#asr_language CssStreamMonitor#asr_language}
  */
  readonly asrLanguage?: number;
  /**
  * If enable stream broken check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/css_stream_monitor#check_stream_broken CssStreamMonitor#check_stream_broken}
  */
  readonly checkStreamBroken?: number;
  /**
  * If enable low frame rate check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/css_stream_monitor#check_stream_low_frame_rate CssStreamMonitor#check_stream_low_frame_rate}
  */
  readonly checkStreamLowFrameRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/css_stream_monitor#id CssStreamMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Monitor task name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/css_stream_monitor#monitor_name CssStreamMonitor#monitor_name}
  */
  readonly monitorName?: string;
  /**
  * Intelligent text recognition language settings: ocr language.0: close.1. Chinese,English.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/css_stream_monitor#ocr_language CssStreamMonitor#ocr_language}
  */
  readonly ocrLanguage?: number;
  /**
  * input_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/css_stream_monitor#input_list CssStreamMonitor#input_list}
  */
  readonly inputList: CssStreamMonitorInputListStruct[] | cdktf.IResolvable;
  /**
  * notify_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/css_stream_monitor#notify_policy CssStreamMonitor#notify_policy}
  */
  readonly notifyPolicy?: CssStreamMonitorNotifyPolicy;
  /**
  * output_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/css_stream_monitor#output_info CssStreamMonitor#output_info}
  */
  readonly outputInfo: CssStreamMonitorOutputInfo;
}
export interface CssStreamMonitorInputListStruct {
  /**
  * Description content.limit 256 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/css_stream_monitor#description CssStreamMonitor#description}
  */
  readonly description?: string;
  /**
  * Wait monitor input push path.limit 32 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/css_stream_monitor#input_app CssStreamMonitor#input_app}
  */
  readonly inputApp?: string;
  /**
  * Wait monitor input push domain.limit 128 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/css_stream_monitor#input_domain CssStreamMonitor#input_domain}
  */
  readonly inputDomain?: string;
  /**
  * Wait monitor input stream name.limit 256 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/css_stream_monitor#input_stream_name CssStreamMonitor#input_stream_name}
  */
  readonly inputStreamName: string;
  /**
  * Wait monitor input stream push url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/css_stream_monitor#input_url CssStreamMonitor#input_url}
  */
  readonly inputUrl?: string;
}

export function cssStreamMonitorInputListStructToTerraform(struct?: CssStreamMonitorInputListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    input_app: cdktf.stringToTerraform(struct!.inputApp),
    input_domain: cdktf.stringToTerraform(struct!.inputDomain),
    input_stream_name: cdktf.stringToTerraform(struct!.inputStreamName),
    input_url: cdktf.stringToTerraform(struct!.inputUrl),
  }
}


export function cssStreamMonitorInputListStructToHclTerraform(struct?: CssStreamMonitorInputListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_app: {
      value: cdktf.stringToHclTerraform(struct!.inputApp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_domain: {
      value: cdktf.stringToHclTerraform(struct!.inputDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_stream_name: {
      value: cdktf.stringToHclTerraform(struct!.inputStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_url: {
      value: cdktf.stringToHclTerraform(struct!.inputUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CssStreamMonitorInputListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CssStreamMonitorInputListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._inputApp !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputApp = this._inputApp;
    }
    if (this._inputDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputDomain = this._inputDomain;
    }
    if (this._inputStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputStreamName = this._inputStreamName;
    }
    if (this._inputUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputUrl = this._inputUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CssStreamMonitorInputListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._inputApp = undefined;
      this._inputDomain = undefined;
      this._inputStreamName = undefined;
      this._inputUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._inputApp = value.inputApp;
      this._inputDomain = value.inputDomain;
      this._inputStreamName = value.inputStreamName;
      this._inputUrl = value.inputUrl;
    }
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

  // input_app - computed: false, optional: true, required: false
  private _inputApp?: string; 
  public get inputApp() {
    return this.getStringAttribute('input_app');
  }
  public set inputApp(value: string) {
    this._inputApp = value;
  }
  public resetInputApp() {
    this._inputApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputAppInput() {
    return this._inputApp;
  }

  // input_domain - computed: false, optional: true, required: false
  private _inputDomain?: string; 
  public get inputDomain() {
    return this.getStringAttribute('input_domain');
  }
  public set inputDomain(value: string) {
    this._inputDomain = value;
  }
  public resetInputDomain() {
    this._inputDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDomainInput() {
    return this._inputDomain;
  }

  // input_stream_name - computed: false, optional: false, required: true
  private _inputStreamName?: string; 
  public get inputStreamName() {
    return this.getStringAttribute('input_stream_name');
  }
  public set inputStreamName(value: string) {
    this._inputStreamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputStreamNameInput() {
    return this._inputStreamName;
  }

  // input_url - computed: false, optional: true, required: false
  private _inputUrl?: string; 
  public get inputUrl() {
    return this.getStringAttribute('input_url');
  }
  public set inputUrl(value: string) {
    this._inputUrl = value;
  }
  public resetInputUrl() {
    this._inputUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputUrlInput() {
    return this._inputUrl;
  }
}

export class CssStreamMonitorInputListStructList extends cdktf.ComplexList {
  public internalValue? : CssStreamMonitorInputListStruct[] | cdktf.IResolvable

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
  public get(index: number): CssStreamMonitorInputListStructOutputReference {
    return new CssStreamMonitorInputListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CssStreamMonitorNotifyPolicy {
  /**
  * Callback url.limit [0,512].only http or https.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/css_stream_monitor#callback_url CssStreamMonitor#callback_url}
  */
  readonly callbackUrl?: string;
  /**
  * Notify policy type.0: not notify.1: use global policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/css_stream_monitor#notify_policy_type CssStreamMonitor#notify_policy_type}
  */
  readonly notifyPolicyType?: number;
}

export function cssStreamMonitorNotifyPolicyToTerraform(struct?: CssStreamMonitorNotifyPolicyOutputReference | CssStreamMonitorNotifyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    callback_url: cdktf.stringToTerraform(struct!.callbackUrl),
    notify_policy_type: cdktf.numberToTerraform(struct!.notifyPolicyType),
  }
}


export function cssStreamMonitorNotifyPolicyToHclTerraform(struct?: CssStreamMonitorNotifyPolicyOutputReference | CssStreamMonitorNotifyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    callback_url: {
      value: cdktf.stringToHclTerraform(struct!.callbackUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_policy_type: {
      value: cdktf.numberToHclTerraform(struct!.notifyPolicyType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CssStreamMonitorNotifyPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CssStreamMonitorNotifyPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._callbackUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.callbackUrl = this._callbackUrl;
    }
    if (this._notifyPolicyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyPolicyType = this._notifyPolicyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CssStreamMonitorNotifyPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._callbackUrl = undefined;
      this._notifyPolicyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._callbackUrl = value.callbackUrl;
      this._notifyPolicyType = value.notifyPolicyType;
    }
  }

  // callback_url - computed: false, optional: true, required: false
  private _callbackUrl?: string; 
  public get callbackUrl() {
    return this.getStringAttribute('callback_url');
  }
  public set callbackUrl(value: string) {
    this._callbackUrl = value;
  }
  public resetCallbackUrl() {
    this._callbackUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackUrlInput() {
    return this._callbackUrl;
  }

  // notify_policy_type - computed: false, optional: true, required: false
  private _notifyPolicyType?: number; 
  public get notifyPolicyType() {
    return this.getNumberAttribute('notify_policy_type');
  }
  public set notifyPolicyType(value: number) {
    this._notifyPolicyType = value;
  }
  public resetNotifyPolicyType() {
    this._notifyPolicyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyPolicyTypeInput() {
    return this._notifyPolicyType;
  }
}
export interface CssStreamMonitorOutputInfo {
  /**
  * Monitor task play path.limit 32 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/css_stream_monitor#output_app CssStreamMonitor#output_app}
  */
  readonly outputApp?: string;
  /**
  * Monitor task output play domain.limit 128 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/css_stream_monitor#output_domain CssStreamMonitor#output_domain}
  */
  readonly outputDomain?: string;
  /**
  * Monitor task output height, limit[1, 1080].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/css_stream_monitor#output_stream_height CssStreamMonitor#output_stream_height}
  */
  readonly outputStreamHeight: number;
  /**
  * Monitor task output stream name.limit 256 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/css_stream_monitor#output_stream_name CssStreamMonitor#output_stream_name}
  */
  readonly outputStreamName?: string;
  /**
  * Output stream width, limit[1, 1920].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/css_stream_monitor#output_stream_width CssStreamMonitor#output_stream_width}
  */
  readonly outputStreamWidth: number;
}

export function cssStreamMonitorOutputInfoToTerraform(struct?: CssStreamMonitorOutputInfoOutputReference | CssStreamMonitorOutputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    output_app: cdktf.stringToTerraform(struct!.outputApp),
    output_domain: cdktf.stringToTerraform(struct!.outputDomain),
    output_stream_height: cdktf.numberToTerraform(struct!.outputStreamHeight),
    output_stream_name: cdktf.stringToTerraform(struct!.outputStreamName),
    output_stream_width: cdktf.numberToTerraform(struct!.outputStreamWidth),
  }
}


export function cssStreamMonitorOutputInfoToHclTerraform(struct?: CssStreamMonitorOutputInfoOutputReference | CssStreamMonitorOutputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    output_app: {
      value: cdktf.stringToHclTerraform(struct!.outputApp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_domain: {
      value: cdktf.stringToHclTerraform(struct!.outputDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_stream_height: {
      value: cdktf.numberToHclTerraform(struct!.outputStreamHeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    output_stream_name: {
      value: cdktf.stringToHclTerraform(struct!.outputStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_stream_width: {
      value: cdktf.numberToHclTerraform(struct!.outputStreamWidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CssStreamMonitorOutputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CssStreamMonitorOutputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputApp !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputApp = this._outputApp;
    }
    if (this._outputDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputDomain = this._outputDomain;
    }
    if (this._outputStreamHeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputStreamHeight = this._outputStreamHeight;
    }
    if (this._outputStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputStreamName = this._outputStreamName;
    }
    if (this._outputStreamWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputStreamWidth = this._outputStreamWidth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CssStreamMonitorOutputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outputApp = undefined;
      this._outputDomain = undefined;
      this._outputStreamHeight = undefined;
      this._outputStreamName = undefined;
      this._outputStreamWidth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outputApp = value.outputApp;
      this._outputDomain = value.outputDomain;
      this._outputStreamHeight = value.outputStreamHeight;
      this._outputStreamName = value.outputStreamName;
      this._outputStreamWidth = value.outputStreamWidth;
    }
  }

  // output_app - computed: false, optional: true, required: false
  private _outputApp?: string; 
  public get outputApp() {
    return this.getStringAttribute('output_app');
  }
  public set outputApp(value: string) {
    this._outputApp = value;
  }
  public resetOutputApp() {
    this._outputApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputAppInput() {
    return this._outputApp;
  }

  // output_domain - computed: false, optional: true, required: false
  private _outputDomain?: string; 
  public get outputDomain() {
    return this.getStringAttribute('output_domain');
  }
  public set outputDomain(value: string) {
    this._outputDomain = value;
  }
  public resetOutputDomain() {
    this._outputDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputDomainInput() {
    return this._outputDomain;
  }

  // output_stream_height - computed: false, optional: false, required: true
  private _outputStreamHeight?: number; 
  public get outputStreamHeight() {
    return this.getNumberAttribute('output_stream_height');
  }
  public set outputStreamHeight(value: number) {
    this._outputStreamHeight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputStreamHeightInput() {
    return this._outputStreamHeight;
  }

  // output_stream_name - computed: false, optional: true, required: false
  private _outputStreamName?: string; 
  public get outputStreamName() {
    return this.getStringAttribute('output_stream_name');
  }
  public set outputStreamName(value: string) {
    this._outputStreamName = value;
  }
  public resetOutputStreamName() {
    this._outputStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputStreamNameInput() {
    return this._outputStreamName;
  }

  // output_stream_width - computed: false, optional: false, required: true
  private _outputStreamWidth?: number; 
  public get outputStreamWidth() {
    return this.getNumberAttribute('output_stream_width');
  }
  public set outputStreamWidth(value: number) {
    this._outputStreamWidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputStreamWidthInput() {
    return this._outputStreamWidth;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/css_stream_monitor tencentcloud_css_stream_monitor}
*/
export class CssStreamMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_css_stream_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CssStreamMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CssStreamMonitor to import
  * @param importFromId The id of the existing CssStreamMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/css_stream_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CssStreamMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_css_stream_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/css_stream_monitor tencentcloud_css_stream_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CssStreamMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: CssStreamMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_css_stream_monitor',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aiAsrInputIndexList = config.aiAsrInputIndexList;
    this._aiFormatDiagnose = config.aiFormatDiagnose;
    this._aiOcrInputIndexList = config.aiOcrInputIndexList;
    this._allowMonitorReport = config.allowMonitorReport;
    this._asrLanguage = config.asrLanguage;
    this._checkStreamBroken = config.checkStreamBroken;
    this._checkStreamLowFrameRate = config.checkStreamLowFrameRate;
    this._id = config.id;
    this._monitorName = config.monitorName;
    this._ocrLanguage = config.ocrLanguage;
    this._inputList.internalValue = config.inputList;
    this._notifyPolicy.internalValue = config.notifyPolicy;
    this._outputInfo.internalValue = config.outputInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ai_asr_input_index_list - computed: false, optional: true, required: false
  private _aiAsrInputIndexList?: number[]; 
  public get aiAsrInputIndexList() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ai_asr_input_index_list')));
  }
  public set aiAsrInputIndexList(value: number[]) {
    this._aiAsrInputIndexList = value;
  }
  public resetAiAsrInputIndexList() {
    this._aiAsrInputIndexList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiAsrInputIndexListInput() {
    return this._aiAsrInputIndexList;
  }

  // ai_format_diagnose - computed: false, optional: true, required: false
  private _aiFormatDiagnose?: number; 
  public get aiFormatDiagnose() {
    return this.getNumberAttribute('ai_format_diagnose');
  }
  public set aiFormatDiagnose(value: number) {
    this._aiFormatDiagnose = value;
  }
  public resetAiFormatDiagnose() {
    this._aiFormatDiagnose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiFormatDiagnoseInput() {
    return this._aiFormatDiagnose;
  }

  // ai_ocr_input_index_list - computed: false, optional: true, required: false
  private _aiOcrInputIndexList?: number[]; 
  public get aiOcrInputIndexList() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ai_ocr_input_index_list')));
  }
  public set aiOcrInputIndexList(value: number[]) {
    this._aiOcrInputIndexList = value;
  }
  public resetAiOcrInputIndexList() {
    this._aiOcrInputIndexList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiOcrInputIndexListInput() {
    return this._aiOcrInputIndexList;
  }

  // allow_monitor_report - computed: false, optional: true, required: false
  private _allowMonitorReport?: number; 
  public get allowMonitorReport() {
    return this.getNumberAttribute('allow_monitor_report');
  }
  public set allowMonitorReport(value: number) {
    this._allowMonitorReport = value;
  }
  public resetAllowMonitorReport() {
    this._allowMonitorReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMonitorReportInput() {
    return this._allowMonitorReport;
  }

  // asr_language - computed: false, optional: true, required: false
  private _asrLanguage?: number; 
  public get asrLanguage() {
    return this.getNumberAttribute('asr_language');
  }
  public set asrLanguage(value: number) {
    this._asrLanguage = value;
  }
  public resetAsrLanguage() {
    this._asrLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asrLanguageInput() {
    return this._asrLanguage;
  }

  // check_stream_broken - computed: false, optional: true, required: false
  private _checkStreamBroken?: number; 
  public get checkStreamBroken() {
    return this.getNumberAttribute('check_stream_broken');
  }
  public set checkStreamBroken(value: number) {
    this._checkStreamBroken = value;
  }
  public resetCheckStreamBroken() {
    this._checkStreamBroken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkStreamBrokenInput() {
    return this._checkStreamBroken;
  }

  // check_stream_low_frame_rate - computed: false, optional: true, required: false
  private _checkStreamLowFrameRate?: number; 
  public get checkStreamLowFrameRate() {
    return this.getNumberAttribute('check_stream_low_frame_rate');
  }
  public set checkStreamLowFrameRate(value: number) {
    this._checkStreamLowFrameRate = value;
  }
  public resetCheckStreamLowFrameRate() {
    this._checkStreamLowFrameRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkStreamLowFrameRateInput() {
    return this._checkStreamLowFrameRate;
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

  // monitor_name - computed: false, optional: true, required: false
  private _monitorName?: string; 
  public get monitorName() {
    return this.getStringAttribute('monitor_name');
  }
  public set monitorName(value: string) {
    this._monitorName = value;
  }
  public resetMonitorName() {
    this._monitorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorNameInput() {
    return this._monitorName;
  }

  // ocr_language - computed: false, optional: true, required: false
  private _ocrLanguage?: number; 
  public get ocrLanguage() {
    return this.getNumberAttribute('ocr_language');
  }
  public set ocrLanguage(value: number) {
    this._ocrLanguage = value;
  }
  public resetOcrLanguage() {
    this._ocrLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocrLanguageInput() {
    return this._ocrLanguage;
  }

  // input_list - computed: false, optional: false, required: true
  private _inputList = new CssStreamMonitorInputListStructList(this, "input_list", false);
  public get inputList() {
    return this._inputList;
  }
  public putInputList(value: CssStreamMonitorInputListStruct[] | cdktf.IResolvable) {
    this._inputList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputListInput() {
    return this._inputList.internalValue;
  }

  // notify_policy - computed: false, optional: true, required: false
  private _notifyPolicy = new CssStreamMonitorNotifyPolicyOutputReference(this, "notify_policy");
  public get notifyPolicy() {
    return this._notifyPolicy;
  }
  public putNotifyPolicy(value: CssStreamMonitorNotifyPolicy) {
    this._notifyPolicy.internalValue = value;
  }
  public resetNotifyPolicy() {
    this._notifyPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyPolicyInput() {
    return this._notifyPolicy.internalValue;
  }

  // output_info - computed: false, optional: false, required: true
  private _outputInfo = new CssStreamMonitorOutputInfoOutputReference(this, "output_info");
  public get outputInfo() {
    return this._outputInfo;
  }
  public putOutputInfo(value: CssStreamMonitorOutputInfo) {
    this._outputInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInfoInput() {
    return this._outputInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ai_asr_input_index_list: cdktf.listMapper(cdktf.numberToTerraform, false)(this._aiAsrInputIndexList),
      ai_format_diagnose: cdktf.numberToTerraform(this._aiFormatDiagnose),
      ai_ocr_input_index_list: cdktf.listMapper(cdktf.numberToTerraform, false)(this._aiOcrInputIndexList),
      allow_monitor_report: cdktf.numberToTerraform(this._allowMonitorReport),
      asr_language: cdktf.numberToTerraform(this._asrLanguage),
      check_stream_broken: cdktf.numberToTerraform(this._checkStreamBroken),
      check_stream_low_frame_rate: cdktf.numberToTerraform(this._checkStreamLowFrameRate),
      id: cdktf.stringToTerraform(this._id),
      monitor_name: cdktf.stringToTerraform(this._monitorName),
      ocr_language: cdktf.numberToTerraform(this._ocrLanguage),
      input_list: cdktf.listMapper(cssStreamMonitorInputListStructToTerraform, true)(this._inputList.internalValue),
      notify_policy: cssStreamMonitorNotifyPolicyToTerraform(this._notifyPolicy.internalValue),
      output_info: cssStreamMonitorOutputInfoToTerraform(this._outputInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ai_asr_input_index_list: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._aiAsrInputIndexList),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      ai_format_diagnose: {
        value: cdktf.numberToHclTerraform(this._aiFormatDiagnose),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ai_ocr_input_index_list: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._aiOcrInputIndexList),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      allow_monitor_report: {
        value: cdktf.numberToHclTerraform(this._allowMonitorReport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      asr_language: {
        value: cdktf.numberToHclTerraform(this._asrLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      check_stream_broken: {
        value: cdktf.numberToHclTerraform(this._checkStreamBroken),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      check_stream_low_frame_rate: {
        value: cdktf.numberToHclTerraform(this._checkStreamLowFrameRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_name: {
        value: cdktf.stringToHclTerraform(this._monitorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocr_language: {
        value: cdktf.numberToHclTerraform(this._ocrLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      input_list: {
        value: cdktf.listMapperHcl(cssStreamMonitorInputListStructToHclTerraform, true)(this._inputList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CssStreamMonitorInputListStructList",
      },
      notify_policy: {
        value: cssStreamMonitorNotifyPolicyToHclTerraform(this._notifyPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CssStreamMonitorNotifyPolicyList",
      },
      output_info: {
        value: cssStreamMonitorOutputInfoToHclTerraform(this._outputInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CssStreamMonitorOutputInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
