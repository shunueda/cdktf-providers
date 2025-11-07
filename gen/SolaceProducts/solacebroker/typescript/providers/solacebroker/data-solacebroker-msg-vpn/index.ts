// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerMsgVpnConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn#msg_vpn_name DataSolacebrokerMsgVpn#msg_vpn_name}
  */
  readonly msgVpnName: string;
}
export interface DataSolacebrokerMsgVpnEventConnectionCountThreshold {
}

export function dataSolacebrokerMsgVpnEventConnectionCountThresholdToTerraform(struct?: DataSolacebrokerMsgVpnEventConnectionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnEventConnectionCountThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnEventConnectionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnEventConnectionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnEventConnectionCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnEventConnectionCountThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clear_percent - computed: true, optional: false, required: false
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }

  // clear_value - computed: true, optional: false, required: false
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }

  // set_percent - computed: true, optional: false, required: false
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }

  // set_value - computed: true, optional: false, required: false
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
}
export interface DataSolacebrokerMsgVpnEventEgressFlowCountThreshold {
}

export function dataSolacebrokerMsgVpnEventEgressFlowCountThresholdToTerraform(struct?: DataSolacebrokerMsgVpnEventEgressFlowCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnEventEgressFlowCountThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnEventEgressFlowCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnEventEgressFlowCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnEventEgressFlowCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnEventEgressFlowCountThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clear_percent - computed: true, optional: false, required: false
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }

  // clear_value - computed: true, optional: false, required: false
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }

  // set_percent - computed: true, optional: false, required: false
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }

  // set_value - computed: true, optional: false, required: false
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
}
export interface DataSolacebrokerMsgVpnEventEgressMsgRateThreshold {
}

export function dataSolacebrokerMsgVpnEventEgressMsgRateThresholdToTerraform(struct?: DataSolacebrokerMsgVpnEventEgressMsgRateThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnEventEgressMsgRateThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnEventEgressMsgRateThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnEventEgressMsgRateThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnEventEgressMsgRateThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnEventEgressMsgRateThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clear_value - computed: true, optional: false, required: false
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }

  // set_value - computed: true, optional: false, required: false
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
}
export interface DataSolacebrokerMsgVpnEventEndpointCountThreshold {
}

export function dataSolacebrokerMsgVpnEventEndpointCountThresholdToTerraform(struct?: DataSolacebrokerMsgVpnEventEndpointCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnEventEndpointCountThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnEventEndpointCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnEventEndpointCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnEventEndpointCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnEventEndpointCountThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clear_percent - computed: true, optional: false, required: false
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }

  // clear_value - computed: true, optional: false, required: false
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }

  // set_percent - computed: true, optional: false, required: false
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }

  // set_value - computed: true, optional: false, required: false
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
}
export interface DataSolacebrokerMsgVpnEventIngressFlowCountThreshold {
}

export function dataSolacebrokerMsgVpnEventIngressFlowCountThresholdToTerraform(struct?: DataSolacebrokerMsgVpnEventIngressFlowCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnEventIngressFlowCountThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnEventIngressFlowCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnEventIngressFlowCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnEventIngressFlowCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnEventIngressFlowCountThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clear_percent - computed: true, optional: false, required: false
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }

  // clear_value - computed: true, optional: false, required: false
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }

  // set_percent - computed: true, optional: false, required: false
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }

  // set_value - computed: true, optional: false, required: false
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
}
export interface DataSolacebrokerMsgVpnEventIngressMsgRateThreshold {
}

export function dataSolacebrokerMsgVpnEventIngressMsgRateThresholdToTerraform(struct?: DataSolacebrokerMsgVpnEventIngressMsgRateThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnEventIngressMsgRateThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnEventIngressMsgRateThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnEventIngressMsgRateThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnEventIngressMsgRateThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnEventIngressMsgRateThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clear_value - computed: true, optional: false, required: false
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }

  // set_value - computed: true, optional: false, required: false
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
}
export interface DataSolacebrokerMsgVpnEventMsgSpoolUsageThreshold {
}

export function dataSolacebrokerMsgVpnEventMsgSpoolUsageThresholdToTerraform(struct?: DataSolacebrokerMsgVpnEventMsgSpoolUsageThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnEventMsgSpoolUsageThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnEventMsgSpoolUsageThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnEventMsgSpoolUsageThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnEventMsgSpoolUsageThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnEventMsgSpoolUsageThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clear_percent - computed: true, optional: false, required: false
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }

  // clear_value - computed: true, optional: false, required: false
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }

  // set_percent - computed: true, optional: false, required: false
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }

  // set_value - computed: true, optional: false, required: false
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
}
export interface DataSolacebrokerMsgVpnEventServiceAmqpConnectionCountThreshold {
}

