// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alidns_gtm_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlidnsGtmInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alidns_gtm_instance#alert_group AlidnsGtmInstance#alert_group}
  */
  readonly alertGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alidns_gtm_instance#cname_type AlidnsGtmInstance#cname_type}
  */
  readonly cnameType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alidns_gtm_instance#force_update AlidnsGtmInstance#force_update}
  */
  readonly forceUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alidns_gtm_instance#health_check_task_count AlidnsGtmInstance#health_check_task_count}
  */
  readonly healthCheckTaskCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alidns_gtm_instance#id AlidnsGtmInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alidns_gtm_instance#instance_name AlidnsGtmInstance#instance_name}
  */
  readonly instanceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alidns_gtm_instance#lang AlidnsGtmInstance#lang}
  */
  readonly lang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alidns_gtm_instance#package_edition AlidnsGtmInstance#package_edition}
  */
  readonly packageEdition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alidns_gtm_instance#payment_type AlidnsGtmInstance#payment_type}
  */
  readonly paymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alidns_gtm_instance#period AlidnsGtmInstance#period}
  */
  readonly period: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alidns_gtm_instance#public_cname_mode AlidnsGtmInstance#public_cname_mode}
  */
  readonly publicCnameMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alidns_gtm_instance#public_rr AlidnsGtmInstance#public_rr}
  */
  readonly publicRr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alidns_gtm_instance#public_user_domain_name AlidnsGtmInstance#public_user_domain_name}
  */
  readonly publicUserDomainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alidns_gtm_instance#public_zone_name AlidnsGtmInstance#public_zone_name}
  */
  readonly publicZoneName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alidns_gtm_instance#renew_period AlidnsGtmInstance#renew_period}
  */
  readonly renewPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alidns_gtm_instance#renewal_status AlidnsGtmInstance#renewal_status}
  */
  readonly renewalStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alidns_gtm_instance#resource_group_id AlidnsGtmInstance#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alidns_gtm_instance#sms_notification_count AlidnsGtmInstance#sms_notification_count}
  */
  readonly smsNotificationCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alidns_gtm_instance#strategy_mode AlidnsGtmInstance#strategy_mode}
  */
  readonly strategyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alidns_gtm_instance#ttl AlidnsGtmInstance#ttl}
  */
  readonly ttl?: number;
  /**
  * alert_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alidns_gtm_instance#alert_config AlidnsGtmInstance#alert_config}
  */
  readonly alertConfig?: AlidnsGtmInstanceAlertConfig[] | cdktf.IResolvable;
}
export interface AlidnsGtmInstanceAlertConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alidns_gtm_instance#dingtalk_notice AlidnsGtmInstance#dingtalk_notice}
  */
  readonly dingtalkNotice?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alidns_gtm_instance#email_notice AlidnsGtmInstance#email_notice}
  */
  readonly emailNotice?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alidns_gtm_instance#notice_type AlidnsGtmInstance#notice_type}
  */
  readonly noticeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alidns_gtm_instance#sms_notice AlidnsGtmInstance#sms_notice}
  */
  readonly smsNotice?: boolean | cdktf.IResolvable;
}

export function alidnsGtmInstanceAlertConfigToTerraform(struct?: AlidnsGtmInstanceAlertConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dingtalk_notice: cdktf.booleanToTerraform(struct!.dingtalkNotice),
    email_notice: cdktf.booleanToTerraform(struct!.emailNotice),
    notice_type: cdktf.stringToTerraform(struct!.noticeType),
    sms_notice: cdktf.booleanToTerraform(struct!.smsNotice),
  }
}


