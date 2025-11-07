// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbMqttOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#id DataThunderSlbMqttOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#oper DataThunderSlbMqttOper#oper}
  */
  readonly oper?: DataThunderSlbMqttOperOper;
}
export interface DataThunderSlbMqttOperOperMqttCpuListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#client_id_null DataThunderSlbMqttOper#client_id_null}
  */
  readonly clientIdNull?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#conn_null DataThunderSlbMqttOper#conn_null}
  */
  readonly connNull?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#curr_proxy DataThunderSlbMqttOper#curr_proxy}
  */
  readonly currProxy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#insertion_failed DataThunderSlbMqttOper#insertion_failed}
  */
  readonly insertionFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#insertion_successful DataThunderSlbMqttOper#insertion_successful}
  */
  readonly insertionSuccessful?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#parse_connect_fail DataThunderSlbMqttOper#parse_connect_fail}
  */
  readonly parseConnectFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#parse_publish_fail DataThunderSlbMqttOper#parse_publish_fail}
  */
  readonly parsePublishFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#parse_subscribe_fail DataThunderSlbMqttOper#parse_subscribe_fail}
  */
  readonly parseSubscribeFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#parse_unsubscribe_fail DataThunderSlbMqttOper#parse_unsubscribe_fail}
  */
  readonly parseUnsubscribeFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#recv_mqtt_auth DataThunderSlbMqttOper#recv_mqtt_auth}
  */
  readonly recvMqttAuth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#recv_mqtt_connack DataThunderSlbMqttOper#recv_mqtt_connack}
  */
  readonly recvMqttConnack?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#recv_mqtt_connect DataThunderSlbMqttOper#recv_mqtt_connect}
  */
  readonly recvMqttConnect?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#recv_mqtt_disconnect DataThunderSlbMqttOper#recv_mqtt_disconnect}
  */
  readonly recvMqttDisconnect?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#recv_mqtt_other DataThunderSlbMqttOper#recv_mqtt_other}
  */
  readonly recvMqttOther?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#recv_mqtt_pingreq DataThunderSlbMqttOper#recv_mqtt_pingreq}
  */
  readonly recvMqttPingreq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#recv_mqtt_pingresp DataThunderSlbMqttOper#recv_mqtt_pingresp}
  */
  readonly recvMqttPingresp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#recv_mqtt_puback DataThunderSlbMqttOper#recv_mqtt_puback}
  */
  readonly recvMqttPuback?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#recv_mqtt_pubcomp DataThunderSlbMqttOper#recv_mqtt_pubcomp}
  */
  readonly recvMqttPubcomp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#recv_mqtt_publish DataThunderSlbMqttOper#recv_mqtt_publish}
  */
  readonly recvMqttPublish?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#recv_mqtt_pubrec DataThunderSlbMqttOper#recv_mqtt_pubrec}
  */
  readonly recvMqttPubrec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#recv_mqtt_pubrel DataThunderSlbMqttOper#recv_mqtt_pubrel}
  */
  readonly recvMqttPubrel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#recv_mqtt_suback DataThunderSlbMqttOper#recv_mqtt_suback}
  */
  readonly recvMqttSuback?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#recv_mqtt_subscribe DataThunderSlbMqttOper#recv_mqtt_subscribe}
  */
  readonly recvMqttSubscribe?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#recv_mqtt_unsuback DataThunderSlbMqttOper#recv_mqtt_unsuback}
  */
  readonly recvMqttUnsuback?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#recv_mqtt_unsubscribe DataThunderSlbMqttOper#recv_mqtt_unsubscribe}
  */
  readonly recvMqttUnsubscribe?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#request DataThunderSlbMqttOper#request}
  */
  readonly request?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#session_exist DataThunderSlbMqttOper#session_exist}
  */
  readonly sessionExist?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#total_proxy DataThunderSlbMqttOper#total_proxy}
  */
  readonly totalProxy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#tuple_already_linked DataThunderSlbMqttOper#tuple_already_linked}
  */
  readonly tupleAlreadyLinked?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#tuple_not_linked DataThunderSlbMqttOper#tuple_not_linked}
  */
  readonly tupleNotLinked?: number;
}

