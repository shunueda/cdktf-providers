// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstZoneDetectionAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#id DdosDstZoneDetectionA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'settings': settings;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#settings DdosDstZoneDetectionA#settings}
  */
  readonly settings: string;
  /**
  * 'enable': Enable detection; 'disable': Disable detection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#toggle DdosDstZoneDetectionA#toggle}
  */
  readonly toggle?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#uuid DdosDstZoneDetectionA#uuid}
  */
  readonly uuid?: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#zone_name DdosDstZoneDetectionA#zone_name}
  */
  readonly zoneName: string;
  /**
  * notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#notification DdosDstZoneDetectionA#notification}
  */
  readonly notification?: DdosDstZoneDetectionNotificationA;
  /**
  * outbound_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#outbound_detection DdosDstZoneDetectionA#outbound_detection}
  */
  readonly outboundDetection?: DdosDstZoneDetectionOutboundDetectionA;
  /**
  * packet_anomaly_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#packet_anomaly_detection DdosDstZoneDetectionA#packet_anomaly_detection}
  */
  readonly packetAnomalyDetection?: DdosDstZoneDetectionPacketAnomalyDetectionA;
  /**
  * service_discovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#service_discovery DdosDstZoneDetectionA#service_discovery}
  */
  readonly serviceDiscovery?: DdosDstZoneDetectionServiceDiscoveryA;
  /**
  * victim_ip_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#victim_ip_detection DdosDstZoneDetectionA#victim_ip_detection}
  */
  readonly victimIpDetection?: DdosDstZoneDetectionVictimIpDetectionA;
}
export interface DdosDstZoneDetectionNotificationNotificationA {
  /**
  * Specify the notification template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#notification_template_name DdosDstZoneDetectionA#notification_template_name}
  */
  readonly notificationTemplateName?: string;
}

export function ddosDstZoneDetectionNotificationNotificationAToTerraform(struct?: DdosDstZoneDetectionNotificationNotificationA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notification_template_name: cdktf.stringToTerraform(struct!.notificationTemplateName),
  }
}


