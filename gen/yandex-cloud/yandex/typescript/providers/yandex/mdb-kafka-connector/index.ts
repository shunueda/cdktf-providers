// https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdbKafkaConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Kafka cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#cluster_id MdbKafkaConnector#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#id MdbKafkaConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#name MdbKafkaConnector#name}
  */
  readonly name: string;
  /**
  * Additional properties for connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#properties MdbKafkaConnector#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * The number of the connector's parallel working tasks. Default is the number of brokers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#tasks_max MdbKafkaConnector#tasks_max}
  */
  readonly tasksMax?: number;
  /**
  * connector_config_mirrormaker block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#connector_config_mirrormaker MdbKafkaConnector#connector_config_mirrormaker}
  */
  readonly connectorConfigMirrormaker?: MdbKafkaConnectorConnectorConfigMirrormaker[] | cdktf.IResolvable;
  /**
  * connector_config_s3_sink block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#connector_config_s3_sink MdbKafkaConnector#connector_config_s3_sink}
  */
  readonly connectorConfigS3Sink?: MdbKafkaConnectorConnectorConfigS3Sink[] | cdktf.IResolvable;
}
export interface MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalCluster {
  /**
  * List of bootstrap servers to connect to cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#bootstrap_servers MdbKafkaConnector#bootstrap_servers}
  */
  readonly bootstrapServers: string;
  /**
  * Type of SASL authentification mechanism to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#sasl_mechanism MdbKafkaConnector#sasl_mechanism}
  */
  readonly saslMechanism?: string;
  /**
  * Password to use in SASL authentification mechanism
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#sasl_password MdbKafkaConnector#sasl_password}
  */
  readonly saslPassword?: string;
  /**
  * Username to use in SASL authentification mechanism.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#sasl_username MdbKafkaConnector#sasl_username}
  */
  readonly saslUsername?: string;
  /**
  * Security protocol to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#security_protocol MdbKafkaConnector#security_protocol}
  */
  readonly securityProtocol?: string;
}

export function mdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalClusterToTerraform(struct?: MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bootstrap_servers: cdktf.stringToTerraform(struct!.bootstrapServers),
    sasl_mechanism: cdktf.stringToTerraform(struct!.saslMechanism),
    sasl_password: cdktf.stringToTerraform(struct!.saslPassword),
    sasl_username: cdktf.stringToTerraform(struct!.saslUsername),
    security_protocol: cdktf.stringToTerraform(struct!.securityProtocol),
  }
}


