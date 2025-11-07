// https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ShovelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel#id Shovel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel#name Shovel#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel#vhost Shovel#vhost}
  */
  readonly vhost: string;
  /**
  * info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel#info Shovel#info}
  */
  readonly info: ShovelInfo;
}
export interface ShovelInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel#ack_mode Shovel#ack_mode}
  */
  readonly ackMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel#add_forward_headers Shovel#add_forward_headers}
  */
  readonly addForwardHeaders?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel#delete_after Shovel#delete_after}
  */
  readonly deleteAfter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel#destination_add_forward_headers Shovel#destination_add_forward_headers}
  */
  readonly destinationAddForwardHeaders?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel#destination_add_timestamp_header Shovel#destination_add_timestamp_header}
  */
  readonly destinationAddTimestampHeader?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel#destination_address Shovel#destination_address}
  */
  readonly destinationAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel#destination_application_properties Shovel#destination_application_properties}
  */
  readonly destinationApplicationProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel#destination_exchange Shovel#destination_exchange}
  */
  readonly destinationExchange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel#destination_exchange_key Shovel#destination_exchange_key}
  */
  readonly destinationExchangeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel#destination_properties Shovel#destination_properties}
  */
  readonly destinationProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel#destination_protocol Shovel#destination_protocol}
  */
  readonly destinationProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel#destination_publish_properties Shovel#destination_publish_properties}
  */
  readonly destinationPublishProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel#destination_queue Shovel#destination_queue}
  */
  readonly destinationQueue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel#destination_queue_arguments Shovel#destination_queue_arguments}
  */
  readonly destinationQueueArguments?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel#destination_uri Shovel#destination_uri}
  */
  readonly destinationUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel#prefetch_count Shovel#prefetch_count}
  */
  readonly prefetchCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel#reconnect_delay Shovel#reconnect_delay}
  */
  readonly reconnectDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel#source_address Shovel#source_address}
  */
  readonly sourceAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel#source_delete_after Shovel#source_delete_after}
  */
  readonly sourceDeleteAfter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel#source_exchange Shovel#source_exchange}
  */
  readonly sourceExchange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel#source_exchange_key Shovel#source_exchange_key}
  */
  readonly sourceExchangeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel#source_prefetch_count Shovel#source_prefetch_count}
  */
  readonly sourcePrefetchCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel#source_protocol Shovel#source_protocol}
  */
  readonly sourceProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel#source_queue Shovel#source_queue}
  */
  readonly sourceQueue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel#source_uri Shovel#source_uri}
  */
  readonly sourceUri: string;
}

export function shovelInfoToTerraform(struct?: ShovelInfoOutputReference | ShovelInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ack_mode: cdktf.stringToTerraform(struct!.ackMode),
    add_forward_headers: cdktf.booleanToTerraform(struct!.addForwardHeaders),
    delete_after: cdktf.stringToTerraform(struct!.deleteAfter),
    destination_add_forward_headers: cdktf.booleanToTerraform(struct!.destinationAddForwardHeaders),
    destination_add_timestamp_header: cdktf.booleanToTerraform(struct!.destinationAddTimestampHeader),
    destination_address: cdktf.stringToTerraform(struct!.destinationAddress),
    destination_application_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.destinationApplicationProperties),
    destination_exchange: cdktf.stringToTerraform(struct!.destinationExchange),
    destination_exchange_key: cdktf.stringToTerraform(struct!.destinationExchangeKey),
    destination_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.destinationProperties),
    destination_protocol: cdktf.stringToTerraform(struct!.destinationProtocol),
    destination_publish_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.destinationPublishProperties),
    destination_queue: cdktf.stringToTerraform(struct!.destinationQueue),
    destination_queue_arguments: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.destinationQueueArguments),
    destination_uri: cdktf.stringToTerraform(struct!.destinationUri),
    prefetch_count: cdktf.numberToTerraform(struct!.prefetchCount),
    reconnect_delay: cdktf.numberToTerraform(struct!.reconnectDelay),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
    source_delete_after: cdktf.stringToTerraform(struct!.sourceDeleteAfter),
    source_exchange: cdktf.stringToTerraform(struct!.sourceExchange),
    source_exchange_key: cdktf.stringToTerraform(struct!.sourceExchangeKey),
    source_prefetch_count: cdktf.numberToTerraform(struct!.sourcePrefetchCount),
    source_protocol: cdktf.stringToTerraform(struct!.sourceProtocol),
    source_queue: cdktf.stringToTerraform(struct!.sourceQueue),
    source_uri: cdktf.stringToTerraform(struct!.sourceUri),
  }
}


