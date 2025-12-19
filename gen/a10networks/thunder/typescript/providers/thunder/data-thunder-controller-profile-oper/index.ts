// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_profile_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderControllerProfileOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_profile_oper#id DataThunderControllerProfileOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_profile_oper#oper DataThunderControllerProfileOper#oper}
  */
  readonly oper?: DataThunderControllerProfileOperOper;
}
export interface DataThunderControllerProfileOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_profile_oper#broker_info DataThunderControllerProfileOper#broker_info}
  */
  readonly brokerInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_profile_oper#deregistration_error_message DataThunderControllerProfileOper#deregistration_error_message}
  */
  readonly deregistrationErrorMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_profile_oper#deregistration_status DataThunderControllerProfileOper#deregistration_status}
  */
  readonly deregistrationStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_profile_oper#deregistration_status_code DataThunderControllerProfileOper#deregistration_status_code}
  */
  readonly deregistrationStatusCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_profile_oper#heartbeat_error_message DataThunderControllerProfileOper#heartbeat_error_message}
  */
  readonly heartbeatErrorMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_profile_oper#heartbeat_status DataThunderControllerProfileOper#heartbeat_status}
  */
  readonly heartbeatStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_profile_oper#kafka_broker_state DataThunderControllerProfileOper#kafka_broker_state}
  */
  readonly kafkaBrokerState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_profile_oper#number_of_orgunit_mapped_partitions DataThunderControllerProfileOper#number_of_orgunit_mapped_partitions}
  */
  readonly numberOfOrgunitMappedPartitions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_profile_oper#number_of_orgunit_unmapped_partitions DataThunderControllerProfileOper#number_of_orgunit_unmapped_partitions}
  */
  readonly numberOfOrgunitUnmappedPartitions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_profile_oper#overall_status DataThunderControllerProfileOper#overall_status}
  */
  readonly overallStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_profile_oper#peer_device_info DataThunderControllerProfileOper#peer_device_info}
  */
  readonly peerDeviceInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_profile_oper#registration_error_message DataThunderControllerProfileOper#registration_error_message}
  */
  readonly registrationErrorMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_profile_oper#registration_status DataThunderControllerProfileOper#registration_status}
  */
  readonly registrationStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_profile_oper#registration_status_code DataThunderControllerProfileOper#registration_status_code}
  */
  readonly registrationStatusCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_profile_oper#schema_registry_status DataThunderControllerProfileOper#schema_registry_status}
  */
  readonly schemaRegistryStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_profile_oper#service_registry DataThunderControllerProfileOper#service_registry}
  */
  readonly serviceRegistry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_profile_oper#service_registry_error_message DataThunderControllerProfileOper#service_registry_error_message}
  */
  readonly serviceRegistryErrorMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_profile_oper#tunnel_error_message DataThunderControllerProfileOper#tunnel_error_message}
  */
  readonly tunnelErrorMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_profile_oper#tunnel_status DataThunderControllerProfileOper#tunnel_status}
  */
  readonly tunnelStatus?: string;
}

export function dataThunderControllerProfileOperOperToTerraform(struct?: DataThunderControllerProfileOperOperOutputReference | DataThunderControllerProfileOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broker_info: cdktf.stringToTerraform(struct!.brokerInfo),
    deregistration_error_message: cdktf.stringToTerraform(struct!.deregistrationErrorMessage),
    deregistration_status: cdktf.stringToTerraform(struct!.deregistrationStatus),
    deregistration_status_code: cdktf.numberToTerraform(struct!.deregistrationStatusCode),
    heartbeat_error_message: cdktf.stringToTerraform(struct!.heartbeatErrorMessage),
    heartbeat_status: cdktf.stringToTerraform(struct!.heartbeatStatus),
    kafka_broker_state: cdktf.stringToTerraform(struct!.kafkaBrokerState),
    number_of_orgunit_mapped_partitions: cdktf.numberToTerraform(struct!.numberOfOrgunitMappedPartitions),
    number_of_orgunit_unmapped_partitions: cdktf.numberToTerraform(struct!.numberOfOrgunitUnmappedPartitions),
    overall_status: cdktf.stringToTerraform(struct!.overallStatus),
    peer_device_info: cdktf.stringToTerraform(struct!.peerDeviceInfo),
    registration_error_message: cdktf.stringToTerraform(struct!.registrationErrorMessage),
    registration_status: cdktf.stringToTerraform(struct!.registrationStatus),
    registration_status_code: cdktf.numberToTerraform(struct!.registrationStatusCode),
    schema_registry_status: cdktf.stringToTerraform(struct!.schemaRegistryStatus),
    service_registry: cdktf.stringToTerraform(struct!.serviceRegistry),
    service_registry_error_message: cdktf.stringToTerraform(struct!.serviceRegistryErrorMessage),
    tunnel_error_message: cdktf.stringToTerraform(struct!.tunnelErrorMessage),
    tunnel_status: cdktf.stringToTerraform(struct!.tunnelStatus),
  }
}


