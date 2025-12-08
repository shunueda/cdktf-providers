// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ThreatDetectionInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#buy_number ThreatDetectionInstance#buy_number}
  */
  readonly buyNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#container_image_scan ThreatDetectionInstance#container_image_scan}
  */
  readonly containerImageScan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#container_image_scan_new ThreatDetectionInstance#container_image_scan_new}
  */
  readonly containerImageScanNew?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#honeypot ThreatDetectionInstance#honeypot}
  */
  readonly honeypot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#honeypot_switch ThreatDetectionInstance#honeypot_switch}
  */
  readonly honeypotSwitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#id ThreatDetectionInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#modify_type ThreatDetectionInstance#modify_type}
  */
  readonly modifyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#payment_type ThreatDetectionInstance#payment_type}
  */
  readonly paymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#period ThreatDetectionInstance#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#post_paid_flag ThreatDetectionInstance#post_paid_flag}
  */
  readonly postPaidFlag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#post_pay_module_switch ThreatDetectionInstance#post_pay_module_switch}
  */
  readonly postPayModuleSwitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#rasp_count ThreatDetectionInstance#rasp_count}
  */
  readonly raspCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#renew_period ThreatDetectionInstance#renew_period}
  */
  readonly renewPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#renewal_period_unit ThreatDetectionInstance#renewal_period_unit}
  */
  readonly renewalPeriodUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#renewal_status ThreatDetectionInstance#renewal_status}
  */
  readonly renewalStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#sas_anti_ransomware ThreatDetectionInstance#sas_anti_ransomware}
  */
  readonly sasAntiRansomware?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#sas_cspm ThreatDetectionInstance#sas_cspm}
  */
  readonly sasCspm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#sas_cspm_switch ThreatDetectionInstance#sas_cspm_switch}
  */
  readonly sasCspmSwitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#sas_sc ThreatDetectionInstance#sas_sc}
  */
  readonly sasSc?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#sas_sdk ThreatDetectionInstance#sas_sdk}
  */
  readonly sasSdk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#sas_sdk_switch ThreatDetectionInstance#sas_sdk_switch}
  */
  readonly sasSdkSwitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#sas_sls_storage ThreatDetectionInstance#sas_sls_storage}
  */
  readonly sasSlsStorage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#sas_webguard_boolean ThreatDetectionInstance#sas_webguard_boolean}
  */
  readonly sasWebguardBoolean?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#sas_webguard_order_num ThreatDetectionInstance#sas_webguard_order_num}
  */
  readonly sasWebguardOrderNum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#subscription_type ThreatDetectionInstance#subscription_type}
  */
  readonly subscriptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#threat_analysis ThreatDetectionInstance#threat_analysis}
  */
  readonly threatAnalysis?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#threat_analysis_flow ThreatDetectionInstance#threat_analysis_flow}
  */
  readonly threatAnalysisFlow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#threat_analysis_sls_storage ThreatDetectionInstance#threat_analysis_sls_storage}
  */
  readonly threatAnalysisSlsStorage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#threat_analysis_switch ThreatDetectionInstance#threat_analysis_switch}
  */
  readonly threatAnalysisSwitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#threat_analysis_switch1 ThreatDetectionInstance#threat_analysis_switch1}
  */
  readonly threatAnalysisSwitch1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#v_core ThreatDetectionInstance#v_core}
  */
  readonly vCore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#version_code ThreatDetectionInstance#version_code}
  */
  readonly versionCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#vul_count ThreatDetectionInstance#vul_count}
  */
  readonly vulCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#vul_switch ThreatDetectionInstance#vul_switch}
  */
  readonly vulSwitch?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#timeouts ThreatDetectionInstance#timeouts}
  */
  readonly timeouts?: ThreatDetectionInstanceTimeouts;
}
export interface ThreatDetectionInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#create ThreatDetectionInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#delete ThreatDetectionInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#update ThreatDetectionInstance#update}
  */
  readonly update?: string;
}