export function dataThunderSlbMqttOperOperMqttCpuListStructToTerraform(struct?: DataThunderSlbMqttOperOperMqttCpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id_null: cdktf.numberToTerraform(struct!.clientIdNull),
    conn_null: cdktf.numberToTerraform(struct!.connNull),
    curr_proxy: cdktf.numberToTerraform(struct!.currProxy),
    insertion_failed: cdktf.numberToTerraform(struct!.insertionFailed),
    insertion_successful: cdktf.numberToTerraform(struct!.insertionSuccessful),
    parse_connect_fail: cdktf.numberToTerraform(struct!.parseConnectFail),
    parse_publish_fail: cdktf.numberToTerraform(struct!.parsePublishFail),
    parse_subscribe_fail: cdktf.numberToTerraform(struct!.parseSubscribeFail),
    parse_unsubscribe_fail: cdktf.numberToTerraform(struct!.parseUnsubscribeFail),
    recv_mqtt_auth: cdktf.numberToTerraform(struct!.recvMqttAuth),
    recv_mqtt_connack: cdktf.numberToTerraform(struct!.recvMqttConnack),
    recv_mqtt_connect: cdktf.numberToTerraform(struct!.recvMqttConnect),
    recv_mqtt_disconnect: cdktf.numberToTerraform(struct!.recvMqttDisconnect),
    recv_mqtt_other: cdktf.numberToTerraform(struct!.recvMqttOther),
    recv_mqtt_pingreq: cdktf.numberToTerraform(struct!.recvMqttPingreq),
    recv_mqtt_pingresp: cdktf.numberToTerraform(struct!.recvMqttPingresp),
    recv_mqtt_puback: cdktf.numberToTerraform(struct!.recvMqttPuback),
    recv_mqtt_pubcomp: cdktf.numberToTerraform(struct!.recvMqttPubcomp),
    recv_mqtt_publish: cdktf.numberToTerraform(struct!.recvMqttPublish),
    recv_mqtt_pubrec: cdktf.numberToTerraform(struct!.recvMqttPubrec),
    recv_mqtt_pubrel: cdktf.numberToTerraform(struct!.recvMqttPubrel),
    recv_mqtt_suback: cdktf.numberToTerraform(struct!.recvMqttSuback),
    recv_mqtt_subscribe: cdktf.numberToTerraform(struct!.recvMqttSubscribe),
    recv_mqtt_unsuback: cdktf.numberToTerraform(struct!.recvMqttUnsuback),
    recv_mqtt_unsubscribe: cdktf.numberToTerraform(struct!.recvMqttUnsubscribe),
    request: cdktf.numberToTerraform(struct!.request),
    session_exist: cdktf.numberToTerraform(struct!.sessionExist),
    total_proxy: cdktf.numberToTerraform(struct!.totalProxy),
    tuple_already_linked: cdktf.numberToTerraform(struct!.tupleAlreadyLinked),
    tuple_not_linked: cdktf.numberToTerraform(struct!.tupleNotLinked),
  }
}