export function dataThunderControllerProfileOperOperToHclTerraform(struct?: DataThunderControllerProfileOperOperOutputReference | DataThunderControllerProfileOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broker_info: {
      value: cdktf.stringToHclTerraform(struct!.brokerInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deregistration_error_message: {
      value: cdktf.stringToHclTerraform(struct!.deregistrationErrorMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deregistration_status: {
      value: cdktf.stringToHclTerraform(struct!.deregistrationStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deregistration_status_code: {
      value: cdktf.numberToHclTerraform(struct!.deregistrationStatusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    heartbeat_error_message: {
      value: cdktf.stringToHclTerraform(struct!.heartbeatErrorMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    heartbeat_status: {
      value: cdktf.stringToHclTerraform(struct!.heartbeatStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka_broker_state: {
      value: cdktf.stringToHclTerraform(struct!.kafkaBrokerState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_orgunit_mapped_partitions: {
      value: cdktf.numberToHclTerraform(struct!.numberOfOrgunitMappedPartitions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_of_orgunit_unmapped_partitions: {
      value: cdktf.numberToHclTerraform(struct!.numberOfOrgunitUnmappedPartitions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    overall_status: {
      value: cdktf.stringToHclTerraform(struct!.overallStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_device_info: {
      value: cdktf.stringToHclTerraform(struct!.peerDeviceInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registration_error_message: {
      value: cdktf.stringToHclTerraform(struct!.registrationErrorMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registration_status: {
      value: cdktf.stringToHclTerraform(struct!.registrationStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registration_status_code: {
      value: cdktf.numberToHclTerraform(struct!.registrationStatusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schema_registry_status: {
      value: cdktf.stringToHclTerraform(struct!.schemaRegistryStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_registry: {
      value: cdktf.stringToHclTerraform(struct!.serviceRegistry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_registry_error_message: {
      value: cdktf.stringToHclTerraform(struct!.serviceRegistryErrorMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_error_message: {
      value: cdktf.stringToHclTerraform(struct!.tunnelErrorMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_status: {
      value: cdktf.stringToHclTerraform(struct!.tunnelStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderControllerProfileOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderControllerProfileOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._brokerInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokerInfo = this._brokerInfo;
    }
    if (this._deregistrationErrorMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.deregistrationErrorMessage = this._deregistrationErrorMessage;
    }
    if (this._deregistrationStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.deregistrationStatus = this._deregistrationStatus;
    }
    if (this._deregistrationStatusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.deregistrationStatusCode = this._deregistrationStatusCode;
    }
    if (this._heartbeatErrorMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.heartbeatErrorMessage = this._heartbeatErrorMessage;
    }
    if (this._heartbeatStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.heartbeatStatus = this._heartbeatStatus;
    }
    if (this._kafkaBrokerState !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaBrokerState = this._kafkaBrokerState;
    }
    if (this._numberOfOrgunitMappedPartitions !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfOrgunitMappedPartitions = this._numberOfOrgunitMappedPartitions;
    }
    if (this._numberOfOrgunitUnmappedPartitions !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfOrgunitUnmappedPartitions = this._numberOfOrgunitUnmappedPartitions;
    }
    if (this._overallStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.overallStatus = this._overallStatus;
    }
    if (this._peerDeviceInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerDeviceInfo = this._peerDeviceInfo;
    }
    if (this._registrationErrorMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrationErrorMessage = this._registrationErrorMessage;
    }
    if (this._registrationStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrationStatus = this._registrationStatus;
    }
    if (this._registrationStatusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrationStatusCode = this._registrationStatusCode;
    }
    if (this._schemaRegistryStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistryStatus = this._schemaRegistryStatus;
    }
    if (this._serviceRegistry !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceRegistry = this._serviceRegistry;
    }
    if (this._serviceRegistryErrorMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceRegistryErrorMessage = this._serviceRegistryErrorMessage;
    }
    if (this._tunnelErrorMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelErrorMessage = this._tunnelErrorMessage;
    }
    if (this._tunnelStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelStatus = this._tunnelStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderControllerProfileOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._brokerInfo = undefined;
      this._deregistrationErrorMessage = undefined;
      this._deregistrationStatus = undefined;
      this._deregistrationStatusCode = undefined;
      this._heartbeatErrorMessage = undefined;
      this._heartbeatStatus = undefined;
      this._kafkaBrokerState = undefined;
      this._numberOfOrgunitMappedPartitions = undefined;
      this._numberOfOrgunitUnmappedPartitions = undefined;
      this._overallStatus = undefined;
      this._peerDeviceInfo = undefined;
      this._registrationErrorMessage = undefined;
      this._registrationStatus = undefined;
      this._registrationStatusCode = undefined;
      this._schemaRegistryStatus = undefined;
      this._serviceRegistry = undefined;
      this._serviceRegistryErrorMessage = undefined;
      this._tunnelErrorMessage = undefined;
      this._tunnelStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._brokerInfo = value.brokerInfo;
      this._deregistrationErrorMessage = value.deregistrationErrorMessage;
      this._deregistrationStatus = value.deregistrationStatus;
      this._deregistrationStatusCode = value.deregistrationStatusCode;
      this._heartbeatErrorMessage = value.heartbeatErrorMessage;
      this._heartbeatStatus = value.heartbeatStatus;
      this._kafkaBrokerState = value.kafkaBrokerState;
      this._numberOfOrgunitMappedPartitions = value.numberOfOrgunitMappedPartitions;
      this._numberOfOrgunitUnmappedPartitions = value.numberOfOrgunitUnmappedPartitions;
      this._overallStatus = value.overallStatus;
      this._peerDeviceInfo = value.peerDeviceInfo;
      this._registrationErrorMessage = value.registrationErrorMessage;
      this._registrationStatus = value.registrationStatus;
      this._registrationStatusCode = value.registrationStatusCode;
      this._schemaRegistryStatus = value.schemaRegistryStatus;
      this._serviceRegistry = value.serviceRegistry;
      this._serviceRegistryErrorMessage = value.serviceRegistryErrorMessage;
      this._tunnelErrorMessage = value.tunnelErrorMessage;
      this._tunnelStatus = value.tunnelStatus;
    }
  }

  // broker_info - computed: false, optional: true, required: false
  private _brokerInfo?: string; 
  public get brokerInfo() {
    return this.getStringAttribute('broker_info');
  }
  public set brokerInfo(value: string) {
    this._brokerInfo = value;
  }
  public resetBrokerInfo() {
    this._brokerInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerInfoInput() {
    return this._brokerInfo;
  }

  // deregistration_error_message - computed: false, optional: true, required: false
  private _deregistrationErrorMessage?: string; 
  public get deregistrationErrorMessage() {
    return this.getStringAttribute('deregistration_error_message');
  }
  public set deregistrationErrorMessage(value: string) {
    this._deregistrationErrorMessage = value;
  }
  public resetDeregistrationErrorMessage() {
    this._deregistrationErrorMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deregistrationErrorMessageInput() {
    return this._deregistrationErrorMessage;
  }

  // deregistration_status - computed: false, optional: true, required: false
  private _deregistrationStatus?: string; 
  public get deregistrationStatus() {
    return this.getStringAttribute('deregistration_status');
  }
  public set deregistrationStatus(value: string) {
    this._deregistrationStatus = value;
  }
  public resetDeregistrationStatus() {
    this._deregistrationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deregistrationStatusInput() {
    return this._deregistrationStatus;
  }

  // deregistration_status_code - computed: false, optional: true, required: false
  private _deregistrationStatusCode?: number; 
  public get deregistrationStatusCode() {
    return this.getNumberAttribute('deregistration_status_code');
  }
  public set deregistrationStatusCode(value: number) {
    this._deregistrationStatusCode = value;
  }
  public resetDeregistrationStatusCode() {
    this._deregistrationStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deregistrationStatusCodeInput() {
    return this._deregistrationStatusCode;
  }

  // heartbeat_error_message - computed: false, optional: true, required: false
  private _heartbeatErrorMessage?: string; 
  public get heartbeatErrorMessage() {
    return this.getStringAttribute('heartbeat_error_message');
  }
  public set heartbeatErrorMessage(value: string) {
    this._heartbeatErrorMessage = value;
  }
  public resetHeartbeatErrorMessage() {
    this._heartbeatErrorMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heartbeatErrorMessageInput() {
    return this._heartbeatErrorMessage;
  }

  // heartbeat_status - computed: false, optional: true, required: false
  private _heartbeatStatus?: string; 
  public get heartbeatStatus() {
    return this.getStringAttribute('heartbeat_status');
  }
  public set heartbeatStatus(value: string) {
    this._heartbeatStatus = value;
  }
  public resetHeartbeatStatus() {
    this._heartbeatStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heartbeatStatusInput() {
    return this._heartbeatStatus;
  }

  // kafka_broker_state - computed: false, optional: true, required: false
  private _kafkaBrokerState?: string; 
  public get kafkaBrokerState() {
    return this.getStringAttribute('kafka_broker_state');
  }
  public set kafkaBrokerState(value: string) {
    this._kafkaBrokerState = value;
  }
  public resetKafkaBrokerState() {
    this._kafkaBrokerState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaBrokerStateInput() {
    return this._kafkaBrokerState;
  }

  // number_of_orgunit_mapped_partitions - computed: false, optional: true, required: false
  private _numberOfOrgunitMappedPartitions?: number; 
  public get numberOfOrgunitMappedPartitions() {
    return this.getNumberAttribute('number_of_orgunit_mapped_partitions');
  }
  public set numberOfOrgunitMappedPartitions(value: number) {
    this._numberOfOrgunitMappedPartitions = value;
  }
  public resetNumberOfOrgunitMappedPartitions() {
    this._numberOfOrgunitMappedPartitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfOrgunitMappedPartitionsInput() {
    return this._numberOfOrgunitMappedPartitions;
  }

  // number_of_orgunit_unmapped_partitions - computed: false, optional: true, required: false
  private _numberOfOrgunitUnmappedPartitions?: number; 
  public get numberOfOrgunitUnmappedPartitions() {
    return this.getNumberAttribute('number_of_orgunit_unmapped_partitions');
  }
  public set numberOfOrgunitUnmappedPartitions(value: number) {
    this._numberOfOrgunitUnmappedPartitions = value;
  }
  public resetNumberOfOrgunitUnmappedPartitions() {
    this._numberOfOrgunitUnmappedPartitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfOrgunitUnmappedPartitionsInput() {
    return this._numberOfOrgunitUnmappedPartitions;
  }

  // overall_status - computed: false, optional: true, required: false
  private _overallStatus?: string; 
  public get overallStatus() {
    return this.getStringAttribute('overall_status');
  }
  public set overallStatus(value: string) {
    this._overallStatus = value;
  }
  public resetOverallStatus() {
    this._overallStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overallStatusInput() {
    return this._overallStatus;
  }

  // peer_device_info - computed: false, optional: true, required: false
  private _peerDeviceInfo?: string; 
  public get peerDeviceInfo() {
    return this.getStringAttribute('peer_device_info');
  }
  public set peerDeviceInfo(value: string) {
    this._peerDeviceInfo = value;
  }
  public resetPeerDeviceInfo() {
    this._peerDeviceInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerDeviceInfoInput() {
    return this._peerDeviceInfo;
  }

  // registration_error_message - computed: false, optional: true, required: false
  private _registrationErrorMessage?: string; 
  public get registrationErrorMessage() {
    return this.getStringAttribute('registration_error_message');
  }
  public set registrationErrorMessage(value: string) {
    this._registrationErrorMessage = value;
  }
  public resetRegistrationErrorMessage() {
    this._registrationErrorMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationErrorMessageInput() {
    return this._registrationErrorMessage;
  }

  // registration_status - computed: false, optional: true, required: false
  private _registrationStatus?: string; 
  public get registrationStatus() {
    return this.getStringAttribute('registration_status');
  }
  public set registrationStatus(value: string) {
    this._registrationStatus = value;
  }
  public resetRegistrationStatus() {
    this._registrationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationStatusInput() {
    return this._registrationStatus;
  }

  // registration_status_code - computed: false, optional: true, required: false
  private _registrationStatusCode?: number; 
  public get registrationStatusCode() {
    return this.getNumberAttribute('registration_status_code');
  }
  public set registrationStatusCode(value: number) {
    this._registrationStatusCode = value;
  }
  public resetRegistrationStatusCode() {
    this._registrationStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationStatusCodeInput() {
    return this._registrationStatusCode;
  }

  // schema_registry_status - computed: false, optional: true, required: false
  private _schemaRegistryStatus?: string; 
  public get schemaRegistryStatus() {
    return this.getStringAttribute('schema_registry_status');
  }
  public set schemaRegistryStatus(value: string) {
    this._schemaRegistryStatus = value;
  }
  public resetSchemaRegistryStatus() {
    this._schemaRegistryStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryStatusInput() {
    return this._schemaRegistryStatus;
  }

  // service_registry - computed: false, optional: true, required: false
  private _serviceRegistry?: string; 
  public get serviceRegistry() {
    return this.getStringAttribute('service_registry');
  }
  public set serviceRegistry(value: string) {
    this._serviceRegistry = value;
  }
  public resetServiceRegistry() {
    this._serviceRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRegistryInput() {
    return this._serviceRegistry;
  }

  // service_registry_error_message - computed: false, optional: true, required: false
  private _serviceRegistryErrorMessage?: string; 
  public get serviceRegistryErrorMessage() {
    return this.getStringAttribute('service_registry_error_message');
  }
  public set serviceRegistryErrorMessage(value: string) {
    this._serviceRegistryErrorMessage = value;
  }
  public resetServiceRegistryErrorMessage() {
    this._serviceRegistryErrorMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRegistryErrorMessageInput() {
    return this._serviceRegistryErrorMessage;
  }

  // tunnel_error_message - computed: false, optional: true, required: false
  private _tunnelErrorMessage?: string; 
  public get tunnelErrorMessage() {
    return this.getStringAttribute('tunnel_error_message');
  }
  public set tunnelErrorMessage(value: string) {
    this._tunnelErrorMessage = value;
  }
  public resetTunnelErrorMessage() {
    this._tunnelErrorMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelErrorMessageInput() {
    return this._tunnelErrorMessage;
  }

  // tunnel_status - computed: false, optional: true, required: false
  private _tunnelStatus?: string; 
  public get tunnelStatus() {
    return this.getStringAttribute('tunnel_status');
  }
  public set tunnelStatus(value: string) {
    this._tunnelStatus = value;
  }
  public resetTunnelStatus() {
    this._tunnelStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelStatusInput() {
    return this._tunnelStatus;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_profile_oper thunder_controller_profile_oper}
*/
export class DataThunderControllerProfileOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_controller_profile_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderControllerProfileOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderControllerProfileOper to import
  * @param importFromId The id of the existing DataThunderControllerProfileOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_profile_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderControllerProfileOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_controller_profile_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_profile_oper thunder_controller_profile_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderControllerProfileOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderControllerProfileOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_controller_profile_oper',
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
  private _oper = new DataThunderControllerProfileOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderControllerProfileOperOper) {
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
      oper: dataThunderControllerProfileOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderControllerProfileOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderControllerProfileOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