export function ddosDstZoneDetectionNotificationNotificationAToHclTerraform(struct?: DdosDstZoneDetectionNotificationNotificationA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notification_template_name: {
      value: cdktf.stringToHclTerraform(struct!.notificationTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneDetectionNotificationNotificationAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZoneDetectionNotificationNotificationA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notificationTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationTemplateName = this._notificationTemplateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneDetectionNotificationNotificationA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notificationTemplateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notificationTemplateName = value.notificationTemplateName;
    }
  }

  // notification_template_name - computed: false, optional: true, required: false
  private _notificationTemplateName?: string; 
  public get notificationTemplateName() {
    return this.getStringAttribute('notification_template_name');
  }
  public set notificationTemplateName(value: string) {
    this._notificationTemplateName = value;
  }
  public resetNotificationTemplateName() {
    this._notificationTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTemplateNameInput() {
    return this._notificationTemplateName;
  }
}

export class DdosDstZoneDetectionNotificationNotificationAList extends cdktf.ComplexList {
  public internalValue? : DdosDstZoneDetectionNotificationNotificationA[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZoneDetectionNotificationNotificationAOutputReference {
    return new DdosDstZoneDetectionNotificationNotificationAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZoneDetectionNotificationA {
  /**
  * 'configuration': configuration;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#configuration DdosDstZoneDetectionA#configuration}
  */
  readonly configuration?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#uuid DdosDstZoneDetectionA#uuid}
  */
  readonly uuid?: string;
  /**
  * notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#notification DdosDstZoneDetectionA#notification}
  */
  readonly notification?: DdosDstZoneDetectionNotificationNotificationA[] | cdktf.IResolvable;
}

export function ddosDstZoneDetectionNotificationAToTerraform(struct?: DdosDstZoneDetectionNotificationAOutputReference | DdosDstZoneDetectionNotificationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.stringToTerraform(struct!.configuration),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    notification: cdktf.listMapper(ddosDstZoneDetectionNotificationNotificationAToTerraform, true)(struct!.notification),
  }
}


export function ddosDstZoneDetectionNotificationAToHclTerraform(struct?: DdosDstZoneDetectionNotificationAOutputReference | DdosDstZoneDetectionNotificationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.stringToHclTerraform(struct!.configuration),
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
    notification: {
      value: cdktf.listMapperHcl(ddosDstZoneDetectionNotificationNotificationAToHclTerraform, true)(struct!.notification),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneDetectionNotificationNotificationAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneDetectionNotificationAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneDetectionNotificationA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._notification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notification = this._notification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneDetectionNotificationA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuration = undefined;
      this._uuid = undefined;
      this._notification.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuration = value.configuration;
      this._uuid = value.uuid;
      this._notification.internalValue = value.notification;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // notification - computed: false, optional: true, required: false
  private _notification = new DdosDstZoneDetectionNotificationNotificationAList(this, "notification", false);
  public get notification() {
    return this._notification;
  }
  public putNotification(value: DdosDstZoneDetectionNotificationNotificationA[] | cdktf.IResolvable) {
    this._notification.internalValue = value;
  }
  public resetNotification() {
    this._notification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }
}
export interface DdosDstZoneDetectionOutboundDetectionEnableTopKA {
  /**
  * Subnet mask. The value should be less than or equal to the minimum zone subnet mask + 8 (IPv6 Subnet mask)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#topk_netmask DdosDstZoneDetectionA#topk_netmask}
  */
  readonly topkNetmask?: number;
  /**
  * Maximum number of records to show in topk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#topk_num_records DdosDstZoneDetectionA#topk_num_records}
  */
  readonly topkNumRecords?: number;
  /**
  * 'source-subnet': Topk source subnet;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#topk_type DdosDstZoneDetectionA#topk_type}
  */
  readonly topkType?: string;
}

export function ddosDstZoneDetectionOutboundDetectionEnableTopKAToTerraform(struct?: DdosDstZoneDetectionOutboundDetectionEnableTopKA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    topk_netmask: cdktf.numberToTerraform(struct!.topkNetmask),
    topk_num_records: cdktf.numberToTerraform(struct!.topkNumRecords),
    topk_type: cdktf.stringToTerraform(struct!.topkType),
  }
}


export function ddosDstZoneDetectionOutboundDetectionEnableTopKAToHclTerraform(struct?: DdosDstZoneDetectionOutboundDetectionEnableTopKA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    topk_netmask: {
      value: cdktf.numberToHclTerraform(struct!.topkNetmask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topk_num_records: {
      value: cdktf.numberToHclTerraform(struct!.topkNumRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topk_type: {
      value: cdktf.stringToHclTerraform(struct!.topkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneDetectionOutboundDetectionEnableTopKAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZoneDetectionOutboundDetectionEnableTopKA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topkNetmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkNetmask = this._topkNetmask;
    }
    if (this._topkNumRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkNumRecords = this._topkNumRecords;
    }
    if (this._topkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkType = this._topkType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneDetectionOutboundDetectionEnableTopKA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._topkNetmask = undefined;
      this._topkNumRecords = undefined;
      this._topkType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._topkNetmask = value.topkNetmask;
      this._topkNumRecords = value.topkNumRecords;
      this._topkType = value.topkType;
    }
  }

  // topk_netmask - computed: false, optional: true, required: false
  private _topkNetmask?: number; 
  public get topkNetmask() {
    return this.getNumberAttribute('topk_netmask');
  }
  public set topkNetmask(value: number) {
    this._topkNetmask = value;
  }
  public resetTopkNetmask() {
    this._topkNetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkNetmaskInput() {
    return this._topkNetmask;
  }

  // topk_num_records - computed: false, optional: true, required: false
  private _topkNumRecords?: number; 
  public get topkNumRecords() {
    return this.getNumberAttribute('topk_num_records');
  }
  public set topkNumRecords(value: number) {
    this._topkNumRecords = value;
  }
  public resetTopkNumRecords() {
    this._topkNumRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkNumRecordsInput() {
    return this._topkNumRecords;
  }

  // topk_type - computed: false, optional: true, required: false
  private _topkType?: string; 
  public get topkType() {
    return this.getStringAttribute('topk_type');
  }
  public set topkType(value: string) {
    this._topkType = value;
  }
  public resetTopkType() {
    this._topkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkTypeInput() {
    return this._topkType;
  }
}

export class DdosDstZoneDetectionOutboundDetectionEnableTopKAList extends cdktf.ComplexList {
  public internalValue? : DdosDstZoneDetectionOutboundDetectionEnableTopKA[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZoneDetectionOutboundDetectionEnableTopKAOutputReference {
    return new DdosDstZoneDetectionOutboundDetectionEnableTopKAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZoneDetectionOutboundDetectionIndicatorListStructA {
  /**
  * Expected minimal data size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#data_packet_size DdosDstZoneDetectionA#data_packet_size}
  */
  readonly dataPacketSize?: number;
  /**
  * Expected minimal window size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#tcp_window_size DdosDstZoneDetectionA#tcp_window_size}
  */
  readonly tcpWindowSize?: number;
  /**
  * Threshold for each geo-location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#threshold_large_num DdosDstZoneDetectionA#threshold_large_num}
  */
  readonly thresholdLargeNum?: number;
  /**
  * Threshold for each geo-location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#threshold_num DdosDstZoneDetectionA#threshold_num}
  */
  readonly thresholdNum?: number;
  /**
  * Threshold for each geo-location (Non-zero floating point)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#threshold_str DdosDstZoneDetectionA#threshold_str}
  */
  readonly thresholdStr?: string;
  /**
  * 'pkt-rate': rate of incoming packets; 'pkt-drop-rate': rate of packets got dropped; 'bit-rate': rate of incoming bits; 'pkt-drop-ratio': ratio of incoming packet rate divided by the rate of dropping packets; 'bytes-to-bytes-from-ratio': ratio of incoming packet rate divided by the rate of outgoing packets; 'syn-rate': rate on incoming SYN packets; 'fin-rate': rate on incoming FIN packets; 'rst-rate': rate of incoming RST packets; 'small-window-ack-rate': rate of small window advertisement; 'empty-ack-rate': rate of incoming packets which have no payload; 'small-payload-rate': rate of short payload packet; 'syn-fin-ratio': ratio of incoming SYN packet rate divided by the rate of incoming FIN packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#type DdosDstZoneDetectionA#type}
  */
  readonly type: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#user_tag DdosDstZoneDetectionA#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#uuid DdosDstZoneDetectionA#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZoneDetectionOutboundDetectionIndicatorListStructAToTerraform(struct?: DdosDstZoneDetectionOutboundDetectionIndicatorListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_packet_size: cdktf.numberToTerraform(struct!.dataPacketSize),
    tcp_window_size: cdktf.numberToTerraform(struct!.tcpWindowSize),
    threshold_large_num: cdktf.numberToTerraform(struct!.thresholdLargeNum),
    threshold_num: cdktf.numberToTerraform(struct!.thresholdNum),
    threshold_str: cdktf.stringToTerraform(struct!.thresholdStr),
    type: cdktf.stringToTerraform(struct!.type),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZoneDetectionOutboundDetectionIndicatorListStructAToHclTerraform(struct?: DdosDstZoneDetectionOutboundDetectionIndicatorListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_packet_size: {
      value: cdktf.numberToHclTerraform(struct!.dataPacketSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_window_size: {
      value: cdktf.numberToHclTerraform(struct!.tcpWindowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_large_num: {
      value: cdktf.numberToHclTerraform(struct!.thresholdLargeNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_num: {
      value: cdktf.numberToHclTerraform(struct!.thresholdNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_str: {
      value: cdktf.stringToHclTerraform(struct!.thresholdStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneDetectionOutboundDetectionIndicatorListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZoneDetectionOutboundDetectionIndicatorListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataPacketSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPacketSize = this._dataPacketSize;
    }
    if (this._tcpWindowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowSize = this._tcpWindowSize;
    }
    if (this._thresholdLargeNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdLargeNum = this._thresholdLargeNum;
    }
    if (this._thresholdNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdNum = this._thresholdNum;
    }
    if (this._thresholdStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdStr = this._thresholdStr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneDetectionOutboundDetectionIndicatorListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataPacketSize = undefined;
      this._tcpWindowSize = undefined;
      this._thresholdLargeNum = undefined;
      this._thresholdNum = undefined;
      this._thresholdStr = undefined;
      this._type = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataPacketSize = value.dataPacketSize;
      this._tcpWindowSize = value.tcpWindowSize;
      this._thresholdLargeNum = value.thresholdLargeNum;
      this._thresholdNum = value.thresholdNum;
      this._thresholdStr = value.thresholdStr;
      this._type = value.type;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
    }
  }

  // data_packet_size - computed: false, optional: true, required: false
  private _dataPacketSize?: number; 
  public get dataPacketSize() {
    return this.getNumberAttribute('data_packet_size');
  }
  public set dataPacketSize(value: number) {
    this._dataPacketSize = value;
  }
  public resetDataPacketSize() {
    this._dataPacketSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPacketSizeInput() {
    return this._dataPacketSize;
  }

  // tcp_window_size - computed: false, optional: true, required: false
  private _tcpWindowSize?: number; 
  public get tcpWindowSize() {
    return this.getNumberAttribute('tcp_window_size');
  }
  public set tcpWindowSize(value: number) {
    this._tcpWindowSize = value;
  }
  public resetTcpWindowSize() {
    this._tcpWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWindowSizeInput() {
    return this._tcpWindowSize;
  }

  // threshold_large_num - computed: false, optional: true, required: false
  private _thresholdLargeNum?: number; 
  public get thresholdLargeNum() {
    return this.getNumberAttribute('threshold_large_num');
  }
  public set thresholdLargeNum(value: number) {
    this._thresholdLargeNum = value;
  }
  public resetThresholdLargeNum() {
    this._thresholdLargeNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdLargeNumInput() {
    return this._thresholdLargeNum;
  }

  // threshold_num - computed: false, optional: true, required: false
  private _thresholdNum?: number; 
  public get thresholdNum() {
    return this.getNumberAttribute('threshold_num');
  }
  public set thresholdNum(value: number) {
    this._thresholdNum = value;
  }
  public resetThresholdNum() {
    this._thresholdNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdNumInput() {
    return this._thresholdNum;
  }

  // threshold_str - computed: false, optional: true, required: false
  private _thresholdStr?: string; 
  public get thresholdStr() {
    return this.getStringAttribute('threshold_str');
  }
  public set thresholdStr(value: string) {
    this._thresholdStr = value;
  }
  public resetThresholdStr() {
    this._thresholdStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdStrInput() {
    return this._thresholdStr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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
}

export class DdosDstZoneDetectionOutboundDetectionIndicatorListStructAList extends cdktf.ComplexList {
  public internalValue? : DdosDstZoneDetectionOutboundDetectionIndicatorListStructA[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZoneDetectionOutboundDetectionIndicatorListStructAOutputReference {
    return new DdosDstZoneDetectionOutboundDetectionIndicatorListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZoneDetectionOutboundDetectionTopkSourceSubnetA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#uuid DdosDstZoneDetectionA#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZoneDetectionOutboundDetectionTopkSourceSubnetAToTerraform(struct?: DdosDstZoneDetectionOutboundDetectionTopkSourceSubnetAOutputReference | DdosDstZoneDetectionOutboundDetectionTopkSourceSubnetA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZoneDetectionOutboundDetectionTopkSourceSubnetAToHclTerraform(struct?: DdosDstZoneDetectionOutboundDetectionTopkSourceSubnetAOutputReference | DdosDstZoneDetectionOutboundDetectionTopkSourceSubnetA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneDetectionOutboundDetectionTopkSourceSubnetAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneDetectionOutboundDetectionTopkSourceSubnetA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneDetectionOutboundDetectionTopkSourceSubnetA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface DdosDstZoneDetectionOutboundDetectionA {
  /**
  * 'configuration': configuration;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#configuration DdosDstZoneDetectionA#configuration}
  */
  readonly configuration?: string;
  /**
  * 'asn': Autonomous Systems number; 'country': Country;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#discovery_method DdosDstZoneDetectionA#discovery_method}
  */
  readonly discoveryMethod?: string;
  /**
  * Maximum number of top locations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#discovery_record DdosDstZoneDetectionA#discovery_record}
  */
  readonly discoveryRecord?: number;
  /**
  * 'enable': Enable outbound detection; 'disable': Disable outbound detection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#toggle DdosDstZoneDetectionA#toggle}
  */
  readonly toggle?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#uuid DdosDstZoneDetectionA#uuid}
  */
  readonly uuid?: string;
  /**
  * enable_top_k block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#enable_top_k DdosDstZoneDetectionA#enable_top_k}
  */
  readonly enableTopK?: DdosDstZoneDetectionOutboundDetectionEnableTopKA[] | cdktf.IResolvable;
  /**
  * indicator_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#indicator_list DdosDstZoneDetectionA#indicator_list}
  */
  readonly indicatorList?: DdosDstZoneDetectionOutboundDetectionIndicatorListStructA[] | cdktf.IResolvable;
  /**
  * topk_source_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#topk_source_subnet DdosDstZoneDetectionA#topk_source_subnet}
  */
  readonly topkSourceSubnet?: DdosDstZoneDetectionOutboundDetectionTopkSourceSubnetA;
}

export function ddosDstZoneDetectionOutboundDetectionAToTerraform(struct?: DdosDstZoneDetectionOutboundDetectionAOutputReference | DdosDstZoneDetectionOutboundDetectionA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.stringToTerraform(struct!.configuration),
    discovery_method: cdktf.stringToTerraform(struct!.discoveryMethod),
    discovery_record: cdktf.numberToTerraform(struct!.discoveryRecord),
    toggle: cdktf.stringToTerraform(struct!.toggle),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    enable_top_k: cdktf.listMapper(ddosDstZoneDetectionOutboundDetectionEnableTopKAToTerraform, true)(struct!.enableTopK),
    indicator_list: cdktf.listMapper(ddosDstZoneDetectionOutboundDetectionIndicatorListStructAToTerraform, true)(struct!.indicatorList),
    topk_source_subnet: ddosDstZoneDetectionOutboundDetectionTopkSourceSubnetAToTerraform(struct!.topkSourceSubnet),
  }
}


export function ddosDstZoneDetectionOutboundDetectionAToHclTerraform(struct?: DdosDstZoneDetectionOutboundDetectionAOutputReference | DdosDstZoneDetectionOutboundDetectionA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.stringToHclTerraform(struct!.configuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discovery_method: {
      value: cdktf.stringToHclTerraform(struct!.discoveryMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discovery_record: {
      value: cdktf.numberToHclTerraform(struct!.discoveryRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    toggle: {
      value: cdktf.stringToHclTerraform(struct!.toggle),
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
    enable_top_k: {
      value: cdktf.listMapperHcl(ddosDstZoneDetectionOutboundDetectionEnableTopKAToHclTerraform, true)(struct!.enableTopK),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneDetectionOutboundDetectionEnableTopKAList",
    },
    indicator_list: {
      value: cdktf.listMapperHcl(ddosDstZoneDetectionOutboundDetectionIndicatorListStructAToHclTerraform, true)(struct!.indicatorList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneDetectionOutboundDetectionIndicatorListStructAList",
    },
    topk_source_subnet: {
      value: ddosDstZoneDetectionOutboundDetectionTopkSourceSubnetAToHclTerraform(struct!.topkSourceSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneDetectionOutboundDetectionTopkSourceSubnetAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneDetectionOutboundDetectionAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneDetectionOutboundDetectionA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._discoveryMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryMethod = this._discoveryMethod;
    }
    if (this._discoveryRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryRecord = this._discoveryRecord;
    }
    if (this._toggle !== undefined) {
      hasAnyValues = true;
      internalValueResult.toggle = this._toggle;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._enableTopK?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTopK = this._enableTopK?.internalValue;
    }
    if (this._indicatorList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorList = this._indicatorList?.internalValue;
    }
    if (this._topkSourceSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkSourceSubnet = this._topkSourceSubnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneDetectionOutboundDetectionA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuration = undefined;
      this._discoveryMethod = undefined;
      this._discoveryRecord = undefined;
      this._toggle = undefined;
      this._uuid = undefined;
      this._enableTopK.internalValue = undefined;
      this._indicatorList.internalValue = undefined;
      this._topkSourceSubnet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuration = value.configuration;
      this._discoveryMethod = value.discoveryMethod;
      this._discoveryRecord = value.discoveryRecord;
      this._toggle = value.toggle;
      this._uuid = value.uuid;
      this._enableTopK.internalValue = value.enableTopK;
      this._indicatorList.internalValue = value.indicatorList;
      this._topkSourceSubnet.internalValue = value.topkSourceSubnet;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // discovery_method - computed: false, optional: true, required: false
  private _discoveryMethod?: string; 
  public get discoveryMethod() {
    return this.getStringAttribute('discovery_method');
  }
  public set discoveryMethod(value: string) {
    this._discoveryMethod = value;
  }
  public resetDiscoveryMethod() {
    this._discoveryMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryMethodInput() {
    return this._discoveryMethod;
  }

  // discovery_record - computed: false, optional: true, required: false
  private _discoveryRecord?: number; 
  public get discoveryRecord() {
    return this.getNumberAttribute('discovery_record');
  }
  public set discoveryRecord(value: number) {
    this._discoveryRecord = value;
  }
  public resetDiscoveryRecord() {
    this._discoveryRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryRecordInput() {
    return this._discoveryRecord;
  }

  // toggle - computed: false, optional: true, required: false
  private _toggle?: string; 
  public get toggle() {
    return this.getStringAttribute('toggle');
  }
  public set toggle(value: string) {
    this._toggle = value;
  }
  public resetToggle() {
    this._toggle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toggleInput() {
    return this._toggle;
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

  // enable_top_k - computed: false, optional: true, required: false
  private _enableTopK = new DdosDstZoneDetectionOutboundDetectionEnableTopKAList(this, "enable_top_k", false);
  public get enableTopK() {
    return this._enableTopK;
  }
  public putEnableTopK(value: DdosDstZoneDetectionOutboundDetectionEnableTopKA[] | cdktf.IResolvable) {
    this._enableTopK.internalValue = value;
  }
  public resetEnableTopK() {
    this._enableTopK.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTopKInput() {
    return this._enableTopK.internalValue;
  }

  // indicator_list - computed: false, optional: true, required: false
  private _indicatorList = new DdosDstZoneDetectionOutboundDetectionIndicatorListStructAList(this, "indicator_list", false);
  public get indicatorList() {
    return this._indicatorList;
  }
  public putIndicatorList(value: DdosDstZoneDetectionOutboundDetectionIndicatorListStructA[] | cdktf.IResolvable) {
    this._indicatorList.internalValue = value;
  }
  public resetIndicatorList() {
    this._indicatorList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorListInput() {
    return this._indicatorList.internalValue;
  }

  // topk_source_subnet - computed: false, optional: true, required: false
  private _topkSourceSubnet = new DdosDstZoneDetectionOutboundDetectionTopkSourceSubnetAOutputReference(this, "topk_source_subnet");
  public get topkSourceSubnet() {
    return this._topkSourceSubnet;
  }
  public putTopkSourceSubnet(value: DdosDstZoneDetectionOutboundDetectionTopkSourceSubnetA) {
    this._topkSourceSubnet.internalValue = value;
  }
  public resetTopkSourceSubnet() {
    this._topkSourceSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkSourceSubnetInput() {
    return this._topkSourceSubnet.internalValue;
  }
}
export interface DdosDstZoneDetectionPacketAnomalyDetectionIndicatorListStructA {
  /**
  * Threshold for each indicator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#threshold_num DdosDstZoneDetectionA#threshold_num}
  */
  readonly thresholdNum?: number;
  /**
  * 'port-zero-pkt-rate': Port Zero Packet Rate (default 100 packet per second);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#type DdosDstZoneDetectionA#type}
  */
  readonly type: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#user_tag DdosDstZoneDetectionA#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#uuid DdosDstZoneDetectionA#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZoneDetectionPacketAnomalyDetectionIndicatorListStructAToTerraform(struct?: DdosDstZoneDetectionPacketAnomalyDetectionIndicatorListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold_num: cdktf.numberToTerraform(struct!.thresholdNum),
    type: cdktf.stringToTerraform(struct!.type),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZoneDetectionPacketAnomalyDetectionIndicatorListStructAToHclTerraform(struct?: DdosDstZoneDetectionPacketAnomalyDetectionIndicatorListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold_num: {
      value: cdktf.numberToHclTerraform(struct!.thresholdNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneDetectionPacketAnomalyDetectionIndicatorListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZoneDetectionPacketAnomalyDetectionIndicatorListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._thresholdNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdNum = this._thresholdNum;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneDetectionPacketAnomalyDetectionIndicatorListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._thresholdNum = undefined;
      this._type = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._thresholdNum = value.thresholdNum;
      this._type = value.type;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
    }
  }

  // threshold_num - computed: false, optional: true, required: false
  private _thresholdNum?: number; 
  public get thresholdNum() {
    return this.getNumberAttribute('threshold_num');
  }
  public set thresholdNum(value: number) {
    this._thresholdNum = value;
  }
  public resetThresholdNum() {
    this._thresholdNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdNumInput() {
    return this._thresholdNum;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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
}

export class DdosDstZoneDetectionPacketAnomalyDetectionIndicatorListStructAList extends cdktf.ComplexList {
  public internalValue? : DdosDstZoneDetectionPacketAnomalyDetectionIndicatorListStructA[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZoneDetectionPacketAnomalyDetectionIndicatorListStructAOutputReference {
    return new DdosDstZoneDetectionPacketAnomalyDetectionIndicatorListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZoneDetectionPacketAnomalyDetectionA {
  /**
  * 'configuration': configuration;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#configuration DdosDstZoneDetectionA#configuration}
  */
  readonly configuration?: string;
  /**
  * 'enable': Enable packet anomaly; 'disable': Disable packet anomaly;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#toggle DdosDstZoneDetectionA#toggle}
  */
  readonly toggle?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#uuid DdosDstZoneDetectionA#uuid}
  */
  readonly uuid?: string;
  /**
  * indicator_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#indicator_list DdosDstZoneDetectionA#indicator_list}
  */
  readonly indicatorList?: DdosDstZoneDetectionPacketAnomalyDetectionIndicatorListStructA[] | cdktf.IResolvable;
}

export function ddosDstZoneDetectionPacketAnomalyDetectionAToTerraform(struct?: DdosDstZoneDetectionPacketAnomalyDetectionAOutputReference | DdosDstZoneDetectionPacketAnomalyDetectionA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.stringToTerraform(struct!.configuration),
    toggle: cdktf.stringToTerraform(struct!.toggle),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    indicator_list: cdktf.listMapper(ddosDstZoneDetectionPacketAnomalyDetectionIndicatorListStructAToTerraform, true)(struct!.indicatorList),
  }
}


export function ddosDstZoneDetectionPacketAnomalyDetectionAToHclTerraform(struct?: DdosDstZoneDetectionPacketAnomalyDetectionAOutputReference | DdosDstZoneDetectionPacketAnomalyDetectionA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.stringToHclTerraform(struct!.configuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toggle: {
      value: cdktf.stringToHclTerraform(struct!.toggle),
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
    indicator_list: {
      value: cdktf.listMapperHcl(ddosDstZoneDetectionPacketAnomalyDetectionIndicatorListStructAToHclTerraform, true)(struct!.indicatorList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneDetectionPacketAnomalyDetectionIndicatorListStructAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneDetectionPacketAnomalyDetectionAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneDetectionPacketAnomalyDetectionA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._toggle !== undefined) {
      hasAnyValues = true;
      internalValueResult.toggle = this._toggle;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._indicatorList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorList = this._indicatorList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneDetectionPacketAnomalyDetectionA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuration = undefined;
      this._toggle = undefined;
      this._uuid = undefined;
      this._indicatorList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuration = value.configuration;
      this._toggle = value.toggle;
      this._uuid = value.uuid;
      this._indicatorList.internalValue = value.indicatorList;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // toggle - computed: false, optional: true, required: false
  private _toggle?: string; 
  public get toggle() {
    return this.getStringAttribute('toggle');
  }
  public set toggle(value: string) {
    this._toggle = value;
  }
  public resetToggle() {
    this._toggle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toggleInput() {
    return this._toggle;
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

  // indicator_list - computed: false, optional: true, required: false
  private _indicatorList = new DdosDstZoneDetectionPacketAnomalyDetectionIndicatorListStructAList(this, "indicator_list", false);
  public get indicatorList() {
    return this._indicatorList;
  }
  public putIndicatorList(value: DdosDstZoneDetectionPacketAnomalyDetectionIndicatorListStructA[] | cdktf.IResolvable) {
    this._indicatorList.internalValue = value;
  }
  public resetIndicatorList() {
    this._indicatorList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorListInput() {
    return this._indicatorList.internalValue;
  }
}
export interface DdosDstZoneDetectionServiceDiscoveryA {
  /**
  * 'configuration': configuration;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#configuration DdosDstZoneDetectionA#configuration}
  */
  readonly configuration?: string;
  /**
  * packet rate threshold for discovery (default 10 packets per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#pkt_rate_threshold DdosDstZoneDetectionA#pkt_rate_threshold}
  */
  readonly pktRateThreshold?: number;
  /**
  * 'enable': Enable service discovery; 'disable': Disable service discovery;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#toggle DdosDstZoneDetectionA#toggle}
  */
  readonly toggle?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#uuid DdosDstZoneDetectionA#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZoneDetectionServiceDiscoveryAToTerraform(struct?: DdosDstZoneDetectionServiceDiscoveryAOutputReference | DdosDstZoneDetectionServiceDiscoveryA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.stringToTerraform(struct!.configuration),
    pkt_rate_threshold: cdktf.numberToTerraform(struct!.pktRateThreshold),
    toggle: cdktf.stringToTerraform(struct!.toggle),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZoneDetectionServiceDiscoveryAToHclTerraform(struct?: DdosDstZoneDetectionServiceDiscoveryAOutputReference | DdosDstZoneDetectionServiceDiscoveryA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.stringToHclTerraform(struct!.configuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pkt_rate_threshold: {
      value: cdktf.numberToHclTerraform(struct!.pktRateThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    toggle: {
      value: cdktf.stringToHclTerraform(struct!.toggle),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneDetectionServiceDiscoveryAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneDetectionServiceDiscoveryA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._pktRateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktRateThreshold = this._pktRateThreshold;
    }
    if (this._toggle !== undefined) {
      hasAnyValues = true;
      internalValueResult.toggle = this._toggle;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneDetectionServiceDiscoveryA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuration = undefined;
      this._pktRateThreshold = undefined;
      this._toggle = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuration = value.configuration;
      this._pktRateThreshold = value.pktRateThreshold;
      this._toggle = value.toggle;
      this._uuid = value.uuid;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // pkt_rate_threshold - computed: false, optional: true, required: false
  private _pktRateThreshold?: number; 
  public get pktRateThreshold() {
    return this.getNumberAttribute('pkt_rate_threshold');
  }
  public set pktRateThreshold(value: number) {
    this._pktRateThreshold = value;
  }
  public resetPktRateThreshold() {
    this._pktRateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktRateThresholdInput() {
    return this._pktRateThreshold;
  }

  // toggle - computed: false, optional: true, required: false
  private _toggle?: string; 
  public get toggle() {
    return this.getStringAttribute('toggle');
  }
  public set toggle(value: string) {
    this._toggle = value;
  }
  public resetToggle() {
    this._toggle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toggleInput() {
    return this._toggle;
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
}
export interface DdosDstZoneDetectionVictimIpDetectionIndicatorListStructA {
  /**
  * Threshold for IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#ip_threshold_num DdosDstZoneDetectionA#ip_threshold_num}
  */
  readonly ipThresholdNum?: number;
  /**
  * 'pkt-rate': rate of incoming packets; 'reverse-pkt-rate': rate of reverse coming packets; 'fwd-byte-rate': rate of incoming bytes; 'rev-byte-rate': rate of reverse coming bytes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#type DdosDstZoneDetectionA#type}
  */
  readonly type: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#user_tag DdosDstZoneDetectionA#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#uuid DdosDstZoneDetectionA#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZoneDetectionVictimIpDetectionIndicatorListStructAToTerraform(struct?: DdosDstZoneDetectionVictimIpDetectionIndicatorListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_threshold_num: cdktf.numberToTerraform(struct!.ipThresholdNum),
    type: cdktf.stringToTerraform(struct!.type),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZoneDetectionVictimIpDetectionIndicatorListStructAToHclTerraform(struct?: DdosDstZoneDetectionVictimIpDetectionIndicatorListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_threshold_num: {
      value: cdktf.numberToHclTerraform(struct!.ipThresholdNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneDetectionVictimIpDetectionIndicatorListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZoneDetectionVictimIpDetectionIndicatorListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipThresholdNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThresholdNum = this._ipThresholdNum;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneDetectionVictimIpDetectionIndicatorListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipThresholdNum = undefined;
      this._type = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipThresholdNum = value.ipThresholdNum;
      this._type = value.type;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
    }
  }

  // ip_threshold_num - computed: false, optional: true, required: false
  private _ipThresholdNum?: number; 
  public get ipThresholdNum() {
    return this.getNumberAttribute('ip_threshold_num');
  }
  public set ipThresholdNum(value: number) {
    this._ipThresholdNum = value;
  }
  public resetIpThresholdNum() {
    this._ipThresholdNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThresholdNumInput() {
    return this._ipThresholdNum;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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
}

export class DdosDstZoneDetectionVictimIpDetectionIndicatorListStructAList extends cdktf.ComplexList {
  public internalValue? : DdosDstZoneDetectionVictimIpDetectionIndicatorListStructA[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZoneDetectionVictimIpDetectionIndicatorListStructAOutputReference {
    return new DdosDstZoneDetectionVictimIpDetectionIndicatorListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZoneDetectionVictimIpDetectionA {
  /**
  * 'configuration': configuration;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#configuration DdosDstZoneDetectionA#configuration}
  */
  readonly configuration?: string;
  /**
  * 'histogram-enable': Enable histogram statistics of victim IP detection; 'histogram-disable': Disable histogram statistics of victim IP detection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#histogram_toggle DdosDstZoneDetectionA#histogram_toggle}
  */
  readonly histogramToggle?: string;
  /**
  * 'enable': Enable victim IP detection; 'disable': Disable victim IP detection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#toggle DdosDstZoneDetectionA#toggle}
  */
  readonly toggle?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#uuid DdosDstZoneDetectionA#uuid}
  */
  readonly uuid?: string;
  /**
  * indicator_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#indicator_list DdosDstZoneDetectionA#indicator_list}
  */
  readonly indicatorList?: DdosDstZoneDetectionVictimIpDetectionIndicatorListStructA[] | cdktf.IResolvable;
}

export function ddosDstZoneDetectionVictimIpDetectionAToTerraform(struct?: DdosDstZoneDetectionVictimIpDetectionAOutputReference | DdosDstZoneDetectionVictimIpDetectionA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.stringToTerraform(struct!.configuration),
    histogram_toggle: cdktf.stringToTerraform(struct!.histogramToggle),
    toggle: cdktf.stringToTerraform(struct!.toggle),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    indicator_list: cdktf.listMapper(ddosDstZoneDetectionVictimIpDetectionIndicatorListStructAToTerraform, true)(struct!.indicatorList),
  }
}


export function ddosDstZoneDetectionVictimIpDetectionAToHclTerraform(struct?: DdosDstZoneDetectionVictimIpDetectionAOutputReference | DdosDstZoneDetectionVictimIpDetectionA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.stringToHclTerraform(struct!.configuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    histogram_toggle: {
      value: cdktf.stringToHclTerraform(struct!.histogramToggle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toggle: {
      value: cdktf.stringToHclTerraform(struct!.toggle),
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
    indicator_list: {
      value: cdktf.listMapperHcl(ddosDstZoneDetectionVictimIpDetectionIndicatorListStructAToHclTerraform, true)(struct!.indicatorList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneDetectionVictimIpDetectionIndicatorListStructAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneDetectionVictimIpDetectionAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneDetectionVictimIpDetectionA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._histogramToggle !== undefined) {
      hasAnyValues = true;
      internalValueResult.histogramToggle = this._histogramToggle;
    }
    if (this._toggle !== undefined) {
      hasAnyValues = true;
      internalValueResult.toggle = this._toggle;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._indicatorList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorList = this._indicatorList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneDetectionVictimIpDetectionA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuration = undefined;
      this._histogramToggle = undefined;
      this._toggle = undefined;
      this._uuid = undefined;
      this._indicatorList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuration = value.configuration;
      this._histogramToggle = value.histogramToggle;
      this._toggle = value.toggle;
      this._uuid = value.uuid;
      this._indicatorList.internalValue = value.indicatorList;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // histogram_toggle - computed: false, optional: true, required: false
  private _histogramToggle?: string; 
  public get histogramToggle() {
    return this.getStringAttribute('histogram_toggle');
  }
  public set histogramToggle(value: string) {
    this._histogramToggle = value;
  }
  public resetHistogramToggle() {
    this._histogramToggle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get histogramToggleInput() {
    return this._histogramToggle;
  }

  // toggle - computed: false, optional: true, required: false
  private _toggle?: string; 
  public get toggle() {
    return this.getStringAttribute('toggle');
  }
  public set toggle(value: string) {
    this._toggle = value;
  }
  public resetToggle() {
    this._toggle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toggleInput() {
    return this._toggle;
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

  // indicator_list - computed: false, optional: true, required: false
  private _indicatorList = new DdosDstZoneDetectionVictimIpDetectionIndicatorListStructAList(this, "indicator_list", false);
  public get indicatorList() {
    return this._indicatorList;
  }
  public putIndicatorList(value: DdosDstZoneDetectionVictimIpDetectionIndicatorListStructA[] | cdktf.IResolvable) {
    this._indicatorList.internalValue = value;
  }
  public resetIndicatorList() {
    this._indicatorList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorListInput() {
    return this._indicatorList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection thunder_ddos_dst_zone_detection}
*/
export class DdosDstZoneDetectionA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_detection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstZoneDetectionA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstZoneDetectionA to import
  * @param importFromId The id of the existing DdosDstZoneDetectionA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstZoneDetectionA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_detection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_detection thunder_ddos_dst_zone_detection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstZoneDetectionAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstZoneDetectionAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_detection',
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
    this._settings = config.settings;
    this._toggle = config.toggle;
    this._uuid = config.uuid;
    this._zoneName = config.zoneName;
    this._notification.internalValue = config.notification;
    this._outboundDetection.internalValue = config.outboundDetection;
    this._packetAnomalyDetection.internalValue = config.packetAnomalyDetection;
    this._serviceDiscovery.internalValue = config.serviceDiscovery;
    this._victimIpDetection.internalValue = config.victimIpDetection;
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

  // settings - computed: false, optional: false, required: true
  private _settings?: string; 
  public get settings() {
    return this.getStringAttribute('settings');
  }
  public set settings(value: string) {
    this._settings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // toggle - computed: false, optional: true, required: false
  private _toggle?: string; 
  public get toggle() {
    return this.getStringAttribute('toggle');
  }
  public set toggle(value: string) {
    this._toggle = value;
  }
  public resetToggle() {
    this._toggle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toggleInput() {
    return this._toggle;
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

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // notification - computed: false, optional: true, required: false
  private _notification = new DdosDstZoneDetectionNotificationAOutputReference(this, "notification");
  public get notification() {
    return this._notification;
  }
  public putNotification(value: DdosDstZoneDetectionNotificationA) {
    this._notification.internalValue = value;
  }
  public resetNotification() {
    this._notification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }

  // outbound_detection - computed: false, optional: true, required: false
  private _outboundDetection = new DdosDstZoneDetectionOutboundDetectionAOutputReference(this, "outbound_detection");
  public get outboundDetection() {
    return this._outboundDetection;
  }
  public putOutboundDetection(value: DdosDstZoneDetectionOutboundDetectionA) {
    this._outboundDetection.internalValue = value;
  }
  public resetOutboundDetection() {
    this._outboundDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundDetectionInput() {
    return this._outboundDetection.internalValue;
  }

  // packet_anomaly_detection - computed: false, optional: true, required: false
  private _packetAnomalyDetection = new DdosDstZoneDetectionPacketAnomalyDetectionAOutputReference(this, "packet_anomaly_detection");
  public get packetAnomalyDetection() {
    return this._packetAnomalyDetection;
  }
  public putPacketAnomalyDetection(value: DdosDstZoneDetectionPacketAnomalyDetectionA) {
    this._packetAnomalyDetection.internalValue = value;
  }
  public resetPacketAnomalyDetection() {
    this._packetAnomalyDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetAnomalyDetectionInput() {
    return this._packetAnomalyDetection.internalValue;
  }

  // service_discovery - computed: false, optional: true, required: false
  private _serviceDiscovery = new DdosDstZoneDetectionServiceDiscoveryAOutputReference(this, "service_discovery");
  public get serviceDiscovery() {
    return this._serviceDiscovery;
  }
  public putServiceDiscovery(value: DdosDstZoneDetectionServiceDiscoveryA) {
    this._serviceDiscovery.internalValue = value;
  }
  public resetServiceDiscovery() {
    this._serviceDiscovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDiscoveryInput() {
    return this._serviceDiscovery.internalValue;
  }

  // victim_ip_detection - computed: false, optional: true, required: false
  private _victimIpDetection = new DdosDstZoneDetectionVictimIpDetectionAOutputReference(this, "victim_ip_detection");
  public get victimIpDetection() {
    return this._victimIpDetection;
  }
  public putVictimIpDetection(value: DdosDstZoneDetectionVictimIpDetectionA) {
    this._victimIpDetection.internalValue = value;
  }
  public resetVictimIpDetection() {
    this._victimIpDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get victimIpDetectionInput() {
    return this._victimIpDetection.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      settings: cdktf.stringToTerraform(this._settings),
      toggle: cdktf.stringToTerraform(this._toggle),
      uuid: cdktf.stringToTerraform(this._uuid),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      notification: ddosDstZoneDetectionNotificationAToTerraform(this._notification.internalValue),
      outbound_detection: ddosDstZoneDetectionOutboundDetectionAToTerraform(this._outboundDetection.internalValue),
      packet_anomaly_detection: ddosDstZoneDetectionPacketAnomalyDetectionAToTerraform(this._packetAnomalyDetection.internalValue),
      service_discovery: ddosDstZoneDetectionServiceDiscoveryAToTerraform(this._serviceDiscovery.internalValue),
      victim_ip_detection: ddosDstZoneDetectionVictimIpDetectionAToTerraform(this._victimIpDetection.internalValue),
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
      settings: {
        value: cdktf.stringToHclTerraform(this._settings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      toggle: {
        value: cdktf.stringToHclTerraform(this._toggle),
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
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification: {
        value: ddosDstZoneDetectionNotificationAToHclTerraform(this._notification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneDetectionNotificationAList",
      },
      outbound_detection: {
        value: ddosDstZoneDetectionOutboundDetectionAToHclTerraform(this._outboundDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneDetectionOutboundDetectionAList",
      },
      packet_anomaly_detection: {
        value: ddosDstZoneDetectionPacketAnomalyDetectionAToHclTerraform(this._packetAnomalyDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneDetectionPacketAnomalyDetectionAList",
      },
      service_discovery: {
        value: ddosDstZoneDetectionServiceDiscoveryAToHclTerraform(this._serviceDiscovery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneDetectionServiceDiscoveryAList",
      },
      victim_ip_detection: {
        value: ddosDstZoneDetectionVictimIpDetectionAToHclTerraform(this._victimIpDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneDetectionVictimIpDetectionAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