export function alidnsGtmInstanceAlertConfigToHclTerraform(struct?: AlidnsGtmInstanceAlertConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dingtalk_notice: {
      value: cdktf.booleanToHclTerraform(struct!.dingtalkNotice),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    email_notice: {
      value: cdktf.booleanToHclTerraform(struct!.emailNotice),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notice_type: {
      value: cdktf.stringToHclTerraform(struct!.noticeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_notice: {
      value: cdktf.booleanToHclTerraform(struct!.smsNotice),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlidnsGtmInstanceAlertConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlidnsGtmInstanceAlertConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dingtalkNotice !== undefined) {
      hasAnyValues = true;
      internalValueResult.dingtalkNotice = this._dingtalkNotice;
    }
    if (this._emailNotice !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailNotice = this._emailNotice;
    }
    if (this._noticeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.noticeType = this._noticeType;
    }
    if (this._smsNotice !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsNotice = this._smsNotice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlidnsGtmInstanceAlertConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dingtalkNotice = undefined;
      this._emailNotice = undefined;
      this._noticeType = undefined;
      this._smsNotice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dingtalkNotice = value.dingtalkNotice;
      this._emailNotice = value.emailNotice;
      this._noticeType = value.noticeType;
      this._smsNotice = value.smsNotice;
    }
  }

  // dingtalk_notice - computed: false, optional: true, required: false
  private _dingtalkNotice?: boolean | cdktf.IResolvable; 
  public get dingtalkNotice() {
    return this.getBooleanAttribute('dingtalk_notice');
  }
  public set dingtalkNotice(value: boolean | cdktf.IResolvable) {
    this._dingtalkNotice = value;
  }
  public resetDingtalkNotice() {
    this._dingtalkNotice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dingtalkNoticeInput() {
    return this._dingtalkNotice;
  }

  // email_notice - computed: false, optional: true, required: false
  private _emailNotice?: boolean | cdktf.IResolvable; 
  public get emailNotice() {
    return this.getBooleanAttribute('email_notice');
  }
  public set emailNotice(value: boolean | cdktf.IResolvable) {
    this._emailNotice = value;
  }
  public resetEmailNotice() {
    this._emailNotice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailNoticeInput() {
    return this._emailNotice;
  }

  // notice_type - computed: false, optional: true, required: false
  private _noticeType?: string; 
  public get noticeType() {
    return this.getStringAttribute('notice_type');
  }
  public set noticeType(value: string) {
    this._noticeType = value;
  }
  public resetNoticeType() {
    this._noticeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noticeTypeInput() {
    return this._noticeType;
  }

  // sms_notice - computed: false, optional: true, required: false
  private _smsNotice?: boolean | cdktf.IResolvable; 
  public get smsNotice() {
    return this.getBooleanAttribute('sms_notice');
  }
  public set smsNotice(value: boolean | cdktf.IResolvable) {
    this._smsNotice = value;
  }
  public resetSmsNotice() {
    this._smsNotice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsNoticeInput() {
    return this._smsNotice;
  }
}

export class AlidnsGtmInstanceAlertConfigList extends cdktf.ComplexList {
  public internalValue? : AlidnsGtmInstanceAlertConfig[] | cdktf.IResolvable

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
  public get(index: number): AlidnsGtmInstanceAlertConfigOutputReference {
    return new AlidnsGtmInstanceAlertConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alidns_gtm_instance alicloud_alidns_gtm_instance}
*/
export class AlidnsGtmInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_alidns_gtm_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlidnsGtmInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlidnsGtmInstance to import
  * @param importFromId The id of the existing AlidnsGtmInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alidns_gtm_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlidnsGtmInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_alidns_gtm_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alidns_gtm_instance alicloud_alidns_gtm_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlidnsGtmInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: AlidnsGtmInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_alidns_gtm_instance',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertGroup = config.alertGroup;
    this._cnameType = config.cnameType;
    this._forceUpdate = config.forceUpdate;
    this._healthCheckTaskCount = config.healthCheckTaskCount;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._lang = config.lang;
    this._packageEdition = config.packageEdition;
    this._paymentType = config.paymentType;
    this._period = config.period;
    this._publicCnameMode = config.publicCnameMode;
    this._publicRr = config.publicRr;
    this._publicUserDomainName = config.publicUserDomainName;
    this._publicZoneName = config.publicZoneName;
    this._renewPeriod = config.renewPeriod;
    this._renewalStatus = config.renewalStatus;
    this._resourceGroupId = config.resourceGroupId;
    this._smsNotificationCount = config.smsNotificationCount;
    this._strategyMode = config.strategyMode;
    this._ttl = config.ttl;
    this._alertConfig.internalValue = config.alertConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_group - computed: false, optional: true, required: false
  private _alertGroup?: string[]; 
  public get alertGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('alert_group'));
  }
  public set alertGroup(value: string[]) {
    this._alertGroup = value;
  }
  public resetAlertGroup() {
    this._alertGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertGroupInput() {
    return this._alertGroup;
  }

  // cname_type - computed: true, optional: true, required: false
  private _cnameType?: string; 
  public get cnameType() {
    return this.getStringAttribute('cname_type');
  }
  public set cnameType(value: string) {
    this._cnameType = value;
  }
  public resetCnameType() {
    this._cnameType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameTypeInput() {
    return this._cnameType;
  }

  // force_update - computed: false, optional: true, required: false
  private _forceUpdate?: boolean | cdktf.IResolvable; 
  public get forceUpdate() {
    return this.getBooleanAttribute('force_update');
  }
  public set forceUpdate(value: boolean | cdktf.IResolvable) {
    this._forceUpdate = value;
  }
  public resetForceUpdate() {
    this._forceUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpdateInput() {
    return this._forceUpdate;
  }

  // health_check_task_count - computed: false, optional: false, required: true
  private _healthCheckTaskCount?: number; 
  public get healthCheckTaskCount() {
    return this.getNumberAttribute('health_check_task_count');
  }
  public set healthCheckTaskCount(value: number) {
    this._healthCheckTaskCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTaskCountInput() {
    return this._healthCheckTaskCount;
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

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // lang - computed: false, optional: true, required: false
  private _lang?: string; 
  public get lang() {
    return this.getStringAttribute('lang');
  }
  public set lang(value: string) {
    this._lang = value;
  }
  public resetLang() {
    this._lang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get langInput() {
    return this._lang;
  }

  // package_edition - computed: false, optional: false, required: true
  private _packageEdition?: string; 
  public get packageEdition() {
    return this.getStringAttribute('package_edition');
  }
  public set packageEdition(value: string) {
    this._packageEdition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageEditionInput() {
    return this._packageEdition;
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

  // period - computed: false, optional: false, required: true
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // public_cname_mode - computed: true, optional: true, required: false
  private _publicCnameMode?: string; 
  public get publicCnameMode() {
    return this.getStringAttribute('public_cname_mode');
  }
  public set publicCnameMode(value: string) {
    this._publicCnameMode = value;
  }
  public resetPublicCnameMode() {
    this._publicCnameMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicCnameModeInput() {
    return this._publicCnameMode;
  }

  // public_rr - computed: true, optional: true, required: false
  private _publicRr?: string; 
  public get publicRr() {
    return this.getStringAttribute('public_rr');
  }
  public set publicRr(value: string) {
    this._publicRr = value;
  }
  public resetPublicRr() {
    this._publicRr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicRrInput() {
    return this._publicRr;
  }

  // public_user_domain_name - computed: true, optional: true, required: false
  private _publicUserDomainName?: string; 
  public get publicUserDomainName() {
    return this.getStringAttribute('public_user_domain_name');
  }
  public set publicUserDomainName(value: string) {
    this._publicUserDomainName = value;
  }
  public resetPublicUserDomainName() {
    this._publicUserDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicUserDomainNameInput() {
    return this._publicUserDomainName;
  }

  // public_zone_name - computed: true, optional: true, required: false
  private _publicZoneName?: string; 
  public get publicZoneName() {
    return this.getStringAttribute('public_zone_name');
  }
  public set publicZoneName(value: string) {
    this._publicZoneName = value;
  }
  public resetPublicZoneName() {
    this._publicZoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicZoneNameInput() {
    return this._publicZoneName;
  }

  // renew_period - computed: false, optional: true, required: false
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

  // resource_group_id - computed: false, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // sms_notification_count - computed: false, optional: false, required: true
  private _smsNotificationCount?: number; 
  public get smsNotificationCount() {
    return this.getNumberAttribute('sms_notification_count');
  }
  public set smsNotificationCount(value: number) {
    this._smsNotificationCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smsNotificationCountInput() {
    return this._smsNotificationCount;
  }

  // strategy_mode - computed: true, optional: true, required: false
  private _strategyMode?: string; 
  public get strategyMode() {
    return this.getStringAttribute('strategy_mode');
  }
  public set strategyMode(value: string) {
    this._strategyMode = value;
  }
  public resetStrategyMode() {
    this._strategyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyModeInput() {
    return this._strategyMode;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // alert_config - computed: false, optional: true, required: false
  private _alertConfig = new AlidnsGtmInstanceAlertConfigList(this, "alert_config", true);
  public get alertConfig() {
    return this._alertConfig;
  }
  public putAlertConfig(value: AlidnsGtmInstanceAlertConfig[] | cdktf.IResolvable) {
    this._alertConfig.internalValue = value;
  }
  public resetAlertConfig() {
    this._alertConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertConfigInput() {
    return this._alertConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alertGroup),
      cname_type: cdktf.stringToTerraform(this._cnameType),
      force_update: cdktf.booleanToTerraform(this._forceUpdate),
      health_check_task_count: cdktf.numberToTerraform(this._healthCheckTaskCount),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      lang: cdktf.stringToTerraform(this._lang),
      package_edition: cdktf.stringToTerraform(this._packageEdition),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      period: cdktf.numberToTerraform(this._period),
      public_cname_mode: cdktf.stringToTerraform(this._publicCnameMode),
      public_rr: cdktf.stringToTerraform(this._publicRr),
      public_user_domain_name: cdktf.stringToTerraform(this._publicUserDomainName),
      public_zone_name: cdktf.stringToTerraform(this._publicZoneName),
      renew_period: cdktf.numberToTerraform(this._renewPeriod),
      renewal_status: cdktf.stringToTerraform(this._renewalStatus),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      sms_notification_count: cdktf.numberToTerraform(this._smsNotificationCount),
      strategy_mode: cdktf.stringToTerraform(this._strategyMode),
      ttl: cdktf.numberToTerraform(this._ttl),
      alert_config: cdktf.listMapper(alidnsGtmInstanceAlertConfigToTerraform, true)(this._alertConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alertGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cname_type: {
        value: cdktf.stringToHclTerraform(this._cnameType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_update: {
        value: cdktf.booleanToHclTerraform(this._forceUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      health_check_task_count: {
        value: cdktf.numberToHclTerraform(this._healthCheckTaskCount),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lang: {
        value: cdktf.stringToHclTerraform(this._lang),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_edition: {
        value: cdktf.stringToHclTerraform(this._packageEdition),
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
      public_cname_mode: {
        value: cdktf.stringToHclTerraform(this._publicCnameMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_rr: {
        value: cdktf.stringToHclTerraform(this._publicRr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_user_domain_name: {
        value: cdktf.stringToHclTerraform(this._publicUserDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_zone_name: {
        value: cdktf.stringToHclTerraform(this._publicZoneName),
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
      renewal_status: {
        value: cdktf.stringToHclTerraform(this._renewalStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sms_notification_count: {
        value: cdktf.numberToHclTerraform(this._smsNotificationCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      strategy_mode: {
        value: cdktf.stringToHclTerraform(this._strategyMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alert_config: {
        value: cdktf.listMapperHcl(alidnsGtmInstanceAlertConfigToHclTerraform, true)(this._alertConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlidnsGtmInstanceAlertConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