export function mdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalClusterToHclTerraform(struct?: MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bootstrap_servers: {
      value: cdktf.stringToHclTerraform(struct!.bootstrapServers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_mechanism: {
      value: cdktf.stringToHclTerraform(struct!.saslMechanism),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_password: {
      value: cdktf.stringToHclTerraform(struct!.saslPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_username: {
      value: cdktf.stringToHclTerraform(struct!.saslUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_protocol: {
      value: cdktf.stringToHclTerraform(struct!.securityProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootstrapServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapServers = this._bootstrapServers;
    }
    if (this._saslMechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslMechanism = this._saslMechanism;
    }
    if (this._saslPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslPassword = this._saslPassword;
    }
    if (this._saslUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslUsername = this._saslUsername;
    }
    if (this._securityProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProtocol = this._securityProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootstrapServers = undefined;
      this._saslMechanism = undefined;
      this._saslPassword = undefined;
      this._saslUsername = undefined;
      this._securityProtocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootstrapServers = value.bootstrapServers;
      this._saslMechanism = value.saslMechanism;
      this._saslPassword = value.saslPassword;
      this._saslUsername = value.saslUsername;
      this._securityProtocol = value.securityProtocol;
    }
  }

  // bootstrap_servers - computed: false, optional: false, required: true
  private _bootstrapServers?: string; 
  public get bootstrapServers() {
    return this.getStringAttribute('bootstrap_servers');
  }
  public set bootstrapServers(value: string) {
    this._bootstrapServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapServersInput() {
    return this._bootstrapServers;
  }

  // sasl_mechanism - computed: false, optional: true, required: false
  private _saslMechanism?: string; 
  public get saslMechanism() {
    return this.getStringAttribute('sasl_mechanism');
  }
  public set saslMechanism(value: string) {
    this._saslMechanism = value;
  }
  public resetSaslMechanism() {
    this._saslMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslMechanismInput() {
    return this._saslMechanism;
  }

  // sasl_password - computed: false, optional: true, required: false
  private _saslPassword?: string; 
  public get saslPassword() {
    return this.getStringAttribute('sasl_password');
  }
  public set saslPassword(value: string) {
    this._saslPassword = value;
  }
  public resetSaslPassword() {
    this._saslPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslPasswordInput() {
    return this._saslPassword;
  }

  // sasl_username - computed: false, optional: true, required: false
  private _saslUsername?: string; 
  public get saslUsername() {
    return this.getStringAttribute('sasl_username');
  }
  public set saslUsername(value: string) {
    this._saslUsername = value;
  }
  public resetSaslUsername() {
    this._saslUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslUsernameInput() {
    return this._saslUsername;
  }

  // security_protocol - computed: false, optional: true, required: false
  private _securityProtocol?: string; 
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }
  public set securityProtocol(value: string) {
    this._securityProtocol = value;
  }
  public resetSecurityProtocol() {
    this._securityProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProtocolInput() {
    return this._securityProtocol;
  }
}

export class MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalClusterList extends cdktf.ComplexList {
  public internalValue? : MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalCluster[] | cdktf.IResolvable

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
  public get(index: number): MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalClusterOutputReference {
    return new MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisCluster {
}

export function mdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisClusterToTerraform(struct?: MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisClusterToHclTerraform(struct?: MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisCluster | cdktf.IResolvable | undefined) {
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
}

export class MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisClusterList extends cdktf.ComplexList {
  public internalValue? : MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisCluster[] | cdktf.IResolvable

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
  public get(index: number): MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisClusterOutputReference {
    return new MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbKafkaConnectorConnectorConfigMirrormakerSourceCluster {
  /**
  * Name of the cluster. Used also as a topic prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#alias MdbKafkaConnector#alias}
  */
  readonly alias?: string;
  /**
  * external_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#external_cluster MdbKafkaConnector#external_cluster}
  */
  readonly externalCluster?: MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalCluster[] | cdktf.IResolvable;
  /**
  * this_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#this_cluster MdbKafkaConnector#this_cluster}
  */
  readonly thisCluster?: MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisCluster[] | cdktf.IResolvable;
}

export function mdbKafkaConnectorConnectorConfigMirrormakerSourceClusterToTerraform(struct?: MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterOutputReference | MdbKafkaConnectorConnectorConfigMirrormakerSourceCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    external_cluster: cdktf.listMapper(mdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalClusterToTerraform, true)(struct!.externalCluster),
    this_cluster: cdktf.listMapper(mdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisClusterToTerraform, true)(struct!.thisCluster),
  }
}


export function mdbKafkaConnectorConnectorConfigMirrormakerSourceClusterToHclTerraform(struct?: MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterOutputReference | MdbKafkaConnectorConnectorConfigMirrormakerSourceCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_cluster: {
      value: cdktf.listMapperHcl(mdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalClusterToHclTerraform, true)(struct!.externalCluster),
      isBlock: true,
      type: "list",
      storageClassType: "MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalClusterList",
    },
    this_cluster: {
      value: cdktf.listMapperHcl(mdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisClusterToHclTerraform, true)(struct!.thisCluster),
      isBlock: true,
      type: "list",
      storageClassType: "MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisClusterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbKafkaConnectorConnectorConfigMirrormakerSourceCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._externalCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalCluster = this._externalCluster?.internalValue;
    }
    if (this._thisCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thisCluster = this._thisCluster?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbKafkaConnectorConnectorConfigMirrormakerSourceCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alias = undefined;
      this._externalCluster.internalValue = undefined;
      this._thisCluster.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alias = value.alias;
      this._externalCluster.internalValue = value.externalCluster;
      this._thisCluster.internalValue = value.thisCluster;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // external_cluster - computed: false, optional: true, required: false
  private _externalCluster = new MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalClusterList(this, "external_cluster", false);
  public get externalCluster() {
    return this._externalCluster;
  }
  public putExternalCluster(value: MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterExternalCluster[] | cdktf.IResolvable) {
    this._externalCluster.internalValue = value;
  }
  public resetExternalCluster() {
    this._externalCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalClusterInput() {
    return this._externalCluster.internalValue;
  }

  // this_cluster - computed: false, optional: true, required: false
  private _thisCluster = new MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisClusterList(this, "this_cluster", false);
  public get thisCluster() {
    return this._thisCluster;
  }
  public putThisCluster(value: MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterThisCluster[] | cdktf.IResolvable) {
    this._thisCluster.internalValue = value;
  }
  public resetThisCluster() {
    this._thisCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thisClusterInput() {
    return this._thisCluster.internalValue;
  }
}
export interface MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalCluster {
  /**
  * List of bootstrap servers to connect to cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#bootstrap_servers MdbKafkaConnector#bootstrap_servers}
  */
  readonly bootstrapServers: string;
  /**
  * Type of SASL authentification mechanism to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#sasl_mechanism MdbKafkaConnector#sasl_mechanism}
  */
  readonly saslMechanism?: string;
  /**
  * Password to use in SASL authentification mechanism
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#sasl_password MdbKafkaConnector#sasl_password}
  */
  readonly saslPassword?: string;
  /**
  * Username to use in SASL authentification mechanism.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#sasl_username MdbKafkaConnector#sasl_username}
  */
  readonly saslUsername?: string;
  /**
  * Security protocol to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#security_protocol MdbKafkaConnector#security_protocol}
  */
  readonly securityProtocol?: string;
}

export function mdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalClusterToTerraform(struct?: MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bootstrap_servers: cdktf.stringToTerraform(struct!.bootstrapServers),
    sasl_mechanism: cdktf.stringToTerraform(struct!.saslMechanism),
    sasl_password: cdktf.stringToTerraform(struct!.saslPassword),
    sasl_username: cdktf.stringToTerraform(struct!.saslUsername),
    security_protocol: cdktf.stringToTerraform(struct!.securityProtocol),
  }
}


export function mdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalClusterToHclTerraform(struct?: MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bootstrap_servers: {
      value: cdktf.stringToHclTerraform(struct!.bootstrapServers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_mechanism: {
      value: cdktf.stringToHclTerraform(struct!.saslMechanism),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_password: {
      value: cdktf.stringToHclTerraform(struct!.saslPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_username: {
      value: cdktf.stringToHclTerraform(struct!.saslUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_protocol: {
      value: cdktf.stringToHclTerraform(struct!.securityProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootstrapServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapServers = this._bootstrapServers;
    }
    if (this._saslMechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslMechanism = this._saslMechanism;
    }
    if (this._saslPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslPassword = this._saslPassword;
    }
    if (this._saslUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslUsername = this._saslUsername;
    }
    if (this._securityProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProtocol = this._securityProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootstrapServers = undefined;
      this._saslMechanism = undefined;
      this._saslPassword = undefined;
      this._saslUsername = undefined;
      this._securityProtocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootstrapServers = value.bootstrapServers;
      this._saslMechanism = value.saslMechanism;
      this._saslPassword = value.saslPassword;
      this._saslUsername = value.saslUsername;
      this._securityProtocol = value.securityProtocol;
    }
  }

  // bootstrap_servers - computed: false, optional: false, required: true
  private _bootstrapServers?: string; 
  public get bootstrapServers() {
    return this.getStringAttribute('bootstrap_servers');
  }
  public set bootstrapServers(value: string) {
    this._bootstrapServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapServersInput() {
    return this._bootstrapServers;
  }

  // sasl_mechanism - computed: false, optional: true, required: false
  private _saslMechanism?: string; 
  public get saslMechanism() {
    return this.getStringAttribute('sasl_mechanism');
  }
  public set saslMechanism(value: string) {
    this._saslMechanism = value;
  }
  public resetSaslMechanism() {
    this._saslMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslMechanismInput() {
    return this._saslMechanism;
  }

  // sasl_password - computed: false, optional: true, required: false
  private _saslPassword?: string; 
  public get saslPassword() {
    return this.getStringAttribute('sasl_password');
  }
  public set saslPassword(value: string) {
    this._saslPassword = value;
  }
  public resetSaslPassword() {
    this._saslPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslPasswordInput() {
    return this._saslPassword;
  }

  // sasl_username - computed: false, optional: true, required: false
  private _saslUsername?: string; 
  public get saslUsername() {
    return this.getStringAttribute('sasl_username');
  }
  public set saslUsername(value: string) {
    this._saslUsername = value;
  }
  public resetSaslUsername() {
    this._saslUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslUsernameInput() {
    return this._saslUsername;
  }

  // security_protocol - computed: false, optional: true, required: false
  private _securityProtocol?: string; 
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }
  public set securityProtocol(value: string) {
    this._securityProtocol = value;
  }
  public resetSecurityProtocol() {
    this._securityProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProtocolInput() {
    return this._securityProtocol;
  }
}

export class MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalClusterList extends cdktf.ComplexList {
  public internalValue? : MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalCluster[] | cdktf.IResolvable

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
  public get(index: number): MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalClusterOutputReference {
    return new MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisCluster {
}

export function mdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisClusterToTerraform(struct?: MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisClusterToHclTerraform(struct?: MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisCluster | cdktf.IResolvable | undefined) {
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
}

export class MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisClusterList extends cdktf.ComplexList {
  public internalValue? : MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisCluster[] | cdktf.IResolvable

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
  public get(index: number): MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisClusterOutputReference {
    return new MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbKafkaConnectorConnectorConfigMirrormakerTargetCluster {
  /**
  * Name of the cluster. Used also as a topic prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#alias MdbKafkaConnector#alias}
  */
  readonly alias?: string;
  /**
  * external_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#external_cluster MdbKafkaConnector#external_cluster}
  */
  readonly externalCluster?: MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalCluster[] | cdktf.IResolvable;
  /**
  * this_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#this_cluster MdbKafkaConnector#this_cluster}
  */
  readonly thisCluster?: MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisCluster[] | cdktf.IResolvable;
}

export function mdbKafkaConnectorConnectorConfigMirrormakerTargetClusterToTerraform(struct?: MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterOutputReference | MdbKafkaConnectorConnectorConfigMirrormakerTargetCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    external_cluster: cdktf.listMapper(mdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalClusterToTerraform, true)(struct!.externalCluster),
    this_cluster: cdktf.listMapper(mdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisClusterToTerraform, true)(struct!.thisCluster),
  }
}


export function mdbKafkaConnectorConnectorConfigMirrormakerTargetClusterToHclTerraform(struct?: MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterOutputReference | MdbKafkaConnectorConnectorConfigMirrormakerTargetCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_cluster: {
      value: cdktf.listMapperHcl(mdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalClusterToHclTerraform, true)(struct!.externalCluster),
      isBlock: true,
      type: "list",
      storageClassType: "MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalClusterList",
    },
    this_cluster: {
      value: cdktf.listMapperHcl(mdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisClusterToHclTerraform, true)(struct!.thisCluster),
      isBlock: true,
      type: "list",
      storageClassType: "MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisClusterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbKafkaConnectorConnectorConfigMirrormakerTargetCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._externalCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalCluster = this._externalCluster?.internalValue;
    }
    if (this._thisCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thisCluster = this._thisCluster?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbKafkaConnectorConnectorConfigMirrormakerTargetCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alias = undefined;
      this._externalCluster.internalValue = undefined;
      this._thisCluster.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alias = value.alias;
      this._externalCluster.internalValue = value.externalCluster;
      this._thisCluster.internalValue = value.thisCluster;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // external_cluster - computed: false, optional: true, required: false
  private _externalCluster = new MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalClusterList(this, "external_cluster", false);
  public get externalCluster() {
    return this._externalCluster;
  }
  public putExternalCluster(value: MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterExternalCluster[] | cdktf.IResolvable) {
    this._externalCluster.internalValue = value;
  }
  public resetExternalCluster() {
    this._externalCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalClusterInput() {
    return this._externalCluster.internalValue;
  }

  // this_cluster - computed: false, optional: true, required: false
  private _thisCluster = new MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisClusterList(this, "this_cluster", false);
  public get thisCluster() {
    return this._thisCluster;
  }
  public putThisCluster(value: MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterThisCluster[] | cdktf.IResolvable) {
    this._thisCluster.internalValue = value;
  }
  public resetThisCluster() {
    this._thisCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thisClusterInput() {
    return this._thisCluster.internalValue;
  }
}
export interface MdbKafkaConnectorConnectorConfigMirrormaker {
  /**
  * Replication factor for topics created in target cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#replication_factor MdbKafkaConnector#replication_factor}
  */
  readonly replicationFactor: number;
  /**
  * The pattern for topic names to be replicated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#topics MdbKafkaConnector#topics}
  */
  readonly topics: string;
  /**
  * source_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#source_cluster MdbKafkaConnector#source_cluster}
  */
  readonly sourceCluster: MdbKafkaConnectorConnectorConfigMirrormakerSourceCluster;
  /**
  * target_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#target_cluster MdbKafkaConnector#target_cluster}
  */
  readonly targetCluster: MdbKafkaConnectorConnectorConfigMirrormakerTargetCluster;
}

export function mdbKafkaConnectorConnectorConfigMirrormakerToTerraform(struct?: MdbKafkaConnectorConnectorConfigMirrormaker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replication_factor: cdktf.numberToTerraform(struct!.replicationFactor),
    topics: cdktf.stringToTerraform(struct!.topics),
    source_cluster: mdbKafkaConnectorConnectorConfigMirrormakerSourceClusterToTerraform(struct!.sourceCluster),
    target_cluster: mdbKafkaConnectorConnectorConfigMirrormakerTargetClusterToTerraform(struct!.targetCluster),
  }
}


export function mdbKafkaConnectorConnectorConfigMirrormakerToHclTerraform(struct?: MdbKafkaConnectorConnectorConfigMirrormaker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    replication_factor: {
      value: cdktf.numberToHclTerraform(struct!.replicationFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topics: {
      value: cdktf.stringToHclTerraform(struct!.topics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_cluster: {
      value: mdbKafkaConnectorConnectorConfigMirrormakerSourceClusterToHclTerraform(struct!.sourceCluster),
      isBlock: true,
      type: "list",
      storageClassType: "MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterList",
    },
    target_cluster: {
      value: mdbKafkaConnectorConnectorConfigMirrormakerTargetClusterToHclTerraform(struct!.targetCluster),
      isBlock: true,
      type: "list",
      storageClassType: "MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbKafkaConnectorConnectorConfigMirrormakerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbKafkaConnectorConnectorConfigMirrormaker | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replicationFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationFactor = this._replicationFactor;
    }
    if (this._topics !== undefined) {
      hasAnyValues = true;
      internalValueResult.topics = this._topics;
    }
    if (this._sourceCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCluster = this._sourceCluster?.internalValue;
    }
    if (this._targetCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetCluster = this._targetCluster?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbKafkaConnectorConnectorConfigMirrormaker | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replicationFactor = undefined;
      this._topics = undefined;
      this._sourceCluster.internalValue = undefined;
      this._targetCluster.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replicationFactor = value.replicationFactor;
      this._topics = value.topics;
      this._sourceCluster.internalValue = value.sourceCluster;
      this._targetCluster.internalValue = value.targetCluster;
    }
  }

  // replication_factor - computed: false, optional: false, required: true
  private _replicationFactor?: number; 
  public get replicationFactor() {
    return this.getNumberAttribute('replication_factor');
  }
  public set replicationFactor(value: number) {
    this._replicationFactor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationFactorInput() {
    return this._replicationFactor;
  }

  // topics - computed: false, optional: false, required: true
  private _topics?: string; 
  public get topics() {
    return this.getStringAttribute('topics');
  }
  public set topics(value: string) {
    this._topics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsInput() {
    return this._topics;
  }

  // source_cluster - computed: false, optional: false, required: true
  private _sourceCluster = new MdbKafkaConnectorConnectorConfigMirrormakerSourceClusterOutputReference(this, "source_cluster");
  public get sourceCluster() {
    return this._sourceCluster;
  }
  public putSourceCluster(value: MdbKafkaConnectorConnectorConfigMirrormakerSourceCluster) {
    this._sourceCluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceClusterInput() {
    return this._sourceCluster.internalValue;
  }

  // target_cluster - computed: false, optional: false, required: true
  private _targetCluster = new MdbKafkaConnectorConnectorConfigMirrormakerTargetClusterOutputReference(this, "target_cluster");
  public get targetCluster() {
    return this._targetCluster;
  }
  public putTargetCluster(value: MdbKafkaConnectorConnectorConfigMirrormakerTargetCluster) {
    this._targetCluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetClusterInput() {
    return this._targetCluster.internalValue;
  }
}

export class MdbKafkaConnectorConnectorConfigMirrormakerList extends cdktf.ComplexList {
  public internalValue? : MdbKafkaConnectorConnectorConfigMirrormaker[] | cdktf.IResolvable

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
  public get(index: number): MdbKafkaConnectorConnectorConfigMirrormakerOutputReference {
    return new MdbKafkaConnectorConnectorConfigMirrormakerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbKafkaConnectorConnectorConfigS3SinkS3ConnectionExternalS3 {
  /**
  * ID of aws-compatible static key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#access_key_id MdbKafkaConnector#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * URL of s3-compatible storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#endpoint MdbKafkaConnector#endpoint}
  */
  readonly endpoint: string;
  /**
  * Region of s3-compatible storage. [Available region list](https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/regions/Regions.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#region MdbKafkaConnector#region}
  */
  readonly region?: string;
  /**
  * Secret key of aws-compatible static key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#secret_access_key MdbKafkaConnector#secret_access_key}
  */
  readonly secretAccessKey?: string;
}

export function mdbKafkaConnectorConnectorConfigS3SinkS3ConnectionExternalS3ToTerraform(struct?: MdbKafkaConnectorConnectorConfigS3SinkS3ConnectionExternalS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    region: cdktf.stringToTerraform(struct!.region),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}


export function mdbKafkaConnectorConnectorConfigS3SinkS3ConnectionExternalS3ToHclTerraform(struct?: MdbKafkaConnectorConnectorConfigS3SinkS3ConnectionExternalS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbKafkaConnectorConnectorConfigS3SinkS3ConnectionExternalS3OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbKafkaConnectorConnectorConfigS3SinkS3ConnectionExternalS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbKafkaConnectorConnectorConfigS3SinkS3ConnectionExternalS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyId = undefined;
      this._endpoint = undefined;
      this._region = undefined;
      this._secretAccessKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyId = value.accessKeyId;
      this._endpoint = value.endpoint;
      this._region = value.region;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_access_key - computed: false, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}

export class MdbKafkaConnectorConnectorConfigS3SinkS3ConnectionExternalS3List extends cdktf.ComplexList {
  public internalValue? : MdbKafkaConnectorConnectorConfigS3SinkS3ConnectionExternalS3[] | cdktf.IResolvable

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
  public get(index: number): MdbKafkaConnectorConnectorConfigS3SinkS3ConnectionExternalS3OutputReference {
    return new MdbKafkaConnectorConnectorConfigS3SinkS3ConnectionExternalS3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbKafkaConnectorConnectorConfigS3SinkS3Connection {
  /**
  * Name of the bucket in s3-compatible storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#bucket_name MdbKafkaConnector#bucket_name}
  */
  readonly bucketName: string;
  /**
  * external_s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#external_s3 MdbKafkaConnector#external_s3}
  */
  readonly externalS3: MdbKafkaConnectorConnectorConfigS3SinkS3ConnectionExternalS3[] | cdktf.IResolvable;
}

export function mdbKafkaConnectorConnectorConfigS3SinkS3ConnectionToTerraform(struct?: MdbKafkaConnectorConnectorConfigS3SinkS3ConnectionOutputReference | MdbKafkaConnectorConnectorConfigS3SinkS3Connection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    external_s3: cdktf.listMapper(mdbKafkaConnectorConnectorConfigS3SinkS3ConnectionExternalS3ToTerraform, true)(struct!.externalS3),
  }
}


export function mdbKafkaConnectorConnectorConfigS3SinkS3ConnectionToHclTerraform(struct?: MdbKafkaConnectorConnectorConfigS3SinkS3ConnectionOutputReference | MdbKafkaConnectorConnectorConfigS3SinkS3Connection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_s3: {
      value: cdktf.listMapperHcl(mdbKafkaConnectorConnectorConfigS3SinkS3ConnectionExternalS3ToHclTerraform, true)(struct!.externalS3),
      isBlock: true,
      type: "list",
      storageClassType: "MdbKafkaConnectorConnectorConfigS3SinkS3ConnectionExternalS3List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbKafkaConnectorConnectorConfigS3SinkS3ConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbKafkaConnectorConnectorConfigS3SinkS3Connection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._externalS3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalS3 = this._externalS3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbKafkaConnectorConnectorConfigS3SinkS3Connection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._externalS3.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._externalS3.internalValue = value.externalS3;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // external_s3 - computed: false, optional: false, required: true
  private _externalS3 = new MdbKafkaConnectorConnectorConfigS3SinkS3ConnectionExternalS3List(this, "external_s3", false);
  public get externalS3() {
    return this._externalS3;
  }
  public putExternalS3(value: MdbKafkaConnectorConnectorConfigS3SinkS3ConnectionExternalS3[] | cdktf.IResolvable) {
    this._externalS3.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalS3Input() {
    return this._externalS3.internalValue;
  }
}
export interface MdbKafkaConnectorConnectorConfigS3Sink {
  /**
  * Compression type for messages. Cannot be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#file_compression_type MdbKafkaConnector#file_compression_type}
  */
  readonly fileCompressionType: string;
  /**
  * Max records per file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#file_max_records MdbKafkaConnector#file_max_records}
  */
  readonly fileMaxRecords?: number;
  /**
  * The pattern for topic names to be copied to s3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#topics MdbKafkaConnector#topics}
  */
  readonly topics: string;
  /**
  * s3_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#s3_connection MdbKafkaConnector#s3_connection}
  */
  readonly s3Connection: MdbKafkaConnectorConnectorConfigS3SinkS3Connection;
}

export function mdbKafkaConnectorConnectorConfigS3SinkToTerraform(struct?: MdbKafkaConnectorConnectorConfigS3Sink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_compression_type: cdktf.stringToTerraform(struct!.fileCompressionType),
    file_max_records: cdktf.numberToTerraform(struct!.fileMaxRecords),
    topics: cdktf.stringToTerraform(struct!.topics),
    s3_connection: mdbKafkaConnectorConnectorConfigS3SinkS3ConnectionToTerraform(struct!.s3Connection),
  }
}


export function mdbKafkaConnectorConnectorConfigS3SinkToHclTerraform(struct?: MdbKafkaConnectorConnectorConfigS3Sink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_compression_type: {
      value: cdktf.stringToHclTerraform(struct!.fileCompressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_max_records: {
      value: cdktf.numberToHclTerraform(struct!.fileMaxRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topics: {
      value: cdktf.stringToHclTerraform(struct!.topics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_connection: {
      value: mdbKafkaConnectorConnectorConfigS3SinkS3ConnectionToHclTerraform(struct!.s3Connection),
      isBlock: true,
      type: "list",
      storageClassType: "MdbKafkaConnectorConnectorConfigS3SinkS3ConnectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbKafkaConnectorConnectorConfigS3SinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbKafkaConnectorConnectorConfigS3Sink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileCompressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileCompressionType = this._fileCompressionType;
    }
    if (this._fileMaxRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileMaxRecords = this._fileMaxRecords;
    }
    if (this._topics !== undefined) {
      hasAnyValues = true;
      internalValueResult.topics = this._topics;
    }
    if (this._s3Connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Connection = this._s3Connection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbKafkaConnectorConnectorConfigS3Sink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileCompressionType = undefined;
      this._fileMaxRecords = undefined;
      this._topics = undefined;
      this._s3Connection.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileCompressionType = value.fileCompressionType;
      this._fileMaxRecords = value.fileMaxRecords;
      this._topics = value.topics;
      this._s3Connection.internalValue = value.s3Connection;
    }
  }

  // file_compression_type - computed: false, optional: false, required: true
  private _fileCompressionType?: string; 
  public get fileCompressionType() {
    return this.getStringAttribute('file_compression_type');
  }
  public set fileCompressionType(value: string) {
    this._fileCompressionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileCompressionTypeInput() {
    return this._fileCompressionType;
  }

  // file_max_records - computed: false, optional: true, required: false
  private _fileMaxRecords?: number; 
  public get fileMaxRecords() {
    return this.getNumberAttribute('file_max_records');
  }
  public set fileMaxRecords(value: number) {
    this._fileMaxRecords = value;
  }
  public resetFileMaxRecords() {
    this._fileMaxRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileMaxRecordsInput() {
    return this._fileMaxRecords;
  }

  // topics - computed: false, optional: false, required: true
  private _topics?: string; 
  public get topics() {
    return this.getStringAttribute('topics');
  }
  public set topics(value: string) {
    this._topics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsInput() {
    return this._topics;
  }

  // s3_connection - computed: false, optional: false, required: true
  private _s3Connection = new MdbKafkaConnectorConnectorConfigS3SinkS3ConnectionOutputReference(this, "s3_connection");
  public get s3Connection() {
    return this._s3Connection;
  }
  public putS3Connection(value: MdbKafkaConnectorConnectorConfigS3SinkS3Connection) {
    this._s3Connection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConnectionInput() {
    return this._s3Connection.internalValue;
  }
}

export class MdbKafkaConnectorConnectorConfigS3SinkList extends cdktf.ComplexList {
  public internalValue? : MdbKafkaConnectorConnectorConfigS3Sink[] | cdktf.IResolvable

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
  public get(index: number): MdbKafkaConnectorConnectorConfigS3SinkOutputReference {
    return new MdbKafkaConnectorConnectorConfigS3SinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector yandex_mdb_kafka_connector}
*/
export class MdbKafkaConnector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_mdb_kafka_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MdbKafkaConnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MdbKafkaConnector to import
  * @param importFromId The id of the existing MdbKafkaConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MdbKafkaConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_mdb_kafka_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_kafka_connector yandex_mdb_kafka_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdbKafkaConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: MdbKafkaConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_mdb_kafka_connector',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.176.0',
        providerVersionConstraint: '0.176.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._name = config.name;
    this._properties = config.properties;
    this._tasksMax = config.tasksMax;
    this._connectorConfigMirrormaker.internalValue = config.connectorConfigMirrormaker;
    this._connectorConfigS3Sink.internalValue = config.connectorConfigS3Sink;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // properties - computed: true, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // tasks_max - computed: false, optional: true, required: false
  private _tasksMax?: number; 
  public get tasksMax() {
    return this.getNumberAttribute('tasks_max');
  }
  public set tasksMax(value: number) {
    this._tasksMax = value;
  }
  public resetTasksMax() {
    this._tasksMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksMaxInput() {
    return this._tasksMax;
  }

  // connector_config_mirrormaker - computed: false, optional: true, required: false
  private _connectorConfigMirrormaker = new MdbKafkaConnectorConnectorConfigMirrormakerList(this, "connector_config_mirrormaker", false);
  public get connectorConfigMirrormaker() {
    return this._connectorConfigMirrormaker;
  }
  public putConnectorConfigMirrormaker(value: MdbKafkaConnectorConnectorConfigMirrormaker[] | cdktf.IResolvable) {
    this._connectorConfigMirrormaker.internalValue = value;
  }
  public resetConnectorConfigMirrormaker() {
    this._connectorConfigMirrormaker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorConfigMirrormakerInput() {
    return this._connectorConfigMirrormaker.internalValue;
  }

  // connector_config_s3_sink - computed: false, optional: true, required: false
  private _connectorConfigS3Sink = new MdbKafkaConnectorConnectorConfigS3SinkList(this, "connector_config_s3_sink", false);
  public get connectorConfigS3Sink() {
    return this._connectorConfigS3Sink;
  }
  public putConnectorConfigS3Sink(value: MdbKafkaConnectorConnectorConfigS3Sink[] | cdktf.IResolvable) {
    this._connectorConfigS3Sink.internalValue = value;
  }
  public resetConnectorConfigS3Sink() {
    this._connectorConfigS3Sink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorConfigS3SinkInput() {
    return this._connectorConfigS3Sink.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._properties),
      tasks_max: cdktf.numberToTerraform(this._tasksMax),
      connector_config_mirrormaker: cdktf.listMapper(mdbKafkaConnectorConnectorConfigMirrormakerToTerraform, true)(this._connectorConfigMirrormaker.internalValue),
      connector_config_s3_sink: cdktf.listMapper(mdbKafkaConnectorConnectorConfigS3SinkToTerraform, true)(this._connectorConfigS3Sink.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._properties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tasks_max: {
        value: cdktf.numberToHclTerraform(this._tasksMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connector_config_mirrormaker: {
        value: cdktf.listMapperHcl(mdbKafkaConnectorConnectorConfigMirrormakerToHclTerraform, true)(this._connectorConfigMirrormaker.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdbKafkaConnectorConnectorConfigMirrormakerList",
      },
      connector_config_s3_sink: {
        value: cdktf.listMapperHcl(mdbKafkaConnectorConnectorConfigS3SinkToHclTerraform, true)(this._connectorConfigS3Sink.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdbKafkaConnectorConnectorConfigS3SinkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
