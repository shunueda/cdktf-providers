// https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLogicmonitorCollectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#ack_comment DataLogicmonitorCollector#ack_comment}
  */
  readonly ackComment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#acked DataLogicmonitorCollector#acked}
  */
  readonly acked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#acked_by DataLogicmonitorCollector#acked_by}
  */
  readonly ackedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#acked_on DataLogicmonitorCollector#acked_on}
  */
  readonly ackedOn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#acked_on_local DataLogicmonitorCollector#acked_on_local}
  */
  readonly ackedOnLocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#arch DataLogicmonitorCollector#arch}
  */
  readonly arch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#backup_agent_id DataLogicmonitorCollector#backup_agent_id}
  */
  readonly backupAgentId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#build DataLogicmonitorCollector#build}
  */
  readonly buildAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#can_downgrade DataLogicmonitorCollector#can_downgrade}
  */
  readonly canDowngrade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#can_downgrade_reason DataLogicmonitorCollector#can_downgrade_reason}
  */
  readonly canDowngradeReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#clear_sent DataLogicmonitorCollector#clear_sent}
  */
  readonly clearSent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#collector_conf DataLogicmonitorCollector#collector_conf}
  */
  readonly collectorConf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#collector_device_id DataLogicmonitorCollector#collector_device_id}
  */
  readonly collectorDeviceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#collector_group_id DataLogicmonitorCollector#collector_group_id}
  */
  readonly collectorGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#collector_group_name DataLogicmonitorCollector#collector_group_name}
  */
  readonly collectorGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#collector_size DataLogicmonitorCollector#collector_size}
  */
  readonly collectorSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#company DataLogicmonitorCollector#company}
  */
  readonly company?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#conf_version DataLogicmonitorCollector#conf_version}
  */
  readonly confVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#created_on DataLogicmonitorCollector#created_on}
  */
  readonly createdOn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#created_on_local DataLogicmonitorCollector#created_on_local}
  */
  readonly createdOnLocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#custom_properties DataLogicmonitorCollector#custom_properties}
  */
  readonly customProperties?: DataLogicmonitorCollectorCustomProperties[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#description DataLogicmonitorCollector#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#ea DataLogicmonitorCollector#ea}
  */
  readonly ea?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#enable_fail_back DataLogicmonitorCollector#enable_fail_back}
  */
  readonly enableFailBack?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#enable_fail_over_on_collector_device DataLogicmonitorCollector#enable_fail_over_on_collector_device}
  */
  readonly enableFailOverOnCollectorDevice?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#escalating_chain_id DataLogicmonitorCollector#escalating_chain_id}
  */
  readonly escalatingChainId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#filter DataLogicmonitorCollector#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#has_fail_over_device DataLogicmonitorCollector#has_fail_over_device}
  */
  readonly hasFailOverDevice?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#hostname DataLogicmonitorCollector#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#id DataLogicmonitorCollector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#in_s_d_t DataLogicmonitorCollector#in_s_d_t}
  */
  readonly inSDT?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#installer_url_cmds DataLogicmonitorCollector#installer_url_cmds}
  */
  readonly installerUrlCmds?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#is_down DataLogicmonitorCollector#is_down}
  */
  readonly isDown?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#last_sent_notification_on DataLogicmonitorCollector#last_sent_notification_on}
  */
  readonly lastSentNotificationOn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#last_sent_notification_on_local DataLogicmonitorCollector#last_sent_notification_on_local}
  */
  readonly lastSentNotificationOnLocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#monitor_others DataLogicmonitorCollector#monitor_others}
  */
  readonly monitorOthers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#need_auto_create_collector_device DataLogicmonitorCollector#need_auto_create_collector_device}
  */
  readonly needAutoCreateCollectorDevice?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#netscan_version DataLogicmonitorCollector#netscan_version}
  */
  readonly netscanVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#next_recipient DataLogicmonitorCollector#next_recipient}
  */
  readonly nextRecipient?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#number_of_hosts DataLogicmonitorCollector#number_of_hosts}
  */
  readonly numberOfHosts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#number_of_instances DataLogicmonitorCollector#number_of_instances}
  */
  readonly numberOfInstances?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#number_of_websites DataLogicmonitorCollector#number_of_websites}
  */
  readonly numberOfWebsites?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#platform DataLogicmonitorCollector#platform}
  */
  readonly platform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#predefined_config DataLogicmonitorCollector#predefined_config}
  */
  readonly predefinedConfig?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#previous_version DataLogicmonitorCollector#previous_version}
  */
  readonly previousVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#resend_ival DataLogicmonitorCollector#resend_ival}
  */
  readonly resendIval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#sbproxy_conf DataLogicmonitorCollector#sbproxy_conf}
  */
  readonly sbproxyConf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#specified_collector_device_group_id DataLogicmonitorCollector#specified_collector_device_group_id}
  */
  readonly specifiedCollectorDeviceGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#status DataLogicmonitorCollector#status}
  */
  readonly status?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#suppress_alert_clear DataLogicmonitorCollector#suppress_alert_clear}
  */
  readonly suppressAlertClear?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#up_time DataLogicmonitorCollector#up_time}
  */
  readonly upTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#updated_on DataLogicmonitorCollector#updated_on}
  */
  readonly updatedOn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#updated_on_local DataLogicmonitorCollector#updated_on_local}
  */
  readonly updatedOnLocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#user_change_on DataLogicmonitorCollector#user_change_on}
  */
  readonly userChangeOn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#user_change_on_local DataLogicmonitorCollector#user_change_on_local}
  */
  readonly userChangeOnLocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#user_permission DataLogicmonitorCollector#user_permission}
  */
  readonly userPermission?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#user_visible_hosts_num DataLogicmonitorCollector#user_visible_hosts_num}
  */
  readonly userVisibleHostsNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#user_visible_websites_num DataLogicmonitorCollector#user_visible_websites_num}
  */
  readonly userVisibleWebsitesNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#watchdog_conf DataLogicmonitorCollector#watchdog_conf}
  */
  readonly watchdogConf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#watchdog_updated_on DataLogicmonitorCollector#watchdog_updated_on}
  */
  readonly watchdogUpdatedOn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#watchdog_updated_on_local DataLogicmonitorCollector#watchdog_updated_on_local}
  */
  readonly watchdogUpdatedOnLocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#website_conf DataLogicmonitorCollector#website_conf}
  */
  readonly websiteConf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#wrapper_conf DataLogicmonitorCollector#wrapper_conf}
  */
  readonly wrapperConf?: string;
  /**
  * automatic_upgrade_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#automatic_upgrade_info DataLogicmonitorCollector#automatic_upgrade_info}
  */
  readonly automaticUpgradeInfo?: DataLogicmonitorCollectorAutomaticUpgradeInfo[] | cdktf.IResolvable;
  /**
  * next_upgrade_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#next_upgrade_info DataLogicmonitorCollector#next_upgrade_info}
  */
  readonly nextUpgradeInfo?: DataLogicmonitorCollectorNextUpgradeInfo[] | cdktf.IResolvable;
  /**
  * onetime_downgrade_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#onetime_downgrade_info DataLogicmonitorCollector#onetime_downgrade_info}
  */
  readonly onetimeDowngradeInfo?: DataLogicmonitorCollectorOnetimeDowngradeInfo[] | cdktf.IResolvable;
  /**
  * onetime_upgrade_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#onetime_upgrade_info DataLogicmonitorCollector#onetime_upgrade_info}
  */
  readonly onetimeUpgradeInfo?: DataLogicmonitorCollectorOnetimeUpgradeInfo[] | cdktf.IResolvable;
}
export interface DataLogicmonitorCollectorCustomProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#name DataLogicmonitorCollector#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#value DataLogicmonitorCollector#value}
  */
  readonly value?: string;
}

