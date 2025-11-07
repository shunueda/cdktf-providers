// https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsoleKafkaClusterV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Kafka cluster labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#labels ConsoleKafkaClusterV2#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Kafka cluster name, must be unique, acts as an ID for import
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#name ConsoleKafkaClusterV2#name}
  */
  readonly name: string;
  /**
  * Kafka cluster specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#spec ConsoleKafkaClusterV2#spec}
  */
  readonly spec: ConsoleKafkaClusterV2Spec;
}
export interface ConsoleKafkaClusterV2SpecKafkaFlavorAiven {
  /**
  * Aiven API token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#api_token ConsoleKafkaClusterV2#api_token}
  */
  readonly apiToken: string;
  /**
  * Aiven project name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#project ConsoleKafkaClusterV2#project}
  */
  readonly project: string;
  /**
  * Aiven service name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#service_name ConsoleKafkaClusterV2#service_name}
  */
  readonly serviceName: string;
}

export function consoleKafkaClusterV2SpecKafkaFlavorAivenToTerraform(struct?: ConsoleKafkaClusterV2SpecKafkaFlavorAiven | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_token: cdktf.stringToTerraform(struct!.apiToken),
    project: cdktf.stringToTerraform(struct!.project),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function consoleKafkaClusterV2SpecKafkaFlavorAivenToHclTerraform(struct?: ConsoleKafkaClusterV2SpecKafkaFlavorAiven | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_token: {
      value: cdktf.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleKafkaClusterV2SpecKafkaFlavorAivenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleKafkaClusterV2SpecKafkaFlavorAiven | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleKafkaClusterV2SpecKafkaFlavorAiven | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiToken = undefined;
      this._project = undefined;
      this._serviceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiToken = value.apiToken;
      this._project = value.project;
      this._serviceName = value.serviceName;
    }
  }

  // api_token - computed: false, optional: false, required: true
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}
export interface ConsoleKafkaClusterV2SpecKafkaFlavorConfluent {
  /**
  * Confluent cluster identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#confluent_cluster_id ConsoleKafkaClusterV2#confluent_cluster_id}
  */
  readonly confluentClusterId: string;
  /**
  * Confluent environment identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#confluent_environment_id ConsoleKafkaClusterV2#confluent_environment_id}
  */
  readonly confluentEnvironmentId: string;
  /**
  * Confluent API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#key ConsoleKafkaClusterV2#key}
  */
  readonly key: string;
  /**
  * Confluent API secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#secret ConsoleKafkaClusterV2#secret}
  */
  readonly secret: string;
}

