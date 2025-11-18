// https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbaasConfig extends cdktf.TerraformMetaArguments {
  /**
  * The day of week to perform the automated database service maintenance (`never`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#maintenance_dow Dbaas#maintenance_dow}
  */
  readonly maintenanceDow?: string;
  /**
  * The time of day to perform the automated database service maintenance (`HH:MM:SS`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#maintenance_time Dbaas#maintenance_time}
  */
  readonly maintenanceTime?: string;
  /**
  * ❗ The name of the database service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#name Dbaas#name}
  */
  readonly name: string;
  /**
  * The plan of the database service (use the [Exoscale CLI](https://github.com/exoscale/cli/) - `exo dbaas type show <TYPE> --plans` - for reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#plan Dbaas#plan}
  */
  readonly plan: string;
  /**
  * The database service protection boolean flag against termination/power-off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#termination_protection Dbaas#termination_protection}
  */
  readonly terminationProtection?: boolean | cdktf.IResolvable;
  /**
  * ❗ The type of the database service (`kafka`, `mysql`, `opensearch`, `pg`, `valkey`, `grafana`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#type Dbaas#type}
  */
  readonly type: string;
  /**
  * ❗ The Exoscale [Zone](https://www.exoscale.com/datacenters/) name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#zone Dbaas#zone}
  */
  readonly zone: string;
  /**
  * grafana block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#grafana Dbaas#grafana}
  */
  readonly grafana?: DbaasGrafana;
  /**
  * kafka block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#kafka Dbaas#kafka}
  */
  readonly kafka?: DbaasKafka;
  /**
  * mysql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#mysql Dbaas#mysql}
  */
  readonly mysql?: DbaasMysql;
  /**
  * opensearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#opensearch Dbaas#opensearch}
  */
  readonly opensearch?: DbaasOpensearch;
  /**
  * pg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#pg Dbaas#pg}
  */
  readonly pg?: DbaasPg;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#timeouts Dbaas#timeouts}
  */
  readonly timeouts?: DbaasTimeouts;
  /**
  * valkey block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#valkey Dbaas#valkey}
  */
  readonly valkey?: DbaasValkey;
}
export interface DbaasGrafana {
  /**
  * Grafana configuration settings in JSON format (`exo dbaas type show grafana --settings=grafana` for reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#grafana_settings Dbaas#grafana_settings}
  */
  readonly grafanaSettings?: string;
  /**
  * A list of CIDR blocks to allow incoming connections from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#ip_filter Dbaas#ip_filter}
  */
  readonly ipFilter?: string[];
}

export function dbaasGrafanaToTerraform(struct?: DbaasGrafana | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grafana_settings: cdktf.stringToTerraform(struct!.grafanaSettings),
    ip_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilter),
  }
}


