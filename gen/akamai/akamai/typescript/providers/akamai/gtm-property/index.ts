// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GtmPropertyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#backup_cname GtmProperty#backup_cname}
  */
  readonly backupCname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#backup_ip GtmProperty#backup_ip}
  */
  readonly backupIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#balance_by_download_score GtmProperty#balance_by_download_score}
  */
  readonly balanceByDownloadScore?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#cname GtmProperty#cname}
  */
  readonly cname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#comments GtmProperty#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#domain GtmProperty#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#dynamic_ttl GtmProperty#dynamic_ttl}
  */
  readonly dynamicTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#failback_delay GtmProperty#failback_delay}
  */
  readonly failbackDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#failover_delay GtmProperty#failover_delay}
  */
  readonly failoverDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#ghost_demand_reporting GtmProperty#ghost_demand_reporting}
  */
  readonly ghostDemandReporting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#handout_limit GtmProperty#handout_limit}
  */
  readonly handoutLimit: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#handout_mode GtmProperty#handout_mode}
  */
  readonly handoutMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#health_max GtmProperty#health_max}
  */
  readonly healthMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#health_multiplier GtmProperty#health_multiplier}
  */
  readonly healthMultiplier?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#health_threshold GtmProperty#health_threshold}
  */
  readonly healthThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#id GtmProperty#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#ipv6 GtmProperty#ipv6}
  */
  readonly ipv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#load_imbalance_percentage GtmProperty#load_imbalance_percentage}
  */
  readonly loadImbalancePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#map_name GtmProperty#map_name}
  */
  readonly mapName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#max_unreachable_penalty GtmProperty#max_unreachable_penalty}
  */
  readonly maxUnreachablePenalty?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#min_live_fraction GtmProperty#min_live_fraction}
  */
  readonly minLiveFraction?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#name GtmProperty#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#score_aggregation_type GtmProperty#score_aggregation_type}
  */
  readonly scoreAggregationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#stickiness_bonus_constant GtmProperty#stickiness_bonus_constant}
  */
  readonly stickinessBonusConstant?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#stickiness_bonus_percentage GtmProperty#stickiness_bonus_percentage}
  */
  readonly stickinessBonusPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#type GtmProperty#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#unreachable_threshold GtmProperty#unreachable_threshold}
  */
  readonly unreachableThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#use_computed_targets GtmProperty#use_computed_targets}
  */
  readonly useComputedTargets?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#wait_on_complete GtmProperty#wait_on_complete}
  */
  readonly waitOnComplete?: boolean | cdktf.IResolvable;
  /**
  * liveness_test block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#liveness_test GtmProperty#liveness_test}
  */
  readonly livenessTest?: GtmPropertyLivenessTest[] | cdktf.IResolvable;
  /**
  * static_rr_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#static_rr_set GtmProperty#static_rr_set}
  */
  readonly staticRrSet?: GtmPropertyStaticRrSet[] | cdktf.IResolvable;
  /**
  * traffic_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#traffic_target GtmProperty#traffic_target}
  */
  readonly trafficTarget?: GtmPropertyTrafficTarget[] | cdktf.IResolvable;
}
export interface GtmPropertyLivenessTestHttpHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#name GtmProperty#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#value GtmProperty#value}
  */
  readonly value?: string;
}