export function consoleKafkaClusterV2SpecKafkaFlavorConfluentToTerraform(struct?: ConsoleKafkaClusterV2SpecKafkaFlavorConfluent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confluent_cluster_id: cdktf.stringToTerraform(struct!.confluentClusterId),
    confluent_environment_id: cdktf.stringToTerraform(struct!.confluentEnvironmentId),
    key: cdktf.stringToTerraform(struct!.key),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function consoleKafkaClusterV2SpecKafkaFlavorConfluentToHclTerraform(struct?: ConsoleKafkaClusterV2SpecKafkaFlavorConfluent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confluent_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.confluentClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confluent_environment_id: {
      value: cdktf.stringToHclTerraform(struct!.confluentEnvironmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleKafkaClusterV2SpecKafkaFlavorConfluentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleKafkaClusterV2SpecKafkaFlavorConfluent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confluentClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.confluentClusterId = this._confluentClusterId;
    }
    if (this._confluentEnvironmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.confluentEnvironmentId = this._confluentEnvironmentId;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleKafkaClusterV2SpecKafkaFlavorConfluent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._confluentClusterId = undefined;
      this._confluentEnvironmentId = undefined;
      this._key = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._confluentClusterId = value.confluentClusterId;
      this._confluentEnvironmentId = value.confluentEnvironmentId;
      this._key = value.key;
      this._secret = value.secret;
    }
  }

  // confluent_cluster_id - computed: false, optional: false, required: true
  private _confluentClusterId?: string; 
  public get confluentClusterId() {
    return this.getStringAttribute('confluent_cluster_id');
  }
  public set confluentClusterId(value: string) {
    this._confluentClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get confluentClusterIdInput() {
    return this._confluentClusterId;
  }

  // confluent_environment_id - computed: false, optional: false, required: true
  private _confluentEnvironmentId?: string; 
  public get confluentEnvironmentId() {
    return this.getStringAttribute('confluent_environment_id');
  }
  public set confluentEnvironmentId(value: string) {
    this._confluentEnvironmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get confluentEnvironmentIdInput() {
    return this._confluentEnvironmentId;
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

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}
export interface ConsoleKafkaClusterV2SpecKafkaFlavorGateway {
  /**
  * Ignore untrusted certificate for Gateway Admin API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#ignore_untrusted_certificate ConsoleKafkaClusterV2#ignore_untrusted_certificate}
  */
  readonly ignoreUntrustedCertificate?: boolean | cdktf.IResolvable;
  /**
  * Conduktor Gateway Admin password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#password ConsoleKafkaClusterV2#password}
  */
  readonly password: string;
  /**
  * Conduktor Gateway Admin API URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#url ConsoleKafkaClusterV2#url}
  */
  readonly url: string;
  /**
  * Conduktor Gateway Admin user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#user ConsoleKafkaClusterV2#user}
  */
  readonly user: string;
  /**
  * Conduktor Gateway Virtual cluster name (default `passthrough`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#virtual_cluster ConsoleKafkaClusterV2#virtual_cluster}
  */
  readonly virtualCluster?: string;
}

export function consoleKafkaClusterV2SpecKafkaFlavorGatewayToTerraform(struct?: ConsoleKafkaClusterV2SpecKafkaFlavorGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_untrusted_certificate: cdktf.booleanToTerraform(struct!.ignoreUntrustedCertificate),
    password: cdktf.stringToTerraform(struct!.password),
    url: cdktf.stringToTerraform(struct!.url),
    user: cdktf.stringToTerraform(struct!.user),
    virtual_cluster: cdktf.stringToTerraform(struct!.virtualCluster),
  }
}


export function consoleKafkaClusterV2SpecKafkaFlavorGatewayToHclTerraform(struct?: ConsoleKafkaClusterV2SpecKafkaFlavorGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_untrusted_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreUntrustedCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_cluster: {
      value: cdktf.stringToHclTerraform(struct!.virtualCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleKafkaClusterV2SpecKafkaFlavorGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleKafkaClusterV2SpecKafkaFlavorGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreUntrustedCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreUntrustedCertificate = this._ignoreUntrustedCertificate;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._virtualCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualCluster = this._virtualCluster;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleKafkaClusterV2SpecKafkaFlavorGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreUntrustedCertificate = undefined;
      this._password = undefined;
      this._url = undefined;
      this._user = undefined;
      this._virtualCluster = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreUntrustedCertificate = value.ignoreUntrustedCertificate;
      this._password = value.password;
      this._url = value.url;
      this._user = value.user;
      this._virtualCluster = value.virtualCluster;
    }
  }

  // ignore_untrusted_certificate - computed: true, optional: true, required: false
  private _ignoreUntrustedCertificate?: boolean | cdktf.IResolvable; 
  public get ignoreUntrustedCertificate() {
    return this.getBooleanAttribute('ignore_untrusted_certificate');
  }
  public set ignoreUntrustedCertificate(value: boolean | cdktf.IResolvable) {
    this._ignoreUntrustedCertificate = value;
  }
  public resetIgnoreUntrustedCertificate() {
    this._ignoreUntrustedCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUntrustedCertificateInput() {
    return this._ignoreUntrustedCertificate;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // virtual_cluster - computed: true, optional: true, required: false
  private _virtualCluster?: string; 
  public get virtualCluster() {
    return this.getStringAttribute('virtual_cluster');
  }
  public set virtualCluster(value: string) {
    this._virtualCluster = value;
  }
  public resetVirtualCluster() {
    this._virtualCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualClusterInput() {
    return this._virtualCluster;
  }
}
export interface ConsoleKafkaClusterV2SpecKafkaFlavor {
  /**
  * Aiven Kafka flavor configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#aiven ConsoleKafkaClusterV2#aiven}
  */
  readonly aiven?: ConsoleKafkaClusterV2SpecKafkaFlavorAiven;
  /**
  * Confluent Kafka flavor configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#confluent ConsoleKafkaClusterV2#confluent}
  */
  readonly confluent?: ConsoleKafkaClusterV2SpecKafkaFlavorConfluent;
  /**
  * Conduktor Gateway Kafka flavor configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#gateway ConsoleKafkaClusterV2#gateway}
  */
  readonly gateway?: ConsoleKafkaClusterV2SpecKafkaFlavorGateway;
}

export function consoleKafkaClusterV2SpecKafkaFlavorToTerraform(struct?: ConsoleKafkaClusterV2SpecKafkaFlavor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aiven: consoleKafkaClusterV2SpecKafkaFlavorAivenToTerraform(struct!.aiven),
    confluent: consoleKafkaClusterV2SpecKafkaFlavorConfluentToTerraform(struct!.confluent),
    gateway: consoleKafkaClusterV2SpecKafkaFlavorGatewayToTerraform(struct!.gateway),
  }
}


export function consoleKafkaClusterV2SpecKafkaFlavorToHclTerraform(struct?: ConsoleKafkaClusterV2SpecKafkaFlavor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aiven: {
      value: consoleKafkaClusterV2SpecKafkaFlavorAivenToHclTerraform(struct!.aiven),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsoleKafkaClusterV2SpecKafkaFlavorAiven",
    },
    confluent: {
      value: consoleKafkaClusterV2SpecKafkaFlavorConfluentToHclTerraform(struct!.confluent),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsoleKafkaClusterV2SpecKafkaFlavorConfluent",
    },
    gateway: {
      value: consoleKafkaClusterV2SpecKafkaFlavorGatewayToHclTerraform(struct!.gateway),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsoleKafkaClusterV2SpecKafkaFlavorGateway",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleKafkaClusterV2SpecKafkaFlavorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleKafkaClusterV2SpecKafkaFlavor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aiven?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aiven = this._aiven?.internalValue;
    }
    if (this._confluent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confluent = this._confluent?.internalValue;
    }
    if (this._gateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleKafkaClusterV2SpecKafkaFlavor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aiven.internalValue = undefined;
      this._confluent.internalValue = undefined;
      this._gateway.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aiven.internalValue = value.aiven;
      this._confluent.internalValue = value.confluent;
      this._gateway.internalValue = value.gateway;
    }
  }

  // aiven - computed: false, optional: true, required: false
  private _aiven = new ConsoleKafkaClusterV2SpecKafkaFlavorAivenOutputReference(this, "aiven");
  public get aiven() {
    return this._aiven;
  }
  public putAiven(value: ConsoleKafkaClusterV2SpecKafkaFlavorAiven) {
    this._aiven.internalValue = value;
  }
  public resetAiven() {
    this._aiven.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aivenInput() {
    return this._aiven.internalValue;
  }

  // confluent - computed: false, optional: true, required: false
  private _confluent = new ConsoleKafkaClusterV2SpecKafkaFlavorConfluentOutputReference(this, "confluent");
  public get confluent() {
    return this._confluent;
  }
  public putConfluent(value: ConsoleKafkaClusterV2SpecKafkaFlavorConfluent) {
    this._confluent.internalValue = value;
  }
  public resetConfluent() {
    this._confluent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confluentInput() {
    return this._confluent.internalValue;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway = new ConsoleKafkaClusterV2SpecKafkaFlavorGatewayOutputReference(this, "gateway");
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: ConsoleKafkaClusterV2SpecKafkaFlavorGateway) {
    this._gateway.internalValue = value;
  }
  public resetGateway() {
    this._gateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway.internalValue;
  }
}
export interface ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityBasicAuth {
  /**
  * Schema registry basic auth password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#password ConsoleKafkaClusterV2#password}
  */
  readonly password: string;
  /**
  * Schema registry basic auth username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#username ConsoleKafkaClusterV2#username}
  */
  readonly username: string;
}

export function consoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityBasicAuthToTerraform(struct?: ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function consoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityBasicAuthToHclTerraform(struct?: ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityBasicAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityBasicAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityBearerToken {
  /**
  * Schema registry bearer token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#token ConsoleKafkaClusterV2#token}
  */
  readonly token: string;
}

export function consoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityBearerTokenToTerraform(struct?: ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityBearerToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function consoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityBearerTokenToHclTerraform(struct?: ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityBearerToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityBearerTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityBearerToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityBearerToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._token = value.token;
    }
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecuritySslAuth {
  /**
  * Schema registry SSL auth certificate chain PEM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#certificate_chain ConsoleKafkaClusterV2#certificate_chain}
  */
  readonly certificateChain: string;
  /**
  * Schema registry SSL auth private key PEM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#key ConsoleKafkaClusterV2#key}
  */
  readonly key: string;
}

export function consoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecuritySslAuthToTerraform(struct?: ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecuritySslAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function consoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecuritySslAuthToHclTerraform(struct?: ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecuritySslAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_chain: {
      value: cdktf.stringToHclTerraform(struct!.certificateChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecuritySslAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecuritySslAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateChain = this._certificateChain;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecuritySslAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateChain = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateChain = value.certificateChain;
      this._key = value.key;
    }
  }

  // certificate_chain - computed: false, optional: false, required: true
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain;
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
export interface ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurity {
  /**
  * Basic auth schema registry security configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#basic_auth ConsoleKafkaClusterV2#basic_auth}
  */
  readonly basicAuth?: ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityBasicAuth;
  /**
  * Bearer token schema registry security configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#bearer_token ConsoleKafkaClusterV2#bearer_token}
  */
  readonly bearerToken?: ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityBearerToken;
  /**
  * SSL auth (mTLS) schema registry security configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#ssl_auth ConsoleKafkaClusterV2#ssl_auth}
  */
  readonly sslAuth?: ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecuritySslAuth;
}

export function consoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityToTerraform(struct?: ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_auth: consoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityBasicAuthToTerraform(struct!.basicAuth),
    bearer_token: consoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityBearerTokenToTerraform(struct!.bearerToken),
    ssl_auth: consoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecuritySslAuthToTerraform(struct!.sslAuth),
  }
}


export function consoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityToHclTerraform(struct?: ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_auth: {
      value: consoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityBasicAuth",
    },
    bearer_token: {
      value: consoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityBearerTokenToHclTerraform(struct!.bearerToken),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityBearerToken",
    },
    ssl_auth: {
      value: consoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecuritySslAuthToHclTerraform(struct!.sslAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecuritySslAuth",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    if (this._bearerToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerToken = this._bearerToken?.internalValue;
    }
    if (this._sslAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslAuth = this._sslAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = undefined;
      this._bearerToken.internalValue = undefined;
      this._sslAuth.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = value.basicAuth;
      this._bearerToken.internalValue = value.bearerToken;
      this._sslAuth.internalValue = value.sslAuth;
    }
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }

  // bearer_token - computed: false, optional: true, required: false
  private _bearerToken = new ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityBearerTokenOutputReference(this, "bearer_token");
  public get bearerToken() {
    return this._bearerToken;
  }
  public putBearerToken(value: ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityBearerToken) {
    this._bearerToken.internalValue = value;
  }
  public resetBearerToken() {
    this._bearerToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenInput() {
    return this._bearerToken.internalValue;
  }

  // ssl_auth - computed: false, optional: true, required: false
  private _sslAuth = new ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecuritySslAuthOutputReference(this, "ssl_auth");
  public get sslAuth() {
    return this._sslAuth;
  }
  public putSslAuth(value: ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecuritySslAuth) {
    this._sslAuth.internalValue = value;
  }
  public resetSslAuth() {
    this._sslAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAuthInput() {
    return this._sslAuth.internalValue;
  }
}
export interface ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLike {
  /**
  * Ignore untrusted certificate for schema registry. Only used if type is `ConfluentLike`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#ignore_untrusted_certificate ConsoleKafkaClusterV2#ignore_untrusted_certificate}
  */
  readonly ignoreUntrustedCertificate?: boolean | cdktf.IResolvable;
  /**
  * Schema registry properties. Only used if type is `ConfluentLike`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#properties ConsoleKafkaClusterV2#properties}
  */
  readonly properties?: string;
  /**
  * Confluent Schema registry security configuration. One of `basic_auth`, `bearer_token`, `ssl_auth`. If none provided, no security is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#security ConsoleKafkaClusterV2#security}
  */
  readonly security?: ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurity;
  /**
  * Schema registry URL. Required if type is `ConfluentLike`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#url ConsoleKafkaClusterV2#url}
  */
  readonly url?: string;
}

export function consoleKafkaClusterV2SpecSchemaRegistryConfluentLikeToTerraform(struct?: ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLike | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_untrusted_certificate: cdktf.booleanToTerraform(struct!.ignoreUntrustedCertificate),
    properties: cdktf.stringToTerraform(struct!.properties),
    security: consoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityToTerraform(struct!.security),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function consoleKafkaClusterV2SpecSchemaRegistryConfluentLikeToHclTerraform(struct?: ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLike | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_untrusted_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreUntrustedCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    properties: {
      value: cdktf.stringToHclTerraform(struct!.properties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security: {
      value: consoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurity",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLike | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreUntrustedCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreUntrustedCertificate = this._ignoreUntrustedCertificate;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLike | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreUntrustedCertificate = undefined;
      this._properties = undefined;
      this._security.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreUntrustedCertificate = value.ignoreUntrustedCertificate;
      this._properties = value.properties;
      this._security.internalValue = value.security;
      this._url = value.url;
    }
  }

  // ignore_untrusted_certificate - computed: true, optional: true, required: false
  private _ignoreUntrustedCertificate?: boolean | cdktf.IResolvable; 
  public get ignoreUntrustedCertificate() {
    return this.getBooleanAttribute('ignore_untrusted_certificate');
  }
  public set ignoreUntrustedCertificate(value: boolean | cdktf.IResolvable) {
    this._ignoreUntrustedCertificate = value;
  }
  public resetIgnoreUntrustedCertificate() {
    this._ignoreUntrustedCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUntrustedCertificateInput() {
    return this._ignoreUntrustedCertificate;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: string; 
  public get properties() {
    return this.getStringAttribute('properties');
  }
  public set properties(value: string) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // security - computed: false, optional: true, required: false
  private _security = new ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityCredentials {
  /**
  * Glue Schema registry AWS access key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#access_key_id ConsoleKafkaClusterV2#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * Glue Schema registry AWS secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#secret_key ConsoleKafkaClusterV2#secret_key}
  */
  readonly secretKey: string;
}

export function consoleKafkaClusterV2SpecSchemaRegistryGlueSecurityCredentialsToTerraform(struct?: ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
  }
}


export function consoleKafkaClusterV2SpecSchemaRegistryGlueSecurityCredentialsToHclTerraform(struct?: ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityCredentials | cdktf.IResolvable): any {
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
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyId = undefined;
      this._secretKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyId = value.accessKeyId;
      this._secretKey = value.secretKey;
    }
  }

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }
}
export interface ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityFromContext {
  /**
  * Glue Schema registry AWS profile name. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#profile ConsoleKafkaClusterV2#profile}
  */
  readonly profile: string;
}

export function consoleKafkaClusterV2SpecSchemaRegistryGlueSecurityFromContextToTerraform(struct?: ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityFromContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function consoleKafkaClusterV2SpecSchemaRegistryGlueSecurityFromContextToHclTerraform(struct?: ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityFromContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityFromContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityFromContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityFromContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profile = value.profile;
    }
  }

  // profile - computed: false, optional: false, required: true
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}
export interface ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityFromRole {
  /**
  * Glue Schema registry AWS role ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#role ConsoleKafkaClusterV2#role}
  */
  readonly role: string;
}

export function consoleKafkaClusterV2SpecSchemaRegistryGlueSecurityFromRoleToTerraform(struct?: ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityFromRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function consoleKafkaClusterV2SpecSchemaRegistryGlueSecurityFromRoleToHclTerraform(struct?: ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityFromRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityFromRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityFromRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityFromRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._role = value.role;
    }
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}
export interface ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityIamAnywhere {
  /**
  * Glue Schema registry AWS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#certificate ConsoleKafkaClusterV2#certificate}
  */
  readonly certificate: string;
  /**
  * Glue Schema registry AWS private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#private_key ConsoleKafkaClusterV2#private_key}
  */
  readonly privateKey: string;
  /**
  * Glue Schema registry AWS profile ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#profile_arn ConsoleKafkaClusterV2#profile_arn}
  */
  readonly profileArn: string;
  /**
  * Glue Schema registry AWS role ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#role_arn ConsoleKafkaClusterV2#role_arn}
  */
  readonly roleArn: string;
  /**
  * Glue Schema registry AWS trust anchor ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#trust_anchor_arn ConsoleKafkaClusterV2#trust_anchor_arn}
  */
  readonly trustAnchorArn: string;
}

export function consoleKafkaClusterV2SpecSchemaRegistryGlueSecurityIamAnywhereToTerraform(struct?: ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityIamAnywhere | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    profile_arn: cdktf.stringToTerraform(struct!.profileArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    trust_anchor_arn: cdktf.stringToTerraform(struct!.trustAnchorArn),
  }
}


export function consoleKafkaClusterV2SpecSchemaRegistryGlueSecurityIamAnywhereToHclTerraform(struct?: ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityIamAnywhere | cdktf.IResolvable): any {
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
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile_arn: {
      value: cdktf.stringToHclTerraform(struct!.profileArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_anchor_arn: {
      value: cdktf.stringToHclTerraform(struct!.trustAnchorArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityIamAnywhereOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityIamAnywhere | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._profileArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileArn = this._profileArn;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._trustAnchorArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustAnchorArn = this._trustAnchorArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityIamAnywhere | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._privateKey = undefined;
      this._profileArn = undefined;
      this._roleArn = undefined;
      this._trustAnchorArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._privateKey = value.privateKey;
      this._profileArn = value.profileArn;
      this._roleArn = value.roleArn;
      this._trustAnchorArn = value.trustAnchorArn;
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

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // profile_arn - computed: false, optional: false, required: true
  private _profileArn?: string; 
  public get profileArn() {
    return this.getStringAttribute('profile_arn');
  }
  public set profileArn(value: string) {
    this._profileArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileArnInput() {
    return this._profileArn;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // trust_anchor_arn - computed: false, optional: false, required: true
  private _trustAnchorArn?: string; 
  public get trustAnchorArn() {
    return this.getStringAttribute('trust_anchor_arn');
  }
  public set trustAnchorArn(value: string) {
    this._trustAnchorArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustAnchorArnInput() {
    return this._trustAnchorArn;
  }
}
export interface ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurity {
  /**
  * AWS credentials GLUE schema registry security configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#credentials ConsoleKafkaClusterV2#credentials}
  */
  readonly credentials?: ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityCredentials;
  /**
  * AWS context GLUE schema registry security configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#from_context ConsoleKafkaClusterV2#from_context}
  */
  readonly fromContext?: ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityFromContext;
  /**
  * AWS role GLUE schema registry security configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#from_role ConsoleKafkaClusterV2#from_role}
  */
  readonly fromRole?: ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityFromRole;
  /**
  * AWS IAM Anywhere GLUE schema registry security configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#iam_anywhere ConsoleKafkaClusterV2#iam_anywhere}
  */
  readonly iamAnywhere?: ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityIamAnywhere;
}

export function consoleKafkaClusterV2SpecSchemaRegistryGlueSecurityToTerraform(struct?: ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: consoleKafkaClusterV2SpecSchemaRegistryGlueSecurityCredentialsToTerraform(struct!.credentials),
    from_context: consoleKafkaClusterV2SpecSchemaRegistryGlueSecurityFromContextToTerraform(struct!.fromContext),
    from_role: consoleKafkaClusterV2SpecSchemaRegistryGlueSecurityFromRoleToTerraform(struct!.fromRole),
    iam_anywhere: consoleKafkaClusterV2SpecSchemaRegistryGlueSecurityIamAnywhereToTerraform(struct!.iamAnywhere),
  }
}


export function consoleKafkaClusterV2SpecSchemaRegistryGlueSecurityToHclTerraform(struct?: ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: consoleKafkaClusterV2SpecSchemaRegistryGlueSecurityCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityCredentials",
    },
    from_context: {
      value: consoleKafkaClusterV2SpecSchemaRegistryGlueSecurityFromContextToHclTerraform(struct!.fromContext),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityFromContext",
    },
    from_role: {
      value: consoleKafkaClusterV2SpecSchemaRegistryGlueSecurityFromRoleToHclTerraform(struct!.fromRole),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityFromRole",
    },
    iam_anywhere: {
      value: consoleKafkaClusterV2SpecSchemaRegistryGlueSecurityIamAnywhereToHclTerraform(struct!.iamAnywhere),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityIamAnywhere",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._fromContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromContext = this._fromContext?.internalValue;
    }
    if (this._fromRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromRole = this._fromRole?.internalValue;
    }
    if (this._iamAnywhere?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamAnywhere = this._iamAnywhere?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials.internalValue = undefined;
      this._fromContext.internalValue = undefined;
      this._fromRole.internalValue = undefined;
      this._iamAnywhere.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentials.internalValue = value.credentials;
      this._fromContext.internalValue = value.fromContext;
      this._fromRole.internalValue = value.fromRole;
      this._iamAnywhere.internalValue = value.iamAnywhere;
    }
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // from_context - computed: false, optional: true, required: false
  private _fromContext = new ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityFromContextOutputReference(this, "from_context");
  public get fromContext() {
    return this._fromContext;
  }
  public putFromContext(value: ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityFromContext) {
    this._fromContext.internalValue = value;
  }
  public resetFromContext() {
    this._fromContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromContextInput() {
    return this._fromContext.internalValue;
  }

  // from_role - computed: false, optional: true, required: false
  private _fromRole = new ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityFromRoleOutputReference(this, "from_role");
  public get fromRole() {
    return this._fromRole;
  }
  public putFromRole(value: ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityFromRole) {
    this._fromRole.internalValue = value;
  }
  public resetFromRole() {
    this._fromRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromRoleInput() {
    return this._fromRole.internalValue;
  }

  // iam_anywhere - computed: false, optional: true, required: false
  private _iamAnywhere = new ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityIamAnywhereOutputReference(this, "iam_anywhere");
  public get iamAnywhere() {
    return this._iamAnywhere;
  }
  public putIamAnywhere(value: ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityIamAnywhere) {
    this._iamAnywhere.internalValue = value;
  }
  public resetIamAnywhere() {
    this._iamAnywhere.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamAnywhereInput() {
    return this._iamAnywhere.internalValue;
  }
}
export interface ConsoleKafkaClusterV2SpecSchemaRegistryGlue {
  /**
  * Glue Schema registry AWS region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#region ConsoleKafkaClusterV2#region}
  */
  readonly region?: string;
  /**
  * Glue Schema registry name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#registry_name ConsoleKafkaClusterV2#registry_name}
  */
  readonly registryName?: string;
  /**
  * Schema registry configuration. One of `credentials`, `from_context`, `from_role`, `iam_anywhere`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#security ConsoleKafkaClusterV2#security}
  */
  readonly security: ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurity;
}

export function consoleKafkaClusterV2SpecSchemaRegistryGlueToTerraform(struct?: ConsoleKafkaClusterV2SpecSchemaRegistryGlue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    registry_name: cdktf.stringToTerraform(struct!.registryName),
    security: consoleKafkaClusterV2SpecSchemaRegistryGlueSecurityToTerraform(struct!.security),
  }
}


export function consoleKafkaClusterV2SpecSchemaRegistryGlueToHclTerraform(struct?: ConsoleKafkaClusterV2SpecSchemaRegistryGlue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_name: {
      value: cdktf.stringToHclTerraform(struct!.registryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security: {
      value: consoleKafkaClusterV2SpecSchemaRegistryGlueSecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleKafkaClusterV2SpecSchemaRegistryGlueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleKafkaClusterV2SpecSchemaRegistryGlue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._registryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryName = this._registryName;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleKafkaClusterV2SpecSchemaRegistryGlue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
      this._registryName = undefined;
      this._security.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
      this._registryName = value.registryName;
      this._security.internalValue = value.security;
    }
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

  // registry_name - computed: false, optional: true, required: false
  private _registryName?: string; 
  public get registryName() {
    return this.getStringAttribute('registry_name');
  }
  public set registryName(value: string) {
    this._registryName = value;
  }
  public resetRegistryName() {
    this._registryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryNameInput() {
    return this._registryName;
  }

  // security - computed: false, optional: false, required: true
  private _security = new ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: ConsoleKafkaClusterV2SpecSchemaRegistryGlueSecurity) {
    this._security.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }
}
export interface ConsoleKafkaClusterV2SpecSchemaRegistry {
  /**
  * Confluent like schema registry configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#confluent_like ConsoleKafkaClusterV2#confluent_like}
  */
  readonly confluentLike?: ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLike;
  /**
  * AWS Glue schema registry configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#glue ConsoleKafkaClusterV2#glue}
  */
  readonly glue?: ConsoleKafkaClusterV2SpecSchemaRegistryGlue;
}

export function consoleKafkaClusterV2SpecSchemaRegistryToTerraform(struct?: ConsoleKafkaClusterV2SpecSchemaRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confluent_like: consoleKafkaClusterV2SpecSchemaRegistryConfluentLikeToTerraform(struct!.confluentLike),
    glue: consoleKafkaClusterV2SpecSchemaRegistryGlueToTerraform(struct!.glue),
  }
}


export function consoleKafkaClusterV2SpecSchemaRegistryToHclTerraform(struct?: ConsoleKafkaClusterV2SpecSchemaRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confluent_like: {
      value: consoleKafkaClusterV2SpecSchemaRegistryConfluentLikeToHclTerraform(struct!.confluentLike),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLike",
    },
    glue: {
      value: consoleKafkaClusterV2SpecSchemaRegistryGlueToHclTerraform(struct!.glue),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsoleKafkaClusterV2SpecSchemaRegistryGlue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleKafkaClusterV2SpecSchemaRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleKafkaClusterV2SpecSchemaRegistry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confluentLike?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confluentLike = this._confluentLike?.internalValue;
    }
    if (this._glue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glue = this._glue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleKafkaClusterV2SpecSchemaRegistry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._confluentLike.internalValue = undefined;
      this._glue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._confluentLike.internalValue = value.confluentLike;
      this._glue.internalValue = value.glue;
    }
  }

  // confluent_like - computed: false, optional: true, required: false
  private _confluentLike = new ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLikeOutputReference(this, "confluent_like");
  public get confluentLike() {
    return this._confluentLike;
  }
  public putConfluentLike(value: ConsoleKafkaClusterV2SpecSchemaRegistryConfluentLike) {
    this._confluentLike.internalValue = value;
  }
  public resetConfluentLike() {
    this._confluentLike.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confluentLikeInput() {
    return this._confluentLike.internalValue;
  }

  // glue - computed: false, optional: true, required: false
  private _glue = new ConsoleKafkaClusterV2SpecSchemaRegistryGlueOutputReference(this, "glue");
  public get glue() {
    return this._glue;
  }
  public putGlue(value: ConsoleKafkaClusterV2SpecSchemaRegistryGlue) {
    this._glue.internalValue = value;
  }
  public resetGlue() {
    this._glue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glueInput() {
    return this._glue.internalValue;
  }
}
export interface ConsoleKafkaClusterV2Spec {
  /**
  * List of bootstrap servers for the Kafka cluster separated by comma
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#bootstrap_servers ConsoleKafkaClusterV2#bootstrap_servers}
  */
  readonly bootstrapServers: string;
  /**
  * Kafka cluster icon color in hexadecimal format like `#FF0000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#color ConsoleKafkaClusterV2#color}
  */
  readonly color?: string;
  /**
  * Kafka cluster display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#display_name ConsoleKafkaClusterV2#display_name}
  */
  readonly displayName: string;
  /**
  * Kafka cluster icon. List of available icons can be found [here](https://docs.conduktor.io/platform/reference/resource-reference/console/#icon-sets)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#icon ConsoleKafkaClusterV2#icon}
  */
  readonly icon?: string;
  /**
  * Ignore untrusted certificate for Kafka cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#ignore_untrusted_certificate ConsoleKafkaClusterV2#ignore_untrusted_certificate}
  */
  readonly ignoreUntrustedCertificate?: boolean | cdktf.IResolvable;
  /**
  * Kafka flavor configuration. One of `confluent`, `aiven`, `gateway`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#kafka_flavor ConsoleKafkaClusterV2#kafka_flavor}
  */
  readonly kafkaFlavor?: ConsoleKafkaClusterV2SpecKafkaFlavor;
  /**
  * Kafka cluster properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#properties ConsoleKafkaClusterV2#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Schema registry configuration. One of `confluent_like`, `glue`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#schema_registry ConsoleKafkaClusterV2#schema_registry}
  */
  readonly schemaRegistry?: ConsoleKafkaClusterV2SpecSchemaRegistry;
}

export function consoleKafkaClusterV2SpecToTerraform(struct?: ConsoleKafkaClusterV2Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bootstrap_servers: cdktf.stringToTerraform(struct!.bootstrapServers),
    color: cdktf.stringToTerraform(struct!.color),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    icon: cdktf.stringToTerraform(struct!.icon),
    ignore_untrusted_certificate: cdktf.booleanToTerraform(struct!.ignoreUntrustedCertificate),
    kafka_flavor: consoleKafkaClusterV2SpecKafkaFlavorToTerraform(struct!.kafkaFlavor),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    schema_registry: consoleKafkaClusterV2SpecSchemaRegistryToTerraform(struct!.schemaRegistry),
  }
}


export function consoleKafkaClusterV2SpecToHclTerraform(struct?: ConsoleKafkaClusterV2Spec | cdktf.IResolvable): any {
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
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_untrusted_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreUntrustedCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kafka_flavor: {
      value: consoleKafkaClusterV2SpecKafkaFlavorToHclTerraform(struct!.kafkaFlavor),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsoleKafkaClusterV2SpecKafkaFlavor",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    schema_registry: {
      value: consoleKafkaClusterV2SpecSchemaRegistryToHclTerraform(struct!.schemaRegistry),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsoleKafkaClusterV2SpecSchemaRegistry",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleKafkaClusterV2SpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleKafkaClusterV2Spec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootstrapServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapServers = this._bootstrapServers;
    }
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._ignoreUntrustedCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreUntrustedCertificate = this._ignoreUntrustedCertificate;
    }
    if (this._kafkaFlavor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaFlavor = this._kafkaFlavor?.internalValue;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._schemaRegistry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistry = this._schemaRegistry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleKafkaClusterV2Spec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootstrapServers = undefined;
      this._color = undefined;
      this._displayName = undefined;
      this._icon = undefined;
      this._ignoreUntrustedCertificate = undefined;
      this._kafkaFlavor.internalValue = undefined;
      this._properties = undefined;
      this._schemaRegistry.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootstrapServers = value.bootstrapServers;
      this._color = value.color;
      this._displayName = value.displayName;
      this._icon = value.icon;
      this._ignoreUntrustedCertificate = value.ignoreUntrustedCertificate;
      this._kafkaFlavor.internalValue = value.kafkaFlavor;
      this._properties = value.properties;
      this._schemaRegistry.internalValue = value.schemaRegistry;
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

  // color - computed: true, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // icon - computed: true, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // ignore_untrusted_certificate - computed: true, optional: true, required: false
  private _ignoreUntrustedCertificate?: boolean | cdktf.IResolvable; 
  public get ignoreUntrustedCertificate() {
    return this.getBooleanAttribute('ignore_untrusted_certificate');
  }
  public set ignoreUntrustedCertificate(value: boolean | cdktf.IResolvable) {
    this._ignoreUntrustedCertificate = value;
  }
  public resetIgnoreUntrustedCertificate() {
    this._ignoreUntrustedCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUntrustedCertificateInput() {
    return this._ignoreUntrustedCertificate;
  }

  // kafka_flavor - computed: false, optional: true, required: false
  private _kafkaFlavor = new ConsoleKafkaClusterV2SpecKafkaFlavorOutputReference(this, "kafka_flavor");
  public get kafkaFlavor() {
    return this._kafkaFlavor;
  }
  public putKafkaFlavor(value: ConsoleKafkaClusterV2SpecKafkaFlavor) {
    this._kafkaFlavor.internalValue = value;
  }
  public resetKafkaFlavor() {
    this._kafkaFlavor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaFlavorInput() {
    return this._kafkaFlavor.internalValue;
  }

  // properties - computed: false, optional: true, required: false
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

  // schema_registry - computed: false, optional: true, required: false
  private _schemaRegistry = new ConsoleKafkaClusterV2SpecSchemaRegistryOutputReference(this, "schema_registry");
  public get schemaRegistry() {
    return this._schemaRegistry;
  }
  public putSchemaRegistry(value: ConsoleKafkaClusterV2SpecSchemaRegistry) {
    this._schemaRegistry.internalValue = value;
  }
  public resetSchemaRegistry() {
    this._schemaRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryInput() {
    return this._schemaRegistry.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2 conduktor_console_kafka_cluster_v2}
*/
export class ConsoleKafkaClusterV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "conduktor_console_kafka_cluster_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConsoleKafkaClusterV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConsoleKafkaClusterV2 to import
  * @param importFromId The id of the existing ConsoleKafkaClusterV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConsoleKafkaClusterV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "conduktor_console_kafka_cluster_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_kafka_cluster_v2 conduktor_console_kafka_cluster_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConsoleKafkaClusterV2Config
  */
  public constructor(scope: Construct, id: string, config: ConsoleKafkaClusterV2Config) {
    super(scope, id, {
      terraformResourceType: 'conduktor_console_kafka_cluster_v2',
      terraformGeneratorMetadata: {
        providerName: 'conduktor',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._labels = config.labels;
    this._name = config.name;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // spec - computed: false, optional: false, required: true
  private _spec = new ConsoleKafkaClusterV2SpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ConsoleKafkaClusterV2Spec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      spec: consoleKafkaClusterV2SpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spec: {
        value: consoleKafkaClusterV2SpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConsoleKafkaClusterV2Spec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