export function dbaasGrafanaToHclTerraform(struct?: DbaasGrafana | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grafana_settings: {
      value: cdktf.stringToHclTerraform(struct!.grafanaSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbaasGrafanaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DbaasGrafana | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grafanaSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.grafanaSettings = this._grafanaSettings;
    }
    if (this._ipFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilter = this._ipFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbaasGrafana | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._grafanaSettings = undefined;
      this._ipFilter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._grafanaSettings = value.grafanaSettings;
      this._ipFilter = value.ipFilter;
    }
  }

  // grafana_settings - computed: true, optional: true, required: false
  private _grafanaSettings?: string; 
  public get grafanaSettings() {
    return this.getStringAttribute('grafana_settings');
  }
  public set grafanaSettings(value: string) {
    this._grafanaSettings = value;
  }
  public resetGrafanaSettings() {
    this._grafanaSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaSettingsInput() {
    return this._grafanaSettings;
  }

  // ip_filter - computed: true, optional: true, required: false
  private _ipFilter?: string[]; 
  public get ipFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_filter'));
  }
  public set ipFilter(value: string[]) {
    this._ipFilter = value;
  }
  public resetIpFilter() {
    this._ipFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterInput() {
    return this._ipFilter;
  }
}
export interface DbaasKafka {
  /**
  * Enable certificate-based authentication method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#enable_cert_auth Dbaas#enable_cert_auth}
  */
  readonly enableCertAuth?: boolean | cdktf.IResolvable;
  /**
  * Enable Kafka Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#enable_kafka_connect Dbaas#enable_kafka_connect}
  */
  readonly enableKafkaConnect?: boolean | cdktf.IResolvable;
  /**
  * Enable Kafka REST.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#enable_kafka_rest Dbaas#enable_kafka_rest}
  */
  readonly enableKafkaRest?: boolean | cdktf.IResolvable;
  /**
  * Enable SASL-based authentication method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#enable_sasl_auth Dbaas#enable_sasl_auth}
  */
  readonly enableSaslAuth?: boolean | cdktf.IResolvable;
  /**
  * Enable Schema Registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#enable_schema_registry Dbaas#enable_schema_registry}
  */
  readonly enableSchemaRegistry?: boolean | cdktf.IResolvable;
  /**
  * A list of CIDR blocks to allow incoming connections from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#ip_filter Dbaas#ip_filter}
  */
  readonly ipFilter?: string[];
  /**
  * Kafka Connect configuration settings in JSON format (`exo dbaas type show kafka --settings=kafka-connect` for reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#kafka_connect_settings Dbaas#kafka_connect_settings}
  */
  readonly kafkaConnectSettings?: string;
  /**
  * Kafka REST configuration settings in JSON format (`exo dbaas type show kafka --settings=kafka-rest` for reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#kafka_rest_settings Dbaas#kafka_rest_settings}
  */
  readonly kafkaRestSettings?: string;
  /**
  * Kafka configuration settings in JSON format (`exo dbaas type show kafka --settings=kafka` for reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#kafka_settings Dbaas#kafka_settings}
  */
  readonly kafkaSettings?: string;
  /**
  * Schema Registry configuration settings in JSON format (`exo dbaas type show kafka --settings=schema-registry` for reference)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#schema_registry_settings Dbaas#schema_registry_settings}
  */
  readonly schemaRegistrySettings?: string;
  /**
  * Kafka major version (`exo dbaas type show kafka` for reference; may only be set at creation time).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#version Dbaas#version}
  */
  readonly version?: string;
}

export function dbaasKafkaToTerraform(struct?: DbaasKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_cert_auth: cdktf.booleanToTerraform(struct!.enableCertAuth),
    enable_kafka_connect: cdktf.booleanToTerraform(struct!.enableKafkaConnect),
    enable_kafka_rest: cdktf.booleanToTerraform(struct!.enableKafkaRest),
    enable_sasl_auth: cdktf.booleanToTerraform(struct!.enableSaslAuth),
    enable_schema_registry: cdktf.booleanToTerraform(struct!.enableSchemaRegistry),
    ip_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilter),
    kafka_connect_settings: cdktf.stringToTerraform(struct!.kafkaConnectSettings),
    kafka_rest_settings: cdktf.stringToTerraform(struct!.kafkaRestSettings),
    kafka_settings: cdktf.stringToTerraform(struct!.kafkaSettings),
    schema_registry_settings: cdktf.stringToTerraform(struct!.schemaRegistrySettings),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dbaasKafkaToHclTerraform(struct?: DbaasKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_cert_auth: {
      value: cdktf.booleanToHclTerraform(struct!.enableCertAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_kafka_connect: {
      value: cdktf.booleanToHclTerraform(struct!.enableKafkaConnect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_kafka_rest: {
      value: cdktf.booleanToHclTerraform(struct!.enableKafkaRest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_sasl_auth: {
      value: cdktf.booleanToHclTerraform(struct!.enableSaslAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_schema_registry: {
      value: cdktf.booleanToHclTerraform(struct!.enableSchemaRegistry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    kafka_connect_settings: {
      value: cdktf.stringToHclTerraform(struct!.kafkaConnectSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka_rest_settings: {
      value: cdktf.stringToHclTerraform(struct!.kafkaRestSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka_settings: {
      value: cdktf.stringToHclTerraform(struct!.kafkaSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_registry_settings: {
      value: cdktf.stringToHclTerraform(struct!.schemaRegistrySettings),
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

export class DbaasKafkaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DbaasKafka | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableCertAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCertAuth = this._enableCertAuth;
    }
    if (this._enableKafkaConnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableKafkaConnect = this._enableKafkaConnect;
    }
    if (this._enableKafkaRest !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableKafkaRest = this._enableKafkaRest;
    }
    if (this._enableSaslAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSaslAuth = this._enableSaslAuth;
    }
    if (this._enableSchemaRegistry !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSchemaRegistry = this._enableSchemaRegistry;
    }
    if (this._ipFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilter = this._ipFilter;
    }
    if (this._kafkaConnectSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConnectSettings = this._kafkaConnectSettings;
    }
    if (this._kafkaRestSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaRestSettings = this._kafkaRestSettings;
    }
    if (this._kafkaSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaSettings = this._kafkaSettings;
    }
    if (this._schemaRegistrySettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistrySettings = this._schemaRegistrySettings;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbaasKafka | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableCertAuth = undefined;
      this._enableKafkaConnect = undefined;
      this._enableKafkaRest = undefined;
      this._enableSaslAuth = undefined;
      this._enableSchemaRegistry = undefined;
      this._ipFilter = undefined;
      this._kafkaConnectSettings = undefined;
      this._kafkaRestSettings = undefined;
      this._kafkaSettings = undefined;
      this._schemaRegistrySettings = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableCertAuth = value.enableCertAuth;
      this._enableKafkaConnect = value.enableKafkaConnect;
      this._enableKafkaRest = value.enableKafkaRest;
      this._enableSaslAuth = value.enableSaslAuth;
      this._enableSchemaRegistry = value.enableSchemaRegistry;
      this._ipFilter = value.ipFilter;
      this._kafkaConnectSettings = value.kafkaConnectSettings;
      this._kafkaRestSettings = value.kafkaRestSettings;
      this._kafkaSettings = value.kafkaSettings;
      this._schemaRegistrySettings = value.schemaRegistrySettings;
      this._version = value.version;
    }
  }

  // enable_cert_auth - computed: true, optional: true, required: false
  private _enableCertAuth?: boolean | cdktf.IResolvable; 
  public get enableCertAuth() {
    return this.getBooleanAttribute('enable_cert_auth');
  }
  public set enableCertAuth(value: boolean | cdktf.IResolvable) {
    this._enableCertAuth = value;
  }
  public resetEnableCertAuth() {
    this._enableCertAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCertAuthInput() {
    return this._enableCertAuth;
  }

  // enable_kafka_connect - computed: true, optional: true, required: false
  private _enableKafkaConnect?: boolean | cdktf.IResolvable; 
  public get enableKafkaConnect() {
    return this.getBooleanAttribute('enable_kafka_connect');
  }
  public set enableKafkaConnect(value: boolean | cdktf.IResolvable) {
    this._enableKafkaConnect = value;
  }
  public resetEnableKafkaConnect() {
    this._enableKafkaConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKafkaConnectInput() {
    return this._enableKafkaConnect;
  }

  // enable_kafka_rest - computed: true, optional: true, required: false
  private _enableKafkaRest?: boolean | cdktf.IResolvable; 
  public get enableKafkaRest() {
    return this.getBooleanAttribute('enable_kafka_rest');
  }
  public set enableKafkaRest(value: boolean | cdktf.IResolvable) {
    this._enableKafkaRest = value;
  }
  public resetEnableKafkaRest() {
    this._enableKafkaRest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKafkaRestInput() {
    return this._enableKafkaRest;
  }

  // enable_sasl_auth - computed: true, optional: true, required: false
  private _enableSaslAuth?: boolean | cdktf.IResolvable; 
  public get enableSaslAuth() {
    return this.getBooleanAttribute('enable_sasl_auth');
  }
  public set enableSaslAuth(value: boolean | cdktf.IResolvable) {
    this._enableSaslAuth = value;
  }
  public resetEnableSaslAuth() {
    this._enableSaslAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSaslAuthInput() {
    return this._enableSaslAuth;
  }

  // enable_schema_registry - computed: true, optional: true, required: false
  private _enableSchemaRegistry?: boolean | cdktf.IResolvable; 
  public get enableSchemaRegistry() {
    return this.getBooleanAttribute('enable_schema_registry');
  }
  public set enableSchemaRegistry(value: boolean | cdktf.IResolvable) {
    this._enableSchemaRegistry = value;
  }
  public resetEnableSchemaRegistry() {
    this._enableSchemaRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSchemaRegistryInput() {
    return this._enableSchemaRegistry;
  }

  // ip_filter - computed: true, optional: true, required: false
  private _ipFilter?: string[]; 
  public get ipFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_filter'));
  }
  public set ipFilter(value: string[]) {
    this._ipFilter = value;
  }
  public resetIpFilter() {
    this._ipFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterInput() {
    return this._ipFilter;
  }

  // kafka_connect_settings - computed: true, optional: true, required: false
  private _kafkaConnectSettings?: string; 
  public get kafkaConnectSettings() {
    return this.getStringAttribute('kafka_connect_settings');
  }
  public set kafkaConnectSettings(value: string) {
    this._kafkaConnectSettings = value;
  }
  public resetKafkaConnectSettings() {
    this._kafkaConnectSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConnectSettingsInput() {
    return this._kafkaConnectSettings;
  }

  // kafka_rest_settings - computed: true, optional: true, required: false
  private _kafkaRestSettings?: string; 
  public get kafkaRestSettings() {
    return this.getStringAttribute('kafka_rest_settings');
  }
  public set kafkaRestSettings(value: string) {
    this._kafkaRestSettings = value;
  }
  public resetKafkaRestSettings() {
    this._kafkaRestSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaRestSettingsInput() {
    return this._kafkaRestSettings;
  }

  // kafka_settings - computed: true, optional: true, required: false
  private _kafkaSettings?: string; 
  public get kafkaSettings() {
    return this.getStringAttribute('kafka_settings');
  }
  public set kafkaSettings(value: string) {
    this._kafkaSettings = value;
  }
  public resetKafkaSettings() {
    this._kafkaSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaSettingsInput() {
    return this._kafkaSettings;
  }

  // schema_registry_settings - computed: true, optional: true, required: false
  private _schemaRegistrySettings?: string; 
  public get schemaRegistrySettings() {
    return this.getStringAttribute('schema_registry_settings');
  }
  public set schemaRegistrySettings(value: string) {
    this._schemaRegistrySettings = value;
  }
  public resetSchemaRegistrySettings() {
    this._schemaRegistrySettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistrySettingsInput() {
    return this._schemaRegistrySettings;
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
export interface DbaasMysql {
  /**
  * A custom administrator account password (may only be set at creation time).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#admin_password Dbaas#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * A custom administrator account username (may only be set at creation time).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#admin_username Dbaas#admin_username}
  */
  readonly adminUsername?: string;
  /**
  * The automated backup schedule (`HH:MM`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#backup_schedule Dbaas#backup_schedule}
  */
  readonly backupSchedule?: string;
  /**
  * A list of CIDR blocks to allow incoming connections from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#ip_filter Dbaas#ip_filter}
  */
  readonly ipFilter?: string[];
  /**
  * MySQL configuration settings in JSON format (`exo dbaas type show mysql --settings=mysql` for reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#mysql_settings Dbaas#mysql_settings}
  */
  readonly mysqlSettings?: string;
  /**
  * MySQL major version (`exo dbaas type show mysql` for reference; may only be set at creation time).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#version Dbaas#version}
  */
  readonly version?: string;
}

export function dbaasMysqlToTerraform(struct?: DbaasMysql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    backup_schedule: cdktf.stringToTerraform(struct!.backupSchedule),
    ip_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilter),
    mysql_settings: cdktf.stringToTerraform(struct!.mysqlSettings),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dbaasMysqlToHclTerraform(struct?: DbaasMysql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_password: {
      value: cdktf.stringToHclTerraform(struct!.adminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_username: {
      value: cdktf.stringToHclTerraform(struct!.adminUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_schedule: {
      value: cdktf.stringToHclTerraform(struct!.backupSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    mysql_settings: {
      value: cdktf.stringToHclTerraform(struct!.mysqlSettings),
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

export class DbaasMysqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DbaasMysql | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._adminUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsername = this._adminUsername;
    }
    if (this._backupSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupSchedule = this._backupSchedule;
    }
    if (this._ipFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilter = this._ipFilter;
    }
    if (this._mysqlSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlSettings = this._mysqlSettings;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbaasMysql | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminPassword = undefined;
      this._adminUsername = undefined;
      this._backupSchedule = undefined;
      this._ipFilter = undefined;
      this._mysqlSettings = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminPassword = value.adminPassword;
      this._adminUsername = value.adminUsername;
      this._backupSchedule = value.backupSchedule;
      this._ipFilter = value.ipFilter;
      this._mysqlSettings = value.mysqlSettings;
      this._version = value.version;
    }
  }

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // admin_username - computed: false, optional: true, required: false
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  public resetAdminUsername() {
    this._adminUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername;
  }

  // backup_schedule - computed: true, optional: true, required: false
  private _backupSchedule?: string; 
  public get backupSchedule() {
    return this.getStringAttribute('backup_schedule');
  }
  public set backupSchedule(value: string) {
    this._backupSchedule = value;
  }
  public resetBackupSchedule() {
    this._backupSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupScheduleInput() {
    return this._backupSchedule;
  }

  // ip_filter - computed: true, optional: true, required: false
  private _ipFilter?: string[]; 
  public get ipFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_filter'));
  }
  public set ipFilter(value: string[]) {
    this._ipFilter = value;
  }
  public resetIpFilter() {
    this._ipFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterInput() {
    return this._ipFilter;
  }

  // mysql_settings - computed: true, optional: true, required: false
  private _mysqlSettings?: string; 
  public get mysqlSettings() {
    return this.getStringAttribute('mysql_settings');
  }
  public set mysqlSettings(value: string) {
    this._mysqlSettings = value;
  }
  public resetMysqlSettings() {
    this._mysqlSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlSettingsInput() {
    return this._mysqlSettings;
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
export interface DbaasOpensearchDashboards {
  /**
  * Enable or disable OpenSearch Dashboards (default: true).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#enabled Dbaas#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Limits the maximum amount of memory (in MiB) the OpenSearch Dashboards process can use. This sets the max_old_space_size option of the nodejs running the OpenSearch Dashboards. Note: the memory reserved by OpenSearch Dashboards is not available for OpenSearch. (default: 128).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#max_old_space_size Dbaas#max_old_space_size}
  */
  readonly maxOldSpaceSize?: number;
  /**
  * Timeout in milliseconds for requests made by OpenSearch Dashboards towards OpenSearch (default: 30000)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#request_timeout Dbaas#request_timeout}
  */
  readonly requestTimeout?: number;
}

export function dbaasOpensearchDashboardsToTerraform(struct?: DbaasOpensearchDashboards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_old_space_size: cdktf.numberToTerraform(struct!.maxOldSpaceSize),
    request_timeout: cdktf.numberToTerraform(struct!.requestTimeout),
  }
}


export function dbaasOpensearchDashboardsToHclTerraform(struct?: DbaasOpensearchDashboards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_old_space_size: {
      value: cdktf.numberToHclTerraform(struct!.maxOldSpaceSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_timeout: {
      value: cdktf.numberToHclTerraform(struct!.requestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbaasOpensearchDashboardsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DbaasOpensearchDashboards | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxOldSpaceSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOldSpaceSize = this._maxOldSpaceSize;
    }
    if (this._requestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTimeout = this._requestTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbaasOpensearchDashboards | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._maxOldSpaceSize = undefined;
      this._requestTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._maxOldSpaceSize = value.maxOldSpaceSize;
      this._requestTimeout = value.requestTimeout;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // max_old_space_size - computed: false, optional: true, required: false
  private _maxOldSpaceSize?: number; 
  public get maxOldSpaceSize() {
    return this.getNumberAttribute('max_old_space_size');
  }
  public set maxOldSpaceSize(value: number) {
    this._maxOldSpaceSize = value;
  }
  public resetMaxOldSpaceSize() {
    this._maxOldSpaceSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOldSpaceSizeInput() {
    return this._maxOldSpaceSize;
  }

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: number; 
  public get requestTimeout() {
    return this.getNumberAttribute('request_timeout');
  }
  public set requestTimeout(value: number) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }
}
export interface DbaasOpensearchIndexPattern {
  /**
  * Maximum number of indexes to keep before deleting the oldest one (Minimum value is `0`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#max_index_count Dbaas#max_index_count}
  */
  readonly maxIndexCount?: number;
  /**
  * fnmatch pattern
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#pattern Dbaas#pattern}
  */
  readonly pattern?: string;
  /**
  * `alphabetical` or `creation_date`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#sorting_algorithm Dbaas#sorting_algorithm}
  */
  readonly sortingAlgorithm?: string;
}

export function dbaasOpensearchIndexPatternToTerraform(struct?: DbaasOpensearchIndexPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_index_count: cdktf.numberToTerraform(struct!.maxIndexCount),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    sorting_algorithm: cdktf.stringToTerraform(struct!.sortingAlgorithm),
  }
}


export function dbaasOpensearchIndexPatternToHclTerraform(struct?: DbaasOpensearchIndexPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_index_count: {
      value: cdktf.numberToHclTerraform(struct!.maxIndexCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sorting_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.sortingAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbaasOpensearchIndexPatternOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbaasOpensearchIndexPattern | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxIndexCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIndexCount = this._maxIndexCount;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._sortingAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortingAlgorithm = this._sortingAlgorithm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbaasOpensearchIndexPattern | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxIndexCount = undefined;
      this._pattern = undefined;
      this._sortingAlgorithm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxIndexCount = value.maxIndexCount;
      this._pattern = value.pattern;
      this._sortingAlgorithm = value.sortingAlgorithm;
    }
  }

  // max_index_count - computed: false, optional: true, required: false
  private _maxIndexCount?: number; 
  public get maxIndexCount() {
    return this.getNumberAttribute('max_index_count');
  }
  public set maxIndexCount(value: number) {
    this._maxIndexCount = value;
  }
  public resetMaxIndexCount() {
    this._maxIndexCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIndexCountInput() {
    return this._maxIndexCount;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // sorting_algorithm - computed: false, optional: true, required: false
  private _sortingAlgorithm?: string; 
  public get sortingAlgorithm() {
    return this.getStringAttribute('sorting_algorithm');
  }
  public set sortingAlgorithm(value: string) {
    this._sortingAlgorithm = value;
  }
  public resetSortingAlgorithm() {
    this._sortingAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortingAlgorithmInput() {
    return this._sortingAlgorithm;
  }
}

export class DbaasOpensearchIndexPatternList extends cdktf.ComplexList {
  public internalValue? : DbaasOpensearchIndexPattern[] | cdktf.IResolvable

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
  public get(index: number): DbaasOpensearchIndexPatternOutputReference {
    return new DbaasOpensearchIndexPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbaasOpensearchIndexTemplate {
  /**
  * The maximum number of nested JSON objects that a single document can contain across all nested types. This limit helps to prevent out of memory errors when a document contains too many nested objects. (Default is 10000. Minimum value is `0`, maximum value is `100000`.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#mapping_nested_objects_limit Dbaas#mapping_nested_objects_limit}
  */
  readonly mappingNestedObjectsLimit?: number;
  /**
  * The number of replicas each primary shard has. (Minimum value is `0`, maximum value is `29`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#number_of_replicas Dbaas#number_of_replicas}
  */
  readonly numberOfReplicas?: number;
  /**
  * The number of primary shards that an index should have. (Minimum value is `1`, maximum value is `1024`.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#number_of_shards Dbaas#number_of_shards}
  */
  readonly numberOfShards?: number;
}

export function dbaasOpensearchIndexTemplateToTerraform(struct?: DbaasOpensearchIndexTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mapping_nested_objects_limit: cdktf.numberToTerraform(struct!.mappingNestedObjectsLimit),
    number_of_replicas: cdktf.numberToTerraform(struct!.numberOfReplicas),
    number_of_shards: cdktf.numberToTerraform(struct!.numberOfShards),
  }
}


export function dbaasOpensearchIndexTemplateToHclTerraform(struct?: DbaasOpensearchIndexTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mapping_nested_objects_limit: {
      value: cdktf.numberToHclTerraform(struct!.mappingNestedObjectsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_of_replicas: {
      value: cdktf.numberToHclTerraform(struct!.numberOfReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_of_shards: {
      value: cdktf.numberToHclTerraform(struct!.numberOfShards),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbaasOpensearchIndexTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DbaasOpensearchIndexTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mappingNestedObjectsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingNestedObjectsLimit = this._mappingNestedObjectsLimit;
    }
    if (this._numberOfReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfReplicas = this._numberOfReplicas;
    }
    if (this._numberOfShards !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfShards = this._numberOfShards;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbaasOpensearchIndexTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mappingNestedObjectsLimit = undefined;
      this._numberOfReplicas = undefined;
      this._numberOfShards = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mappingNestedObjectsLimit = value.mappingNestedObjectsLimit;
      this._numberOfReplicas = value.numberOfReplicas;
      this._numberOfShards = value.numberOfShards;
    }
  }

  // mapping_nested_objects_limit - computed: false, optional: true, required: false
  private _mappingNestedObjectsLimit?: number; 
  public get mappingNestedObjectsLimit() {
    return this.getNumberAttribute('mapping_nested_objects_limit');
  }
  public set mappingNestedObjectsLimit(value: number) {
    this._mappingNestedObjectsLimit = value;
  }
  public resetMappingNestedObjectsLimit() {
    this._mappingNestedObjectsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingNestedObjectsLimitInput() {
    return this._mappingNestedObjectsLimit;
  }

  // number_of_replicas - computed: false, optional: true, required: false
  private _numberOfReplicas?: number; 
  public get numberOfReplicas() {
    return this.getNumberAttribute('number_of_replicas');
  }
  public set numberOfReplicas(value: number) {
    this._numberOfReplicas = value;
  }
  public resetNumberOfReplicas() {
    this._numberOfReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfReplicasInput() {
    return this._numberOfReplicas;
  }

  // number_of_shards - computed: false, optional: true, required: false
  private _numberOfShards?: number; 
  public get numberOfShards() {
    return this.getNumberAttribute('number_of_shards');
  }
  public set numberOfShards(value: number) {
    this._numberOfShards = value;
  }
  public resetNumberOfShards() {
    this._numberOfShards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfShardsInput() {
    return this._numberOfShards;
  }
}
export interface DbaasOpensearch {
  /**
  * ❗ Service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#fork_from_service Dbaas#fork_from_service}
  */
  readonly forkFromService?: string;
  /**
  * Allow incoming connections from this list of CIDR address block, e.g. `["10.20.0.0/16"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#ip_filter Dbaas#ip_filter}
  */
  readonly ipFilter?: string[];
  /**
  * Aiven automation resets index.refresh_interval to default value for every index to be sure that indices are always visible to search. If it doesn't fit your case, you can disable this by setting up this flag to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#keep_index_refresh_interval Dbaas#keep_index_refresh_interval}
  */
  readonly keepIndexRefreshInterval?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of indexes to keep (Minimum value is `0`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#max_index_count Dbaas#max_index_count}
  */
  readonly maxIndexCount?: number;
  /**
  * ❗ Name of a backup to recover from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#recovery_backup_name Dbaas#recovery_backup_name}
  */
  readonly recoveryBackupName?: string;
  /**
  * OpenSearch-specific settings, in json. e.g.`jsonencode({thread_pool_search_size: 64})`. Use `exo x get-dbaas-settings-opensearch` to get a list of available settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#settings Dbaas#settings}
  */
  readonly settings?: string;
  /**
  * ❗ OpenSearch major version (`exo dbaas type show opensearch` for reference)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#version Dbaas#version}
  */
  readonly version?: string;
  /**
  * dashboards block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#dashboards Dbaas#dashboards}
  */
  readonly dashboards?: DbaasOpensearchDashboards;
  /**
  * index_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#index_pattern Dbaas#index_pattern}
  */
  readonly indexPattern?: DbaasOpensearchIndexPattern[] | cdktf.IResolvable;
  /**
  * index_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#index_template Dbaas#index_template}
  */
  readonly indexTemplate?: DbaasOpensearchIndexTemplate;
}

export function dbaasOpensearchToTerraform(struct?: DbaasOpensearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fork_from_service: cdktf.stringToTerraform(struct!.forkFromService),
    ip_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilter),
    keep_index_refresh_interval: cdktf.booleanToTerraform(struct!.keepIndexRefreshInterval),
    max_index_count: cdktf.numberToTerraform(struct!.maxIndexCount),
    recovery_backup_name: cdktf.stringToTerraform(struct!.recoveryBackupName),
    settings: cdktf.stringToTerraform(struct!.settings),
    version: cdktf.stringToTerraform(struct!.version),
    dashboards: dbaasOpensearchDashboardsToTerraform(struct!.dashboards),
    index_pattern: cdktf.listMapper(dbaasOpensearchIndexPatternToTerraform, true)(struct!.indexPattern),
    index_template: dbaasOpensearchIndexTemplateToTerraform(struct!.indexTemplate),
  }
}


export function dbaasOpensearchToHclTerraform(struct?: DbaasOpensearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fork_from_service: {
      value: cdktf.stringToHclTerraform(struct!.forkFromService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    keep_index_refresh_interval: {
      value: cdktf.booleanToHclTerraform(struct!.keepIndexRefreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_index_count: {
      value: cdktf.numberToHclTerraform(struct!.maxIndexCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recovery_backup_name: {
      value: cdktf.stringToHclTerraform(struct!.recoveryBackupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.stringToHclTerraform(struct!.settings),
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
    dashboards: {
      value: dbaasOpensearchDashboardsToHclTerraform(struct!.dashboards),
      isBlock: true,
      type: "struct",
      storageClassType: "DbaasOpensearchDashboards",
    },
    index_pattern: {
      value: cdktf.listMapperHcl(dbaasOpensearchIndexPatternToHclTerraform, true)(struct!.indexPattern),
      isBlock: true,
      type: "list",
      storageClassType: "DbaasOpensearchIndexPatternList",
    },
    index_template: {
      value: dbaasOpensearchIndexTemplateToHclTerraform(struct!.indexTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DbaasOpensearchIndexTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbaasOpensearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DbaasOpensearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forkFromService !== undefined) {
      hasAnyValues = true;
      internalValueResult.forkFromService = this._forkFromService;
    }
    if (this._ipFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilter = this._ipFilter;
    }
    if (this._keepIndexRefreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepIndexRefreshInterval = this._keepIndexRefreshInterval;
    }
    if (this._maxIndexCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIndexCount = this._maxIndexCount;
    }
    if (this._recoveryBackupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryBackupName = this._recoveryBackupName;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._dashboards?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboards = this._dashboards?.internalValue;
    }
    if (this._indexPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexPattern = this._indexPattern?.internalValue;
    }
    if (this._indexTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexTemplate = this._indexTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbaasOpensearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forkFromService = undefined;
      this._ipFilter = undefined;
      this._keepIndexRefreshInterval = undefined;
      this._maxIndexCount = undefined;
      this._recoveryBackupName = undefined;
      this._settings = undefined;
      this._version = undefined;
      this._dashboards.internalValue = undefined;
      this._indexPattern.internalValue = undefined;
      this._indexTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forkFromService = value.forkFromService;
      this._ipFilter = value.ipFilter;
      this._keepIndexRefreshInterval = value.keepIndexRefreshInterval;
      this._maxIndexCount = value.maxIndexCount;
      this._recoveryBackupName = value.recoveryBackupName;
      this._settings = value.settings;
      this._version = value.version;
      this._dashboards.internalValue = value.dashboards;
      this._indexPattern.internalValue = value.indexPattern;
      this._indexTemplate.internalValue = value.indexTemplate;
    }
  }

  // fork_from_service - computed: false, optional: true, required: false
  private _forkFromService?: string; 
  public get forkFromService() {
    return this.getStringAttribute('fork_from_service');
  }
  public set forkFromService(value: string) {
    this._forkFromService = value;
  }
  public resetForkFromService() {
    this._forkFromService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forkFromServiceInput() {
    return this._forkFromService;
  }

  // ip_filter - computed: true, optional: true, required: false
  private _ipFilter?: string[]; 
  public get ipFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_filter'));
  }
  public set ipFilter(value: string[]) {
    this._ipFilter = value;
  }
  public resetIpFilter() {
    this._ipFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterInput() {
    return this._ipFilter;
  }

  // keep_index_refresh_interval - computed: false, optional: true, required: false
  private _keepIndexRefreshInterval?: boolean | cdktf.IResolvable; 
  public get keepIndexRefreshInterval() {
    return this.getBooleanAttribute('keep_index_refresh_interval');
  }
  public set keepIndexRefreshInterval(value: boolean | cdktf.IResolvable) {
    this._keepIndexRefreshInterval = value;
  }
  public resetKeepIndexRefreshInterval() {
    this._keepIndexRefreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepIndexRefreshIntervalInput() {
    return this._keepIndexRefreshInterval;
  }

  // max_index_count - computed: false, optional: true, required: false
  private _maxIndexCount?: number; 
  public get maxIndexCount() {
    return this.getNumberAttribute('max_index_count');
  }
  public set maxIndexCount(value: number) {
    this._maxIndexCount = value;
  }
  public resetMaxIndexCount() {
    this._maxIndexCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIndexCountInput() {
    return this._maxIndexCount;
  }

  // recovery_backup_name - computed: false, optional: true, required: false
  private _recoveryBackupName?: string; 
  public get recoveryBackupName() {
    return this.getStringAttribute('recovery_backup_name');
  }
  public set recoveryBackupName(value: string) {
    this._recoveryBackupName = value;
  }
  public resetRecoveryBackupName() {
    this._recoveryBackupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryBackupNameInput() {
    return this._recoveryBackupName;
  }

  // settings - computed: true, optional: true, required: false
  private _settings?: string; 
  public get settings() {
    return this.getStringAttribute('settings');
  }
  public set settings(value: string) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
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

  // dashboards - computed: false, optional: true, required: false
  private _dashboards = new DbaasOpensearchDashboardsOutputReference(this, "dashboards");
  public get dashboards() {
    return this._dashboards;
  }
  public putDashboards(value: DbaasOpensearchDashboards) {
    this._dashboards.internalValue = value;
  }
  public resetDashboards() {
    this._dashboards.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardsInput() {
    return this._dashboards.internalValue;
  }

  // index_pattern - computed: false, optional: true, required: false
  private _indexPattern = new DbaasOpensearchIndexPatternList(this, "index_pattern", false);
  public get indexPattern() {
    return this._indexPattern;
  }
  public putIndexPattern(value: DbaasOpensearchIndexPattern[] | cdktf.IResolvable) {
    this._indexPattern.internalValue = value;
  }
  public resetIndexPattern() {
    this._indexPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexPatternInput() {
    return this._indexPattern.internalValue;
  }

  // index_template - computed: false, optional: true, required: false
  private _indexTemplate = new DbaasOpensearchIndexTemplateOutputReference(this, "index_template");
  public get indexTemplate() {
    return this._indexTemplate;
  }
  public putIndexTemplate(value: DbaasOpensearchIndexTemplate) {
    this._indexTemplate.internalValue = value;
  }
  public resetIndexTemplate() {
    this._indexTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexTemplateInput() {
    return this._indexTemplate.internalValue;
  }
}
export interface DbaasPg {
  /**
  * A custom administrator account password (may only be set at creation time).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#admin_password Dbaas#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * A custom administrator account username (may only be set at creation time).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#admin_username Dbaas#admin_username}
  */
  readonly adminUsername?: string;
  /**
  * The automated backup schedule (`HH:MM`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#backup_schedule Dbaas#backup_schedule}
  */
  readonly backupSchedule?: string;
  /**
  * A list of CIDR blocks to allow incoming connections from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#ip_filter Dbaas#ip_filter}
  */
  readonly ipFilter?: string[];
  /**
  * PostgreSQL configuration settings in JSON format (`exo dbaas type show pg --settings=pg` for reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#pg_settings Dbaas#pg_settings}
  */
  readonly pgSettings?: string;
  /**
  * PgBouncer configuration settings in JSON format (`exo dbaas type show pg --settings=pgbouncer` for reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#pgbouncer_settings Dbaas#pgbouncer_settings}
  */
  readonly pgbouncerSettings?: string;
  /**
  * pglookout configuration settings in JSON format (`exo dbaas type show pg --settings=pglookout` for reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#pglookout_settings Dbaas#pglookout_settings}
  */
  readonly pglookoutSettings?: string;
  /**
  * PostgreSQL major version (`exo dbaas type show pg` for reference; may only be set at creation time).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#version Dbaas#version}
  */
  readonly version?: string;
}

export function dbaasPgToTerraform(struct?: DbaasPg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    backup_schedule: cdktf.stringToTerraform(struct!.backupSchedule),
    ip_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilter),
    pg_settings: cdktf.stringToTerraform(struct!.pgSettings),
    pgbouncer_settings: cdktf.stringToTerraform(struct!.pgbouncerSettings),
    pglookout_settings: cdktf.stringToTerraform(struct!.pglookoutSettings),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dbaasPgToHclTerraform(struct?: DbaasPg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_password: {
      value: cdktf.stringToHclTerraform(struct!.adminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_username: {
      value: cdktf.stringToHclTerraform(struct!.adminUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_schedule: {
      value: cdktf.stringToHclTerraform(struct!.backupSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    pg_settings: {
      value: cdktf.stringToHclTerraform(struct!.pgSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pgbouncer_settings: {
      value: cdktf.stringToHclTerraform(struct!.pgbouncerSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pglookout_settings: {
      value: cdktf.stringToHclTerraform(struct!.pglookoutSettings),
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

export class DbaasPgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DbaasPg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._adminUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsername = this._adminUsername;
    }
    if (this._backupSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupSchedule = this._backupSchedule;
    }
    if (this._ipFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilter = this._ipFilter;
    }
    if (this._pgSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgSettings = this._pgSettings;
    }
    if (this._pgbouncerSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgbouncerSettings = this._pgbouncerSettings;
    }
    if (this._pglookoutSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.pglookoutSettings = this._pglookoutSettings;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbaasPg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminPassword = undefined;
      this._adminUsername = undefined;
      this._backupSchedule = undefined;
      this._ipFilter = undefined;
      this._pgSettings = undefined;
      this._pgbouncerSettings = undefined;
      this._pglookoutSettings = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminPassword = value.adminPassword;
      this._adminUsername = value.adminUsername;
      this._backupSchedule = value.backupSchedule;
      this._ipFilter = value.ipFilter;
      this._pgSettings = value.pgSettings;
      this._pgbouncerSettings = value.pgbouncerSettings;
      this._pglookoutSettings = value.pglookoutSettings;
      this._version = value.version;
    }
  }

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // admin_username - computed: false, optional: true, required: false
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  public resetAdminUsername() {
    this._adminUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername;
  }

  // backup_schedule - computed: true, optional: true, required: false
  private _backupSchedule?: string; 
  public get backupSchedule() {
    return this.getStringAttribute('backup_schedule');
  }
  public set backupSchedule(value: string) {
    this._backupSchedule = value;
  }
  public resetBackupSchedule() {
    this._backupSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupScheduleInput() {
    return this._backupSchedule;
  }

  // ip_filter - computed: true, optional: true, required: false
  private _ipFilter?: string[]; 
  public get ipFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_filter'));
  }
  public set ipFilter(value: string[]) {
    this._ipFilter = value;
  }
  public resetIpFilter() {
    this._ipFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterInput() {
    return this._ipFilter;
  }

  // pg_settings - computed: true, optional: true, required: false
  private _pgSettings?: string; 
  public get pgSettings() {
    return this.getStringAttribute('pg_settings');
  }
  public set pgSettings(value: string) {
    this._pgSettings = value;
  }
  public resetPgSettings() {
    this._pgSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgSettingsInput() {
    return this._pgSettings;
  }

  // pgbouncer_settings - computed: true, optional: true, required: false
  private _pgbouncerSettings?: string; 
  public get pgbouncerSettings() {
    return this.getStringAttribute('pgbouncer_settings');
  }
  public set pgbouncerSettings(value: string) {
    this._pgbouncerSettings = value;
  }
  public resetPgbouncerSettings() {
    this._pgbouncerSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgbouncerSettingsInput() {
    return this._pgbouncerSettings;
  }

  // pglookout_settings - computed: true, optional: true, required: false
  private _pglookoutSettings?: string; 
  public get pglookoutSettings() {
    return this.getStringAttribute('pglookout_settings');
  }
  public set pglookoutSettings(value: string) {
    this._pglookoutSettings = value;
  }
  public resetPglookoutSettings() {
    this._pglookoutSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pglookoutSettingsInput() {
    return this._pglookoutSettings;
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
export interface DbaasTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#create Dbaas#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#delete Dbaas#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#read Dbaas#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#update Dbaas#update}
  */
  readonly update?: string;
}

export function dbaasTimeoutsToTerraform(struct?: DbaasTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dbaasTimeoutsToHclTerraform(struct?: DbaasTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class DbaasTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DbaasTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbaasTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
export interface DbaasValkey {
  /**
  * A list of CIDR blocks to allow incoming connections from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#ip_filter Dbaas#ip_filter}
  */
  readonly ipFilter?: string[];
  /**
  * Valkey configuration settings in JSON format (`exo dbaas type show valkey --settings=valkey` for reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#valkey_settings Dbaas#valkey_settings}
  */
  readonly valkeySettings?: string;
}

export function dbaasValkeyToTerraform(struct?: DbaasValkey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilter),
    valkey_settings: cdktf.stringToTerraform(struct!.valkeySettings),
  }
}


export function dbaasValkeyToHclTerraform(struct?: DbaasValkey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    valkey_settings: {
      value: cdktf.stringToHclTerraform(struct!.valkeySettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbaasValkeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DbaasValkey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilter = this._ipFilter;
    }
    if (this._valkeySettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.valkeySettings = this._valkeySettings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbaasValkey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipFilter = undefined;
      this._valkeySettings = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipFilter = value.ipFilter;
      this._valkeySettings = value.valkeySettings;
    }
  }

  // ip_filter - computed: true, optional: true, required: false
  private _ipFilter?: string[]; 
  public get ipFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_filter'));
  }
  public set ipFilter(value: string[]) {
    this._ipFilter = value;
  }
  public resetIpFilter() {
    this._ipFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterInput() {
    return this._ipFilter;
  }

  // valkey_settings - computed: true, optional: true, required: false
  private _valkeySettings?: string; 
  public get valkeySettings() {
    return this.getStringAttribute('valkey_settings');
  }
  public set valkeySettings(value: string) {
    this._valkeySettings = value;
  }
  public resetValkeySettings() {
    this._valkeySettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valkeySettingsInput() {
    return this._valkeySettings;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas exoscale_dbaas}
*/
export class Dbaas extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "exoscale_dbaas";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dbaas resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dbaas to import
  * @param importFromId The id of the existing Dbaas that should be imported. Refer to the {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dbaas to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "exoscale_dbaas", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/dbaas exoscale_dbaas} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbaasConfig
  */
  public constructor(scope: Construct, id: string, config: DbaasConfig) {
    super(scope, id, {
      terraformResourceType: 'exoscale_dbaas',
      terraformGeneratorMetadata: {
        providerName: 'exoscale',
        providerVersion: '0.67.1',
        providerVersionConstraint: '0.67.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._maintenanceDow = config.maintenanceDow;
    this._maintenanceTime = config.maintenanceTime;
    this._name = config.name;
    this._plan = config.plan;
    this._terminationProtection = config.terminationProtection;
    this._type = config.type;
    this._zone = config.zone;
    this._grafana.internalValue = config.grafana;
    this._kafka.internalValue = config.kafka;
    this._mysql.internalValue = config.mysql;
    this._opensearch.internalValue = config.opensearch;
    this._pg.internalValue = config.pg;
    this._timeouts.internalValue = config.timeouts;
    this._valkey.internalValue = config.valkey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_certificate - computed: true, optional: false, required: false
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // maintenance_dow - computed: true, optional: true, required: false
  private _maintenanceDow?: string; 
  public get maintenanceDow() {
    return this.getStringAttribute('maintenance_dow');
  }
  public set maintenanceDow(value: string) {
    this._maintenanceDow = value;
  }
  public resetMaintenanceDow() {
    this._maintenanceDow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceDowInput() {
    return this._maintenanceDow;
  }

  // maintenance_time - computed: true, optional: true, required: false
  private _maintenanceTime?: string; 
  public get maintenanceTime() {
    return this.getStringAttribute('maintenance_time');
  }
  public set maintenanceTime(value: string) {
    this._maintenanceTime = value;
  }
  public resetMaintenanceTime() {
    this._maintenanceTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceTimeInput() {
    return this._maintenanceTime;
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

  // node_cpus - computed: true, optional: false, required: false
  public get nodeCpus() {
    return this.getNumberAttribute('node_cpus');
  }

  // node_memory - computed: true, optional: false, required: false
  public get nodeMemory() {
    return this.getNumberAttribute('node_memory');
  }

  // nodes - computed: true, optional: false, required: false
  public get nodes() {
    return this.getNumberAttribute('nodes');
  }

  // plan - computed: false, optional: false, required: true
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // termination_protection - computed: true, optional: true, required: false
  private _terminationProtection?: boolean | cdktf.IResolvable; 
  public get terminationProtection() {
    return this.getBooleanAttribute('termination_protection');
  }
  public set terminationProtection(value: boolean | cdktf.IResolvable) {
    this._terminationProtection = value;
  }
  public resetTerminationProtection() {
    this._terminationProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationProtectionInput() {
    return this._terminationProtection;
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // grafana - computed: false, optional: true, required: false
  private _grafana = new DbaasGrafanaOutputReference(this, "grafana");
  public get grafana() {
    return this._grafana;
  }
  public putGrafana(value: DbaasGrafana) {
    this._grafana.internalValue = value;
  }
  public resetGrafana() {
    this._grafana.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaInput() {
    return this._grafana.internalValue;
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka = new DbaasKafkaOutputReference(this, "kafka");
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: DbaasKafka) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }

  // mysql - computed: false, optional: true, required: false
  private _mysql = new DbaasMysqlOutputReference(this, "mysql");
  public get mysql() {
    return this._mysql;
  }
  public putMysql(value: DbaasMysql) {
    this._mysql.internalValue = value;
  }
  public resetMysql() {
    this._mysql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlInput() {
    return this._mysql.internalValue;
  }

  // opensearch - computed: false, optional: true, required: false
  private _opensearch = new DbaasOpensearchOutputReference(this, "opensearch");
  public get opensearch() {
    return this._opensearch;
  }
  public putOpensearch(value: DbaasOpensearch) {
    this._opensearch.internalValue = value;
  }
  public resetOpensearch() {
    this._opensearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchInput() {
    return this._opensearch.internalValue;
  }

  // pg - computed: false, optional: true, required: false
  private _pg = new DbaasPgOutputReference(this, "pg");
  public get pg() {
    return this._pg;
  }
  public putPg(value: DbaasPg) {
    this._pg.internalValue = value;
  }
  public resetPg() {
    this._pg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgInput() {
    return this._pg.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DbaasTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DbaasTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // valkey - computed: false, optional: true, required: false
  private _valkey = new DbaasValkeyOutputReference(this, "valkey");
  public get valkey() {
    return this._valkey;
  }
  public putValkey(value: DbaasValkey) {
    this._valkey.internalValue = value;
  }
  public resetValkey() {
    this._valkey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valkeyInput() {
    return this._valkey.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      maintenance_dow: cdktf.stringToTerraform(this._maintenanceDow),
      maintenance_time: cdktf.stringToTerraform(this._maintenanceTime),
      name: cdktf.stringToTerraform(this._name),
      plan: cdktf.stringToTerraform(this._plan),
      termination_protection: cdktf.booleanToTerraform(this._terminationProtection),
      type: cdktf.stringToTerraform(this._type),
      zone: cdktf.stringToTerraform(this._zone),
      grafana: dbaasGrafanaToTerraform(this._grafana.internalValue),
      kafka: dbaasKafkaToTerraform(this._kafka.internalValue),
      mysql: dbaasMysqlToTerraform(this._mysql.internalValue),
      opensearch: dbaasOpensearchToTerraform(this._opensearch.internalValue),
      pg: dbaasPgToTerraform(this._pg.internalValue),
      timeouts: dbaasTimeoutsToTerraform(this._timeouts.internalValue),
      valkey: dbaasValkeyToTerraform(this._valkey.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      maintenance_dow: {
        value: cdktf.stringToHclTerraform(this._maintenanceDow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_time: {
        value: cdktf.stringToHclTerraform(this._maintenanceTime),
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
      plan: {
        value: cdktf.stringToHclTerraform(this._plan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      termination_protection: {
        value: cdktf.booleanToHclTerraform(this._terminationProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grafana: {
        value: dbaasGrafanaToHclTerraform(this._grafana.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DbaasGrafana",
      },
      kafka: {
        value: dbaasKafkaToHclTerraform(this._kafka.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DbaasKafka",
      },
      mysql: {
        value: dbaasMysqlToHclTerraform(this._mysql.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DbaasMysql",
      },
      opensearch: {
        value: dbaasOpensearchToHclTerraform(this._opensearch.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DbaasOpensearch",
      },
      pg: {
        value: dbaasPgToHclTerraform(this._pg.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DbaasPg",
      },
      timeouts: {
        value: dbaasTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DbaasTimeouts",
      },
      valkey: {
        value: dbaasValkeyToHclTerraform(this._valkey.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DbaasValkey",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