export function threatDetectionInstanceTimeoutsToTerraform(struct?: ThreatDetectionInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function threatDetectionInstanceTimeoutsToHclTerraform(struct?: ThreatDetectionInstanceTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ThreatDetectionInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ThreatDetectionInstanceTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThreatDetectionInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance alicloud_threat_detection_instance}
*/
export class ThreatDetectionInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_threat_detection_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ThreatDetectionInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ThreatDetectionInstance to import
  * @param importFromId The id of the existing ThreatDetectionInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ThreatDetectionInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_threat_detection_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_instance alicloud_threat_detection_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ThreatDetectionInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ThreatDetectionInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_threat_detection_instance',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._buyNumber = config.buyNumber;
    this._containerImageScan = config.containerImageScan;
    this._containerImageScanNew = config.containerImageScanNew;
    this._honeypot = config.honeypot;
    this._honeypotSwitch = config.honeypotSwitch;
    this._id = config.id;
    this._modifyType = config.modifyType;
    this._paymentType = config.paymentType;
    this._period = config.period;
    this._postPaidFlag = config.postPaidFlag;
    this._postPayModuleSwitch = config.postPayModuleSwitch;
    this._raspCount = config.raspCount;
    this._renewPeriod = config.renewPeriod;
    this._renewalPeriodUnit = config.renewalPeriodUnit;
    this._renewalStatus = config.renewalStatus;
    this._sasAntiRansomware = config.sasAntiRansomware;
    this._sasCspm = config.sasCspm;
    this._sasCspmSwitch = config.sasCspmSwitch;
    this._sasSc = config.sasSc;
    this._sasSdk = config.sasSdk;
    this._sasSdkSwitch = config.sasSdkSwitch;
    this._sasSlsStorage = config.sasSlsStorage;
    this._sasWebguardBoolean = config.sasWebguardBoolean;
    this._sasWebguardOrderNum = config.sasWebguardOrderNum;
    this._subscriptionType = config.subscriptionType;
    this._threatAnalysis = config.threatAnalysis;
    this._threatAnalysisFlow = config.threatAnalysisFlow;
    this._threatAnalysisSlsStorage = config.threatAnalysisSlsStorage;
    this._threatAnalysisSwitch = config.threatAnalysisSwitch;
    this._threatAnalysisSwitch1 = config.threatAnalysisSwitch1;
    this._vCore = config.vCore;
    this._versionCode = config.versionCode;
    this._vulCount = config.vulCount;
    this._vulSwitch = config.vulSwitch;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // buy_number - computed: false, optional: true, required: false
  private _buyNumber?: string; 
  public get buyNumber() {
    return this.getStringAttribute('buy_number');
  }
  public set buyNumber(value: string) {
    this._buyNumber = value;
  }
  public resetBuyNumber() {
    this._buyNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buyNumberInput() {
    return this._buyNumber;
  }

  // container_image_scan - computed: false, optional: true, required: false
  private _containerImageScan?: string; 
  public get containerImageScan() {
    return this.getStringAttribute('container_image_scan');
  }
  public set containerImageScan(value: string) {
    this._containerImageScan = value;
  }
  public resetContainerImageScan() {
    this._containerImageScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerImageScanInput() {
    return this._containerImageScan;
  }

  // container_image_scan_new - computed: false, optional: true, required: false
  private _containerImageScanNew?: string; 
  public get containerImageScanNew() {
    return this.getStringAttribute('container_image_scan_new');
  }
  public set containerImageScanNew(value: string) {
    this._containerImageScanNew = value;
  }
  public resetContainerImageScanNew() {
    this._containerImageScanNew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerImageScanNewInput() {
    return this._containerImageScanNew;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // honeypot - computed: false, optional: true, required: false
  private _honeypot?: string; 
  public get honeypot() {
    return this.getStringAttribute('honeypot');
  }
  public set honeypot(value: string) {
    this._honeypot = value;
  }
  public resetHoneypot() {
    this._honeypot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honeypotInput() {
    return this._honeypot;
  }

  // honeypot_switch - computed: true, optional: true, required: false
  private _honeypotSwitch?: string; 
  public get honeypotSwitch() {
    return this.getStringAttribute('honeypot_switch');
  }
  public set honeypotSwitch(value: string) {
    this._honeypotSwitch = value;
  }
  public resetHoneypotSwitch() {
    this._honeypotSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honeypotSwitchInput() {
    return this._honeypotSwitch;
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

  // modify_type - computed: false, optional: true, required: false
  private _modifyType?: string; 
  public get modifyType() {
    return this.getStringAttribute('modify_type');
  }
  public set modifyType(value: string) {
    this._modifyType = value;
  }
  public resetModifyType() {
    this._modifyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyTypeInput() {
    return this._modifyType;
  }

  // payment_type - computed: false, optional: false, required: true
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // post_paid_flag - computed: false, optional: true, required: false
  private _postPaidFlag?: number; 
  public get postPaidFlag() {
    return this.getNumberAttribute('post_paid_flag');
  }
  public set postPaidFlag(value: number) {
    this._postPaidFlag = value;
  }
  public resetPostPaidFlag() {
    this._postPaidFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postPaidFlagInput() {
    return this._postPaidFlag;
  }

  // post_pay_module_switch - computed: false, optional: true, required: false
  private _postPayModuleSwitch?: string; 
  public get postPayModuleSwitch() {
    return this.getStringAttribute('post_pay_module_switch');
  }
  public set postPayModuleSwitch(value: string) {
    this._postPayModuleSwitch = value;
  }
  public resetPostPayModuleSwitch() {
    this._postPayModuleSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postPayModuleSwitchInput() {
    return this._postPayModuleSwitch;
  }

  // rasp_count - computed: false, optional: true, required: false
  private _raspCount?: string; 
  public get raspCount() {
    return this.getStringAttribute('rasp_count');
  }
  public set raspCount(value: string) {
    this._raspCount = value;
  }
  public resetRaspCount() {
    this._raspCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raspCountInput() {
    return this._raspCount;
  }

  // renew_period - computed: true, optional: true, required: false
  private _renewPeriod?: number; 
  public get renewPeriod() {
    return this.getNumberAttribute('renew_period');
  }
  public set renewPeriod(value: number) {
    this._renewPeriod = value;
  }
  public resetRenewPeriod() {
    this._renewPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewPeriodInput() {
    return this._renewPeriod;
  }

  // renewal_period_unit - computed: true, optional: true, required: false
  private _renewalPeriodUnit?: string; 
  public get renewalPeriodUnit() {
    return this.getStringAttribute('renewal_period_unit');
  }
  public set renewalPeriodUnit(value: string) {
    this._renewalPeriodUnit = value;
  }
  public resetRenewalPeriodUnit() {
    this._renewalPeriodUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewalPeriodUnitInput() {
    return this._renewalPeriodUnit;
  }

  // renewal_status - computed: true, optional: true, required: false
  private _renewalStatus?: string; 
  public get renewalStatus() {
    return this.getStringAttribute('renewal_status');
  }
  public set renewalStatus(value: string) {
    this._renewalStatus = value;
  }
  public resetRenewalStatus() {
    this._renewalStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewalStatusInput() {
    return this._renewalStatus;
  }

  // sas_anti_ransomware - computed: false, optional: true, required: false
  private _sasAntiRansomware?: string; 
  public get sasAntiRansomware() {
    return this.getStringAttribute('sas_anti_ransomware');
  }
  public set sasAntiRansomware(value: string) {
    this._sasAntiRansomware = value;
  }
  public resetSasAntiRansomware() {
    this._sasAntiRansomware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sasAntiRansomwareInput() {
    return this._sasAntiRansomware;
  }

  // sas_cspm - computed: false, optional: true, required: false
  private _sasCspm?: string; 
  public get sasCspm() {
    return this.getStringAttribute('sas_cspm');
  }
  public set sasCspm(value: string) {
    this._sasCspm = value;
  }
  public resetSasCspm() {
    this._sasCspm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sasCspmInput() {
    return this._sasCspm;
  }

  // sas_cspm_switch - computed: true, optional: true, required: false
  private _sasCspmSwitch?: string; 
  public get sasCspmSwitch() {
    return this.getStringAttribute('sas_cspm_switch');
  }
  public set sasCspmSwitch(value: string) {
    this._sasCspmSwitch = value;
  }
  public resetSasCspmSwitch() {
    this._sasCspmSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sasCspmSwitchInput() {
    return this._sasCspmSwitch;
  }

  // sas_sc - computed: false, optional: true, required: false
  private _sasSc?: boolean | cdktf.IResolvable; 
  public get sasSc() {
    return this.getBooleanAttribute('sas_sc');
  }
  public set sasSc(value: boolean | cdktf.IResolvable) {
    this._sasSc = value;
  }
  public resetSasSc() {
    this._sasSc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sasScInput() {
    return this._sasSc;
  }

  // sas_sdk - computed: false, optional: true, required: false
  private _sasSdk?: string; 
  public get sasSdk() {
    return this.getStringAttribute('sas_sdk');
  }
  public set sasSdk(value: string) {
    this._sasSdk = value;
  }
  public resetSasSdk() {
    this._sasSdk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sasSdkInput() {
    return this._sasSdk;
  }

  // sas_sdk_switch - computed: true, optional: true, required: false
  private _sasSdkSwitch?: string; 
  public get sasSdkSwitch() {
    return this.getStringAttribute('sas_sdk_switch');
  }
  public set sasSdkSwitch(value: string) {
    this._sasSdkSwitch = value;
  }
  public resetSasSdkSwitch() {
    this._sasSdkSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sasSdkSwitchInput() {
    return this._sasSdkSwitch;
  }

  // sas_sls_storage - computed: false, optional: true, required: false
  private _sasSlsStorage?: string; 
  public get sasSlsStorage() {
    return this.getStringAttribute('sas_sls_storage');
  }
  public set sasSlsStorage(value: string) {
    this._sasSlsStorage = value;
  }
  public resetSasSlsStorage() {
    this._sasSlsStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sasSlsStorageInput() {
    return this._sasSlsStorage;
  }

  // sas_webguard_boolean - computed: true, optional: true, required: false
  private _sasWebguardBoolean?: string; 
  public get sasWebguardBoolean() {
    return this.getStringAttribute('sas_webguard_boolean');
  }
  public set sasWebguardBoolean(value: string) {
    this._sasWebguardBoolean = value;
  }
  public resetSasWebguardBoolean() {
    this._sasWebguardBoolean = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sasWebguardBooleanInput() {
    return this._sasWebguardBoolean;
  }

  // sas_webguard_order_num - computed: false, optional: true, required: false
  private _sasWebguardOrderNum?: string; 
  public get sasWebguardOrderNum() {
    return this.getStringAttribute('sas_webguard_order_num');
  }
  public set sasWebguardOrderNum(value: string) {
    this._sasWebguardOrderNum = value;
  }
  public resetSasWebguardOrderNum() {
    this._sasWebguardOrderNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sasWebguardOrderNumInput() {
    return this._sasWebguardOrderNum;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subscription_type - computed: false, optional: true, required: false
  private _subscriptionType?: string; 
  public get subscriptionType() {
    return this.getStringAttribute('subscription_type');
  }
  public set subscriptionType(value: string) {
    this._subscriptionType = value;
  }
  public resetSubscriptionType() {
    this._subscriptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionTypeInput() {
    return this._subscriptionType;
  }

  // threat_analysis - computed: false, optional: true, required: false
  private _threatAnalysis?: string; 
  public get threatAnalysis() {
    return this.getStringAttribute('threat_analysis');
  }
  public set threatAnalysis(value: string) {
    this._threatAnalysis = value;
  }
  public resetThreatAnalysis() {
    this._threatAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatAnalysisInput() {
    return this._threatAnalysis;
  }

  // threat_analysis_flow - computed: false, optional: true, required: false
  private _threatAnalysisFlow?: string; 
  public get threatAnalysisFlow() {
    return this.getStringAttribute('threat_analysis_flow');
  }
  public set threatAnalysisFlow(value: string) {
    this._threatAnalysisFlow = value;
  }
  public resetThreatAnalysisFlow() {
    this._threatAnalysisFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatAnalysisFlowInput() {
    return this._threatAnalysisFlow;
  }

  // threat_analysis_sls_storage - computed: false, optional: true, required: false
  private _threatAnalysisSlsStorage?: string; 
  public get threatAnalysisSlsStorage() {
    return this.getStringAttribute('threat_analysis_sls_storage');
  }
  public set threatAnalysisSlsStorage(value: string) {
    this._threatAnalysisSlsStorage = value;
  }
  public resetThreatAnalysisSlsStorage() {
    this._threatAnalysisSlsStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatAnalysisSlsStorageInput() {
    return this._threatAnalysisSlsStorage;
  }

  // threat_analysis_switch - computed: true, optional: true, required: false
  private _threatAnalysisSwitch?: string; 
  public get threatAnalysisSwitch() {
    return this.getStringAttribute('threat_analysis_switch');
  }
  public set threatAnalysisSwitch(value: string) {
    this._threatAnalysisSwitch = value;
  }
  public resetThreatAnalysisSwitch() {
    this._threatAnalysisSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatAnalysisSwitchInput() {
    return this._threatAnalysisSwitch;
  }

  // threat_analysis_switch1 - computed: true, optional: true, required: false
  private _threatAnalysisSwitch1?: string; 
  public get threatAnalysisSwitch1() {
    return this.getStringAttribute('threat_analysis_switch1');
  }
  public set threatAnalysisSwitch1(value: string) {
    this._threatAnalysisSwitch1 = value;
  }
  public resetThreatAnalysisSwitch1() {
    this._threatAnalysisSwitch1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatAnalysisSwitch1Input() {
    return this._threatAnalysisSwitch1;
  }

  // v_core - computed: false, optional: true, required: false
  private _vCore?: string; 
  public get vCore() {
    return this.getStringAttribute('v_core');
  }
  public set vCore(value: string) {
    this._vCore = value;
  }
  public resetVCore() {
    this._vCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vCoreInput() {
    return this._vCore;
  }

  // version_code - computed: false, optional: true, required: false
  private _versionCode?: string; 
  public get versionCode() {
    return this.getStringAttribute('version_code');
  }
  public set versionCode(value: string) {
    this._versionCode = value;
  }
  public resetVersionCode() {
    this._versionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionCodeInput() {
    return this._versionCode;
  }

  // vul_count - computed: false, optional: true, required: false
  private _vulCount?: string; 
  public get vulCount() {
    return this.getStringAttribute('vul_count');
  }
  public set vulCount(value: string) {
    this._vulCount = value;
  }
  public resetVulCount() {
    this._vulCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulCountInput() {
    return this._vulCount;
  }

  // vul_switch - computed: true, optional: true, required: false
  private _vulSwitch?: string; 
  public get vulSwitch() {
    return this.getStringAttribute('vul_switch');
  }
  public set vulSwitch(value: string) {
    this._vulSwitch = value;
  }
  public resetVulSwitch() {
    this._vulSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulSwitchInput() {
    return this._vulSwitch;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ThreatDetectionInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ThreatDetectionInstanceTimeouts) {
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
      buy_number: cdktf.stringToTerraform(this._buyNumber),
      container_image_scan: cdktf.stringToTerraform(this._containerImageScan),
      container_image_scan_new: cdktf.stringToTerraform(this._containerImageScanNew),
      honeypot: cdktf.stringToTerraform(this._honeypot),
      honeypot_switch: cdktf.stringToTerraform(this._honeypotSwitch),
      id: cdktf.stringToTerraform(this._id),
      modify_type: cdktf.stringToTerraform(this._modifyType),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      period: cdktf.numberToTerraform(this._period),
      post_paid_flag: cdktf.numberToTerraform(this._postPaidFlag),
      post_pay_module_switch: cdktf.stringToTerraform(this._postPayModuleSwitch),
      rasp_count: cdktf.stringToTerraform(this._raspCount),
      renew_period: cdktf.numberToTerraform(this._renewPeriod),
      renewal_period_unit: cdktf.stringToTerraform(this._renewalPeriodUnit),
      renewal_status: cdktf.stringToTerraform(this._renewalStatus),
      sas_anti_ransomware: cdktf.stringToTerraform(this._sasAntiRansomware),
      sas_cspm: cdktf.stringToTerraform(this._sasCspm),
      sas_cspm_switch: cdktf.stringToTerraform(this._sasCspmSwitch),
      sas_sc: cdktf.booleanToTerraform(this._sasSc),
      sas_sdk: cdktf.stringToTerraform(this._sasSdk),
      sas_sdk_switch: cdktf.stringToTerraform(this._sasSdkSwitch),
      sas_sls_storage: cdktf.stringToTerraform(this._sasSlsStorage),
      sas_webguard_boolean: cdktf.stringToTerraform(this._sasWebguardBoolean),
      sas_webguard_order_num: cdktf.stringToTerraform(this._sasWebguardOrderNum),
      subscription_type: cdktf.stringToTerraform(this._subscriptionType),
      threat_analysis: cdktf.stringToTerraform(this._threatAnalysis),
      threat_analysis_flow: cdktf.stringToTerraform(this._threatAnalysisFlow),
      threat_analysis_sls_storage: cdktf.stringToTerraform(this._threatAnalysisSlsStorage),
      threat_analysis_switch: cdktf.stringToTerraform(this._threatAnalysisSwitch),
      threat_analysis_switch1: cdktf.stringToTerraform(this._threatAnalysisSwitch1),
      v_core: cdktf.stringToTerraform(this._vCore),
      version_code: cdktf.stringToTerraform(this._versionCode),
      vul_count: cdktf.stringToTerraform(this._vulCount),
      vul_switch: cdktf.stringToTerraform(this._vulSwitch),
      timeouts: threatDetectionInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      buy_number: {
        value: cdktf.stringToHclTerraform(this._buyNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_image_scan: {
        value: cdktf.stringToHclTerraform(this._containerImageScan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_image_scan_new: {
        value: cdktf.stringToHclTerraform(this._containerImageScanNew),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      honeypot: {
        value: cdktf.stringToHclTerraform(this._honeypot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      honeypot_switch: {
        value: cdktf.stringToHclTerraform(this._honeypotSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modify_type: {
        value: cdktf.stringToHclTerraform(this._modifyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      post_paid_flag: {
        value: cdktf.numberToHclTerraform(this._postPaidFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      post_pay_module_switch: {
        value: cdktf.stringToHclTerraform(this._postPayModuleSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rasp_count: {
        value: cdktf.stringToHclTerraform(this._raspCount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renew_period: {
        value: cdktf.numberToHclTerraform(this._renewPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      renewal_period_unit: {
        value: cdktf.stringToHclTerraform(this._renewalPeriodUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renewal_status: {
        value: cdktf.stringToHclTerraform(this._renewalStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sas_anti_ransomware: {
        value: cdktf.stringToHclTerraform(this._sasAntiRansomware),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sas_cspm: {
        value: cdktf.stringToHclTerraform(this._sasCspm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sas_cspm_switch: {
        value: cdktf.stringToHclTerraform(this._sasCspmSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sas_sc: {
        value: cdktf.booleanToHclTerraform(this._sasSc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sas_sdk: {
        value: cdktf.stringToHclTerraform(this._sasSdk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sas_sdk_switch: {
        value: cdktf.stringToHclTerraform(this._sasSdkSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sas_sls_storage: {
        value: cdktf.stringToHclTerraform(this._sasSlsStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sas_webguard_boolean: {
        value: cdktf.stringToHclTerraform(this._sasWebguardBoolean),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sas_webguard_order_num: {
        value: cdktf.stringToHclTerraform(this._sasWebguardOrderNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_type: {
        value: cdktf.stringToHclTerraform(this._subscriptionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threat_analysis: {
        value: cdktf.stringToHclTerraform(this._threatAnalysis),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threat_analysis_flow: {
        value: cdktf.stringToHclTerraform(this._threatAnalysisFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threat_analysis_sls_storage: {
        value: cdktf.stringToHclTerraform(this._threatAnalysisSlsStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threat_analysis_switch: {
        value: cdktf.stringToHclTerraform(this._threatAnalysisSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threat_analysis_switch1: {
        value: cdktf.stringToHclTerraform(this._threatAnalysisSwitch1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v_core: {
        value: cdktf.stringToHclTerraform(this._vCore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_code: {
        value: cdktf.stringToHclTerraform(this._versionCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vul_count: {
        value: cdktf.stringToHclTerraform(this._vulCount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vul_switch: {
        value: cdktf.stringToHclTerraform(this._vulSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: threatDetectionInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ThreatDetectionInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