export function shovelInfoToHclTerraform(struct?: ShovelInfoOutputReference | ShovelInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ack_mode: {
      value: cdktf.stringToHclTerraform(struct!.ackMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    add_forward_headers: {
      value: cdktf.booleanToHclTerraform(struct!.addForwardHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delete_after: {
      value: cdktf.stringToHclTerraform(struct!.deleteAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_add_forward_headers: {
      value: cdktf.booleanToHclTerraform(struct!.destinationAddForwardHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    destination_add_timestamp_header: {
      value: cdktf.booleanToHclTerraform(struct!.destinationAddTimestampHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    destination_address: {
      value: cdktf.stringToHclTerraform(struct!.destinationAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_application_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.destinationApplicationProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    destination_exchange: {
      value: cdktf.stringToHclTerraform(struct!.destinationExchange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_exchange_key: {
      value: cdktf.stringToHclTerraform(struct!.destinationExchangeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.destinationProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    destination_protocol: {
      value: cdktf.stringToHclTerraform(struct!.destinationProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_publish_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.destinationPublishProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    destination_queue: {
      value: cdktf.stringToHclTerraform(struct!.destinationQueue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_queue_arguments: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.destinationQueueArguments),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    destination_uri: {
      value: cdktf.stringToHclTerraform(struct!.destinationUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefetch_count: {
      value: cdktf.numberToHclTerraform(struct!.prefetchCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reconnect_delay: {
      value: cdktf.numberToHclTerraform(struct!.reconnectDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_delete_after: {
      value: cdktf.stringToHclTerraform(struct!.sourceDeleteAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_exchange: {
      value: cdktf.stringToHclTerraform(struct!.sourceExchange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_exchange_key: {
      value: cdktf.stringToHclTerraform(struct!.sourceExchangeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_prefetch_count: {
      value: cdktf.numberToHclTerraform(struct!.sourcePrefetchCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_protocol: {
      value: cdktf.stringToHclTerraform(struct!.sourceProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_queue: {
      value: cdktf.stringToHclTerraform(struct!.sourceQueue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_uri: {
      value: cdktf.stringToHclTerraform(struct!.sourceUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ShovelInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ShovelInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ackMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackMode = this._ackMode;
    }
    if (this._addForwardHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.addForwardHeaders = this._addForwardHeaders;
    }
    if (this._deleteAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteAfter = this._deleteAfter;
    }
    if (this._destinationAddForwardHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddForwardHeaders = this._destinationAddForwardHeaders;
    }
    if (this._destinationAddTimestampHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddTimestampHeader = this._destinationAddTimestampHeader;
    }
    if (this._destinationAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddress = this._destinationAddress;
    }
    if (this._destinationApplicationProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationApplicationProperties = this._destinationApplicationProperties;
    }
    if (this._destinationExchange !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationExchange = this._destinationExchange;
    }
    if (this._destinationExchangeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationExchangeKey = this._destinationExchangeKey;
    }
    if (this._destinationProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationProperties = this._destinationProperties;
    }
    if (this._destinationProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationProtocol = this._destinationProtocol;
    }
    if (this._destinationPublishProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPublishProperties = this._destinationPublishProperties;
    }
    if (this._destinationQueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationQueue = this._destinationQueue;
    }
    if (this._destinationQueueArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationQueueArguments = this._destinationQueueArguments;
    }
    if (this._destinationUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationUri = this._destinationUri;
    }
    if (this._prefetchCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefetchCount = this._prefetchCount;
    }
    if (this._reconnectDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.reconnectDelay = this._reconnectDelay;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    if (this._sourceDeleteAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDeleteAfter = this._sourceDeleteAfter;
    }
    if (this._sourceExchange !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceExchange = this._sourceExchange;
    }
    if (this._sourceExchangeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceExchangeKey = this._sourceExchangeKey;
    }
    if (this._sourcePrefetchCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePrefetchCount = this._sourcePrefetchCount;
    }
    if (this._sourceProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceProtocol = this._sourceProtocol;
    }
    if (this._sourceQueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceQueue = this._sourceQueue;
    }
    if (this._sourceUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUri = this._sourceUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ShovelInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ackMode = undefined;
      this._addForwardHeaders = undefined;
      this._deleteAfter = undefined;
      this._destinationAddForwardHeaders = undefined;
      this._destinationAddTimestampHeader = undefined;
      this._destinationAddress = undefined;
      this._destinationApplicationProperties = undefined;
      this._destinationExchange = undefined;
      this._destinationExchangeKey = undefined;
      this._destinationProperties = undefined;
      this._destinationProtocol = undefined;
      this._destinationPublishProperties = undefined;
      this._destinationQueue = undefined;
      this._destinationQueueArguments = undefined;
      this._destinationUri = undefined;
      this._prefetchCount = undefined;
      this._reconnectDelay = undefined;
      this._sourceAddress = undefined;
      this._sourceDeleteAfter = undefined;
      this._sourceExchange = undefined;
      this._sourceExchangeKey = undefined;
      this._sourcePrefetchCount = undefined;
      this._sourceProtocol = undefined;
      this._sourceQueue = undefined;
      this._sourceUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ackMode = value.ackMode;
      this._addForwardHeaders = value.addForwardHeaders;
      this._deleteAfter = value.deleteAfter;
      this._destinationAddForwardHeaders = value.destinationAddForwardHeaders;
      this._destinationAddTimestampHeader = value.destinationAddTimestampHeader;
      this._destinationAddress = value.destinationAddress;
      this._destinationApplicationProperties = value.destinationApplicationProperties;
      this._destinationExchange = value.destinationExchange;
      this._destinationExchangeKey = value.destinationExchangeKey;
      this._destinationProperties = value.destinationProperties;
      this._destinationProtocol = value.destinationProtocol;
      this._destinationPublishProperties = value.destinationPublishProperties;
      this._destinationQueue = value.destinationQueue;
      this._destinationQueueArguments = value.destinationQueueArguments;
      this._destinationUri = value.destinationUri;
      this._prefetchCount = value.prefetchCount;
      this._reconnectDelay = value.reconnectDelay;
      this._sourceAddress = value.sourceAddress;
      this._sourceDeleteAfter = value.sourceDeleteAfter;
      this._sourceExchange = value.sourceExchange;
      this._sourceExchangeKey = value.sourceExchangeKey;
      this._sourcePrefetchCount = value.sourcePrefetchCount;
      this._sourceProtocol = value.sourceProtocol;
      this._sourceQueue = value.sourceQueue;
      this._sourceUri = value.sourceUri;
    }
  }

  // ack_mode - computed: false, optional: true, required: false
  private _ackMode?: string; 
  public get ackMode() {
    return this.getStringAttribute('ack_mode');
  }
  public set ackMode(value: string) {
    this._ackMode = value;
  }
  public resetAckMode() {
    this._ackMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackModeInput() {
    return this._ackMode;
  }

  // add_forward_headers - computed: false, optional: true, required: false
  private _addForwardHeaders?: boolean | cdktf.IResolvable; 
  public get addForwardHeaders() {
    return this.getBooleanAttribute('add_forward_headers');
  }
  public set addForwardHeaders(value: boolean | cdktf.IResolvable) {
    this._addForwardHeaders = value;
  }
  public resetAddForwardHeaders() {
    this._addForwardHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addForwardHeadersInput() {
    return this._addForwardHeaders;
  }

  // delete_after - computed: false, optional: true, required: false
  private _deleteAfter?: string; 
  public get deleteAfter() {
    return this.getStringAttribute('delete_after');
  }
  public set deleteAfter(value: string) {
    this._deleteAfter = value;
  }
  public resetDeleteAfter() {
    this._deleteAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAfterInput() {
    return this._deleteAfter;
  }

  // destination_add_forward_headers - computed: false, optional: true, required: false
  private _destinationAddForwardHeaders?: boolean | cdktf.IResolvable; 
  public get destinationAddForwardHeaders() {
    return this.getBooleanAttribute('destination_add_forward_headers');
  }
  public set destinationAddForwardHeaders(value: boolean | cdktf.IResolvable) {
    this._destinationAddForwardHeaders = value;
  }
  public resetDestinationAddForwardHeaders() {
    this._destinationAddForwardHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddForwardHeadersInput() {
    return this._destinationAddForwardHeaders;
  }

  // destination_add_timestamp_header - computed: false, optional: true, required: false
  private _destinationAddTimestampHeader?: boolean | cdktf.IResolvable; 
  public get destinationAddTimestampHeader() {
    return this.getBooleanAttribute('destination_add_timestamp_header');
  }
  public set destinationAddTimestampHeader(value: boolean | cdktf.IResolvable) {
    this._destinationAddTimestampHeader = value;
  }
  public resetDestinationAddTimestampHeader() {
    this._destinationAddTimestampHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddTimestampHeaderInput() {
    return this._destinationAddTimestampHeader;
  }

  // destination_address - computed: false, optional: true, required: false
  private _destinationAddress?: string; 
  public get destinationAddress() {
    return this.getStringAttribute('destination_address');
  }
  public set destinationAddress(value: string) {
    this._destinationAddress = value;
  }
  public resetDestinationAddress() {
    this._destinationAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressInput() {
    return this._destinationAddress;
  }

  // destination_application_properties - computed: false, optional: true, required: false
  private _destinationApplicationProperties?: { [key: string]: string }; 
  public get destinationApplicationProperties() {
    return this.getStringMapAttribute('destination_application_properties');
  }
  public set destinationApplicationProperties(value: { [key: string]: string }) {
    this._destinationApplicationProperties = value;
  }
  public resetDestinationApplicationProperties() {
    this._destinationApplicationProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationApplicationPropertiesInput() {
    return this._destinationApplicationProperties;
  }

  // destination_exchange - computed: false, optional: true, required: false
  private _destinationExchange?: string; 
  public get destinationExchange() {
    return this.getStringAttribute('destination_exchange');
  }
  public set destinationExchange(value: string) {
    this._destinationExchange = value;
  }
  public resetDestinationExchange() {
    this._destinationExchange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationExchangeInput() {
    return this._destinationExchange;
  }

  // destination_exchange_key - computed: false, optional: true, required: false
  private _destinationExchangeKey?: string; 
  public get destinationExchangeKey() {
    return this.getStringAttribute('destination_exchange_key');
  }
  public set destinationExchangeKey(value: string) {
    this._destinationExchangeKey = value;
  }
  public resetDestinationExchangeKey() {
    this._destinationExchangeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationExchangeKeyInput() {
    return this._destinationExchangeKey;
  }

  // destination_properties - computed: false, optional: true, required: false
  private _destinationProperties?: { [key: string]: string }; 
  public get destinationProperties() {
    return this.getStringMapAttribute('destination_properties');
  }
  public set destinationProperties(value: { [key: string]: string }) {
    this._destinationProperties = value;
  }
  public resetDestinationProperties() {
    this._destinationProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPropertiesInput() {
    return this._destinationProperties;
  }

  // destination_protocol - computed: false, optional: true, required: false
  private _destinationProtocol?: string; 
  public get destinationProtocol() {
    return this.getStringAttribute('destination_protocol');
  }
  public set destinationProtocol(value: string) {
    this._destinationProtocol = value;
  }
  public resetDestinationProtocol() {
    this._destinationProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationProtocolInput() {
    return this._destinationProtocol;
  }

  // destination_publish_properties - computed: false, optional: true, required: false
  private _destinationPublishProperties?: { [key: string]: string }; 
  public get destinationPublishProperties() {
    return this.getStringMapAttribute('destination_publish_properties');
  }
  public set destinationPublishProperties(value: { [key: string]: string }) {
    this._destinationPublishProperties = value;
  }
  public resetDestinationPublishProperties() {
    this._destinationPublishProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPublishPropertiesInput() {
    return this._destinationPublishProperties;
  }

  // destination_queue - computed: false, optional: true, required: false
  private _destinationQueue?: string; 
  public get destinationQueue() {
    return this.getStringAttribute('destination_queue');
  }
  public set destinationQueue(value: string) {
    this._destinationQueue = value;
  }
  public resetDestinationQueue() {
    this._destinationQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationQueueInput() {
    return this._destinationQueue;
  }

  // destination_queue_arguments - computed: false, optional: true, required: false
  private _destinationQueueArguments?: { [key: string]: string }; 
  public get destinationQueueArguments() {
    return this.getStringMapAttribute('destination_queue_arguments');
  }
  public set destinationQueueArguments(value: { [key: string]: string }) {
    this._destinationQueueArguments = value;
  }
  public resetDestinationQueueArguments() {
    this._destinationQueueArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationQueueArgumentsInput() {
    return this._destinationQueueArguments;
  }

  // destination_uri - computed: false, optional: false, required: true
  private _destinationUri?: string; 
  public get destinationUri() {
    return this.getStringAttribute('destination_uri');
  }
  public set destinationUri(value: string) {
    this._destinationUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationUriInput() {
    return this._destinationUri;
  }

  // prefetch_count - computed: false, optional: true, required: false
  private _prefetchCount?: number; 
  public get prefetchCount() {
    return this.getNumberAttribute('prefetch_count');
  }
  public set prefetchCount(value: number) {
    this._prefetchCount = value;
  }
  public resetPrefetchCount() {
    this._prefetchCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefetchCountInput() {
    return this._prefetchCount;
  }

  // reconnect_delay - computed: false, optional: true, required: false
  private _reconnectDelay?: number; 
  public get reconnectDelay() {
    return this.getNumberAttribute('reconnect_delay');
  }
  public set reconnectDelay(value: number) {
    this._reconnectDelay = value;
  }
  public resetReconnectDelay() {
    this._reconnectDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reconnectDelayInput() {
    return this._reconnectDelay;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // source_delete_after - computed: false, optional: true, required: false
  private _sourceDeleteAfter?: string; 
  public get sourceDeleteAfter() {
    return this.getStringAttribute('source_delete_after');
  }
  public set sourceDeleteAfter(value: string) {
    this._sourceDeleteAfter = value;
  }
  public resetSourceDeleteAfter() {
    this._sourceDeleteAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDeleteAfterInput() {
    return this._sourceDeleteAfter;
  }

  // source_exchange - computed: false, optional: true, required: false
  private _sourceExchange?: string; 
  public get sourceExchange() {
    return this.getStringAttribute('source_exchange');
  }
  public set sourceExchange(value: string) {
    this._sourceExchange = value;
  }
  public resetSourceExchange() {
    this._sourceExchange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceExchangeInput() {
    return this._sourceExchange;
  }

  // source_exchange_key - computed: false, optional: true, required: false
  private _sourceExchangeKey?: string; 
  public get sourceExchangeKey() {
    return this.getStringAttribute('source_exchange_key');
  }
  public set sourceExchangeKey(value: string) {
    this._sourceExchangeKey = value;
  }
  public resetSourceExchangeKey() {
    this._sourceExchangeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceExchangeKeyInput() {
    return this._sourceExchangeKey;
  }

  // source_prefetch_count - computed: false, optional: true, required: false
  private _sourcePrefetchCount?: number; 
  public get sourcePrefetchCount() {
    return this.getNumberAttribute('source_prefetch_count');
  }
  public set sourcePrefetchCount(value: number) {
    this._sourcePrefetchCount = value;
  }
  public resetSourcePrefetchCount() {
    this._sourcePrefetchCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrefetchCountInput() {
    return this._sourcePrefetchCount;
  }

  // source_protocol - computed: false, optional: true, required: false
  private _sourceProtocol?: string; 
  public get sourceProtocol() {
    return this.getStringAttribute('source_protocol');
  }
  public set sourceProtocol(value: string) {
    this._sourceProtocol = value;
  }
  public resetSourceProtocol() {
    this._sourceProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceProtocolInput() {
    return this._sourceProtocol;
  }

  // source_queue - computed: false, optional: true, required: false
  private _sourceQueue?: string; 
  public get sourceQueue() {
    return this.getStringAttribute('source_queue');
  }
  public set sourceQueue(value: string) {
    this._sourceQueue = value;
  }
  public resetSourceQueue() {
    this._sourceQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceQueueInput() {
    return this._sourceQueue;
  }

  // source_uri - computed: false, optional: false, required: true
  private _sourceUri?: string; 
  public get sourceUri() {
    return this.getStringAttribute('source_uri');
  }
  public set sourceUri(value: string) {
    this._sourceUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUriInput() {
    return this._sourceUri;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel rabbitmq_shovel}
*/
export class Shovel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rabbitmq_shovel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Shovel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Shovel to import
  * @param importFromId The id of the existing Shovel that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Shovel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rabbitmq_shovel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/shovel rabbitmq_shovel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ShovelConfig
  */
  public constructor(scope: Construct, id: string, config: ShovelConfig) {
    super(scope, id, {
      terraformResourceType: 'rabbitmq_shovel',
      terraformGeneratorMetadata: {
        providerName: 'rabbitmq',
        providerVersion: '1.10.1'
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
    this._name = config.name;
    this._vhost = config.vhost;
    this._info.internalValue = config.info;
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

  // vhost - computed: false, optional: false, required: true
  private _vhost?: string; 
  public get vhost() {
    return this.getStringAttribute('vhost');
  }
  public set vhost(value: string) {
    this._vhost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vhostInput() {
    return this._vhost;
  }

  // info - computed: false, optional: false, required: true
  private _info = new ShovelInfoOutputReference(this, "info");
  public get info() {
    return this._info;
  }
  public putInfo(value: ShovelInfo) {
    this._info.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      vhost: cdktf.stringToTerraform(this._vhost),
      info: shovelInfoToTerraform(this._info.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vhost: {
        value: cdktf.stringToHclTerraform(this._vhost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      info: {
        value: shovelInfoToHclTerraform(this._info.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ShovelInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