export function dataThunderSlbMqttOperOperMqttCpuListStructToHclTerraform(struct?: DataThunderSlbMqttOperOperMqttCpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id_null: {
      value: cdktf.numberToHclTerraform(struct!.clientIdNull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_null: {
      value: cdktf.numberToHclTerraform(struct!.connNull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_proxy: {
      value: cdktf.numberToHclTerraform(struct!.currProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insertion_failed: {
      value: cdktf.numberToHclTerraform(struct!.insertionFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insertion_successful: {
      value: cdktf.numberToHclTerraform(struct!.insertionSuccessful),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_connect_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseConnectFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_publish_fail: {
      value: cdktf.numberToHclTerraform(struct!.parsePublishFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_subscribe_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseSubscribeFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_unsubscribe_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseUnsubscribeFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_mqtt_auth: {
      value: cdktf.numberToHclTerraform(struct!.recvMqttAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_mqtt_connack: {
      value: cdktf.numberToHclTerraform(struct!.recvMqttConnack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_mqtt_connect: {
      value: cdktf.numberToHclTerraform(struct!.recvMqttConnect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_mqtt_disconnect: {
      value: cdktf.numberToHclTerraform(struct!.recvMqttDisconnect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_mqtt_other: {
      value: cdktf.numberToHclTerraform(struct!.recvMqttOther),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_mqtt_pingreq: {
      value: cdktf.numberToHclTerraform(struct!.recvMqttPingreq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_mqtt_pingresp: {
      value: cdktf.numberToHclTerraform(struct!.recvMqttPingresp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_mqtt_puback: {
      value: cdktf.numberToHclTerraform(struct!.recvMqttPuback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_mqtt_pubcomp: {
      value: cdktf.numberToHclTerraform(struct!.recvMqttPubcomp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_mqtt_publish: {
      value: cdktf.numberToHclTerraform(struct!.recvMqttPublish),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_mqtt_pubrec: {
      value: cdktf.numberToHclTerraform(struct!.recvMqttPubrec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_mqtt_pubrel: {
      value: cdktf.numberToHclTerraform(struct!.recvMqttPubrel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_mqtt_suback: {
      value: cdktf.numberToHclTerraform(struct!.recvMqttSuback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_mqtt_subscribe: {
      value: cdktf.numberToHclTerraform(struct!.recvMqttSubscribe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_mqtt_unsuback: {
      value: cdktf.numberToHclTerraform(struct!.recvMqttUnsuback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_mqtt_unsubscribe: {
      value: cdktf.numberToHclTerraform(struct!.recvMqttUnsubscribe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request: {
      value: cdktf.numberToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_exist: {
      value: cdktf.numberToHclTerraform(struct!.sessionExist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_proxy: {
      value: cdktf.numberToHclTerraform(struct!.totalProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tuple_already_linked: {
      value: cdktf.numberToHclTerraform(struct!.tupleAlreadyLinked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tuple_not_linked: {
      value: cdktf.numberToHclTerraform(struct!.tupleNotLinked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbMqttOperOperMqttCpuListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbMqttOperOperMqttCpuListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIdNull !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdNull = this._clientIdNull;
    }
    if (this._connNull !== undefined) {
      hasAnyValues = true;
      internalValueResult.connNull = this._connNull;
    }
    if (this._currProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.currProxy = this._currProxy;
    }
    if (this._insertionFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertionFailed = this._insertionFailed;
    }
    if (this._insertionSuccessful !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertionSuccessful = this._insertionSuccessful;
    }
    if (this._parseConnectFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseConnectFail = this._parseConnectFail;
    }
    if (this._parsePublishFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsePublishFail = this._parsePublishFail;
    }
    if (this._parseSubscribeFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseSubscribeFail = this._parseSubscribeFail;
    }
    if (this._parseUnsubscribeFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseUnsubscribeFail = this._parseUnsubscribeFail;
    }
    if (this._recvMqttAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvMqttAuth = this._recvMqttAuth;
    }
    if (this._recvMqttConnack !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvMqttConnack = this._recvMqttConnack;
    }
    if (this._recvMqttConnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvMqttConnect = this._recvMqttConnect;
    }
    if (this._recvMqttDisconnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvMqttDisconnect = this._recvMqttDisconnect;
    }
    if (this._recvMqttOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvMqttOther = this._recvMqttOther;
    }
    if (this._recvMqttPingreq !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvMqttPingreq = this._recvMqttPingreq;
    }
    if (this._recvMqttPingresp !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvMqttPingresp = this._recvMqttPingresp;
    }
    if (this._recvMqttPuback !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvMqttPuback = this._recvMqttPuback;
    }
    if (this._recvMqttPubcomp !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvMqttPubcomp = this._recvMqttPubcomp;
    }
    if (this._recvMqttPublish !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvMqttPublish = this._recvMqttPublish;
    }
    if (this._recvMqttPubrec !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvMqttPubrec = this._recvMqttPubrec;
    }
    if (this._recvMqttPubrel !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvMqttPubrel = this._recvMqttPubrel;
    }
    if (this._recvMqttSuback !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvMqttSuback = this._recvMqttSuback;
    }
    if (this._recvMqttSubscribe !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvMqttSubscribe = this._recvMqttSubscribe;
    }
    if (this._recvMqttUnsuback !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvMqttUnsuback = this._recvMqttUnsuback;
    }
    if (this._recvMqttUnsubscribe !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvMqttUnsubscribe = this._recvMqttUnsubscribe;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    if (this._sessionExist !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionExist = this._sessionExist;
    }
    if (this._totalProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalProxy = this._totalProxy;
    }
    if (this._tupleAlreadyLinked !== undefined) {
      hasAnyValues = true;
      internalValueResult.tupleAlreadyLinked = this._tupleAlreadyLinked;
    }
    if (this._tupleNotLinked !== undefined) {
      hasAnyValues = true;
      internalValueResult.tupleNotLinked = this._tupleNotLinked;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbMqttOperOperMqttCpuListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIdNull = undefined;
      this._connNull = undefined;
      this._currProxy = undefined;
      this._insertionFailed = undefined;
      this._insertionSuccessful = undefined;
      this._parseConnectFail = undefined;
      this._parsePublishFail = undefined;
      this._parseSubscribeFail = undefined;
      this._parseUnsubscribeFail = undefined;
      this._recvMqttAuth = undefined;
      this._recvMqttConnack = undefined;
      this._recvMqttConnect = undefined;
      this._recvMqttDisconnect = undefined;
      this._recvMqttOther = undefined;
      this._recvMqttPingreq = undefined;
      this._recvMqttPingresp = undefined;
      this._recvMqttPuback = undefined;
      this._recvMqttPubcomp = undefined;
      this._recvMqttPublish = undefined;
      this._recvMqttPubrec = undefined;
      this._recvMqttPubrel = undefined;
      this._recvMqttSuback = undefined;
      this._recvMqttSubscribe = undefined;
      this._recvMqttUnsuback = undefined;
      this._recvMqttUnsubscribe = undefined;
      this._request = undefined;
      this._sessionExist = undefined;
      this._totalProxy = undefined;
      this._tupleAlreadyLinked = undefined;
      this._tupleNotLinked = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIdNull = value.clientIdNull;
      this._connNull = value.connNull;
      this._currProxy = value.currProxy;
      this._insertionFailed = value.insertionFailed;
      this._insertionSuccessful = value.insertionSuccessful;
      this._parseConnectFail = value.parseConnectFail;
      this._parsePublishFail = value.parsePublishFail;
      this._parseSubscribeFail = value.parseSubscribeFail;
      this._parseUnsubscribeFail = value.parseUnsubscribeFail;
      this._recvMqttAuth = value.recvMqttAuth;
      this._recvMqttConnack = value.recvMqttConnack;
      this._recvMqttConnect = value.recvMqttConnect;
      this._recvMqttDisconnect = value.recvMqttDisconnect;
      this._recvMqttOther = value.recvMqttOther;
      this._recvMqttPingreq = value.recvMqttPingreq;
      this._recvMqttPingresp = value.recvMqttPingresp;
      this._recvMqttPuback = value.recvMqttPuback;
      this._recvMqttPubcomp = value.recvMqttPubcomp;
      this._recvMqttPublish = value.recvMqttPublish;
      this._recvMqttPubrec = value.recvMqttPubrec;
      this._recvMqttPubrel = value.recvMqttPubrel;
      this._recvMqttSuback = value.recvMqttSuback;
      this._recvMqttSubscribe = value.recvMqttSubscribe;
      this._recvMqttUnsuback = value.recvMqttUnsuback;
      this._recvMqttUnsubscribe = value.recvMqttUnsubscribe;
      this._request = value.request;
      this._sessionExist = value.sessionExist;
      this._totalProxy = value.totalProxy;
      this._tupleAlreadyLinked = value.tupleAlreadyLinked;
      this._tupleNotLinked = value.tupleNotLinked;
    }
  }

  // client_id_null - computed: false, optional: true, required: false
  private _clientIdNull?: number; 
  public get clientIdNull() {
    return this.getNumberAttribute('client_id_null');
  }
  public set clientIdNull(value: number) {
    this._clientIdNull = value;
  }
  public resetClientIdNull() {
    this._clientIdNull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdNullInput() {
    return this._clientIdNull;
  }

  // conn_null - computed: false, optional: true, required: false
  private _connNull?: number; 
  public get connNull() {
    return this.getNumberAttribute('conn_null');
  }
  public set connNull(value: number) {
    this._connNull = value;
  }
  public resetConnNull() {
    this._connNull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connNullInput() {
    return this._connNull;
  }

  // curr_proxy - computed: false, optional: true, required: false
  private _currProxy?: number; 
  public get currProxy() {
    return this.getNumberAttribute('curr_proxy');
  }
  public set currProxy(value: number) {
    this._currProxy = value;
  }
  public resetCurrProxy() {
    this._currProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currProxyInput() {
    return this._currProxy;
  }

  // insertion_failed - computed: false, optional: true, required: false
  private _insertionFailed?: number; 
  public get insertionFailed() {
    return this.getNumberAttribute('insertion_failed');
  }
  public set insertionFailed(value: number) {
    this._insertionFailed = value;
  }
  public resetInsertionFailed() {
    this._insertionFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertionFailedInput() {
    return this._insertionFailed;
  }

  // insertion_successful - computed: false, optional: true, required: false
  private _insertionSuccessful?: number; 
  public get insertionSuccessful() {
    return this.getNumberAttribute('insertion_successful');
  }
  public set insertionSuccessful(value: number) {
    this._insertionSuccessful = value;
  }
  public resetInsertionSuccessful() {
    this._insertionSuccessful = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertionSuccessfulInput() {
    return this._insertionSuccessful;
  }

  // parse_connect_fail - computed: false, optional: true, required: false
  private _parseConnectFail?: number; 
  public get parseConnectFail() {
    return this.getNumberAttribute('parse_connect_fail');
  }
  public set parseConnectFail(value: number) {
    this._parseConnectFail = value;
  }
  public resetParseConnectFail() {
    this._parseConnectFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseConnectFailInput() {
    return this._parseConnectFail;
  }

  // parse_publish_fail - computed: false, optional: true, required: false
  private _parsePublishFail?: number; 
  public get parsePublishFail() {
    return this.getNumberAttribute('parse_publish_fail');
  }
  public set parsePublishFail(value: number) {
    this._parsePublishFail = value;
  }
  public resetParsePublishFail() {
    this._parsePublishFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parsePublishFailInput() {
    return this._parsePublishFail;
  }

  // parse_subscribe_fail - computed: false, optional: true, required: false
  private _parseSubscribeFail?: number; 
  public get parseSubscribeFail() {
    return this.getNumberAttribute('parse_subscribe_fail');
  }
  public set parseSubscribeFail(value: number) {
    this._parseSubscribeFail = value;
  }
  public resetParseSubscribeFail() {
    this._parseSubscribeFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseSubscribeFailInput() {
    return this._parseSubscribeFail;
  }

  // parse_unsubscribe_fail - computed: false, optional: true, required: false
  private _parseUnsubscribeFail?: number; 
  public get parseUnsubscribeFail() {
    return this.getNumberAttribute('parse_unsubscribe_fail');
  }
  public set parseUnsubscribeFail(value: number) {
    this._parseUnsubscribeFail = value;
  }
  public resetParseUnsubscribeFail() {
    this._parseUnsubscribeFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseUnsubscribeFailInput() {
    return this._parseUnsubscribeFail;
  }

  // recv_mqtt_auth - computed: false, optional: true, required: false
  private _recvMqttAuth?: number; 
  public get recvMqttAuth() {
    return this.getNumberAttribute('recv_mqtt_auth');
  }
  public set recvMqttAuth(value: number) {
    this._recvMqttAuth = value;
  }
  public resetRecvMqttAuth() {
    this._recvMqttAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvMqttAuthInput() {
    return this._recvMqttAuth;
  }

  // recv_mqtt_connack - computed: false, optional: true, required: false
  private _recvMqttConnack?: number; 
  public get recvMqttConnack() {
    return this.getNumberAttribute('recv_mqtt_connack');
  }
  public set recvMqttConnack(value: number) {
    this._recvMqttConnack = value;
  }
  public resetRecvMqttConnack() {
    this._recvMqttConnack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvMqttConnackInput() {
    return this._recvMqttConnack;
  }

  // recv_mqtt_connect - computed: false, optional: true, required: false
  private _recvMqttConnect?: number; 
  public get recvMqttConnect() {
    return this.getNumberAttribute('recv_mqtt_connect');
  }
  public set recvMqttConnect(value: number) {
    this._recvMqttConnect = value;
  }
  public resetRecvMqttConnect() {
    this._recvMqttConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvMqttConnectInput() {
    return this._recvMqttConnect;
  }

  // recv_mqtt_disconnect - computed: false, optional: true, required: false
  private _recvMqttDisconnect?: number; 
  public get recvMqttDisconnect() {
    return this.getNumberAttribute('recv_mqtt_disconnect');
  }
  public set recvMqttDisconnect(value: number) {
    this._recvMqttDisconnect = value;
  }
  public resetRecvMqttDisconnect() {
    this._recvMqttDisconnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvMqttDisconnectInput() {
    return this._recvMqttDisconnect;
  }

  // recv_mqtt_other - computed: false, optional: true, required: false
  private _recvMqttOther?: number; 
  public get recvMqttOther() {
    return this.getNumberAttribute('recv_mqtt_other');
  }
  public set recvMqttOther(value: number) {
    this._recvMqttOther = value;
  }
  public resetRecvMqttOther() {
    this._recvMqttOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvMqttOtherInput() {
    return this._recvMqttOther;
  }

  // recv_mqtt_pingreq - computed: false, optional: true, required: false
  private _recvMqttPingreq?: number; 
  public get recvMqttPingreq() {
    return this.getNumberAttribute('recv_mqtt_pingreq');
  }
  public set recvMqttPingreq(value: number) {
    this._recvMqttPingreq = value;
  }
  public resetRecvMqttPingreq() {
    this._recvMqttPingreq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvMqttPingreqInput() {
    return this._recvMqttPingreq;
  }

  // recv_mqtt_pingresp - computed: false, optional: true, required: false
  private _recvMqttPingresp?: number; 
  public get recvMqttPingresp() {
    return this.getNumberAttribute('recv_mqtt_pingresp');
  }
  public set recvMqttPingresp(value: number) {
    this._recvMqttPingresp = value;
  }
  public resetRecvMqttPingresp() {
    this._recvMqttPingresp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvMqttPingrespInput() {
    return this._recvMqttPingresp;
  }

  // recv_mqtt_puback - computed: false, optional: true, required: false
  private _recvMqttPuback?: number; 
  public get recvMqttPuback() {
    return this.getNumberAttribute('recv_mqtt_puback');
  }
  public set recvMqttPuback(value: number) {
    this._recvMqttPuback = value;
  }
  public resetRecvMqttPuback() {
    this._recvMqttPuback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvMqttPubackInput() {
    return this._recvMqttPuback;
  }

  // recv_mqtt_pubcomp - computed: false, optional: true, required: false
  private _recvMqttPubcomp?: number; 
  public get recvMqttPubcomp() {
    return this.getNumberAttribute('recv_mqtt_pubcomp');
  }
  public set recvMqttPubcomp(value: number) {
    this._recvMqttPubcomp = value;
  }
  public resetRecvMqttPubcomp() {
    this._recvMqttPubcomp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvMqttPubcompInput() {
    return this._recvMqttPubcomp;
  }

  // recv_mqtt_publish - computed: false, optional: true, required: false
  private _recvMqttPublish?: number; 
  public get recvMqttPublish() {
    return this.getNumberAttribute('recv_mqtt_publish');
  }
  public set recvMqttPublish(value: number) {
    this._recvMqttPublish = value;
  }
  public resetRecvMqttPublish() {
    this._recvMqttPublish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvMqttPublishInput() {
    return this._recvMqttPublish;
  }

  // recv_mqtt_pubrec - computed: false, optional: true, required: false
  private _recvMqttPubrec?: number; 
  public get recvMqttPubrec() {
    return this.getNumberAttribute('recv_mqtt_pubrec');
  }
  public set recvMqttPubrec(value: number) {
    this._recvMqttPubrec = value;
  }
  public resetRecvMqttPubrec() {
    this._recvMqttPubrec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvMqttPubrecInput() {
    return this._recvMqttPubrec;
  }

  // recv_mqtt_pubrel - computed: false, optional: true, required: false
  private _recvMqttPubrel?: number; 
  public get recvMqttPubrel() {
    return this.getNumberAttribute('recv_mqtt_pubrel');
  }
  public set recvMqttPubrel(value: number) {
    this._recvMqttPubrel = value;
  }
  public resetRecvMqttPubrel() {
    this._recvMqttPubrel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvMqttPubrelInput() {
    return this._recvMqttPubrel;
  }

  // recv_mqtt_suback - computed: false, optional: true, required: false
  private _recvMqttSuback?: number; 
  public get recvMqttSuback() {
    return this.getNumberAttribute('recv_mqtt_suback');
  }
  public set recvMqttSuback(value: number) {
    this._recvMqttSuback = value;
  }
  public resetRecvMqttSuback() {
    this._recvMqttSuback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvMqttSubackInput() {
    return this._recvMqttSuback;
  }

  // recv_mqtt_subscribe - computed: false, optional: true, required: false
  private _recvMqttSubscribe?: number; 
  public get recvMqttSubscribe() {
    return this.getNumberAttribute('recv_mqtt_subscribe');
  }
  public set recvMqttSubscribe(value: number) {
    this._recvMqttSubscribe = value;
  }
  public resetRecvMqttSubscribe() {
    this._recvMqttSubscribe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvMqttSubscribeInput() {
    return this._recvMqttSubscribe;
  }

  // recv_mqtt_unsuback - computed: false, optional: true, required: false
  private _recvMqttUnsuback?: number; 
  public get recvMqttUnsuback() {
    return this.getNumberAttribute('recv_mqtt_unsuback');
  }
  public set recvMqttUnsuback(value: number) {
    this._recvMqttUnsuback = value;
  }
  public resetRecvMqttUnsuback() {
    this._recvMqttUnsuback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvMqttUnsubackInput() {
    return this._recvMqttUnsuback;
  }

  // recv_mqtt_unsubscribe - computed: false, optional: true, required: false
  private _recvMqttUnsubscribe?: number; 
  public get recvMqttUnsubscribe() {
    return this.getNumberAttribute('recv_mqtt_unsubscribe');
  }
  public set recvMqttUnsubscribe(value: number) {
    this._recvMqttUnsubscribe = value;
  }
  public resetRecvMqttUnsubscribe() {
    this._recvMqttUnsubscribe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvMqttUnsubscribeInput() {
    return this._recvMqttUnsubscribe;
  }

  // request - computed: false, optional: true, required: false
  private _request?: number; 
  public get request() {
    return this.getNumberAttribute('request');
  }
  public set request(value: number) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }

  // session_exist - computed: false, optional: true, required: false
  private _sessionExist?: number; 
  public get sessionExist() {
    return this.getNumberAttribute('session_exist');
  }
  public set sessionExist(value: number) {
    this._sessionExist = value;
  }
  public resetSessionExist() {
    this._sessionExist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionExistInput() {
    return this._sessionExist;
  }

  // total_proxy - computed: false, optional: true, required: false
  private _totalProxy?: number; 
  public get totalProxy() {
    return this.getNumberAttribute('total_proxy');
  }
  public set totalProxy(value: number) {
    this._totalProxy = value;
  }
  public resetTotalProxy() {
    this._totalProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalProxyInput() {
    return this._totalProxy;
  }

  // tuple_already_linked - computed: false, optional: true, required: false
  private _tupleAlreadyLinked?: number; 
  public get tupleAlreadyLinked() {
    return this.getNumberAttribute('tuple_already_linked');
  }
  public set tupleAlreadyLinked(value: number) {
    this._tupleAlreadyLinked = value;
  }
  public resetTupleAlreadyLinked() {
    this._tupleAlreadyLinked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tupleAlreadyLinkedInput() {
    return this._tupleAlreadyLinked;
  }

  // tuple_not_linked - computed: false, optional: true, required: false
  private _tupleNotLinked?: number; 
  public get tupleNotLinked() {
    return this.getNumberAttribute('tuple_not_linked');
  }
  public set tupleNotLinked(value: number) {
    this._tupleNotLinked = value;
  }
  public resetTupleNotLinked() {
    this._tupleNotLinked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tupleNotLinkedInput() {
    return this._tupleNotLinked;
  }
}

export class DataThunderSlbMqttOperOperMqttCpuListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbMqttOperOperMqttCpuListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbMqttOperOperMqttCpuListStructOutputReference {
    return new DataThunderSlbMqttOperOperMqttCpuListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbMqttOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#cpu_count DataThunderSlbMqttOper#cpu_count}
  */
  readonly cpuCount?: number;
  /**
  * mqtt_cpu_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#mqtt_cpu_list DataThunderSlbMqttOper#mqtt_cpu_list}
  */
  readonly mqttCpuList?: DataThunderSlbMqttOperOperMqttCpuListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbMqttOperOperToTerraform(struct?: DataThunderSlbMqttOperOperOutputReference | DataThunderSlbMqttOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    mqtt_cpu_list: cdktf.listMapper(dataThunderSlbMqttOperOperMqttCpuListStructToTerraform, true)(struct!.mqttCpuList),
  }
}


export function dataThunderSlbMqttOperOperToHclTerraform(struct?: DataThunderSlbMqttOperOperOutputReference | DataThunderSlbMqttOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_count: {
      value: cdktf.numberToHclTerraform(struct!.cpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mqtt_cpu_list: {
      value: cdktf.listMapperHcl(dataThunderSlbMqttOperOperMqttCpuListStructToHclTerraform, true)(struct!.mqttCpuList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbMqttOperOperMqttCpuListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbMqttOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbMqttOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._mqttCpuList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mqttCpuList = this._mqttCpuList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbMqttOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCount = undefined;
      this._mqttCpuList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCount = value.cpuCount;
      this._mqttCpuList.internalValue = value.mqttCpuList;
    }
  }

  // cpu_count - computed: false, optional: true, required: false
  private _cpuCount?: number; 
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }
  public set cpuCount(value: number) {
    this._cpuCount = value;
  }
  public resetCpuCount() {
    this._cpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCountInput() {
    return this._cpuCount;
  }

  // mqtt_cpu_list - computed: false, optional: true, required: false
  private _mqttCpuList = new DataThunderSlbMqttOperOperMqttCpuListStructList(this, "mqtt_cpu_list", false);
  public get mqttCpuList() {
    return this._mqttCpuList;
  }
  public putMqttCpuList(value: DataThunderSlbMqttOperOperMqttCpuListStruct[] | cdktf.IResolvable) {
    this._mqttCpuList.internalValue = value;
  }
  public resetMqttCpuList() {
    this._mqttCpuList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mqttCpuListInput() {
    return this._mqttCpuList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper thunder_slb_mqtt_oper}
*/
export class DataThunderSlbMqttOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_mqtt_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbMqttOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbMqttOper to import
  * @param importFromId The id of the existing DataThunderSlbMqttOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbMqttOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_mqtt_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mqtt_oper thunder_slb_mqtt_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbMqttOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbMqttOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_mqtt_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSlbMqttOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbMqttOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderSlbMqttOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderSlbMqttOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbMqttOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
