// https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FleetOutputConfig extends cdktf.TerraformMetaArguments {
  /**
  * Fingerprint of the Elasticsearch CA certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#ca_sha256 FleetOutput#ca_sha256}
  */
  readonly caSha256?: string;
  /**
  * Fingerprint of trusted CA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#ca_trusted_fingerprint FleetOutput#ca_trusted_fingerprint}
  */
  readonly caTrustedFingerprint?: string;
  /**
  * Advanced YAML configuration. YAML settings here will be added to the output section of each agent policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#config_yaml FleetOutput#config_yaml}
  */
  readonly configYaml?: string;
  /**
  * Make this output the default for agent integrations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#default_integrations FleetOutput#default_integrations}
  */
  readonly defaultIntegrations?: boolean | cdktf.IResolvable;
  /**
  * Make this output the default for agent monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#default_monitoring FleetOutput#default_monitoring}
  */
  readonly defaultMonitoring?: boolean | cdktf.IResolvable;
  /**
  * A list of hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#hosts FleetOutput#hosts}
  */
  readonly hosts?: string[];
  /**
  * Kafka-specific configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#kafka FleetOutput#kafka}
  */
  readonly kafka?: FleetOutputKafka;
  /**
  * The name of the output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#name FleetOutput#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#output_id FleetOutput#output_id}
  */
  readonly outputId?: string;
  /**
  * SSL configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#ssl FleetOutput#ssl}
  */
  readonly ssl?: FleetOutputSsl;
  /**
  * The output type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#type FleetOutput#type}
  */
  readonly type: string;
}
export interface FleetOutputKafkaHash {
  /**
  * Hash field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#hash FleetOutput#hash}
  */
  readonly hash?: string;
  /**
  * Use random hash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#random FleetOutput#random}
  */
  readonly random?: boolean | cdktf.IResolvable;
}

export function fleetOutputKafkaHashToTerraform(struct?: FleetOutputKafkaHash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash: cdktf.stringToTerraform(struct!.hash),
    random: cdktf.booleanToTerraform(struct!.random),
  }
}