export function dataLogicmonitorCollectorCustomPropertiesToTerraform(struct?: DataLogicmonitorCollectorCustomProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataLogicmonitorCollectorCustomPropertiesToHclTerraform(struct?: DataLogicmonitorCollectorCustomProperties | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogicmonitorCollectorCustomPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorCollectorCustomProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorCollectorCustomProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataLogicmonitorCollectorCustomPropertiesList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorCollectorCustomProperties[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorCollectorCustomPropertiesOutputReference {
    return new DataLogicmonitorCollectorCustomPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorCollectorAutomaticUpgradeInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#day_of_week DataLogicmonitorCollector#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#description DataLogicmonitorCollector#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#hour DataLogicmonitorCollector#hour}
  */
  readonly hour: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#minute DataLogicmonitorCollector#minute}
  */
  readonly minute: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#occurrence DataLogicmonitorCollector#occurrence}
  */
  readonly occurrence: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#timezone DataLogicmonitorCollector#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#version DataLogicmonitorCollector#version}
  */
  readonly version: string;
}

export function dataLogicmonitorCollectorAutomaticUpgradeInfoToTerraform(struct?: DataLogicmonitorCollectorAutomaticUpgradeInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    description: cdktf.stringToTerraform(struct!.description),
    hour: cdktf.numberToTerraform(struct!.hour),
    minute: cdktf.numberToTerraform(struct!.minute),
    occurrence: cdktf.stringToTerraform(struct!.occurrence),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataLogicmonitorCollectorAutomaticUpgradeInfoToHclTerraform(struct?: DataLogicmonitorCollectorAutomaticUpgradeInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute: {
      value: cdktf.numberToHclTerraform(struct!.minute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    occurrence: {
      value: cdktf.stringToHclTerraform(struct!.occurrence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogicmonitorCollectorAutomaticUpgradeInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorCollectorAutomaticUpgradeInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._minute !== undefined) {
      hasAnyValues = true;
      internalValueResult.minute = this._minute;
    }
    if (this._occurrence !== undefined) {
      hasAnyValues = true;
      internalValueResult.occurrence = this._occurrence;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorCollectorAutomaticUpgradeInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfWeek = undefined;
      this._description = undefined;
      this._hour = undefined;
      this._minute = undefined;
      this._occurrence = undefined;
      this._timezone = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfWeek = value.dayOfWeek;
      this._description = value.description;
      this._hour = value.hour;
      this._minute = value.minute;
      this._occurrence = value.occurrence;
      this._timezone = value.timezone;
      this._version = value.version;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
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

  // hour - computed: false, optional: false, required: true
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // minute - computed: false, optional: false, required: true
  private _minute?: number; 
  public get minute() {
    return this.getNumberAttribute('minute');
  }
  public set minute(value: number) {
    this._minute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
  }

  // occurrence - computed: false, optional: false, required: true
  private _occurrence?: string; 
  public get occurrence() {
    return this.getStringAttribute('occurrence');
  }
  public set occurrence(value: string) {
    this._occurrence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get occurrenceInput() {
    return this._occurrence;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataLogicmonitorCollectorAutomaticUpgradeInfoList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorCollectorAutomaticUpgradeInfo[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorCollectorAutomaticUpgradeInfoOutputReference {
    return new DataLogicmonitorCollectorAutomaticUpgradeInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorCollectorNextUpgradeInfo {
}

export function dataLogicmonitorCollectorNextUpgradeInfoToTerraform(struct?: DataLogicmonitorCollectorNextUpgradeInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLogicmonitorCollectorNextUpgradeInfoToHclTerraform(struct?: DataLogicmonitorCollectorNextUpgradeInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLogicmonitorCollectorNextUpgradeInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorCollectorNextUpgradeInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorCollectorNextUpgradeInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // major_version - computed: true, optional: false, required: false
  public get majorVersion() {
    return this.getNumberAttribute('major_version');
  }

  // mandatory - computed: true, optional: false, required: false
  public get mandatory() {
    return this.getBooleanAttribute('mandatory');
  }

  // minor_version - computed: true, optional: false, required: false
  public get minorVersion() {
    return this.getNumberAttribute('minor_version');
  }

  // stable - computed: true, optional: false, required: false
  public get stable() {
    return this.getBooleanAttribute('stable');
  }

  // upgrade_time - computed: true, optional: false, required: false
  public get upgradeTime() {
    return this.getStringAttribute('upgrade_time');
  }

  // upgrade_time_epoch - computed: true, optional: false, required: false
  public get upgradeTimeEpoch() {
    return this.getNumberAttribute('upgrade_time_epoch');
  }
}

export class DataLogicmonitorCollectorNextUpgradeInfoList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorCollectorNextUpgradeInfo[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorCollectorNextUpgradeInfoOutputReference {
    return new DataLogicmonitorCollectorNextUpgradeInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorCollectorOnetimeDowngradeInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#description DataLogicmonitorCollector#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#major_version DataLogicmonitorCollector#major_version}
  */
  readonly majorVersion: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#minor_version DataLogicmonitorCollector#minor_version}
  */
  readonly minorVersion: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#start_epoch DataLogicmonitorCollector#start_epoch}
  */
  readonly startEpoch: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#timezone DataLogicmonitorCollector#timezone}
  */
  readonly timezone?: string;
}

export function dataLogicmonitorCollectorOnetimeDowngradeInfoToTerraform(struct?: DataLogicmonitorCollectorOnetimeDowngradeInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    major_version: cdktf.numberToTerraform(struct!.majorVersion),
    minor_version: cdktf.numberToTerraform(struct!.minorVersion),
    start_epoch: cdktf.numberToTerraform(struct!.startEpoch),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function dataLogicmonitorCollectorOnetimeDowngradeInfoToHclTerraform(struct?: DataLogicmonitorCollectorOnetimeDowngradeInfo | cdktf.IResolvable): any {
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
    major_version: {
      value: cdktf.numberToHclTerraform(struct!.majorVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minor_version: {
      value: cdktf.numberToHclTerraform(struct!.minorVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_epoch: {
      value: cdktf.numberToHclTerraform(struct!.startEpoch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogicmonitorCollectorOnetimeDowngradeInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorCollectorOnetimeDowngradeInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._majorVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.majorVersion = this._majorVersion;
    }
    if (this._minorVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minorVersion = this._minorVersion;
    }
    if (this._startEpoch !== undefined) {
      hasAnyValues = true;
      internalValueResult.startEpoch = this._startEpoch;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorCollectorOnetimeDowngradeInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._majorVersion = undefined;
      this._minorVersion = undefined;
      this._startEpoch = undefined;
      this._timezone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._majorVersion = value.majorVersion;
      this._minorVersion = value.minorVersion;
      this._startEpoch = value.startEpoch;
      this._timezone = value.timezone;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
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

  // end_epoch - computed: true, optional: false, required: false
  public get endEpoch() {
    return this.getNumberAttribute('end_epoch');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // major_version - computed: false, optional: false, required: true
  private _majorVersion?: number; 
  public get majorVersion() {
    return this.getNumberAttribute('major_version');
  }
  public set majorVersion(value: number) {
    this._majorVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get majorVersionInput() {
    return this._majorVersion;
  }

  // minor_version - computed: false, optional: false, required: true
  private _minorVersion?: number; 
  public get minorVersion() {
    return this.getNumberAttribute('minor_version');
  }
  public set minorVersion(value: number) {
    this._minorVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minorVersionInput() {
    return this._minorVersion;
  }

  // start_epoch - computed: false, optional: false, required: true
  private _startEpoch?: number; 
  public get startEpoch() {
    return this.getNumberAttribute('start_epoch');
  }
  public set startEpoch(value: number) {
    this._startEpoch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startEpochInput() {
    return this._startEpoch;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataLogicmonitorCollectorOnetimeDowngradeInfoList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorCollectorOnetimeDowngradeInfo[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorCollectorOnetimeDowngradeInfoOutputReference {
    return new DataLogicmonitorCollectorOnetimeDowngradeInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorCollectorOnetimeUpgradeInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#description DataLogicmonitorCollector#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#major_version DataLogicmonitorCollector#major_version}
  */
  readonly majorVersion: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#minor_version DataLogicmonitorCollector#minor_version}
  */
  readonly minorVersion: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#start_epoch DataLogicmonitorCollector#start_epoch}
  */
  readonly startEpoch: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#timezone DataLogicmonitorCollector#timezone}
  */
  readonly timezone?: string;
}

export function dataLogicmonitorCollectorOnetimeUpgradeInfoToTerraform(struct?: DataLogicmonitorCollectorOnetimeUpgradeInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    major_version: cdktf.numberToTerraform(struct!.majorVersion),
    minor_version: cdktf.numberToTerraform(struct!.minorVersion),
    start_epoch: cdktf.numberToTerraform(struct!.startEpoch),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function dataLogicmonitorCollectorOnetimeUpgradeInfoToHclTerraform(struct?: DataLogicmonitorCollectorOnetimeUpgradeInfo | cdktf.IResolvable): any {
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
    major_version: {
      value: cdktf.numberToHclTerraform(struct!.majorVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minor_version: {
      value: cdktf.numberToHclTerraform(struct!.minorVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_epoch: {
      value: cdktf.numberToHclTerraform(struct!.startEpoch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogicmonitorCollectorOnetimeUpgradeInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorCollectorOnetimeUpgradeInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._majorVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.majorVersion = this._majorVersion;
    }
    if (this._minorVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minorVersion = this._minorVersion;
    }
    if (this._startEpoch !== undefined) {
      hasAnyValues = true;
      internalValueResult.startEpoch = this._startEpoch;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorCollectorOnetimeUpgradeInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._majorVersion = undefined;
      this._minorVersion = undefined;
      this._startEpoch = undefined;
      this._timezone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._majorVersion = value.majorVersion;
      this._minorVersion = value.minorVersion;
      this._startEpoch = value.startEpoch;
      this._timezone = value.timezone;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
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

  // end_epoch - computed: true, optional: false, required: false
  public get endEpoch() {
    return this.getNumberAttribute('end_epoch');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // major_version - computed: false, optional: false, required: true
  private _majorVersion?: number; 
  public get majorVersion() {
    return this.getNumberAttribute('major_version');
  }
  public set majorVersion(value: number) {
    this._majorVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get majorVersionInput() {
    return this._majorVersion;
  }

  // minor_version - computed: false, optional: false, required: true
  private _minorVersion?: number; 
  public get minorVersion() {
    return this.getNumberAttribute('minor_version');
  }
  public set minorVersion(value: number) {
    this._minorVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minorVersionInput() {
    return this._minorVersion;
  }

  // start_epoch - computed: false, optional: false, required: true
  private _startEpoch?: number; 
  public get startEpoch() {
    return this.getNumberAttribute('start_epoch');
  }
  public set startEpoch(value: number) {
    this._startEpoch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startEpochInput() {
    return this._startEpoch;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataLogicmonitorCollectorOnetimeUpgradeInfoList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorCollectorOnetimeUpgradeInfo[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorCollectorOnetimeUpgradeInfoOutputReference {
    return new DataLogicmonitorCollectorOnetimeUpgradeInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector logicmonitor_collector}
*/
export class DataLogicmonitorCollector extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logicmonitor_collector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLogicmonitorCollector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLogicmonitorCollector to import
  * @param importFromId The id of the existing DataLogicmonitorCollector that should be imported. Refer to the {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLogicmonitorCollector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logicmonitor_collector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/collector logicmonitor_collector} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLogicmonitorCollectorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLogicmonitorCollectorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'logicmonitor_collector',
      terraformGeneratorMetadata: {
        providerName: 'logicmonitor',
        providerVersion: '2.0.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ackComment = config.ackComment;
    this._acked = config.acked;
    this._ackedBy = config.ackedBy;
    this._ackedOn = config.ackedOn;
    this._ackedOnLocal = config.ackedOnLocal;
    this._arch = config.arch;
    this._backupAgentId = config.backupAgentId;
    this._build = config.buildAttribute;
    this._canDowngrade = config.canDowngrade;
    this._canDowngradeReason = config.canDowngradeReason;
    this._clearSent = config.clearSent;
    this._collectorConf = config.collectorConf;
    this._collectorDeviceId = config.collectorDeviceId;
    this._collectorGroupId = config.collectorGroupId;
    this._collectorGroupName = config.collectorGroupName;
    this._collectorSize = config.collectorSize;
    this._company = config.company;
    this._confVersion = config.confVersion;
    this._createdOn = config.createdOn;
    this._createdOnLocal = config.createdOnLocal;
    this._customProperties.internalValue = config.customProperties;
    this._description = config.description;
    this._ea = config.ea;
    this._enableFailBack = config.enableFailBack;
    this._enableFailOverOnCollectorDevice = config.enableFailOverOnCollectorDevice;
    this._escalatingChainId = config.escalatingChainId;
    this._filter = config.filter;
    this._hasFailOverDevice = config.hasFailOverDevice;
    this._hostname = config.hostname;
    this._id = config.id;
    this._inSDT = config.inSDT;
    this._installerUrlCmds = config.installerUrlCmds;
    this._isDown = config.isDown;
    this._lastSentNotificationOn = config.lastSentNotificationOn;
    this._lastSentNotificationOnLocal = config.lastSentNotificationOnLocal;
    this._monitorOthers = config.monitorOthers;
    this._needAutoCreateCollectorDevice = config.needAutoCreateCollectorDevice;
    this._netscanVersion = config.netscanVersion;
    this._nextRecipient = config.nextRecipient;
    this._numberOfHosts = config.numberOfHosts;
    this._numberOfInstances = config.numberOfInstances;
    this._numberOfWebsites = config.numberOfWebsites;
    this._platform = config.platform;
    this._predefinedConfig = config.predefinedConfig;
    this._previousVersion = config.previousVersion;
    this._resendIval = config.resendIval;
    this._sbproxyConf = config.sbproxyConf;
    this._specifiedCollectorDeviceGroupId = config.specifiedCollectorDeviceGroupId;
    this._status = config.status;
    this._suppressAlertClear = config.suppressAlertClear;
    this._upTime = config.upTime;
    this._updatedOn = config.updatedOn;
    this._updatedOnLocal = config.updatedOnLocal;
    this._userChangeOn = config.userChangeOn;
    this._userChangeOnLocal = config.userChangeOnLocal;
    this._userPermission = config.userPermission;
    this._userVisibleHostsNum = config.userVisibleHostsNum;
    this._userVisibleWebsitesNum = config.userVisibleWebsitesNum;
    this._watchdogConf = config.watchdogConf;
    this._watchdogUpdatedOn = config.watchdogUpdatedOn;
    this._watchdogUpdatedOnLocal = config.watchdogUpdatedOnLocal;
    this._websiteConf = config.websiteConf;
    this._wrapperConf = config.wrapperConf;
    this._automaticUpgradeInfo.internalValue = config.automaticUpgradeInfo;
    this._nextUpgradeInfo.internalValue = config.nextUpgradeInfo;
    this._onetimeDowngradeInfo.internalValue = config.onetimeDowngradeInfo;
    this._onetimeUpgradeInfo.internalValue = config.onetimeUpgradeInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ack_comment - computed: false, optional: true, required: false
  private _ackComment?: string; 
  public get ackComment() {
    return this.getStringAttribute('ack_comment');
  }
  public set ackComment(value: string) {
    this._ackComment = value;
  }
  public resetAckComment() {
    this._ackComment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackCommentInput() {
    return this._ackComment;
  }

  // acked - computed: false, optional: true, required: false
  private _acked?: boolean | cdktf.IResolvable; 
  public get acked() {
    return this.getBooleanAttribute('acked');
  }
  public set acked(value: boolean | cdktf.IResolvable) {
    this._acked = value;
  }
  public resetAcked() {
    this._acked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackedInput() {
    return this._acked;
  }

  // acked_by - computed: false, optional: true, required: false
  private _ackedBy?: string; 
  public get ackedBy() {
    return this.getStringAttribute('acked_by');
  }
  public set ackedBy(value: string) {
    this._ackedBy = value;
  }
  public resetAckedBy() {
    this._ackedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackedByInput() {
    return this._ackedBy;
  }

  // acked_on - computed: false, optional: true, required: false
  private _ackedOn?: number; 
  public get ackedOn() {
    return this.getNumberAttribute('acked_on');
  }
  public set ackedOn(value: number) {
    this._ackedOn = value;
  }
  public resetAckedOn() {
    this._ackedOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackedOnInput() {
    return this._ackedOn;
  }

  // acked_on_local - computed: false, optional: true, required: false
  private _ackedOnLocal?: string; 
  public get ackedOnLocal() {
    return this.getStringAttribute('acked_on_local');
  }
  public set ackedOnLocal(value: string) {
    this._ackedOnLocal = value;
  }
  public resetAckedOnLocal() {
    this._ackedOnLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackedOnLocalInput() {
    return this._ackedOnLocal;
  }

  // arch - computed: false, optional: true, required: false
  private _arch?: string; 
  public get arch() {
    return this.getStringAttribute('arch');
  }
  public set arch(value: string) {
    this._arch = value;
  }
  public resetArch() {
    this._arch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archInput() {
    return this._arch;
  }

  // backup_agent_id - computed: false, optional: true, required: false
  private _backupAgentId?: number; 
  public get backupAgentId() {
    return this.getNumberAttribute('backup_agent_id');
  }
  public set backupAgentId(value: number) {
    this._backupAgentId = value;
  }
  public resetBackupAgentId() {
    this._backupAgentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupAgentIdInput() {
    return this._backupAgentId;
  }

  // build - computed: false, optional: true, required: false
  private _build?: string; 
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }
  public set buildAttribute(value: string) {
    this._build = value;
  }
  public resetBuildAttribute() {
    this._build = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildAttributeInput() {
    return this._build;
  }

  // can_downgrade - computed: false, optional: true, required: false
  private _canDowngrade?: boolean | cdktf.IResolvable; 
  public get canDowngrade() {
    return this.getBooleanAttribute('can_downgrade');
  }
  public set canDowngrade(value: boolean | cdktf.IResolvable) {
    this._canDowngrade = value;
  }
  public resetCanDowngrade() {
    this._canDowngrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canDowngradeInput() {
    return this._canDowngrade;
  }

  // can_downgrade_reason - computed: false, optional: true, required: false
  private _canDowngradeReason?: string; 
  public get canDowngradeReason() {
    return this.getStringAttribute('can_downgrade_reason');
  }
  public set canDowngradeReason(value: string) {
    this._canDowngradeReason = value;
  }
  public resetCanDowngradeReason() {
    this._canDowngradeReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canDowngradeReasonInput() {
    return this._canDowngradeReason;
  }

  // clear_sent - computed: false, optional: true, required: false
  private _clearSent?: boolean | cdktf.IResolvable; 
  public get clearSent() {
    return this.getBooleanAttribute('clear_sent');
  }
  public set clearSent(value: boolean | cdktf.IResolvable) {
    this._clearSent = value;
  }
  public resetClearSent() {
    this._clearSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSentInput() {
    return this._clearSent;
  }

  // collector_conf - computed: false, optional: true, required: false
  private _collectorConf?: string; 
  public get collectorConf() {
    return this.getStringAttribute('collector_conf');
  }
  public set collectorConf(value: string) {
    this._collectorConf = value;
  }
  public resetCollectorConf() {
    this._collectorConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorConfInput() {
    return this._collectorConf;
  }

  // collector_device_id - computed: false, optional: true, required: false
  private _collectorDeviceId?: number; 
  public get collectorDeviceId() {
    return this.getNumberAttribute('collector_device_id');
  }
  public set collectorDeviceId(value: number) {
    this._collectorDeviceId = value;
  }
  public resetCollectorDeviceId() {
    this._collectorDeviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorDeviceIdInput() {
    return this._collectorDeviceId;
  }

  // collector_group_id - computed: false, optional: true, required: false
  private _collectorGroupId?: number; 
  public get collectorGroupId() {
    return this.getNumberAttribute('collector_group_id');
  }
  public set collectorGroupId(value: number) {
    this._collectorGroupId = value;
  }
  public resetCollectorGroupId() {
    this._collectorGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorGroupIdInput() {
    return this._collectorGroupId;
  }

  // collector_group_name - computed: false, optional: true, required: false
  private _collectorGroupName?: string; 
  public get collectorGroupName() {
    return this.getStringAttribute('collector_group_name');
  }
  public set collectorGroupName(value: string) {
    this._collectorGroupName = value;
  }
  public resetCollectorGroupName() {
    this._collectorGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorGroupNameInput() {
    return this._collectorGroupName;
  }

  // collector_size - computed: false, optional: true, required: false
  private _collectorSize?: string; 
  public get collectorSize() {
    return this.getStringAttribute('collector_size');
  }
  public set collectorSize(value: string) {
    this._collectorSize = value;
  }
  public resetCollectorSize() {
    this._collectorSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorSizeInput() {
    return this._collectorSize;
  }

  // company - computed: false, optional: true, required: false
  private _company?: string; 
  public get company() {
    return this.getStringAttribute('company');
  }
  public set company(value: string) {
    this._company = value;
  }
  public resetCompany() {
    this._company = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyInput() {
    return this._company;
  }

  // conf_version - computed: false, optional: true, required: false
  private _confVersion?: string; 
  public get confVersion() {
    return this.getStringAttribute('conf_version');
  }
  public set confVersion(value: string) {
    this._confVersion = value;
  }
  public resetConfVersion() {
    this._confVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confVersionInput() {
    return this._confVersion;
  }

  // created_on - computed: false, optional: true, required: false
  private _createdOn?: number; 
  public get createdOn() {
    return this.getNumberAttribute('created_on');
  }
  public set createdOn(value: number) {
    this._createdOn = value;
  }
  public resetCreatedOn() {
    this._createdOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdOnInput() {
    return this._createdOn;
  }

  // created_on_local - computed: false, optional: true, required: false
  private _createdOnLocal?: string; 
  public get createdOnLocal() {
    return this.getStringAttribute('created_on_local');
  }
  public set createdOnLocal(value: string) {
    this._createdOnLocal = value;
  }
  public resetCreatedOnLocal() {
    this._createdOnLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdOnLocalInput() {
    return this._createdOnLocal;
  }

  // custom_properties - computed: false, optional: true, required: false
  private _customProperties = new DataLogicmonitorCollectorCustomPropertiesList(this, "custom_properties", false);
  public get customProperties() {
    return this._customProperties;
  }
  public putCustomProperties(value: DataLogicmonitorCollectorCustomProperties[] | cdktf.IResolvable) {
    this._customProperties.internalValue = value;
  }
  public resetCustomProperties() {
    this._customProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPropertiesInput() {
    return this._customProperties.internalValue;
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

  // ea - computed: false, optional: true, required: false
  private _ea?: boolean | cdktf.IResolvable; 
  public get ea() {
    return this.getBooleanAttribute('ea');
  }
  public set ea(value: boolean | cdktf.IResolvable) {
    this._ea = value;
  }
  public resetEa() {
    this._ea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eaInput() {
    return this._ea;
  }

  // enable_fail_back - computed: false, optional: true, required: false
  private _enableFailBack?: boolean | cdktf.IResolvable; 
  public get enableFailBack() {
    return this.getBooleanAttribute('enable_fail_back');
  }
  public set enableFailBack(value: boolean | cdktf.IResolvable) {
    this._enableFailBack = value;
  }
  public resetEnableFailBack() {
    this._enableFailBack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFailBackInput() {
    return this._enableFailBack;
  }

  // enable_fail_over_on_collector_device - computed: false, optional: true, required: false
  private _enableFailOverOnCollectorDevice?: boolean | cdktf.IResolvable; 
  public get enableFailOverOnCollectorDevice() {
    return this.getBooleanAttribute('enable_fail_over_on_collector_device');
  }
  public set enableFailOverOnCollectorDevice(value: boolean | cdktf.IResolvable) {
    this._enableFailOverOnCollectorDevice = value;
  }
  public resetEnableFailOverOnCollectorDevice() {
    this._enableFailOverOnCollectorDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFailOverOnCollectorDeviceInput() {
    return this._enableFailOverOnCollectorDevice;
  }

  // escalating_chain_id - computed: false, optional: true, required: false
  private _escalatingChainId?: number; 
  public get escalatingChainId() {
    return this.getNumberAttribute('escalating_chain_id');
  }
  public set escalatingChainId(value: number) {
    this._escalatingChainId = value;
  }
  public resetEscalatingChainId() {
    this._escalatingChainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalatingChainIdInput() {
    return this._escalatingChainId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // has_fail_over_device - computed: false, optional: true, required: false
  private _hasFailOverDevice?: boolean | cdktf.IResolvable; 
  public get hasFailOverDevice() {
    return this.getBooleanAttribute('has_fail_over_device');
  }
  public set hasFailOverDevice(value: boolean | cdktf.IResolvable) {
    this._hasFailOverDevice = value;
  }
  public resetHasFailOverDevice() {
    this._hasFailOverDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasFailOverDeviceInput() {
    return this._hasFailOverDevice;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // in_s_d_t - computed: false, optional: true, required: false
  private _inSDT?: boolean | cdktf.IResolvable; 
  public get inSDT() {
    return this.getBooleanAttribute('in_s_d_t');
  }
  public set inSDT(value: boolean | cdktf.IResolvable) {
    this._inSDT = value;
  }
  public resetInSDT() {
    this._inSDT = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inSDTInput() {
    return this._inSDT;
  }

  // installer_url_cmds - computed: false, optional: true, required: false
  private _installerUrlCmds?: { [key: string]: string }; 
  public get installerUrlCmds() {
    return this.getStringMapAttribute('installer_url_cmds');
  }
  public set installerUrlCmds(value: { [key: string]: string }) {
    this._installerUrlCmds = value;
  }
  public resetInstallerUrlCmds() {
    this._installerUrlCmds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installerUrlCmdsInput() {
    return this._installerUrlCmds;
  }

  // is_down - computed: false, optional: true, required: false
  private _isDown?: boolean | cdktf.IResolvable; 
  public get isDown() {
    return this.getBooleanAttribute('is_down');
  }
  public set isDown(value: boolean | cdktf.IResolvable) {
    this._isDown = value;
  }
  public resetIsDown() {
    this._isDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDownInput() {
    return this._isDown;
  }

  // last_sent_notification_on - computed: false, optional: true, required: false
  private _lastSentNotificationOn?: number; 
  public get lastSentNotificationOn() {
    return this.getNumberAttribute('last_sent_notification_on');
  }
  public set lastSentNotificationOn(value: number) {
    this._lastSentNotificationOn = value;
  }
  public resetLastSentNotificationOn() {
    this._lastSentNotificationOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastSentNotificationOnInput() {
    return this._lastSentNotificationOn;
  }

  // last_sent_notification_on_local - computed: false, optional: true, required: false
  private _lastSentNotificationOnLocal?: string; 
  public get lastSentNotificationOnLocal() {
    return this.getStringAttribute('last_sent_notification_on_local');
  }
  public set lastSentNotificationOnLocal(value: string) {
    this._lastSentNotificationOnLocal = value;
  }
  public resetLastSentNotificationOnLocal() {
    this._lastSentNotificationOnLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastSentNotificationOnLocalInput() {
    return this._lastSentNotificationOnLocal;
  }

  // monitor_others - computed: false, optional: true, required: false
  private _monitorOthers?: boolean | cdktf.IResolvable; 
  public get monitorOthers() {
    return this.getBooleanAttribute('monitor_others');
  }
  public set monitorOthers(value: boolean | cdktf.IResolvable) {
    this._monitorOthers = value;
  }
  public resetMonitorOthers() {
    this._monitorOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorOthersInput() {
    return this._monitorOthers;
  }

  // need_auto_create_collector_device - computed: false, optional: true, required: false
  private _needAutoCreateCollectorDevice?: boolean | cdktf.IResolvable; 
  public get needAutoCreateCollectorDevice() {
    return this.getBooleanAttribute('need_auto_create_collector_device');
  }
  public set needAutoCreateCollectorDevice(value: boolean | cdktf.IResolvable) {
    this._needAutoCreateCollectorDevice = value;
  }
  public resetNeedAutoCreateCollectorDevice() {
    this._needAutoCreateCollectorDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get needAutoCreateCollectorDeviceInput() {
    return this._needAutoCreateCollectorDevice;
  }

  // netscan_version - computed: false, optional: true, required: false
  private _netscanVersion?: string; 
  public get netscanVersion() {
    return this.getStringAttribute('netscan_version');
  }
  public set netscanVersion(value: string) {
    this._netscanVersion = value;
  }
  public resetNetscanVersion() {
    this._netscanVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netscanVersionInput() {
    return this._netscanVersion;
  }

  // next_recipient - computed: false, optional: true, required: false
  private _nextRecipient?: number; 
  public get nextRecipient() {
    return this.getNumberAttribute('next_recipient');
  }
  public set nextRecipient(value: number) {
    this._nextRecipient = value;
  }
  public resetNextRecipient() {
    this._nextRecipient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextRecipientInput() {
    return this._nextRecipient;
  }

  // number_of_hosts - computed: false, optional: true, required: false
  private _numberOfHosts?: number; 
  public get numberOfHosts() {
    return this.getNumberAttribute('number_of_hosts');
  }
  public set numberOfHosts(value: number) {
    this._numberOfHosts = value;
  }
  public resetNumberOfHosts() {
    this._numberOfHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfHostsInput() {
    return this._numberOfHosts;
  }

  // number_of_instances - computed: false, optional: true, required: false
  private _numberOfInstances?: number; 
  public get numberOfInstances() {
    return this.getNumberAttribute('number_of_instances');
  }
  public set numberOfInstances(value: number) {
    this._numberOfInstances = value;
  }
  public resetNumberOfInstances() {
    this._numberOfInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfInstancesInput() {
    return this._numberOfInstances;
  }

  // number_of_websites - computed: false, optional: true, required: false
  private _numberOfWebsites?: number; 
  public get numberOfWebsites() {
    return this.getNumberAttribute('number_of_websites');
  }
  public set numberOfWebsites(value: number) {
    this._numberOfWebsites = value;
  }
  public resetNumberOfWebsites() {
    this._numberOfWebsites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfWebsitesInput() {
    return this._numberOfWebsites;
  }

  // platform - computed: false, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // predefined_config - computed: false, optional: true, required: false
  private _predefinedConfig?: { [key: string]: string }; 
  public get predefinedConfig() {
    return this.getStringMapAttribute('predefined_config');
  }
  public set predefinedConfig(value: { [key: string]: string }) {
    this._predefinedConfig = value;
  }
  public resetPredefinedConfig() {
    this._predefinedConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedConfigInput() {
    return this._predefinedConfig;
  }

  // previous_version - computed: false, optional: true, required: false
  private _previousVersion?: string; 
  public get previousVersion() {
    return this.getStringAttribute('previous_version');
  }
  public set previousVersion(value: string) {
    this._previousVersion = value;
  }
  public resetPreviousVersion() {
    this._previousVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previousVersionInput() {
    return this._previousVersion;
  }

  // resend_ival - computed: false, optional: true, required: false
  private _resendIval?: number; 
  public get resendIval() {
    return this.getNumberAttribute('resend_ival');
  }
  public set resendIval(value: number) {
    this._resendIval = value;
  }
  public resetResendIval() {
    this._resendIval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resendIvalInput() {
    return this._resendIval;
  }

  // sbproxy_conf - computed: false, optional: true, required: false
  private _sbproxyConf?: string; 
  public get sbproxyConf() {
    return this.getStringAttribute('sbproxy_conf');
  }
  public set sbproxyConf(value: string) {
    this._sbproxyConf = value;
  }
  public resetSbproxyConf() {
    this._sbproxyConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbproxyConfInput() {
    return this._sbproxyConf;
  }

  // specified_collector_device_group_id - computed: false, optional: true, required: false
  private _specifiedCollectorDeviceGroupId?: number; 
  public get specifiedCollectorDeviceGroupId() {
    return this.getNumberAttribute('specified_collector_device_group_id');
  }
  public set specifiedCollectorDeviceGroupId(value: number) {
    this._specifiedCollectorDeviceGroupId = value;
  }
  public resetSpecifiedCollectorDeviceGroupId() {
    this._specifiedCollectorDeviceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specifiedCollectorDeviceGroupIdInput() {
    return this._specifiedCollectorDeviceGroupId;
  }

  // status - computed: false, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // suppress_alert_clear - computed: false, optional: true, required: false
  private _suppressAlertClear?: boolean | cdktf.IResolvable; 
  public get suppressAlertClear() {
    return this.getBooleanAttribute('suppress_alert_clear');
  }
  public set suppressAlertClear(value: boolean | cdktf.IResolvable) {
    this._suppressAlertClear = value;
  }
  public resetSuppressAlertClear() {
    this._suppressAlertClear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressAlertClearInput() {
    return this._suppressAlertClear;
  }

  // up_time - computed: false, optional: true, required: false
  private _upTime?: number; 
  public get upTime() {
    return this.getNumberAttribute('up_time');
  }
  public set upTime(value: number) {
    this._upTime = value;
  }
  public resetUpTime() {
    this._upTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upTimeInput() {
    return this._upTime;
  }

  // updated_on - computed: false, optional: true, required: false
  private _updatedOn?: number; 
  public get updatedOn() {
    return this.getNumberAttribute('updated_on');
  }
  public set updatedOn(value: number) {
    this._updatedOn = value;
  }
  public resetUpdatedOn() {
    this._updatedOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedOnInput() {
    return this._updatedOn;
  }

  // updated_on_local - computed: false, optional: true, required: false
  private _updatedOnLocal?: string; 
  public get updatedOnLocal() {
    return this.getStringAttribute('updated_on_local');
  }
  public set updatedOnLocal(value: string) {
    this._updatedOnLocal = value;
  }
  public resetUpdatedOnLocal() {
    this._updatedOnLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedOnLocalInput() {
    return this._updatedOnLocal;
  }

  // user_change_on - computed: false, optional: true, required: false
  private _userChangeOn?: number; 
  public get userChangeOn() {
    return this.getNumberAttribute('user_change_on');
  }
  public set userChangeOn(value: number) {
    this._userChangeOn = value;
  }
  public resetUserChangeOn() {
    this._userChangeOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userChangeOnInput() {
    return this._userChangeOn;
  }

  // user_change_on_local - computed: false, optional: true, required: false
  private _userChangeOnLocal?: string; 
  public get userChangeOnLocal() {
    return this.getStringAttribute('user_change_on_local');
  }
  public set userChangeOnLocal(value: string) {
    this._userChangeOnLocal = value;
  }
  public resetUserChangeOnLocal() {
    this._userChangeOnLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userChangeOnLocalInput() {
    return this._userChangeOnLocal;
  }

  // user_permission - computed: false, optional: true, required: false
  private _userPermission?: string; 
  public get userPermission() {
    return this.getStringAttribute('user_permission');
  }
  public set userPermission(value: string) {
    this._userPermission = value;
  }
  public resetUserPermission() {
    this._userPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPermissionInput() {
    return this._userPermission;
  }

  // user_visible_hosts_num - computed: false, optional: true, required: false
  private _userVisibleHostsNum?: number; 
  public get userVisibleHostsNum() {
    return this.getNumberAttribute('user_visible_hosts_num');
  }
  public set userVisibleHostsNum(value: number) {
    this._userVisibleHostsNum = value;
  }
  public resetUserVisibleHostsNum() {
    this._userVisibleHostsNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userVisibleHostsNumInput() {
    return this._userVisibleHostsNum;
  }

  // user_visible_websites_num - computed: false, optional: true, required: false
  private _userVisibleWebsitesNum?: number; 
  public get userVisibleWebsitesNum() {
    return this.getNumberAttribute('user_visible_websites_num');
  }
  public set userVisibleWebsitesNum(value: number) {
    this._userVisibleWebsitesNum = value;
  }
  public resetUserVisibleWebsitesNum() {
    this._userVisibleWebsitesNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userVisibleWebsitesNumInput() {
    return this._userVisibleWebsitesNum;
  }

  // watchdog_conf - computed: false, optional: true, required: false
  private _watchdogConf?: string; 
  public get watchdogConf() {
    return this.getStringAttribute('watchdog_conf');
  }
  public set watchdogConf(value: string) {
    this._watchdogConf = value;
  }
  public resetWatchdogConf() {
    this._watchdogConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchdogConfInput() {
    return this._watchdogConf;
  }

  // watchdog_updated_on - computed: false, optional: true, required: false
  private _watchdogUpdatedOn?: number; 
  public get watchdogUpdatedOn() {
    return this.getNumberAttribute('watchdog_updated_on');
  }
  public set watchdogUpdatedOn(value: number) {
    this._watchdogUpdatedOn = value;
  }
  public resetWatchdogUpdatedOn() {
    this._watchdogUpdatedOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchdogUpdatedOnInput() {
    return this._watchdogUpdatedOn;
  }

  // watchdog_updated_on_local - computed: false, optional: true, required: false
  private _watchdogUpdatedOnLocal?: string; 
  public get watchdogUpdatedOnLocal() {
    return this.getStringAttribute('watchdog_updated_on_local');
  }
  public set watchdogUpdatedOnLocal(value: string) {
    this._watchdogUpdatedOnLocal = value;
  }
  public resetWatchdogUpdatedOnLocal() {
    this._watchdogUpdatedOnLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchdogUpdatedOnLocalInput() {
    return this._watchdogUpdatedOnLocal;
  }

  // website_conf - computed: false, optional: true, required: false
  private _websiteConf?: string; 
  public get websiteConf() {
    return this.getStringAttribute('website_conf');
  }
  public set websiteConf(value: string) {
    this._websiteConf = value;
  }
  public resetWebsiteConf() {
    this._websiteConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteConfInput() {
    return this._websiteConf;
  }

  // wrapper_conf - computed: false, optional: true, required: false
  private _wrapperConf?: string; 
  public get wrapperConf() {
    return this.getStringAttribute('wrapper_conf');
  }
  public set wrapperConf(value: string) {
    this._wrapperConf = value;
  }
  public resetWrapperConf() {
    this._wrapperConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrapperConfInput() {
    return this._wrapperConf;
  }

  // automatic_upgrade_info - computed: false, optional: true, required: false
  private _automaticUpgradeInfo = new DataLogicmonitorCollectorAutomaticUpgradeInfoList(this, "automatic_upgrade_info", false);
  public get automaticUpgradeInfo() {
    return this._automaticUpgradeInfo;
  }
  public putAutomaticUpgradeInfo(value: DataLogicmonitorCollectorAutomaticUpgradeInfo[] | cdktf.IResolvable) {
    this._automaticUpgradeInfo.internalValue = value;
  }
  public resetAutomaticUpgradeInfo() {
    this._automaticUpgradeInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticUpgradeInfoInput() {
    return this._automaticUpgradeInfo.internalValue;
  }

  // next_upgrade_info - computed: false, optional: true, required: false
  private _nextUpgradeInfo = new DataLogicmonitorCollectorNextUpgradeInfoList(this, "next_upgrade_info", false);
  public get nextUpgradeInfo() {
    return this._nextUpgradeInfo;
  }
  public putNextUpgradeInfo(value: DataLogicmonitorCollectorNextUpgradeInfo[] | cdktf.IResolvable) {
    this._nextUpgradeInfo.internalValue = value;
  }
  public resetNextUpgradeInfo() {
    this._nextUpgradeInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextUpgradeInfoInput() {
    return this._nextUpgradeInfo.internalValue;
  }

  // onetime_downgrade_info - computed: false, optional: true, required: false
  private _onetimeDowngradeInfo = new DataLogicmonitorCollectorOnetimeDowngradeInfoList(this, "onetime_downgrade_info", false);
  public get onetimeDowngradeInfo() {
    return this._onetimeDowngradeInfo;
  }
  public putOnetimeDowngradeInfo(value: DataLogicmonitorCollectorOnetimeDowngradeInfo[] | cdktf.IResolvable) {
    this._onetimeDowngradeInfo.internalValue = value;
  }
  public resetOnetimeDowngradeInfo() {
    this._onetimeDowngradeInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onetimeDowngradeInfoInput() {
    return this._onetimeDowngradeInfo.internalValue;
  }

  // onetime_upgrade_info - computed: false, optional: true, required: false
  private _onetimeUpgradeInfo = new DataLogicmonitorCollectorOnetimeUpgradeInfoList(this, "onetime_upgrade_info", false);
  public get onetimeUpgradeInfo() {
    return this._onetimeUpgradeInfo;
  }
  public putOnetimeUpgradeInfo(value: DataLogicmonitorCollectorOnetimeUpgradeInfo[] | cdktf.IResolvable) {
    this._onetimeUpgradeInfo.internalValue = value;
  }
  public resetOnetimeUpgradeInfo() {
    this._onetimeUpgradeInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onetimeUpgradeInfoInput() {
    return this._onetimeUpgradeInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ack_comment: cdktf.stringToTerraform(this._ackComment),
      acked: cdktf.booleanToTerraform(this._acked),
      acked_by: cdktf.stringToTerraform(this._ackedBy),
      acked_on: cdktf.numberToTerraform(this._ackedOn),
      acked_on_local: cdktf.stringToTerraform(this._ackedOnLocal),
      arch: cdktf.stringToTerraform(this._arch),
      backup_agent_id: cdktf.numberToTerraform(this._backupAgentId),
      build: cdktf.stringToTerraform(this._build),
      can_downgrade: cdktf.booleanToTerraform(this._canDowngrade),
      can_downgrade_reason: cdktf.stringToTerraform(this._canDowngradeReason),
      clear_sent: cdktf.booleanToTerraform(this._clearSent),
      collector_conf: cdktf.stringToTerraform(this._collectorConf),
      collector_device_id: cdktf.numberToTerraform(this._collectorDeviceId),
      collector_group_id: cdktf.numberToTerraform(this._collectorGroupId),
      collector_group_name: cdktf.stringToTerraform(this._collectorGroupName),
      collector_size: cdktf.stringToTerraform(this._collectorSize),
      company: cdktf.stringToTerraform(this._company),
      conf_version: cdktf.stringToTerraform(this._confVersion),
      created_on: cdktf.numberToTerraform(this._createdOn),
      created_on_local: cdktf.stringToTerraform(this._createdOnLocal),
      custom_properties: cdktf.listMapper(dataLogicmonitorCollectorCustomPropertiesToTerraform, false)(this._customProperties.internalValue),
      description: cdktf.stringToTerraform(this._description),
      ea: cdktf.booleanToTerraform(this._ea),
      enable_fail_back: cdktf.booleanToTerraform(this._enableFailBack),
      enable_fail_over_on_collector_device: cdktf.booleanToTerraform(this._enableFailOverOnCollectorDevice),
      escalating_chain_id: cdktf.numberToTerraform(this._escalatingChainId),
      filter: cdktf.stringToTerraform(this._filter),
      has_fail_over_device: cdktf.booleanToTerraform(this._hasFailOverDevice),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.numberToTerraform(this._id),
      in_s_d_t: cdktf.booleanToTerraform(this._inSDT),
      installer_url_cmds: cdktf.hashMapper(cdktf.stringToTerraform)(this._installerUrlCmds),
      is_down: cdktf.booleanToTerraform(this._isDown),
      last_sent_notification_on: cdktf.numberToTerraform(this._lastSentNotificationOn),
      last_sent_notification_on_local: cdktf.stringToTerraform(this._lastSentNotificationOnLocal),
      monitor_others: cdktf.booleanToTerraform(this._monitorOthers),
      need_auto_create_collector_device: cdktf.booleanToTerraform(this._needAutoCreateCollectorDevice),
      netscan_version: cdktf.stringToTerraform(this._netscanVersion),
      next_recipient: cdktf.numberToTerraform(this._nextRecipient),
      number_of_hosts: cdktf.numberToTerraform(this._numberOfHosts),
      number_of_instances: cdktf.numberToTerraform(this._numberOfInstances),
      number_of_websites: cdktf.numberToTerraform(this._numberOfWebsites),
      platform: cdktf.stringToTerraform(this._platform),
      predefined_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._predefinedConfig),
      previous_version: cdktf.stringToTerraform(this._previousVersion),
      resend_ival: cdktf.numberToTerraform(this._resendIval),
      sbproxy_conf: cdktf.stringToTerraform(this._sbproxyConf),
      specified_collector_device_group_id: cdktf.numberToTerraform(this._specifiedCollectorDeviceGroupId),
      status: cdktf.numberToTerraform(this._status),
      suppress_alert_clear: cdktf.booleanToTerraform(this._suppressAlertClear),
      up_time: cdktf.numberToTerraform(this._upTime),
      updated_on: cdktf.numberToTerraform(this._updatedOn),
      updated_on_local: cdktf.stringToTerraform(this._updatedOnLocal),
      user_change_on: cdktf.numberToTerraform(this._userChangeOn),
      user_change_on_local: cdktf.stringToTerraform(this._userChangeOnLocal),
      user_permission: cdktf.stringToTerraform(this._userPermission),
      user_visible_hosts_num: cdktf.numberToTerraform(this._userVisibleHostsNum),
      user_visible_websites_num: cdktf.numberToTerraform(this._userVisibleWebsitesNum),
      watchdog_conf: cdktf.stringToTerraform(this._watchdogConf),
      watchdog_updated_on: cdktf.numberToTerraform(this._watchdogUpdatedOn),
      watchdog_updated_on_local: cdktf.stringToTerraform(this._watchdogUpdatedOnLocal),
      website_conf: cdktf.stringToTerraform(this._websiteConf),
      wrapper_conf: cdktf.stringToTerraform(this._wrapperConf),
      automatic_upgrade_info: cdktf.listMapper(dataLogicmonitorCollectorAutomaticUpgradeInfoToTerraform, true)(this._automaticUpgradeInfo.internalValue),
      next_upgrade_info: cdktf.listMapper(dataLogicmonitorCollectorNextUpgradeInfoToTerraform, true)(this._nextUpgradeInfo.internalValue),
      onetime_downgrade_info: cdktf.listMapper(dataLogicmonitorCollectorOnetimeDowngradeInfoToTerraform, true)(this._onetimeDowngradeInfo.internalValue),
      onetime_upgrade_info: cdktf.listMapper(dataLogicmonitorCollectorOnetimeUpgradeInfoToTerraform, true)(this._onetimeUpgradeInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ack_comment: {
        value: cdktf.stringToHclTerraform(this._ackComment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acked: {
        value: cdktf.booleanToHclTerraform(this._acked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      acked_by: {
        value: cdktf.stringToHclTerraform(this._ackedBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acked_on: {
        value: cdktf.numberToHclTerraform(this._ackedOn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      acked_on_local: {
        value: cdktf.stringToHclTerraform(this._ackedOnLocal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arch: {
        value: cdktf.stringToHclTerraform(this._arch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_agent_id: {
        value: cdktf.numberToHclTerraform(this._backupAgentId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      build: {
        value: cdktf.stringToHclTerraform(this._build),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      can_downgrade: {
        value: cdktf.booleanToHclTerraform(this._canDowngrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_downgrade_reason: {
        value: cdktf.stringToHclTerraform(this._canDowngradeReason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clear_sent: {
        value: cdktf.booleanToHclTerraform(this._clearSent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      collector_conf: {
        value: cdktf.stringToHclTerraform(this._collectorConf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collector_device_id: {
        value: cdktf.numberToHclTerraform(this._collectorDeviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      collector_group_id: {
        value: cdktf.numberToHclTerraform(this._collectorGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      collector_group_name: {
        value: cdktf.stringToHclTerraform(this._collectorGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collector_size: {
        value: cdktf.stringToHclTerraform(this._collectorSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      company: {
        value: cdktf.stringToHclTerraform(this._company),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conf_version: {
        value: cdktf.stringToHclTerraform(this._confVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_on: {
        value: cdktf.numberToHclTerraform(this._createdOn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      created_on_local: {
        value: cdktf.stringToHclTerraform(this._createdOnLocal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_properties: {
        value: cdktf.listMapperHcl(dataLogicmonitorCollectorCustomPropertiesToHclTerraform, false)(this._customProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorCollectorCustomPropertiesList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ea: {
        value: cdktf.booleanToHclTerraform(this._ea),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_fail_back: {
        value: cdktf.booleanToHclTerraform(this._enableFailBack),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_fail_over_on_collector_device: {
        value: cdktf.booleanToHclTerraform(this._enableFailOverOnCollectorDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      escalating_chain_id: {
        value: cdktf.numberToHclTerraform(this._escalatingChainId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      has_fail_over_device: {
        value: cdktf.booleanToHclTerraform(this._hasFailOverDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      in_s_d_t: {
        value: cdktf.booleanToHclTerraform(this._inSDT),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      installer_url_cmds: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._installerUrlCmds),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      is_down: {
        value: cdktf.booleanToHclTerraform(this._isDown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      last_sent_notification_on: {
        value: cdktf.numberToHclTerraform(this._lastSentNotificationOn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      last_sent_notification_on_local: {
        value: cdktf.stringToHclTerraform(this._lastSentNotificationOnLocal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_others: {
        value: cdktf.booleanToHclTerraform(this._monitorOthers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      need_auto_create_collector_device: {
        value: cdktf.booleanToHclTerraform(this._needAutoCreateCollectorDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      netscan_version: {
        value: cdktf.stringToHclTerraform(this._netscanVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_recipient: {
        value: cdktf.numberToHclTerraform(this._nextRecipient),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      number_of_hosts: {
        value: cdktf.numberToHclTerraform(this._numberOfHosts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      number_of_instances: {
        value: cdktf.numberToHclTerraform(this._numberOfInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      number_of_websites: {
        value: cdktf.numberToHclTerraform(this._numberOfWebsites),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      platform: {
        value: cdktf.stringToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      predefined_config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._predefinedConfig),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      previous_version: {
        value: cdktf.stringToHclTerraform(this._previousVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resend_ival: {
        value: cdktf.numberToHclTerraform(this._resendIval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sbproxy_conf: {
        value: cdktf.stringToHclTerraform(this._sbproxyConf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      specified_collector_device_group_id: {
        value: cdktf.numberToHclTerraform(this._specifiedCollectorDeviceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.numberToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      suppress_alert_clear: {
        value: cdktf.booleanToHclTerraform(this._suppressAlertClear),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      up_time: {
        value: cdktf.numberToHclTerraform(this._upTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      updated_on: {
        value: cdktf.numberToHclTerraform(this._updatedOn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      updated_on_local: {
        value: cdktf.stringToHclTerraform(this._updatedOnLocal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_change_on: {
        value: cdktf.numberToHclTerraform(this._userChangeOn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_change_on_local: {
        value: cdktf.stringToHclTerraform(this._userChangeOnLocal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_permission: {
        value: cdktf.stringToHclTerraform(this._userPermission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_visible_hosts_num: {
        value: cdktf.numberToHclTerraform(this._userVisibleHostsNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_visible_websites_num: {
        value: cdktf.numberToHclTerraform(this._userVisibleWebsitesNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      watchdog_conf: {
        value: cdktf.stringToHclTerraform(this._watchdogConf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      watchdog_updated_on: {
        value: cdktf.numberToHclTerraform(this._watchdogUpdatedOn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      watchdog_updated_on_local: {
        value: cdktf.stringToHclTerraform(this._watchdogUpdatedOnLocal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      website_conf: {
        value: cdktf.stringToHclTerraform(this._websiteConf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wrapper_conf: {
        value: cdktf.stringToHclTerraform(this._wrapperConf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      automatic_upgrade_info: {
        value: cdktf.listMapperHcl(dataLogicmonitorCollectorAutomaticUpgradeInfoToHclTerraform, true)(this._automaticUpgradeInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorCollectorAutomaticUpgradeInfoList",
      },
      next_upgrade_info: {
        value: cdktf.listMapperHcl(dataLogicmonitorCollectorNextUpgradeInfoToHclTerraform, true)(this._nextUpgradeInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorCollectorNextUpgradeInfoList",
      },
      onetime_downgrade_info: {
        value: cdktf.listMapperHcl(dataLogicmonitorCollectorOnetimeDowngradeInfoToHclTerraform, true)(this._onetimeDowngradeInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorCollectorOnetimeDowngradeInfoList",
      },
      onetime_upgrade_info: {
        value: cdktf.listMapperHcl(dataLogicmonitorCollectorOnetimeUpgradeInfoToHclTerraform, true)(this._onetimeUpgradeInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorCollectorOnetimeUpgradeInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