export function gtmPropertyLivenessTestHttpHeaderToTerraform(struct?: GtmPropertyLivenessTestHttpHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function gtmPropertyLivenessTestHttpHeaderToHclTerraform(struct?: GtmPropertyLivenessTestHttpHeader | cdktf.IResolvable): any {
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

export class GtmPropertyLivenessTestHttpHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GtmPropertyLivenessTestHttpHeader | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GtmPropertyLivenessTestHttpHeader | cdktf.IResolvable | undefined) {
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

export class GtmPropertyLivenessTestHttpHeaderList extends cdktf.ComplexList {
  public internalValue? : GtmPropertyLivenessTestHttpHeader[] | cdktf.IResolvable

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
  public get(index: number): GtmPropertyLivenessTestHttpHeaderOutputReference {
    return new GtmPropertyLivenessTestHttpHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GtmPropertyLivenessTest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#alternate_ca_certificates GtmProperty#alternate_ca_certificates}
  */
  readonly alternateCaCertificates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#answers_required GtmProperty#answers_required}
  */
  readonly answersRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#disable_nonstandard_port_warning GtmProperty#disable_nonstandard_port_warning}
  */
  readonly disableNonstandardPortWarning?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#disabled GtmProperty#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#error_penalty GtmProperty#error_penalty}
  */
  readonly errorPenalty?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#http_error3xx GtmProperty#http_error3xx}
  */
  readonly httpError3Xx?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#http_error4xx GtmProperty#http_error4xx}
  */
  readonly httpError4Xx?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#http_error5xx GtmProperty#http_error5xx}
  */
  readonly httpError5Xx?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#http_method GtmProperty#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#http_request_body GtmProperty#http_request_body}
  */
  readonly httpRequestBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#name GtmProperty#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#peer_certificate_verification GtmProperty#peer_certificate_verification}
  */
  readonly peerCertificateVerification?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable backwards compatibility for liveness endpoints that use older TLS protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#pre_2023_security_posture GtmProperty#pre_2023_security_posture}
  */
  readonly pre2023SecurityPosture?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#recursion_requested GtmProperty#recursion_requested}
  */
  readonly recursionRequested?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#request_string GtmProperty#request_string}
  */
  readonly requestString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#resource_type GtmProperty#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#response_string GtmProperty#response_string}
  */
  readonly responseString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#ssl_client_certificate GtmProperty#ssl_client_certificate}
  */
  readonly sslClientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#ssl_client_private_key GtmProperty#ssl_client_private_key}
  */
  readonly sslClientPrivateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#test_interval GtmProperty#test_interval}
  */
  readonly testInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#test_object GtmProperty#test_object}
  */
  readonly testObject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#test_object_password GtmProperty#test_object_password}
  */
  readonly testObjectPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#test_object_port GtmProperty#test_object_port}
  */
  readonly testObjectPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#test_object_protocol GtmProperty#test_object_protocol}
  */
  readonly testObjectProtocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#test_object_username GtmProperty#test_object_username}
  */
  readonly testObjectUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#test_timeout GtmProperty#test_timeout}
  */
  readonly testTimeout: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#timeout_penalty GtmProperty#timeout_penalty}
  */
  readonly timeoutPenalty?: number;
  /**
  * http_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#http_header GtmProperty#http_header}
  */
  readonly httpHeader?: GtmPropertyLivenessTestHttpHeader[] | cdktf.IResolvable;
}

export function gtmPropertyLivenessTestToTerraform(struct?: GtmPropertyLivenessTest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alternate_ca_certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alternateCaCertificates),
    answers_required: cdktf.booleanToTerraform(struct!.answersRequired),
    disable_nonstandard_port_warning: cdktf.booleanToTerraform(struct!.disableNonstandardPortWarning),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    error_penalty: cdktf.numberToTerraform(struct!.errorPenalty),
    http_error3xx: cdktf.booleanToTerraform(struct!.httpError3Xx),
    http_error4xx: cdktf.booleanToTerraform(struct!.httpError4Xx),
    http_error5xx: cdktf.booleanToTerraform(struct!.httpError5Xx),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    http_request_body: cdktf.stringToTerraform(struct!.httpRequestBody),
    name: cdktf.stringToTerraform(struct!.name),
    peer_certificate_verification: cdktf.booleanToTerraform(struct!.peerCertificateVerification),
    pre_2023_security_posture: cdktf.booleanToTerraform(struct!.pre2023SecurityPosture),
    recursion_requested: cdktf.booleanToTerraform(struct!.recursionRequested),
    request_string: cdktf.stringToTerraform(struct!.requestString),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    response_string: cdktf.stringToTerraform(struct!.responseString),
    ssl_client_certificate: cdktf.stringToTerraform(struct!.sslClientCertificate),
    ssl_client_private_key: cdktf.stringToTerraform(struct!.sslClientPrivateKey),
    test_interval: cdktf.numberToTerraform(struct!.testInterval),
    test_object: cdktf.stringToTerraform(struct!.testObject),
    test_object_password: cdktf.stringToTerraform(struct!.testObjectPassword),
    test_object_port: cdktf.numberToTerraform(struct!.testObjectPort),
    test_object_protocol: cdktf.stringToTerraform(struct!.testObjectProtocol),
    test_object_username: cdktf.stringToTerraform(struct!.testObjectUsername),
    test_timeout: cdktf.numberToTerraform(struct!.testTimeout),
    timeout_penalty: cdktf.numberToTerraform(struct!.timeoutPenalty),
    http_header: cdktf.listMapper(gtmPropertyLivenessTestHttpHeaderToTerraform, true)(struct!.httpHeader),
  }
}


export function gtmPropertyLivenessTestToHclTerraform(struct?: GtmPropertyLivenessTest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alternate_ca_certificates: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alternateCaCertificates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    answers_required: {
      value: cdktf.booleanToHclTerraform(struct!.answersRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_nonstandard_port_warning: {
      value: cdktf.booleanToHclTerraform(struct!.disableNonstandardPortWarning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    error_penalty: {
      value: cdktf.numberToHclTerraform(struct!.errorPenalty),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_error3xx: {
      value: cdktf.booleanToHclTerraform(struct!.httpError3Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_error4xx: {
      value: cdktf.booleanToHclTerraform(struct!.httpError4Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_error5xx: {
      value: cdktf.booleanToHclTerraform(struct!.httpError5Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_request_body: {
      value: cdktf.stringToHclTerraform(struct!.httpRequestBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_certificate_verification: {
      value: cdktf.booleanToHclTerraform(struct!.peerCertificateVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pre_2023_security_posture: {
      value: cdktf.booleanToHclTerraform(struct!.pre2023SecurityPosture),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recursion_requested: {
      value: cdktf.booleanToHclTerraform(struct!.recursionRequested),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_string: {
      value: cdktf.stringToHclTerraform(struct!.requestString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_string: {
      value: cdktf.stringToHclTerraform(struct!.responseString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.sslClientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_client_private_key: {
      value: cdktf.stringToHclTerraform(struct!.sslClientPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    test_interval: {
      value: cdktf.numberToHclTerraform(struct!.testInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    test_object: {
      value: cdktf.stringToHclTerraform(struct!.testObject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    test_object_password: {
      value: cdktf.stringToHclTerraform(struct!.testObjectPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    test_object_port: {
      value: cdktf.numberToHclTerraform(struct!.testObjectPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    test_object_protocol: {
      value: cdktf.stringToHclTerraform(struct!.testObjectProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    test_object_username: {
      value: cdktf.stringToHclTerraform(struct!.testObjectUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    test_timeout: {
      value: cdktf.numberToHclTerraform(struct!.testTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_penalty: {
      value: cdktf.numberToHclTerraform(struct!.timeoutPenalty),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_header: {
      value: cdktf.listMapperHcl(gtmPropertyLivenessTestHttpHeaderToHclTerraform, true)(struct!.httpHeader),
      isBlock: true,
      type: "list",
      storageClassType: "GtmPropertyLivenessTestHttpHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GtmPropertyLivenessTestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GtmPropertyLivenessTest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alternateCaCertificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternateCaCertificates = this._alternateCaCertificates;
    }
    if (this._answersRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.answersRequired = this._answersRequired;
    }
    if (this._disableNonstandardPortWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableNonstandardPortWarning = this._disableNonstandardPortWarning;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._errorPenalty !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorPenalty = this._errorPenalty;
    }
    if (this._httpError3Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpError3Xx = this._httpError3Xx;
    }
    if (this._httpError4Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpError4Xx = this._httpError4Xx;
    }
    if (this._httpError5Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpError5Xx = this._httpError5Xx;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._httpRequestBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequestBody = this._httpRequestBody;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._peerCertificateVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerCertificateVerification = this._peerCertificateVerification;
    }
    if (this._pre2023SecurityPosture !== undefined) {
      hasAnyValues = true;
      internalValueResult.pre2023SecurityPosture = this._pre2023SecurityPosture;
    }
    if (this._recursionRequested !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursionRequested = this._recursionRequested;
    }
    if (this._requestString !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestString = this._requestString;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._responseString !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseString = this._responseString;
    }
    if (this._sslClientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslClientCertificate = this._sslClientCertificate;
    }
    if (this._sslClientPrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslClientPrivateKey = this._sslClientPrivateKey;
    }
    if (this._testInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.testInterval = this._testInterval;
    }
    if (this._testObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.testObject = this._testObject;
    }
    if (this._testObjectPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.testObjectPassword = this._testObjectPassword;
    }
    if (this._testObjectPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.testObjectPort = this._testObjectPort;
    }
    if (this._testObjectProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.testObjectProtocol = this._testObjectProtocol;
    }
    if (this._testObjectUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.testObjectUsername = this._testObjectUsername;
    }
    if (this._testTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.testTimeout = this._testTimeout;
    }
    if (this._timeoutPenalty !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutPenalty = this._timeoutPenalty;
    }
    if (this._httpHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GtmPropertyLivenessTest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alternateCaCertificates = undefined;
      this._answersRequired = undefined;
      this._disableNonstandardPortWarning = undefined;
      this._disabled = undefined;
      this._errorPenalty = undefined;
      this._httpError3Xx = undefined;
      this._httpError4Xx = undefined;
      this._httpError5Xx = undefined;
      this._httpMethod = undefined;
      this._httpRequestBody = undefined;
      this._name = undefined;
      this._peerCertificateVerification = undefined;
      this._pre2023SecurityPosture = undefined;
      this._recursionRequested = undefined;
      this._requestString = undefined;
      this._resourceType = undefined;
      this._responseString = undefined;
      this._sslClientCertificate = undefined;
      this._sslClientPrivateKey = undefined;
      this._testInterval = undefined;
      this._testObject = undefined;
      this._testObjectPassword = undefined;
      this._testObjectPort = undefined;
      this._testObjectProtocol = undefined;
      this._testObjectUsername = undefined;
      this._testTimeout = undefined;
      this._timeoutPenalty = undefined;
      this._httpHeader.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alternateCaCertificates = value.alternateCaCertificates;
      this._answersRequired = value.answersRequired;
      this._disableNonstandardPortWarning = value.disableNonstandardPortWarning;
      this._disabled = value.disabled;
      this._errorPenalty = value.errorPenalty;
      this._httpError3Xx = value.httpError3Xx;
      this._httpError4Xx = value.httpError4Xx;
      this._httpError5Xx = value.httpError5Xx;
      this._httpMethod = value.httpMethod;
      this._httpRequestBody = value.httpRequestBody;
      this._name = value.name;
      this._peerCertificateVerification = value.peerCertificateVerification;
      this._pre2023SecurityPosture = value.pre2023SecurityPosture;
      this._recursionRequested = value.recursionRequested;
      this._requestString = value.requestString;
      this._resourceType = value.resourceType;
      this._responseString = value.responseString;
      this._sslClientCertificate = value.sslClientCertificate;
      this._sslClientPrivateKey = value.sslClientPrivateKey;
      this._testInterval = value.testInterval;
      this._testObject = value.testObject;
      this._testObjectPassword = value.testObjectPassword;
      this._testObjectPort = value.testObjectPort;
      this._testObjectProtocol = value.testObjectProtocol;
      this._testObjectUsername = value.testObjectUsername;
      this._testTimeout = value.testTimeout;
      this._timeoutPenalty = value.timeoutPenalty;
      this._httpHeader.internalValue = value.httpHeader;
    }
  }

  // alternate_ca_certificates - computed: false, optional: true, required: false
  private _alternateCaCertificates?: string[]; 
  public get alternateCaCertificates() {
    return this.getListAttribute('alternate_ca_certificates');
  }
  public set alternateCaCertificates(value: string[]) {
    this._alternateCaCertificates = value;
  }
  public resetAlternateCaCertificates() {
    this._alternateCaCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateCaCertificatesInput() {
    return this._alternateCaCertificates;
  }

  // answers_required - computed: false, optional: true, required: false
  private _answersRequired?: boolean | cdktf.IResolvable; 
  public get answersRequired() {
    return this.getBooleanAttribute('answers_required');
  }
  public set answersRequired(value: boolean | cdktf.IResolvable) {
    this._answersRequired = value;
  }
  public resetAnswersRequired() {
    this._answersRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get answersRequiredInput() {
    return this._answersRequired;
  }

  // disable_nonstandard_port_warning - computed: false, optional: true, required: false
  private _disableNonstandardPortWarning?: boolean | cdktf.IResolvable; 
  public get disableNonstandardPortWarning() {
    return this.getBooleanAttribute('disable_nonstandard_port_warning');
  }
  public set disableNonstandardPortWarning(value: boolean | cdktf.IResolvable) {
    this._disableNonstandardPortWarning = value;
  }
  public resetDisableNonstandardPortWarning() {
    this._disableNonstandardPortWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNonstandardPortWarningInput() {
    return this._disableNonstandardPortWarning;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // error_penalty - computed: false, optional: true, required: false
  private _errorPenalty?: number; 
  public get errorPenalty() {
    return this.getNumberAttribute('error_penalty');
  }
  public set errorPenalty(value: number) {
    this._errorPenalty = value;
  }
  public resetErrorPenalty() {
    this._errorPenalty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPenaltyInput() {
    return this._errorPenalty;
  }

  // http_error3xx - computed: false, optional: true, required: false
  private _httpError3Xx?: boolean | cdktf.IResolvable; 
  public get httpError3Xx() {
    return this.getBooleanAttribute('http_error3xx');
  }
  public set httpError3Xx(value: boolean | cdktf.IResolvable) {
    this._httpError3Xx = value;
  }
  public resetHttpError3Xx() {
    this._httpError3Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpError3XxInput() {
    return this._httpError3Xx;
  }

  // http_error4xx - computed: false, optional: true, required: false
  private _httpError4Xx?: boolean | cdktf.IResolvable; 
  public get httpError4Xx() {
    return this.getBooleanAttribute('http_error4xx');
  }
  public set httpError4Xx(value: boolean | cdktf.IResolvable) {
    this._httpError4Xx = value;
  }
  public resetHttpError4Xx() {
    this._httpError4Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpError4XxInput() {
    return this._httpError4Xx;
  }

  // http_error5xx - computed: false, optional: true, required: false
  private _httpError5Xx?: boolean | cdktf.IResolvable; 
  public get httpError5Xx() {
    return this.getBooleanAttribute('http_error5xx');
  }
  public set httpError5Xx(value: boolean | cdktf.IResolvable) {
    this._httpError5Xx = value;
  }
  public resetHttpError5Xx() {
    this._httpError5Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpError5XxInput() {
    return this._httpError5Xx;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // http_request_body - computed: false, optional: true, required: false
  private _httpRequestBody?: string; 
  public get httpRequestBody() {
    return this.getStringAttribute('http_request_body');
  }
  public set httpRequestBody(value: string) {
    this._httpRequestBody = value;
  }
  public resetHttpRequestBody() {
    this._httpRequestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestBodyInput() {
    return this._httpRequestBody;
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

  // peer_certificate_verification - computed: false, optional: true, required: false
  private _peerCertificateVerification?: boolean | cdktf.IResolvable; 
  public get peerCertificateVerification() {
    return this.getBooleanAttribute('peer_certificate_verification');
  }
  public set peerCertificateVerification(value: boolean | cdktf.IResolvable) {
    this._peerCertificateVerification = value;
  }
  public resetPeerCertificateVerification() {
    this._peerCertificateVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerCertificateVerificationInput() {
    return this._peerCertificateVerification;
  }

  // pre_2023_security_posture - computed: false, optional: true, required: false
  private _pre2023SecurityPosture?: boolean | cdktf.IResolvable; 
  public get pre2023SecurityPosture() {
    return this.getBooleanAttribute('pre_2023_security_posture');
  }
  public set pre2023SecurityPosture(value: boolean | cdktf.IResolvable) {
    this._pre2023SecurityPosture = value;
  }
  public resetPre2023SecurityPosture() {
    this._pre2023SecurityPosture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pre2023SecurityPostureInput() {
    return this._pre2023SecurityPosture;
  }

  // recursion_requested - computed: false, optional: true, required: false
  private _recursionRequested?: boolean | cdktf.IResolvable; 
  public get recursionRequested() {
    return this.getBooleanAttribute('recursion_requested');
  }
  public set recursionRequested(value: boolean | cdktf.IResolvable) {
    this._recursionRequested = value;
  }
  public resetRecursionRequested() {
    this._recursionRequested = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursionRequestedInput() {
    return this._recursionRequested;
  }

  // request_string - computed: false, optional: true, required: false
  private _requestString?: string; 
  public get requestString() {
    return this.getStringAttribute('request_string');
  }
  public set requestString(value: string) {
    this._requestString = value;
  }
  public resetRequestString() {
    this._requestString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestStringInput() {
    return this._requestString;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // response_string - computed: false, optional: true, required: false
  private _responseString?: string; 
  public get responseString() {
    return this.getStringAttribute('response_string');
  }
  public set responseString(value: string) {
    this._responseString = value;
  }
  public resetResponseString() {
    this._responseString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseStringInput() {
    return this._responseString;
  }

  // ssl_client_certificate - computed: false, optional: true, required: false
  private _sslClientCertificate?: string; 
  public get sslClientCertificate() {
    return this.getStringAttribute('ssl_client_certificate');
  }
  public set sslClientCertificate(value: string) {
    this._sslClientCertificate = value;
  }
  public resetSslClientCertificate() {
    this._sslClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientCertificateInput() {
    return this._sslClientCertificate;
  }

  // ssl_client_private_key - computed: false, optional: true, required: false
  private _sslClientPrivateKey?: string; 
  public get sslClientPrivateKey() {
    return this.getStringAttribute('ssl_client_private_key');
  }
  public set sslClientPrivateKey(value: string) {
    this._sslClientPrivateKey = value;
  }
  public resetSslClientPrivateKey() {
    this._sslClientPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientPrivateKeyInput() {
    return this._sslClientPrivateKey;
  }

  // test_interval - computed: false, optional: false, required: true
  private _testInterval?: number; 
  public get testInterval() {
    return this.getNumberAttribute('test_interval');
  }
  public set testInterval(value: number) {
    this._testInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testIntervalInput() {
    return this._testInterval;
  }

  // test_object - computed: false, optional: true, required: false
  private _testObject?: string; 
  public get testObject() {
    return this.getStringAttribute('test_object');
  }
  public set testObject(value: string) {
    this._testObject = value;
  }
  public resetTestObject() {
    this._testObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testObjectInput() {
    return this._testObject;
  }

  // test_object_password - computed: false, optional: true, required: false
  private _testObjectPassword?: string; 
  public get testObjectPassword() {
    return this.getStringAttribute('test_object_password');
  }
  public set testObjectPassword(value: string) {
    this._testObjectPassword = value;
  }
  public resetTestObjectPassword() {
    this._testObjectPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testObjectPasswordInput() {
    return this._testObjectPassword;
  }

  // test_object_port - computed: false, optional: true, required: false
  private _testObjectPort?: number; 
  public get testObjectPort() {
    return this.getNumberAttribute('test_object_port');
  }
  public set testObjectPort(value: number) {
    this._testObjectPort = value;
  }
  public resetTestObjectPort() {
    this._testObjectPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testObjectPortInput() {
    return this._testObjectPort;
  }

  // test_object_protocol - computed: false, optional: false, required: true
  private _testObjectProtocol?: string; 
  public get testObjectProtocol() {
    return this.getStringAttribute('test_object_protocol');
  }
  public set testObjectProtocol(value: string) {
    this._testObjectProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testObjectProtocolInput() {
    return this._testObjectProtocol;
  }

  // test_object_username - computed: false, optional: true, required: false
  private _testObjectUsername?: string; 
  public get testObjectUsername() {
    return this.getStringAttribute('test_object_username');
  }
  public set testObjectUsername(value: string) {
    this._testObjectUsername = value;
  }
  public resetTestObjectUsername() {
    this._testObjectUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testObjectUsernameInput() {
    return this._testObjectUsername;
  }

  // test_timeout - computed: false, optional: false, required: true
  private _testTimeout?: number; 
  public get testTimeout() {
    return this.getNumberAttribute('test_timeout');
  }
  public set testTimeout(value: number) {
    this._testTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testTimeoutInput() {
    return this._testTimeout;
  }

  // timeout_penalty - computed: false, optional: true, required: false
  private _timeoutPenalty?: number; 
  public get timeoutPenalty() {
    return this.getNumberAttribute('timeout_penalty');
  }
  public set timeoutPenalty(value: number) {
    this._timeoutPenalty = value;
  }
  public resetTimeoutPenalty() {
    this._timeoutPenalty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutPenaltyInput() {
    return this._timeoutPenalty;
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader = new GtmPropertyLivenessTestHttpHeaderList(this, "http_header", false);
  public get httpHeader() {
    return this._httpHeader;
  }
  public putHttpHeader(value: GtmPropertyLivenessTestHttpHeader[] | cdktf.IResolvable) {
    this._httpHeader.internalValue = value;
  }
  public resetHttpHeader() {
    this._httpHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader.internalValue;
  }
}

export class GtmPropertyLivenessTestList extends cdktf.ComplexList {
  public internalValue? : GtmPropertyLivenessTest[] | cdktf.IResolvable

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
  public get(index: number): GtmPropertyLivenessTestOutputReference {
    return new GtmPropertyLivenessTestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GtmPropertyStaticRrSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#rdata GtmProperty#rdata}
  */
  readonly rdata?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#ttl GtmProperty#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#type GtmProperty#type}
  */
  readonly type?: string;
}

export function gtmPropertyStaticRrSetToTerraform(struct?: GtmPropertyStaticRrSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rdata: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rdata),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function gtmPropertyStaticRrSetToHclTerraform(struct?: GtmPropertyStaticRrSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rdata: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rdata),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GtmPropertyStaticRrSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GtmPropertyStaticRrSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rdata !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdata = this._rdata;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GtmPropertyStaticRrSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rdata = undefined;
      this._ttl = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rdata = value.rdata;
      this._ttl = value.ttl;
      this._type = value.type;
    }
  }

  // rdata - computed: false, optional: true, required: false
  private _rdata?: string[]; 
  public get rdata() {
    return this.getListAttribute('rdata');
  }
  public set rdata(value: string[]) {
    this._rdata = value;
  }
  public resetRdata() {
    this._rdata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdataInput() {
    return this._rdata;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class GtmPropertyStaticRrSetList extends cdktf.ComplexList {
  public internalValue? : GtmPropertyStaticRrSet[] | cdktf.IResolvable

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
  public get(index: number): GtmPropertyStaticRrSetOutputReference {
    return new GtmPropertyStaticRrSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GtmPropertyTrafficTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#datacenter_id GtmProperty#datacenter_id}
  */
  readonly datacenterId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#enabled GtmProperty#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#handout_cname GtmProperty#handout_cname}
  */
  readonly handoutCname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#precedence GtmProperty#precedence}
  */
  readonly precedence?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#servers GtmProperty#servers}
  */
  readonly servers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#weight GtmProperty#weight}
  */
  readonly weight?: number;
}

export function gtmPropertyTrafficTargetToTerraform(struct?: GtmPropertyTrafficTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenter_id: cdktf.numberToTerraform(struct!.datacenterId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    handout_cname: cdktf.stringToTerraform(struct!.handoutCname),
    precedence: cdktf.numberToTerraform(struct!.precedence),
    servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.servers),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function gtmPropertyTrafficTargetToHclTerraform(struct?: GtmPropertyTrafficTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datacenter_id: {
      value: cdktf.numberToHclTerraform(struct!.datacenterId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    handout_cname: {
      value: cdktf.stringToHclTerraform(struct!.handoutCname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    precedence: {
      value: cdktf.numberToHclTerraform(struct!.precedence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.servers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GtmPropertyTrafficTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GtmPropertyTrafficTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenterId = this._datacenterId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._handoutCname !== undefined) {
      hasAnyValues = true;
      internalValueResult.handoutCname = this._handoutCname;
    }
    if (this._precedence !== undefined) {
      hasAnyValues = true;
      internalValueResult.precedence = this._precedence;
    }
    if (this._servers !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GtmPropertyTrafficTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datacenterId = undefined;
      this._enabled = undefined;
      this._handoutCname = undefined;
      this._precedence = undefined;
      this._servers = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datacenterId = value.datacenterId;
      this._enabled = value.enabled;
      this._handoutCname = value.handoutCname;
      this._precedence = value.precedence;
      this._servers = value.servers;
      this._weight = value.weight;
    }
  }

  // datacenter_id - computed: false, optional: true, required: false
  private _datacenterId?: number; 
  public get datacenterId() {
    return this.getNumberAttribute('datacenter_id');
  }
  public set datacenterId(value: number) {
    this._datacenterId = value;
  }
  public resetDatacenterId() {
    this._datacenterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterIdInput() {
    return this._datacenterId;
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

  // handout_cname - computed: false, optional: true, required: false
  private _handoutCname?: string; 
  public get handoutCname() {
    return this.getStringAttribute('handout_cname');
  }
  public set handoutCname(value: string) {
    this._handoutCname = value;
  }
  public resetHandoutCname() {
    this._handoutCname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handoutCnameInput() {
    return this._handoutCname;
  }

  // precedence - computed: false, optional: true, required: false
  private _precedence?: number; 
  public get precedence() {
    return this.getNumberAttribute('precedence');
  }
  public set precedence(value: number) {
    this._precedence = value;
  }
  public resetPrecedence() {
    this._precedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precedenceInput() {
    return this._precedence;
  }

  // servers - computed: false, optional: true, required: false
  private _servers?: string[]; 
  public get servers() {
    return cdktf.Fn.tolist(this.getListAttribute('servers'));
  }
  public set servers(value: string[]) {
    this._servers = value;
  }
  public resetServers() {
    this._servers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class GtmPropertyTrafficTargetList extends cdktf.ComplexList {
  public internalValue? : GtmPropertyTrafficTarget[] | cdktf.IResolvable

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
  public get(index: number): GtmPropertyTrafficTargetOutputReference {
    return new GtmPropertyTrafficTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property akamai_gtm_property}
*/
export class GtmProperty extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_gtm_property";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GtmProperty resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GtmProperty to import
  * @param importFromId The id of the existing GtmProperty that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GtmProperty to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_gtm_property", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_property akamai_gtm_property} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GtmPropertyConfig
  */
  public constructor(scope: Construct, id: string, config: GtmPropertyConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_gtm_property',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupCname = config.backupCname;
    this._backupIp = config.backupIp;
    this._balanceByDownloadScore = config.balanceByDownloadScore;
    this._cname = config.cname;
    this._comments = config.comments;
    this._domain = config.domain;
    this._dynamicTtl = config.dynamicTtl;
    this._failbackDelay = config.failbackDelay;
    this._failoverDelay = config.failoverDelay;
    this._ghostDemandReporting = config.ghostDemandReporting;
    this._handoutLimit = config.handoutLimit;
    this._handoutMode = config.handoutMode;
    this._healthMax = config.healthMax;
    this._healthMultiplier = config.healthMultiplier;
    this._healthThreshold = config.healthThreshold;
    this._id = config.id;
    this._ipv6 = config.ipv6;
    this._loadImbalancePercentage = config.loadImbalancePercentage;
    this._mapName = config.mapName;
    this._maxUnreachablePenalty = config.maxUnreachablePenalty;
    this._minLiveFraction = config.minLiveFraction;
    this._name = config.name;
    this._scoreAggregationType = config.scoreAggregationType;
    this._stickinessBonusConstant = config.stickinessBonusConstant;
    this._stickinessBonusPercentage = config.stickinessBonusPercentage;
    this._type = config.type;
    this._unreachableThreshold = config.unreachableThreshold;
    this._useComputedTargets = config.useComputedTargets;
    this._waitOnComplete = config.waitOnComplete;
    this._livenessTest.internalValue = config.livenessTest;
    this._staticRrSet.internalValue = config.staticRrSet;
    this._trafficTarget.internalValue = config.trafficTarget;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_cname - computed: false, optional: true, required: false
  private _backupCname?: string; 
  public get backupCname() {
    return this.getStringAttribute('backup_cname');
  }
  public set backupCname(value: string) {
    this._backupCname = value;
  }
  public resetBackupCname() {
    this._backupCname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupCnameInput() {
    return this._backupCname;
  }

  // backup_ip - computed: false, optional: true, required: false
  private _backupIp?: string; 
  public get backupIp() {
    return this.getStringAttribute('backup_ip');
  }
  public set backupIp(value: string) {
    this._backupIp = value;
  }
  public resetBackupIp() {
    this._backupIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIpInput() {
    return this._backupIp;
  }

  // balance_by_download_score - computed: false, optional: true, required: false
  private _balanceByDownloadScore?: boolean | cdktf.IResolvable; 
  public get balanceByDownloadScore() {
    return this.getBooleanAttribute('balance_by_download_score');
  }
  public set balanceByDownloadScore(value: boolean | cdktf.IResolvable) {
    this._balanceByDownloadScore = value;
  }
  public resetBalanceByDownloadScore() {
    this._balanceByDownloadScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get balanceByDownloadScoreInput() {
    return this._balanceByDownloadScore;
  }

  // cname - computed: false, optional: true, required: false
  private _cname?: string; 
  public get cname() {
    return this.getStringAttribute('cname');
  }
  public set cname(value: string) {
    this._cname = value;
  }
  public resetCname() {
    this._cname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameInput() {
    return this._cname;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // dynamic_ttl - computed: false, optional: true, required: false
  private _dynamicTtl?: number; 
  public get dynamicTtl() {
    return this.getNumberAttribute('dynamic_ttl');
  }
  public set dynamicTtl(value: number) {
    this._dynamicTtl = value;
  }
  public resetDynamicTtl() {
    this._dynamicTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicTtlInput() {
    return this._dynamicTtl;
  }

  // failback_delay - computed: false, optional: true, required: false
  private _failbackDelay?: number; 
  public get failbackDelay() {
    return this.getNumberAttribute('failback_delay');
  }
  public set failbackDelay(value: number) {
    this._failbackDelay = value;
  }
  public resetFailbackDelay() {
    this._failbackDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failbackDelayInput() {
    return this._failbackDelay;
  }

  // failover_delay - computed: false, optional: true, required: false
  private _failoverDelay?: number; 
  public get failoverDelay() {
    return this.getNumberAttribute('failover_delay');
  }
  public set failoverDelay(value: number) {
    this._failoverDelay = value;
  }
  public resetFailoverDelay() {
    this._failoverDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverDelayInput() {
    return this._failoverDelay;
  }

  // ghost_demand_reporting - computed: false, optional: true, required: false
  private _ghostDemandReporting?: boolean | cdktf.IResolvable; 
  public get ghostDemandReporting() {
    return this.getBooleanAttribute('ghost_demand_reporting');
  }
  public set ghostDemandReporting(value: boolean | cdktf.IResolvable) {
    this._ghostDemandReporting = value;
  }
  public resetGhostDemandReporting() {
    this._ghostDemandReporting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ghostDemandReportingInput() {
    return this._ghostDemandReporting;
  }

  // handout_limit - computed: false, optional: false, required: true
  private _handoutLimit?: number; 
  public get handoutLimit() {
    return this.getNumberAttribute('handout_limit');
  }
  public set handoutLimit(value: number) {
    this._handoutLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get handoutLimitInput() {
    return this._handoutLimit;
  }

  // handout_mode - computed: false, optional: false, required: true
  private _handoutMode?: string; 
  public get handoutMode() {
    return this.getStringAttribute('handout_mode');
  }
  public set handoutMode(value: string) {
    this._handoutMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get handoutModeInput() {
    return this._handoutMode;
  }

  // health_max - computed: false, optional: true, required: false
  private _healthMax?: number; 
  public get healthMax() {
    return this.getNumberAttribute('health_max');
  }
  public set healthMax(value: number) {
    this._healthMax = value;
  }
  public resetHealthMax() {
    this._healthMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMaxInput() {
    return this._healthMax;
  }

  // health_multiplier - computed: false, optional: true, required: false
  private _healthMultiplier?: number; 
  public get healthMultiplier() {
    return this.getNumberAttribute('health_multiplier');
  }
  public set healthMultiplier(value: number) {
    this._healthMultiplier = value;
  }
  public resetHealthMultiplier() {
    this._healthMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMultiplierInput() {
    return this._healthMultiplier;
  }

  // health_threshold - computed: false, optional: true, required: false
  private _healthThreshold?: number; 
  public get healthThreshold() {
    return this.getNumberAttribute('health_threshold');
  }
  public set healthThreshold(value: number) {
    this._healthThreshold = value;
  }
  public resetHealthThreshold() {
    this._healthThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthThresholdInput() {
    return this._healthThreshold;
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

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: boolean | cdktf.IResolvable; 
  public get ipv6() {
    return this.getBooleanAttribute('ipv6');
  }
  public set ipv6(value: boolean | cdktf.IResolvable) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // load_imbalance_percentage - computed: false, optional: true, required: false
  private _loadImbalancePercentage?: number; 
  public get loadImbalancePercentage() {
    return this.getNumberAttribute('load_imbalance_percentage');
  }
  public set loadImbalancePercentage(value: number) {
    this._loadImbalancePercentage = value;
  }
  public resetLoadImbalancePercentage() {
    this._loadImbalancePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadImbalancePercentageInput() {
    return this._loadImbalancePercentage;
  }

  // map_name - computed: false, optional: true, required: false
  private _mapName?: string; 
  public get mapName() {
    return this.getStringAttribute('map_name');
  }
  public set mapName(value: string) {
    this._mapName = value;
  }
  public resetMapName() {
    this._mapName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapNameInput() {
    return this._mapName;
  }

  // max_unreachable_penalty - computed: false, optional: true, required: false
  private _maxUnreachablePenalty?: number; 
  public get maxUnreachablePenalty() {
    return this.getNumberAttribute('max_unreachable_penalty');
  }
  public set maxUnreachablePenalty(value: number) {
    this._maxUnreachablePenalty = value;
  }
  public resetMaxUnreachablePenalty() {
    this._maxUnreachablePenalty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnreachablePenaltyInput() {
    return this._maxUnreachablePenalty;
  }

  // min_live_fraction - computed: false, optional: true, required: false
  private _minLiveFraction?: number; 
  public get minLiveFraction() {
    return this.getNumberAttribute('min_live_fraction');
  }
  public set minLiveFraction(value: number) {
    this._minLiveFraction = value;
  }
  public resetMinLiveFraction() {
    this._minLiveFraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLiveFractionInput() {
    return this._minLiveFraction;
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

  // score_aggregation_type - computed: false, optional: false, required: true
  private _scoreAggregationType?: string; 
  public get scoreAggregationType() {
    return this.getStringAttribute('score_aggregation_type');
  }
  public set scoreAggregationType(value: string) {
    this._scoreAggregationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreAggregationTypeInput() {
    return this._scoreAggregationType;
  }

  // stickiness_bonus_constant - computed: false, optional: true, required: false
  private _stickinessBonusConstant?: number; 
  public get stickinessBonusConstant() {
    return this.getNumberAttribute('stickiness_bonus_constant');
  }
  public set stickinessBonusConstant(value: number) {
    this._stickinessBonusConstant = value;
  }
  public resetStickinessBonusConstant() {
    this._stickinessBonusConstant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickinessBonusConstantInput() {
    return this._stickinessBonusConstant;
  }

  // stickiness_bonus_percentage - computed: false, optional: true, required: false
  private _stickinessBonusPercentage?: number; 
  public get stickinessBonusPercentage() {
    return this.getNumberAttribute('stickiness_bonus_percentage');
  }
  public set stickinessBonusPercentage(value: number) {
    this._stickinessBonusPercentage = value;
  }
  public resetStickinessBonusPercentage() {
    this._stickinessBonusPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickinessBonusPercentageInput() {
    return this._stickinessBonusPercentage;
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

  // unreachable_threshold - computed: false, optional: true, required: false
  private _unreachableThreshold?: number; 
  public get unreachableThreshold() {
    return this.getNumberAttribute('unreachable_threshold');
  }
  public set unreachableThreshold(value: number) {
    this._unreachableThreshold = value;
  }
  public resetUnreachableThreshold() {
    this._unreachableThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unreachableThresholdInput() {
    return this._unreachableThreshold;
  }

  // use_computed_targets - computed: false, optional: true, required: false
  private _useComputedTargets?: boolean | cdktf.IResolvable; 
  public get useComputedTargets() {
    return this.getBooleanAttribute('use_computed_targets');
  }
  public set useComputedTargets(value: boolean | cdktf.IResolvable) {
    this._useComputedTargets = value;
  }
  public resetUseComputedTargets() {
    this._useComputedTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useComputedTargetsInput() {
    return this._useComputedTargets;
  }

  // wait_on_complete - computed: false, optional: true, required: false
  private _waitOnComplete?: boolean | cdktf.IResolvable; 
  public get waitOnComplete() {
    return this.getBooleanAttribute('wait_on_complete');
  }
  public set waitOnComplete(value: boolean | cdktf.IResolvable) {
    this._waitOnComplete = value;
  }
  public resetWaitOnComplete() {
    this._waitOnComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitOnCompleteInput() {
    return this._waitOnComplete;
  }

  // weighted_hash_bits_for_ipv4 - computed: true, optional: false, required: false
  public get weightedHashBitsForIpv4() {
    return this.getNumberAttribute('weighted_hash_bits_for_ipv4');
  }

  // weighted_hash_bits_for_ipv6 - computed: true, optional: false, required: false
  public get weightedHashBitsForIpv6() {
    return this.getNumberAttribute('weighted_hash_bits_for_ipv6');
  }

  // liveness_test - computed: false, optional: true, required: false
  private _livenessTest = new GtmPropertyLivenessTestList(this, "liveness_test", false);
  public get livenessTest() {
    return this._livenessTest;
  }
  public putLivenessTest(value: GtmPropertyLivenessTest[] | cdktf.IResolvable) {
    this._livenessTest.internalValue = value;
  }
  public resetLivenessTest() {
    this._livenessTest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessTestInput() {
    return this._livenessTest.internalValue;
  }

  // static_rr_set - computed: false, optional: true, required: false
  private _staticRrSet = new GtmPropertyStaticRrSetList(this, "static_rr_set", false);
  public get staticRrSet() {
    return this._staticRrSet;
  }
  public putStaticRrSet(value: GtmPropertyStaticRrSet[] | cdktf.IResolvable) {
    this._staticRrSet.internalValue = value;
  }
  public resetStaticRrSet() {
    this._staticRrSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRrSetInput() {
    return this._staticRrSet.internalValue;
  }

  // traffic_target - computed: false, optional: true, required: false
  private _trafficTarget = new GtmPropertyTrafficTargetList(this, "traffic_target", false);
  public get trafficTarget() {
    return this._trafficTarget;
  }
  public putTrafficTarget(value: GtmPropertyTrafficTarget[] | cdktf.IResolvable) {
    this._trafficTarget.internalValue = value;
  }
  public resetTrafficTarget() {
    this._trafficTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficTargetInput() {
    return this._trafficTarget.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_cname: cdktf.stringToTerraform(this._backupCname),
      backup_ip: cdktf.stringToTerraform(this._backupIp),
      balance_by_download_score: cdktf.booleanToTerraform(this._balanceByDownloadScore),
      cname: cdktf.stringToTerraform(this._cname),
      comments: cdktf.stringToTerraform(this._comments),
      domain: cdktf.stringToTerraform(this._domain),
      dynamic_ttl: cdktf.numberToTerraform(this._dynamicTtl),
      failback_delay: cdktf.numberToTerraform(this._failbackDelay),
      failover_delay: cdktf.numberToTerraform(this._failoverDelay),
      ghost_demand_reporting: cdktf.booleanToTerraform(this._ghostDemandReporting),
      handout_limit: cdktf.numberToTerraform(this._handoutLimit),
      handout_mode: cdktf.stringToTerraform(this._handoutMode),
      health_max: cdktf.numberToTerraform(this._healthMax),
      health_multiplier: cdktf.numberToTerraform(this._healthMultiplier),
      health_threshold: cdktf.numberToTerraform(this._healthThreshold),
      id: cdktf.stringToTerraform(this._id),
      ipv6: cdktf.booleanToTerraform(this._ipv6),
      load_imbalance_percentage: cdktf.numberToTerraform(this._loadImbalancePercentage),
      map_name: cdktf.stringToTerraform(this._mapName),
      max_unreachable_penalty: cdktf.numberToTerraform(this._maxUnreachablePenalty),
      min_live_fraction: cdktf.numberToTerraform(this._minLiveFraction),
      name: cdktf.stringToTerraform(this._name),
      score_aggregation_type: cdktf.stringToTerraform(this._scoreAggregationType),
      stickiness_bonus_constant: cdktf.numberToTerraform(this._stickinessBonusConstant),
      stickiness_bonus_percentage: cdktf.numberToTerraform(this._stickinessBonusPercentage),
      type: cdktf.stringToTerraform(this._type),
      unreachable_threshold: cdktf.numberToTerraform(this._unreachableThreshold),
      use_computed_targets: cdktf.booleanToTerraform(this._useComputedTargets),
      wait_on_complete: cdktf.booleanToTerraform(this._waitOnComplete),
      liveness_test: cdktf.listMapper(gtmPropertyLivenessTestToTerraform, true)(this._livenessTest.internalValue),
      static_rr_set: cdktf.listMapper(gtmPropertyStaticRrSetToTerraform, true)(this._staticRrSet.internalValue),
      traffic_target: cdktf.listMapper(gtmPropertyTrafficTargetToTerraform, true)(this._trafficTarget.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_cname: {
        value: cdktf.stringToHclTerraform(this._backupCname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_ip: {
        value: cdktf.stringToHclTerraform(this._backupIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      balance_by_download_score: {
        value: cdktf.booleanToHclTerraform(this._balanceByDownloadScore),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cname: {
        value: cdktf.stringToHclTerraform(this._cname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_ttl: {
        value: cdktf.numberToHclTerraform(this._dynamicTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failback_delay: {
        value: cdktf.numberToHclTerraform(this._failbackDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failover_delay: {
        value: cdktf.numberToHclTerraform(this._failoverDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ghost_demand_reporting: {
        value: cdktf.booleanToHclTerraform(this._ghostDemandReporting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      handout_limit: {
        value: cdktf.numberToHclTerraform(this._handoutLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      handout_mode: {
        value: cdktf.stringToHclTerraform(this._handoutMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_max: {
        value: cdktf.numberToHclTerraform(this._healthMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_multiplier: {
        value: cdktf.numberToHclTerraform(this._healthMultiplier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_threshold: {
        value: cdktf.numberToHclTerraform(this._healthThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6: {
        value: cdktf.booleanToHclTerraform(this._ipv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      load_imbalance_percentage: {
        value: cdktf.numberToHclTerraform(this._loadImbalancePercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      map_name: {
        value: cdktf.stringToHclTerraform(this._mapName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_unreachable_penalty: {
        value: cdktf.numberToHclTerraform(this._maxUnreachablePenalty),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_live_fraction: {
        value: cdktf.numberToHclTerraform(this._minLiveFraction),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      score_aggregation_type: {
        value: cdktf.stringToHclTerraform(this._scoreAggregationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stickiness_bonus_constant: {
        value: cdktf.numberToHclTerraform(this._stickinessBonusConstant),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stickiness_bonus_percentage: {
        value: cdktf.numberToHclTerraform(this._stickinessBonusPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unreachable_threshold: {
        value: cdktf.numberToHclTerraform(this._unreachableThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_computed_targets: {
        value: cdktf.booleanToHclTerraform(this._useComputedTargets),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait_on_complete: {
        value: cdktf.booleanToHclTerraform(this._waitOnComplete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      liveness_test: {
        value: cdktf.listMapperHcl(gtmPropertyLivenessTestToHclTerraform, true)(this._livenessTest.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GtmPropertyLivenessTestList",
      },
      static_rr_set: {
        value: cdktf.listMapperHcl(gtmPropertyStaticRrSetToHclTerraform, true)(this._staticRrSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GtmPropertyStaticRrSetList",
      },
      traffic_target: {
        value: cdktf.listMapperHcl(gtmPropertyTrafficTargetToHclTerraform, true)(this._trafficTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GtmPropertyTrafficTargetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