export function fleetOutputKafkaHashToHclTerraform(struct?: FleetOutputKafkaHash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash: {
      value: cdktf.stringToHclTerraform(struct!.hash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    random: {
      value: cdktf.booleanToHclTerraform(struct!.random),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetOutputKafkaHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FleetOutputKafkaHash | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    if (this._random !== undefined) {
      hasAnyValues = true;
      internalValueResult.random = this._random;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetOutputKafkaHash | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hash = undefined;
      this._random = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hash = value.hash;
      this._random = value.random;
    }
  }

  // hash - computed: false, optional: true, required: false
  private _hash?: string; 
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  public resetHash() {
    this._hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
  }

  // random - computed: false, optional: true, required: false
  private _random?: boolean | cdktf.IResolvable; 
  public get random() {
    return this.getBooleanAttribute('random');
  }
  public set random(value: boolean | cdktf.IResolvable) {
    this._random = value;
  }
  public resetRandom() {
    this._random = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomInput() {
    return this._random;
  }
}
export interface FleetOutputKafkaHeaders {
  /**
  * Header key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#key FleetOutput#key}
  */
  readonly key: string;
  /**
  * Header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#value FleetOutput#value}
  */
  readonly value: string;
}

export function fleetOutputKafkaHeadersToTerraform(struct?: FleetOutputKafkaHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function fleetOutputKafkaHeadersToHclTerraform(struct?: FleetOutputKafkaHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class FleetOutputKafkaHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetOutputKafkaHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetOutputKafkaHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class FleetOutputKafkaHeadersList extends cdktf.ComplexList {
  public internalValue? : FleetOutputKafkaHeaders[] | cdktf.IResolvable

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
  public get(index: number): FleetOutputKafkaHeadersOutputReference {
    return new FleetOutputKafkaHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetOutputKafkaRandom {
  /**
  * Number of events to group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#group_events FleetOutput#group_events}
  */
  readonly groupEvents?: number;
}

export function fleetOutputKafkaRandomToTerraform(struct?: FleetOutputKafkaRandom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_events: cdktf.numberToTerraform(struct!.groupEvents),
  }
}


export function fleetOutputKafkaRandomToHclTerraform(struct?: FleetOutputKafkaRandom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_events: {
      value: cdktf.numberToHclTerraform(struct!.groupEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetOutputKafkaRandomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FleetOutputKafkaRandom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupEvents = this._groupEvents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetOutputKafkaRandom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupEvents = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupEvents = value.groupEvents;
    }
  }

  // group_events - computed: false, optional: true, required: false
  private _groupEvents?: number; 
  public get groupEvents() {
    return this.getNumberAttribute('group_events');
  }
  public set groupEvents(value: number) {
    this._groupEvents = value;
  }
  public resetGroupEvents() {
    this._groupEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupEventsInput() {
    return this._groupEvents;
  }
}
export interface FleetOutputKafkaRoundRobin {
  /**
  * Number of events to group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#group_events FleetOutput#group_events}
  */
  readonly groupEvents?: number;
}

export function fleetOutputKafkaRoundRobinToTerraform(struct?: FleetOutputKafkaRoundRobin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_events: cdktf.numberToTerraform(struct!.groupEvents),
  }
}


export function fleetOutputKafkaRoundRobinToHclTerraform(struct?: FleetOutputKafkaRoundRobin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_events: {
      value: cdktf.numberToHclTerraform(struct!.groupEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetOutputKafkaRoundRobinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FleetOutputKafkaRoundRobin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupEvents = this._groupEvents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetOutputKafkaRoundRobin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupEvents = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupEvents = value.groupEvents;
    }
  }

  // group_events - computed: false, optional: true, required: false
  private _groupEvents?: number; 
  public get groupEvents() {
    return this.getNumberAttribute('group_events');
  }
  public set groupEvents(value: number) {
    this._groupEvents = value;
  }
  public resetGroupEvents() {
    this._groupEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupEventsInput() {
    return this._groupEvents;
  }
}
export interface FleetOutputKafkaSasl {
  /**
  * SASL mechanism.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#mechanism FleetOutput#mechanism}
  */
  readonly mechanism?: string;
}

export function fleetOutputKafkaSaslToTerraform(struct?: FleetOutputKafkaSasl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mechanism: cdktf.stringToTerraform(struct!.mechanism),
  }
}


export function fleetOutputKafkaSaslToHclTerraform(struct?: FleetOutputKafkaSasl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mechanism: {
      value: cdktf.stringToHclTerraform(struct!.mechanism),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetOutputKafkaSaslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FleetOutputKafkaSasl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.mechanism = this._mechanism;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetOutputKafkaSasl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mechanism = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mechanism = value.mechanism;
    }
  }

  // mechanism - computed: false, optional: true, required: false
  private _mechanism?: string; 
  public get mechanism() {
    return this.getStringAttribute('mechanism');
  }
  public set mechanism(value: string) {
    this._mechanism = value;
  }
  public resetMechanism() {
    this._mechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mechanismInput() {
    return this._mechanism;
  }
}
export interface FleetOutputKafka {
  /**
  * Authentication type for Kafka output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#auth_type FleetOutput#auth_type}
  */
  readonly authType?: string;
  /**
  * Kafka broker timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#broker_timeout FleetOutput#broker_timeout}
  */
  readonly brokerTimeout?: number;
  /**
  * Kafka client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#client_id FleetOutput#client_id}
  */
  readonly clientId?: string;
  /**
  * Compression type for Kafka output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#compression FleetOutput#compression}
  */
  readonly compression?: string;
  /**
  * Compression level for Kafka output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#compression_level FleetOutput#compression_level}
  */
  readonly compressionLevel?: number;
  /**
  * Connection type for Kafka output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#connection_type FleetOutput#connection_type}
  */
  readonly connectionType?: string;
  /**
  * Hash configuration for Kafka partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#hash FleetOutput#hash}
  */
  readonly hash?: FleetOutputKafkaHash;
  /**
  * Headers for Kafka messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#headers FleetOutput#headers}
  */
  readonly headers?: FleetOutputKafkaHeaders[] | cdktf.IResolvable;
  /**
  * Key field for Kafka messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#key FleetOutput#key}
  */
  readonly key?: string;
  /**
  * Partition strategy for Kafka output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#partition FleetOutput#partition}
  */
  readonly partition?: string;
  /**
  * Password for Kafka authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#password FleetOutput#password}
  */
  readonly password?: string;
  /**
  * Random configuration for Kafka partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#random FleetOutput#random}
  */
  readonly random?: FleetOutputKafkaRandom;
  /**
  * Number of acknowledgments required for Kafka output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#required_acks FleetOutput#required_acks}
  */
  readonly requiredAcks?: number;
  /**
  * Round robin configuration for Kafka partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#round_robin FleetOutput#round_robin}
  */
  readonly roundRobin?: FleetOutputKafkaRoundRobin;
  /**
  * SASL configuration for Kafka authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#sasl FleetOutput#sasl}
  */
  readonly sasl?: FleetOutputKafkaSasl;
  /**
  * Timeout for Kafka output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#timeout FleetOutput#timeout}
  */
  readonly timeout?: number;
  /**
  * Kafka topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#topic FleetOutput#topic}
  */
  readonly topic?: string;
  /**
  * Username for Kafka authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#username FleetOutput#username}
  */
  readonly username?: string;
  /**
  * Kafka version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#version FleetOutput#version}
  */
  readonly version?: string;
}

export function fleetOutputKafkaToTerraform(struct?: FleetOutputKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    broker_timeout: cdktf.numberToTerraform(struct!.brokerTimeout),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    compression: cdktf.stringToTerraform(struct!.compression),
    compression_level: cdktf.numberToTerraform(struct!.compressionLevel),
    connection_type: cdktf.stringToTerraform(struct!.connectionType),
    hash: fleetOutputKafkaHashToTerraform(struct!.hash),
    headers: cdktf.listMapper(fleetOutputKafkaHeadersToTerraform, false)(struct!.headers),
    key: cdktf.stringToTerraform(struct!.key),
    partition: cdktf.stringToTerraform(struct!.partition),
    password: cdktf.stringToTerraform(struct!.password),
    random: fleetOutputKafkaRandomToTerraform(struct!.random),
    required_acks: cdktf.numberToTerraform(struct!.requiredAcks),
    round_robin: fleetOutputKafkaRoundRobinToTerraform(struct!.roundRobin),
    sasl: fleetOutputKafkaSaslToTerraform(struct!.sasl),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    topic: cdktf.stringToTerraform(struct!.topic),
    username: cdktf.stringToTerraform(struct!.username),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function fleetOutputKafkaToHclTerraform(struct?: FleetOutputKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    broker_timeout: {
      value: cdktf.numberToHclTerraform(struct!.brokerTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression: {
      value: cdktf.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_level: {
      value: cdktf.numberToHclTerraform(struct!.compressionLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_type: {
      value: cdktf.stringToHclTerraform(struct!.connectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash: {
      value: fleetOutputKafkaHashToHclTerraform(struct!.hash),
      isBlock: true,
      type: "struct",
      storageClassType: "FleetOutputKafkaHash",
    },
    headers: {
      value: cdktf.listMapperHcl(fleetOutputKafkaHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "FleetOutputKafkaHeadersList",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktf.stringToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    random: {
      value: fleetOutputKafkaRandomToHclTerraform(struct!.random),
      isBlock: true,
      type: "struct",
      storageClassType: "FleetOutputKafkaRandom",
    },
    required_acks: {
      value: cdktf.numberToHclTerraform(struct!.requiredAcks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    round_robin: {
      value: fleetOutputKafkaRoundRobinToHclTerraform(struct!.roundRobin),
      isBlock: true,
      type: "struct",
      storageClassType: "FleetOutputKafkaRoundRobin",
    },
    sasl: {
      value: fleetOutputKafkaSaslToHclTerraform(struct!.sasl),
      isBlock: true,
      type: "struct",
      storageClassType: "FleetOutputKafkaSasl",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
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

export class FleetOutputKafkaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FleetOutputKafka | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._brokerTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokerTimeout = this._brokerTimeout;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._compressionLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionLevel = this._compressionLevel;
    }
    if (this._connectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionType = this._connectionType;
    }
    if (this._hash?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._random?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.random = this._random?.internalValue;
    }
    if (this._requiredAcks !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredAcks = this._requiredAcks;
    }
    if (this._roundRobin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roundRobin = this._roundRobin?.internalValue;
    }
    if (this._sasl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasl = this._sasl?.internalValue;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetOutputKafka | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._brokerTimeout = undefined;
      this._clientId = undefined;
      this._compression = undefined;
      this._compressionLevel = undefined;
      this._connectionType = undefined;
      this._hash.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._key = undefined;
      this._partition = undefined;
      this._password = undefined;
      this._random.internalValue = undefined;
      this._requiredAcks = undefined;
      this._roundRobin.internalValue = undefined;
      this._sasl.internalValue = undefined;
      this._timeout = undefined;
      this._topic = undefined;
      this._username = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._brokerTimeout = value.brokerTimeout;
      this._clientId = value.clientId;
      this._compression = value.compression;
      this._compressionLevel = value.compressionLevel;
      this._connectionType = value.connectionType;
      this._hash.internalValue = value.hash;
      this._headers.internalValue = value.headers;
      this._key = value.key;
      this._partition = value.partition;
      this._password = value.password;
      this._random.internalValue = value.random;
      this._requiredAcks = value.requiredAcks;
      this._roundRobin.internalValue = value.roundRobin;
      this._sasl.internalValue = value.sasl;
      this._timeout = value.timeout;
      this._topic = value.topic;
      this._username = value.username;
      this._version = value.version;
    }
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // broker_timeout - computed: true, optional: true, required: false
  private _brokerTimeout?: number; 
  public get brokerTimeout() {
    return this.getNumberAttribute('broker_timeout');
  }
  public set brokerTimeout(value: number) {
    this._brokerTimeout = value;
  }
  public resetBrokerTimeout() {
    this._brokerTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerTimeoutInput() {
    return this._brokerTimeout;
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // compression_level - computed: true, optional: true, required: false
  private _compressionLevel?: number; 
  public get compressionLevel() {
    return this.getNumberAttribute('compression_level');
  }
  public set compressionLevel(value: number) {
    this._compressionLevel = value;
  }
  public resetCompressionLevel() {
    this._compressionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionLevelInput() {
    return this._compressionLevel;
  }

  // connection_type - computed: false, optional: true, required: false
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  public resetConnectionType() {
    this._connectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // hash - computed: false, optional: true, required: false
  private _hash = new FleetOutputKafkaHashOutputReference(this, "hash");
  public get hash() {
    return this._hash;
  }
  public putHash(value: FleetOutputKafkaHash) {
    this._hash.internalValue = value;
  }
  public resetHash() {
    this._hash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash.internalValue;
  }

  // headers - computed: true, optional: true, required: false
  private _headers = new FleetOutputKafkaHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: FleetOutputKafkaHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // random - computed: false, optional: true, required: false
  private _random = new FleetOutputKafkaRandomOutputReference(this, "random");
  public get random() {
    return this._random;
  }
  public putRandom(value: FleetOutputKafkaRandom) {
    this._random.internalValue = value;
  }
  public resetRandom() {
    this._random.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomInput() {
    return this._random.internalValue;
  }

  // required_acks - computed: false, optional: true, required: false
  private _requiredAcks?: number; 
  public get requiredAcks() {
    return this.getNumberAttribute('required_acks');
  }
  public set requiredAcks(value: number) {
    this._requiredAcks = value;
  }
  public resetRequiredAcks() {
    this._requiredAcks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredAcksInput() {
    return this._requiredAcks;
  }

  // round_robin - computed: false, optional: true, required: false
  private _roundRobin = new FleetOutputKafkaRoundRobinOutputReference(this, "round_robin");
  public get roundRobin() {
    return this._roundRobin;
  }
  public putRoundRobin(value: FleetOutputKafkaRoundRobin) {
    this._roundRobin.internalValue = value;
  }
  public resetRoundRobin() {
    this._roundRobin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roundRobinInput() {
    return this._roundRobin.internalValue;
  }

  // sasl - computed: false, optional: true, required: false
  private _sasl = new FleetOutputKafkaSaslOutputReference(this, "sasl");
  public get sasl() {
    return this._sasl;
  }
  public putSasl(value: FleetOutputKafkaSasl) {
    this._sasl.internalValue = value;
  }
  public resetSasl() {
    this._sasl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslInput() {
    return this._sasl.internalValue;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface FleetOutputSsl {
  /**
  * Client SSL certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#certificate FleetOutput#certificate}
  */
  readonly certificate: string;
  /**
  * Server SSL certificate authorities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#certificate_authorities FleetOutput#certificate_authorities}
  */
  readonly certificateAuthorities?: string[];
  /**
  * Client SSL certificate key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#key FleetOutput#key}
  */
  readonly key: string;
}

export function fleetOutputSslToTerraform(struct?: FleetOutputSsl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_authorities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certificateAuthorities),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function fleetOutputSslToHclTerraform(struct?: FleetOutputSsl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_authorities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.certificateAuthorities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetOutputSslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FleetOutputSsl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._certificateAuthorities !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthorities = this._certificateAuthorities;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetOutputSsl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._certificateAuthorities = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._certificateAuthorities = value.certificateAuthorities;
      this._key = value.key;
    }
  }

  // certificate - computed: false, optional: false, required: true
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // certificate_authorities - computed: false, optional: true, required: false
  private _certificateAuthorities?: string[]; 
  public get certificateAuthorities() {
    return this.getListAttribute('certificate_authorities');
  }
  public set certificateAuthorities(value: string[]) {
    this._certificateAuthorities = value;
  }
  public resetCertificateAuthorities() {
    this._certificateAuthorities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthoritiesInput() {
    return this._certificateAuthorities;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output elasticstack_fleet_output}
*/
export class FleetOutput extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_fleet_output";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FleetOutput resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FleetOutput to import
  * @param importFromId The id of the existing FleetOutput that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FleetOutput to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_fleet_output", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/fleet_output elasticstack_fleet_output} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FleetOutputConfig
  */
  public constructor(scope: Construct, id: string, config: FleetOutputConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_fleet_output',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.12.1',
        providerVersionConstraint: '0.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caSha256 = config.caSha256;
    this._caTrustedFingerprint = config.caTrustedFingerprint;
    this._configYaml = config.configYaml;
    this._defaultIntegrations = config.defaultIntegrations;
    this._defaultMonitoring = config.defaultMonitoring;
    this._hosts = config.hosts;
    this._kafka.internalValue = config.kafka;
    this._name = config.name;
    this._outputId = config.outputId;
    this._ssl.internalValue = config.ssl;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_sha256 - computed: false, optional: true, required: false
  private _caSha256?: string; 
  public get caSha256() {
    return this.getStringAttribute('ca_sha256');
  }
  public set caSha256(value: string) {
    this._caSha256 = value;
  }
  public resetCaSha256() {
    this._caSha256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caSha256Input() {
    return this._caSha256;
  }

  // ca_trusted_fingerprint - computed: false, optional: true, required: false
  private _caTrustedFingerprint?: string; 
  public get caTrustedFingerprint() {
    return this.getStringAttribute('ca_trusted_fingerprint');
  }
  public set caTrustedFingerprint(value: string) {
    this._caTrustedFingerprint = value;
  }
  public resetCaTrustedFingerprint() {
    this._caTrustedFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caTrustedFingerprintInput() {
    return this._caTrustedFingerprint;
  }

  // config_yaml - computed: false, optional: true, required: false
  private _configYaml?: string; 
  public get configYaml() {
    return this.getStringAttribute('config_yaml');
  }
  public set configYaml(value: string) {
    this._configYaml = value;
  }
  public resetConfigYaml() {
    this._configYaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configYamlInput() {
    return this._configYaml;
  }

  // default_integrations - computed: true, optional: true, required: false
  private _defaultIntegrations?: boolean | cdktf.IResolvable; 
  public get defaultIntegrations() {
    return this.getBooleanAttribute('default_integrations');
  }
  public set defaultIntegrations(value: boolean | cdktf.IResolvable) {
    this._defaultIntegrations = value;
  }
  public resetDefaultIntegrations() {
    this._defaultIntegrations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultIntegrationsInput() {
    return this._defaultIntegrations;
  }

  // default_monitoring - computed: true, optional: true, required: false
  private _defaultMonitoring?: boolean | cdktf.IResolvable; 
  public get defaultMonitoring() {
    return this.getBooleanAttribute('default_monitoring');
  }
  public set defaultMonitoring(value: boolean | cdktf.IResolvable) {
    this._defaultMonitoring = value;
  }
  public resetDefaultMonitoring() {
    this._defaultMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMonitoringInput() {
    return this._defaultMonitoring;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka = new FleetOutputKafkaOutputReference(this, "kafka");
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: FleetOutputKafka) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
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

  // output_id - computed: true, optional: true, required: false
  private _outputId?: string; 
  public get outputId() {
    return this.getStringAttribute('output_id');
  }
  public set outputId(value: string) {
    this._outputId = value;
  }
  public resetOutputId() {
    this._outputId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputIdInput() {
    return this._outputId;
  }

  // ssl - computed: false, optional: true, required: false
  private _ssl = new FleetOutputSslOutputReference(this, "ssl");
  public get ssl() {
    return this._ssl;
  }
  public putSsl(value: FleetOutputSsl) {
    this._ssl.internalValue = value;
  }
  public resetSsl() {
    this._ssl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_sha256: cdktf.stringToTerraform(this._caSha256),
      ca_trusted_fingerprint: cdktf.stringToTerraform(this._caTrustedFingerprint),
      config_yaml: cdktf.stringToTerraform(this._configYaml),
      default_integrations: cdktf.booleanToTerraform(this._defaultIntegrations),
      default_monitoring: cdktf.booleanToTerraform(this._defaultMonitoring),
      hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hosts),
      kafka: fleetOutputKafkaToTerraform(this._kafka.internalValue),
      name: cdktf.stringToTerraform(this._name),
      output_id: cdktf.stringToTerraform(this._outputId),
      ssl: fleetOutputSslToTerraform(this._ssl.internalValue),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_sha256: {
        value: cdktf.stringToHclTerraform(this._caSha256),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_trusted_fingerprint: {
        value: cdktf.stringToHclTerraform(this._caTrustedFingerprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_yaml: {
        value: cdktf.stringToHclTerraform(this._configYaml),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_integrations: {
        value: cdktf.booleanToHclTerraform(this._defaultIntegrations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_monitoring: {
        value: cdktf.booleanToHclTerraform(this._defaultMonitoring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hosts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      kafka: {
        value: fleetOutputKafkaToHclTerraform(this._kafka.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FleetOutputKafka",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_id: {
        value: cdktf.stringToHclTerraform(this._outputId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl: {
        value: fleetOutputSslToHclTerraform(this._ssl.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FleetOutputSsl",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