export function dataSolacebrokerMsgVpnEventServiceAmqpConnectionCountThresholdToTerraform(struct?: DataSolacebrokerMsgVpnEventServiceAmqpConnectionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnEventServiceAmqpConnectionCountThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnEventServiceAmqpConnectionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnEventServiceAmqpConnectionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnEventServiceAmqpConnectionCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnEventServiceAmqpConnectionCountThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clear_percent - computed: true, optional: false, required: false
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }

  // clear_value - computed: true, optional: false, required: false
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }

  // set_percent - computed: true, optional: false, required: false
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }

  // set_value - computed: true, optional: false, required: false
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
}
export interface DataSolacebrokerMsgVpnEventServiceMqttConnectionCountThreshold {
}

export function dataSolacebrokerMsgVpnEventServiceMqttConnectionCountThresholdToTerraform(struct?: DataSolacebrokerMsgVpnEventServiceMqttConnectionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnEventServiceMqttConnectionCountThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnEventServiceMqttConnectionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnEventServiceMqttConnectionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnEventServiceMqttConnectionCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnEventServiceMqttConnectionCountThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clear_percent - computed: true, optional: false, required: false
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }

  // clear_value - computed: true, optional: false, required: false
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }

  // set_percent - computed: true, optional: false, required: false
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }

  // set_value - computed: true, optional: false, required: false
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
}
export interface DataSolacebrokerMsgVpnEventServiceRestIncomingConnectionCountThreshold {
}

export function dataSolacebrokerMsgVpnEventServiceRestIncomingConnectionCountThresholdToTerraform(struct?: DataSolacebrokerMsgVpnEventServiceRestIncomingConnectionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnEventServiceRestIncomingConnectionCountThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnEventServiceRestIncomingConnectionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnEventServiceRestIncomingConnectionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnEventServiceRestIncomingConnectionCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnEventServiceRestIncomingConnectionCountThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clear_percent - computed: true, optional: false, required: false
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }

  // clear_value - computed: true, optional: false, required: false
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }

  // set_percent - computed: true, optional: false, required: false
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }

  // set_value - computed: true, optional: false, required: false
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
}
export interface DataSolacebrokerMsgVpnEventServiceSmfConnectionCountThreshold {
}

export function dataSolacebrokerMsgVpnEventServiceSmfConnectionCountThresholdToTerraform(struct?: DataSolacebrokerMsgVpnEventServiceSmfConnectionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnEventServiceSmfConnectionCountThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnEventServiceSmfConnectionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnEventServiceSmfConnectionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnEventServiceSmfConnectionCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnEventServiceSmfConnectionCountThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clear_percent - computed: true, optional: false, required: false
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }

  // clear_value - computed: true, optional: false, required: false
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }

  // set_percent - computed: true, optional: false, required: false
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }

  // set_value - computed: true, optional: false, required: false
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
}
export interface DataSolacebrokerMsgVpnEventServiceWebConnectionCountThreshold {
}

export function dataSolacebrokerMsgVpnEventServiceWebConnectionCountThresholdToTerraform(struct?: DataSolacebrokerMsgVpnEventServiceWebConnectionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnEventServiceWebConnectionCountThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnEventServiceWebConnectionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnEventServiceWebConnectionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnEventServiceWebConnectionCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnEventServiceWebConnectionCountThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clear_percent - computed: true, optional: false, required: false
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }

  // clear_value - computed: true, optional: false, required: false
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }

  // set_percent - computed: true, optional: false, required: false
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }

  // set_value - computed: true, optional: false, required: false
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
}
export interface DataSolacebrokerMsgVpnEventSubscriptionCountThreshold {
}

export function dataSolacebrokerMsgVpnEventSubscriptionCountThresholdToTerraform(struct?: DataSolacebrokerMsgVpnEventSubscriptionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnEventSubscriptionCountThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnEventSubscriptionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnEventSubscriptionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnEventSubscriptionCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnEventSubscriptionCountThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clear_percent - computed: true, optional: false, required: false
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }

  // clear_value - computed: true, optional: false, required: false
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }

  // set_percent - computed: true, optional: false, required: false
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }

  // set_value - computed: true, optional: false, required: false
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
}
export interface DataSolacebrokerMsgVpnEventTransactedSessionCountThreshold {
}

export function dataSolacebrokerMsgVpnEventTransactedSessionCountThresholdToTerraform(struct?: DataSolacebrokerMsgVpnEventTransactedSessionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnEventTransactedSessionCountThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnEventTransactedSessionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnEventTransactedSessionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnEventTransactedSessionCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnEventTransactedSessionCountThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clear_percent - computed: true, optional: false, required: false
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }

  // clear_value - computed: true, optional: false, required: false
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }

  // set_percent - computed: true, optional: false, required: false
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }

  // set_value - computed: true, optional: false, required: false
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
}
export interface DataSolacebrokerMsgVpnEventTransactionCountThreshold {
}

export function dataSolacebrokerMsgVpnEventTransactionCountThresholdToTerraform(struct?: DataSolacebrokerMsgVpnEventTransactionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnEventTransactionCountThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnEventTransactionCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnEventTransactionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnEventTransactionCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnEventTransactionCountThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clear_percent - computed: true, optional: false, required: false
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }

  // clear_value - computed: true, optional: false, required: false
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }

  // set_percent - computed: true, optional: false, required: false
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }

  // set_value - computed: true, optional: false, required: false
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn solacebroker_msg_vpn}
*/
export class DataSolacebrokerMsgVpn extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerMsgVpn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerMsgVpn to import
  * @param importFromId The id of the existing DataSolacebrokerMsgVpn that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerMsgVpn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn solacebroker_msg_vpn} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerMsgVpnConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerMsgVpnConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn',
      terraformGeneratorMetadata: {
        providerName: 'solacebroker',
        providerVersion: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._msgVpnName = config.msgVpnName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // authentication_basic_enabled - computed: true, optional: false, required: false
  public get authenticationBasicEnabled() {
    return this.getBooleanAttribute('authentication_basic_enabled');
  }

  // authentication_basic_profile_name - computed: true, optional: false, required: false
  public get authenticationBasicProfileName() {
    return this.getStringAttribute('authentication_basic_profile_name');
  }

  // authentication_basic_radius_domain - computed: true, optional: false, required: false
  public get authenticationBasicRadiusDomain() {
    return this.getStringAttribute('authentication_basic_radius_domain');
  }

  // authentication_basic_type - computed: true, optional: false, required: false
  public get authenticationBasicType() {
    return this.getStringAttribute('authentication_basic_type');
  }

  // authentication_client_cert_allow_api_provided_username_enabled - computed: true, optional: false, required: false
  public get authenticationClientCertAllowApiProvidedUsernameEnabled() {
    return this.getBooleanAttribute('authentication_client_cert_allow_api_provided_username_enabled');
  }

  // authentication_client_cert_certificate_matching_rules_enabled - computed: true, optional: false, required: false
  public get authenticationClientCertCertificateMatchingRulesEnabled() {
    return this.getBooleanAttribute('authentication_client_cert_certificate_matching_rules_enabled');
  }

  // authentication_client_cert_enabled - computed: true, optional: false, required: false
  public get authenticationClientCertEnabled() {
    return this.getBooleanAttribute('authentication_client_cert_enabled');
  }

  // authentication_client_cert_max_chain_depth - computed: true, optional: false, required: false
  public get authenticationClientCertMaxChainDepth() {
    return this.getNumberAttribute('authentication_client_cert_max_chain_depth');
  }

  // authentication_client_cert_revocation_check_mode - computed: true, optional: false, required: false
  public get authenticationClientCertRevocationCheckMode() {
    return this.getStringAttribute('authentication_client_cert_revocation_check_mode');
  }

  // authentication_client_cert_username_source - computed: true, optional: false, required: false
  public get authenticationClientCertUsernameSource() {
    return this.getStringAttribute('authentication_client_cert_username_source');
  }

  // authentication_client_cert_validate_date_enabled - computed: true, optional: false, required: false
  public get authenticationClientCertValidateDateEnabled() {
    return this.getBooleanAttribute('authentication_client_cert_validate_date_enabled');
  }

  // authentication_kerberos_allow_api_provided_username_enabled - computed: true, optional: false, required: false
  public get authenticationKerberosAllowApiProvidedUsernameEnabled() {
    return this.getBooleanAttribute('authentication_kerberos_allow_api_provided_username_enabled');
  }

  // authentication_kerberos_enabled - computed: true, optional: false, required: false
  public get authenticationKerberosEnabled() {
    return this.getBooleanAttribute('authentication_kerberos_enabled');
  }

  // authentication_oauth_default_profile_name - computed: true, optional: false, required: false
  public get authenticationOauthDefaultProfileName() {
    return this.getStringAttribute('authentication_oauth_default_profile_name');
  }

  // authentication_oauth_enabled - computed: true, optional: false, required: false
  public get authenticationOauthEnabled() {
    return this.getBooleanAttribute('authentication_oauth_enabled');
  }

  // authorization_ldap_group_membership_attribute_name - computed: true, optional: false, required: false
  public get authorizationLdapGroupMembershipAttributeName() {
    return this.getStringAttribute('authorization_ldap_group_membership_attribute_name');
  }

  // authorization_ldap_trim_client_username_domain_enabled - computed: true, optional: false, required: false
  public get authorizationLdapTrimClientUsernameDomainEnabled() {
    return this.getBooleanAttribute('authorization_ldap_trim_client_username_domain_enabled');
  }

  // authorization_profile_name - computed: true, optional: false, required: false
  public get authorizationProfileName() {
    return this.getStringAttribute('authorization_profile_name');
  }

  // authorization_type - computed: true, optional: false, required: false
  public get authorizationType() {
    return this.getStringAttribute('authorization_type');
  }

  // bridging_tls_server_cert_max_chain_depth - computed: true, optional: false, required: false
  public get bridgingTlsServerCertMaxChainDepth() {
    return this.getNumberAttribute('bridging_tls_server_cert_max_chain_depth');
  }

  // bridging_tls_server_cert_validate_date_enabled - computed: true, optional: false, required: false
  public get bridgingTlsServerCertValidateDateEnabled() {
    return this.getBooleanAttribute('bridging_tls_server_cert_validate_date_enabled');
  }

  // bridging_tls_server_cert_validate_name_enabled - computed: true, optional: false, required: false
  public get bridgingTlsServerCertValidateNameEnabled() {
    return this.getBooleanAttribute('bridging_tls_server_cert_validate_name_enabled');
  }

  // dmr_enabled - computed: true, optional: false, required: false
  public get dmrEnabled() {
    return this.getBooleanAttribute('dmr_enabled');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // event_connection_count_threshold - computed: true, optional: false, required: false
  private _eventConnectionCountThreshold = new DataSolacebrokerMsgVpnEventConnectionCountThresholdOutputReference(this, "event_connection_count_threshold");
  public get eventConnectionCountThreshold() {
    return this._eventConnectionCountThreshold;
  }

  // event_egress_flow_count_threshold - computed: true, optional: false, required: false
  private _eventEgressFlowCountThreshold = new DataSolacebrokerMsgVpnEventEgressFlowCountThresholdOutputReference(this, "event_egress_flow_count_threshold");
  public get eventEgressFlowCountThreshold() {
    return this._eventEgressFlowCountThreshold;
  }

  // event_egress_msg_rate_threshold - computed: true, optional: false, required: false
  private _eventEgressMsgRateThreshold = new DataSolacebrokerMsgVpnEventEgressMsgRateThresholdOutputReference(this, "event_egress_msg_rate_threshold");
  public get eventEgressMsgRateThreshold() {
    return this._eventEgressMsgRateThreshold;
  }

  // event_endpoint_count_threshold - computed: true, optional: false, required: false
  private _eventEndpointCountThreshold = new DataSolacebrokerMsgVpnEventEndpointCountThresholdOutputReference(this, "event_endpoint_count_threshold");
  public get eventEndpointCountThreshold() {
    return this._eventEndpointCountThreshold;
  }

  // event_ingress_flow_count_threshold - computed: true, optional: false, required: false
  private _eventIngressFlowCountThreshold = new DataSolacebrokerMsgVpnEventIngressFlowCountThresholdOutputReference(this, "event_ingress_flow_count_threshold");
  public get eventIngressFlowCountThreshold() {
    return this._eventIngressFlowCountThreshold;
  }

  // event_ingress_msg_rate_threshold - computed: true, optional: false, required: false
  private _eventIngressMsgRateThreshold = new DataSolacebrokerMsgVpnEventIngressMsgRateThresholdOutputReference(this, "event_ingress_msg_rate_threshold");
  public get eventIngressMsgRateThreshold() {
    return this._eventIngressMsgRateThreshold;
  }

  // event_large_msg_threshold - computed: true, optional: false, required: false
  public get eventLargeMsgThreshold() {
    return this.getNumberAttribute('event_large_msg_threshold');
  }

  // event_log_tag - computed: true, optional: false, required: false
  public get eventLogTag() {
    return this.getStringAttribute('event_log_tag');
  }

  // event_msg_spool_usage_threshold - computed: true, optional: false, required: false
  private _eventMsgSpoolUsageThreshold = new DataSolacebrokerMsgVpnEventMsgSpoolUsageThresholdOutputReference(this, "event_msg_spool_usage_threshold");
  public get eventMsgSpoolUsageThreshold() {
    return this._eventMsgSpoolUsageThreshold;
  }

  // event_publish_client_enabled - computed: true, optional: false, required: false
  public get eventPublishClientEnabled() {
    return this.getBooleanAttribute('event_publish_client_enabled');
  }

  // event_publish_msg_vpn_enabled - computed: true, optional: false, required: false
  public get eventPublishMsgVpnEnabled() {
    return this.getBooleanAttribute('event_publish_msg_vpn_enabled');
  }

  // event_publish_subscription_mode - computed: true, optional: false, required: false
  public get eventPublishSubscriptionMode() {
    return this.getStringAttribute('event_publish_subscription_mode');
  }

  // event_publish_topic_format_mqtt_enabled - computed: true, optional: false, required: false
  public get eventPublishTopicFormatMqttEnabled() {
    return this.getBooleanAttribute('event_publish_topic_format_mqtt_enabled');
  }

  // event_publish_topic_format_smf_enabled - computed: true, optional: false, required: false
  public get eventPublishTopicFormatSmfEnabled() {
    return this.getBooleanAttribute('event_publish_topic_format_smf_enabled');
  }

  // event_service_amqp_connection_count_threshold - computed: true, optional: false, required: false
  private _eventServiceAmqpConnectionCountThreshold = new DataSolacebrokerMsgVpnEventServiceAmqpConnectionCountThresholdOutputReference(this, "event_service_amqp_connection_count_threshold");
  public get eventServiceAmqpConnectionCountThreshold() {
    return this._eventServiceAmqpConnectionCountThreshold;
  }

  // event_service_mqtt_connection_count_threshold - computed: true, optional: false, required: false
  private _eventServiceMqttConnectionCountThreshold = new DataSolacebrokerMsgVpnEventServiceMqttConnectionCountThresholdOutputReference(this, "event_service_mqtt_connection_count_threshold");
  public get eventServiceMqttConnectionCountThreshold() {
    return this._eventServiceMqttConnectionCountThreshold;
  }

  // event_service_rest_incoming_connection_count_threshold - computed: true, optional: false, required: false
  private _eventServiceRestIncomingConnectionCountThreshold = new DataSolacebrokerMsgVpnEventServiceRestIncomingConnectionCountThresholdOutputReference(this, "event_service_rest_incoming_connection_count_threshold");
  public get eventServiceRestIncomingConnectionCountThreshold() {
    return this._eventServiceRestIncomingConnectionCountThreshold;
  }

  // event_service_smf_connection_count_threshold - computed: true, optional: false, required: false
  private _eventServiceSmfConnectionCountThreshold = new DataSolacebrokerMsgVpnEventServiceSmfConnectionCountThresholdOutputReference(this, "event_service_smf_connection_count_threshold");
  public get eventServiceSmfConnectionCountThreshold() {
    return this._eventServiceSmfConnectionCountThreshold;
  }

  // event_service_web_connection_count_threshold - computed: true, optional: false, required: false
  private _eventServiceWebConnectionCountThreshold = new DataSolacebrokerMsgVpnEventServiceWebConnectionCountThresholdOutputReference(this, "event_service_web_connection_count_threshold");
  public get eventServiceWebConnectionCountThreshold() {
    return this._eventServiceWebConnectionCountThreshold;
  }

  // event_subscription_count_threshold - computed: true, optional: false, required: false
  private _eventSubscriptionCountThreshold = new DataSolacebrokerMsgVpnEventSubscriptionCountThresholdOutputReference(this, "event_subscription_count_threshold");
  public get eventSubscriptionCountThreshold() {
    return this._eventSubscriptionCountThreshold;
  }

  // event_transacted_session_count_threshold - computed: true, optional: false, required: false
  private _eventTransactedSessionCountThreshold = new DataSolacebrokerMsgVpnEventTransactedSessionCountThresholdOutputReference(this, "event_transacted_session_count_threshold");
  public get eventTransactedSessionCountThreshold() {
    return this._eventTransactedSessionCountThreshold;
  }

  // event_transaction_count_threshold - computed: true, optional: false, required: false
  private _eventTransactionCountThreshold = new DataSolacebrokerMsgVpnEventTransactionCountThresholdOutputReference(this, "event_transaction_count_threshold");
  public get eventTransactionCountThreshold() {
    return this._eventTransactionCountThreshold;
  }

  // export_subscriptions_enabled - computed: true, optional: false, required: false
  public get exportSubscriptionsEnabled() {
    return this.getBooleanAttribute('export_subscriptions_enabled');
  }

  // jndi_enabled - computed: true, optional: false, required: false
  public get jndiEnabled() {
    return this.getBooleanAttribute('jndi_enabled');
  }

  // max_connection_count - computed: true, optional: false, required: false
  public get maxConnectionCount() {
    return this.getNumberAttribute('max_connection_count');
  }

  // max_egress_flow_count - computed: true, optional: false, required: false
  public get maxEgressFlowCount() {
    return this.getNumberAttribute('max_egress_flow_count');
  }

  // max_endpoint_count - computed: true, optional: false, required: false
  public get maxEndpointCount() {
    return this.getNumberAttribute('max_endpoint_count');
  }

  // max_ingress_flow_count - computed: true, optional: false, required: false
  public get maxIngressFlowCount() {
    return this.getNumberAttribute('max_ingress_flow_count');
  }

  // max_kafka_broker_connection_count - computed: true, optional: false, required: false
  public get maxKafkaBrokerConnectionCount() {
    return this.getNumberAttribute('max_kafka_broker_connection_count');
  }

  // max_msg_spool_usage - computed: true, optional: false, required: false
  public get maxMsgSpoolUsage() {
    return this.getNumberAttribute('max_msg_spool_usage');
  }

  // max_subscription_count - computed: true, optional: false, required: false
  public get maxSubscriptionCount() {
    return this.getNumberAttribute('max_subscription_count');
  }

  // max_transacted_session_count - computed: true, optional: false, required: false
  public get maxTransactedSessionCount() {
    return this.getNumberAttribute('max_transacted_session_count');
  }

  // max_transaction_count - computed: true, optional: false, required: false
  public get maxTransactionCount() {
    return this.getNumberAttribute('max_transaction_count');
  }

  // mqtt_retain_max_memory - computed: true, optional: false, required: false
  public get mqttRetainMaxMemory() {
    return this.getNumberAttribute('mqtt_retain_max_memory');
  }

  // msg_vpn_name - computed: false, optional: false, required: true
  private _msgVpnName?: string; 
  public get msgVpnName() {
    return this.getStringAttribute('msg_vpn_name');
  }
  public set msgVpnName(value: string) {
    this._msgVpnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get msgVpnNameInput() {
    return this._msgVpnName;
  }

  // replication_ack_propagation_interval_msg_count - computed: true, optional: false, required: false
  public get replicationAckPropagationIntervalMsgCount() {
    return this.getNumberAttribute('replication_ack_propagation_interval_msg_count');
  }

  // replication_bridge_authentication_basic_client_username - computed: true, optional: false, required: false
  public get replicationBridgeAuthenticationBasicClientUsername() {
    return this.getStringAttribute('replication_bridge_authentication_basic_client_username');
  }

  // replication_bridge_authentication_scheme - computed: true, optional: false, required: false
  public get replicationBridgeAuthenticationScheme() {
    return this.getStringAttribute('replication_bridge_authentication_scheme');
  }

  // replication_bridge_compressed_data_enabled - computed: true, optional: false, required: false
  public get replicationBridgeCompressedDataEnabled() {
    return this.getBooleanAttribute('replication_bridge_compressed_data_enabled');
  }

  // replication_bridge_egress_flow_window_size - computed: true, optional: false, required: false
  public get replicationBridgeEgressFlowWindowSize() {
    return this.getNumberAttribute('replication_bridge_egress_flow_window_size');
  }

  // replication_bridge_retry_delay - computed: true, optional: false, required: false
  public get replicationBridgeRetryDelay() {
    return this.getNumberAttribute('replication_bridge_retry_delay');
  }

  // replication_bridge_tls_enabled - computed: true, optional: false, required: false
  public get replicationBridgeTlsEnabled() {
    return this.getBooleanAttribute('replication_bridge_tls_enabled');
  }

  // replication_bridge_unidirectional_client_profile_name - computed: true, optional: false, required: false
  public get replicationBridgeUnidirectionalClientProfileName() {
    return this.getStringAttribute('replication_bridge_unidirectional_client_profile_name');
  }

  // replication_enabled - computed: true, optional: false, required: false
  public get replicationEnabled() {
    return this.getBooleanAttribute('replication_enabled');
  }

  // replication_queue_max_msg_spool_usage - computed: true, optional: false, required: false
  public get replicationQueueMaxMsgSpoolUsage() {
    return this.getNumberAttribute('replication_queue_max_msg_spool_usage');
  }

  // replication_queue_reject_msg_to_sender_on_discard_enabled - computed: true, optional: false, required: false
  public get replicationQueueRejectMsgToSenderOnDiscardEnabled() {
    return this.getBooleanAttribute('replication_queue_reject_msg_to_sender_on_discard_enabled');
  }

  // replication_reject_msg_when_sync_ineligible_enabled - computed: true, optional: false, required: false
  public get replicationRejectMsgWhenSyncIneligibleEnabled() {
    return this.getBooleanAttribute('replication_reject_msg_when_sync_ineligible_enabled');
  }

  // replication_role - computed: true, optional: false, required: false
  public get replicationRole() {
    return this.getStringAttribute('replication_role');
  }

  // replication_transaction_mode - computed: true, optional: false, required: false
  public get replicationTransactionMode() {
    return this.getStringAttribute('replication_transaction_mode');
  }

  // rest_tls_server_cert_max_chain_depth - computed: true, optional: false, required: false
  public get restTlsServerCertMaxChainDepth() {
    return this.getNumberAttribute('rest_tls_server_cert_max_chain_depth');
  }

  // rest_tls_server_cert_validate_date_enabled - computed: true, optional: false, required: false
  public get restTlsServerCertValidateDateEnabled() {
    return this.getBooleanAttribute('rest_tls_server_cert_validate_date_enabled');
  }

  // rest_tls_server_cert_validate_name_enabled - computed: true, optional: false, required: false
  public get restTlsServerCertValidateNameEnabled() {
    return this.getBooleanAttribute('rest_tls_server_cert_validate_name_enabled');
  }

  // semp_over_msg_bus_admin_client_enabled - computed: true, optional: false, required: false
  public get sempOverMsgBusAdminClientEnabled() {
    return this.getBooleanAttribute('semp_over_msg_bus_admin_client_enabled');
  }

  // semp_over_msg_bus_admin_distributed_cache_enabled - computed: true, optional: false, required: false
  public get sempOverMsgBusAdminDistributedCacheEnabled() {
    return this.getBooleanAttribute('semp_over_msg_bus_admin_distributed_cache_enabled');
  }

  // semp_over_msg_bus_admin_enabled - computed: true, optional: false, required: false
  public get sempOverMsgBusAdminEnabled() {
    return this.getBooleanAttribute('semp_over_msg_bus_admin_enabled');
  }

  // semp_over_msg_bus_enabled - computed: true, optional: false, required: false
  public get sempOverMsgBusEnabled() {
    return this.getBooleanAttribute('semp_over_msg_bus_enabled');
  }

  // semp_over_msg_bus_show_enabled - computed: true, optional: false, required: false
  public get sempOverMsgBusShowEnabled() {
    return this.getBooleanAttribute('semp_over_msg_bus_show_enabled');
  }

  // service_amqp_max_connection_count - computed: true, optional: false, required: false
  public get serviceAmqpMaxConnectionCount() {
    return this.getNumberAttribute('service_amqp_max_connection_count');
  }

  // service_amqp_plain_text_enabled - computed: true, optional: false, required: false
  public get serviceAmqpPlainTextEnabled() {
    return this.getBooleanAttribute('service_amqp_plain_text_enabled');
  }

  // service_amqp_plain_text_listen_port - computed: true, optional: false, required: false
  public get serviceAmqpPlainTextListenPort() {
    return this.getNumberAttribute('service_amqp_plain_text_listen_port');
  }

  // service_amqp_tls_enabled - computed: true, optional: false, required: false
  public get serviceAmqpTlsEnabled() {
    return this.getBooleanAttribute('service_amqp_tls_enabled');
  }

  // service_amqp_tls_listen_port - computed: true, optional: false, required: false
  public get serviceAmqpTlsListenPort() {
    return this.getNumberAttribute('service_amqp_tls_listen_port');
  }

  // service_mqtt_authentication_client_cert_request - computed: true, optional: false, required: false
  public get serviceMqttAuthenticationClientCertRequest() {
    return this.getStringAttribute('service_mqtt_authentication_client_cert_request');
  }

  // service_mqtt_max_connection_count - computed: true, optional: false, required: false
  public get serviceMqttMaxConnectionCount() {
    return this.getNumberAttribute('service_mqtt_max_connection_count');
  }

  // service_mqtt_plain_text_enabled - computed: true, optional: false, required: false
  public get serviceMqttPlainTextEnabled() {
    return this.getBooleanAttribute('service_mqtt_plain_text_enabled');
  }

  // service_mqtt_plain_text_listen_port - computed: true, optional: false, required: false
  public get serviceMqttPlainTextListenPort() {
    return this.getNumberAttribute('service_mqtt_plain_text_listen_port');
  }

  // service_mqtt_tls_enabled - computed: true, optional: false, required: false
  public get serviceMqttTlsEnabled() {
    return this.getBooleanAttribute('service_mqtt_tls_enabled');
  }

  // service_mqtt_tls_listen_port - computed: true, optional: false, required: false
  public get serviceMqttTlsListenPort() {
    return this.getNumberAttribute('service_mqtt_tls_listen_port');
  }

  // service_mqtt_tls_web_socket_enabled - computed: true, optional: false, required: false
  public get serviceMqttTlsWebSocketEnabled() {
    return this.getBooleanAttribute('service_mqtt_tls_web_socket_enabled');
  }

  // service_mqtt_tls_web_socket_listen_port - computed: true, optional: false, required: false
  public get serviceMqttTlsWebSocketListenPort() {
    return this.getNumberAttribute('service_mqtt_tls_web_socket_listen_port');
  }

  // service_mqtt_web_socket_enabled - computed: true, optional: false, required: false
  public get serviceMqttWebSocketEnabled() {
    return this.getBooleanAttribute('service_mqtt_web_socket_enabled');
  }

  // service_mqtt_web_socket_listen_port - computed: true, optional: false, required: false
  public get serviceMqttWebSocketListenPort() {
    return this.getNumberAttribute('service_mqtt_web_socket_listen_port');
  }

  // service_rest_incoming_authentication_client_cert_request - computed: true, optional: false, required: false
  public get serviceRestIncomingAuthenticationClientCertRequest() {
    return this.getStringAttribute('service_rest_incoming_authentication_client_cert_request');
  }

  // service_rest_incoming_authorization_header_handling - computed: true, optional: false, required: false
  public get serviceRestIncomingAuthorizationHeaderHandling() {
    return this.getStringAttribute('service_rest_incoming_authorization_header_handling');
  }

  // service_rest_incoming_max_connection_count - computed: true, optional: false, required: false
  public get serviceRestIncomingMaxConnectionCount() {
    return this.getNumberAttribute('service_rest_incoming_max_connection_count');
  }

  // service_rest_incoming_plain_text_enabled - computed: true, optional: false, required: false
  public get serviceRestIncomingPlainTextEnabled() {
    return this.getBooleanAttribute('service_rest_incoming_plain_text_enabled');
  }

  // service_rest_incoming_plain_text_listen_port - computed: true, optional: false, required: false
  public get serviceRestIncomingPlainTextListenPort() {
    return this.getNumberAttribute('service_rest_incoming_plain_text_listen_port');
  }

  // service_rest_incoming_tls_enabled - computed: true, optional: false, required: false
  public get serviceRestIncomingTlsEnabled() {
    return this.getBooleanAttribute('service_rest_incoming_tls_enabled');
  }

  // service_rest_incoming_tls_listen_port - computed: true, optional: false, required: false
  public get serviceRestIncomingTlsListenPort() {
    return this.getNumberAttribute('service_rest_incoming_tls_listen_port');
  }

  // service_rest_mode - computed: true, optional: false, required: false
  public get serviceRestMode() {
    return this.getStringAttribute('service_rest_mode');
  }

  // service_rest_outgoing_max_connection_count - computed: true, optional: false, required: false
  public get serviceRestOutgoingMaxConnectionCount() {
    return this.getNumberAttribute('service_rest_outgoing_max_connection_count');
  }

  // service_smf_max_connection_count - computed: true, optional: false, required: false
  public get serviceSmfMaxConnectionCount() {
    return this.getNumberAttribute('service_smf_max_connection_count');
  }

  // service_smf_plain_text_enabled - computed: true, optional: false, required: false
  public get serviceSmfPlainTextEnabled() {
    return this.getBooleanAttribute('service_smf_plain_text_enabled');
  }

  // service_smf_tls_enabled - computed: true, optional: false, required: false
  public get serviceSmfTlsEnabled() {
    return this.getBooleanAttribute('service_smf_tls_enabled');
  }

  // service_web_authentication_client_cert_request - computed: true, optional: false, required: false
  public get serviceWebAuthenticationClientCertRequest() {
    return this.getStringAttribute('service_web_authentication_client_cert_request');
  }

  // service_web_max_connection_count - computed: true, optional: false, required: false
  public get serviceWebMaxConnectionCount() {
    return this.getNumberAttribute('service_web_max_connection_count');
  }

  // service_web_plain_text_enabled - computed: true, optional: false, required: false
  public get serviceWebPlainTextEnabled() {
    return this.getBooleanAttribute('service_web_plain_text_enabled');
  }

  // service_web_tls_enabled - computed: true, optional: false, required: false
  public get serviceWebTlsEnabled() {
    return this.getBooleanAttribute('service_web_tls_enabled');
  }

  // tls_allow_downgrade_to_plain_text_enabled - computed: true, optional: false, required: false
  public get tlsAllowDowngradeToPlainTextEnabled() {
    return this.getBooleanAttribute('tls_allow_downgrade_to_plain_text_enabled');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      msg_vpn_name: {
        value: cdktf.stringToHclTerraform(this._msgVpnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
