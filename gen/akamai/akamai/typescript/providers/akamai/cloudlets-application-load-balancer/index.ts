// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudletsApplicationLoadBalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The type of load balancing being performed. Options include WEIGHTED and PERFORMANCE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#balancing_type CloudletsApplicationLoadBalancer#balancing_type}
  */
  readonly balancingType?: string;
  /**
  * The load balancer configuration version description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#description CloudletsApplicationLoadBalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#id CloudletsApplicationLoadBalancer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The load balancer configuration description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#origin_description CloudletsApplicationLoadBalancer#origin_description}
  */
  readonly originDescription?: string;
  /**
  * The conditional origin's unique identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#origin_id CloudletsApplicationLoadBalancer#origin_id}
  */
  readonly originId: string;
  /**
  * data_centers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#data_centers CloudletsApplicationLoadBalancer#data_centers}
  */
  readonly dataCenters: CloudletsApplicationLoadBalancerDataCenters[] | cdktf.IResolvable;
  /**
  * liveness_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#liveness_settings CloudletsApplicationLoadBalancer#liveness_settings}
  */
  readonly livenessSettings?: CloudletsApplicationLoadBalancerLivenessSettings;
}
export interface CloudletsApplicationLoadBalancerDataCenters {
  /**
  * The city in which the data center is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#city CloudletsApplicationLoadBalancer#city}
  */
  readonly city?: string;
  /**
  * Describes if cloud server host header is overridden
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#cloud_server_host_header_override CloudletsApplicationLoadBalancer#cloud_server_host_header_override}
  */
  readonly cloudServerHostHeaderOverride?: boolean | cdktf.IResolvable;
  /**
  * Describes if this datacenter is a cloud service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#cloud_service CloudletsApplicationLoadBalancer#cloud_service}
  */
  readonly cloudService?: boolean | cdktf.IResolvable;
  /**
  * The continent on which the data center is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#continent CloudletsApplicationLoadBalancer#continent}
  */
  readonly continent: string;
  /**
  * The country in which the data center is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#country CloudletsApplicationLoadBalancer#country}
  */
  readonly country: string;
  /**
  * This should match the 'hostname' value defined for this datacenter in Property Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#hostname CloudletsApplicationLoadBalancer#hostname}
  */
  readonly hostname?: string;
  /**
  * The latitude value for the data center. This member supports six decimal places of precision.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#latitude CloudletsApplicationLoadBalancer#latitude}
  */
  readonly latitude: number;
  /**
  * An array of strings that represent the origin servers used to poll the data centers in an application load balancer configuration. These servers support basic HTTP polling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#liveness_hosts CloudletsApplicationLoadBalancer#liveness_hosts}
  */
  readonly livenessHosts?: string[];
  /**
  * The longitude value for the data center. This member supports six decimal places of precision.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#longitude CloudletsApplicationLoadBalancer#longitude}
  */
  readonly longitude: number;
  /**
  * The ID of an origin that represents the data center. The conditional origin, which is defined in the Property Manager API, must have an originType of either CUSTOMER or NET_STORAGE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#origin_id CloudletsApplicationLoadBalancer#origin_id}
  */
  readonly originId: string;
  /**
  * The percent of traffic that is sent to the data center. The total for all data centers must equal 100%.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#percent CloudletsApplicationLoadBalancer#percent}
  */
  readonly percent: number;
  /**
  * The state, province, or region where the data center is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#state_or_province CloudletsApplicationLoadBalancer#state_or_province}
  */
  readonly stateOrProvince?: string;
}

export function cloudletsApplicationLoadBalancerDataCentersToTerraform(struct?: CloudletsApplicationLoadBalancerDataCenters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    city: cdktf.stringToTerraform(struct!.city),
    cloud_server_host_header_override: cdktf.booleanToTerraform(struct!.cloudServerHostHeaderOverride),
    cloud_service: cdktf.booleanToTerraform(struct!.cloudService),
    continent: cdktf.stringToTerraform(struct!.continent),
    country: cdktf.stringToTerraform(struct!.country),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    latitude: cdktf.numberToTerraform(struct!.latitude),
    liveness_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.livenessHosts),
    longitude: cdktf.numberToTerraform(struct!.longitude),
    origin_id: cdktf.stringToTerraform(struct!.originId),
    percent: cdktf.numberToTerraform(struct!.percent),
    state_or_province: cdktf.stringToTerraform(struct!.stateOrProvince),
  }
}


export function cloudletsApplicationLoadBalancerDataCentersToHclTerraform(struct?: CloudletsApplicationLoadBalancerDataCenters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    city: {
      value: cdktf.stringToHclTerraform(struct!.city),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_server_host_header_override: {
      value: cdktf.booleanToHclTerraform(struct!.cloudServerHostHeaderOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cloud_service: {
      value: cdktf.booleanToHclTerraform(struct!.cloudService),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    continent: {
      value: cdktf.stringToHclTerraform(struct!.continent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latitude: {
      value: cdktf.numberToHclTerraform(struct!.latitude),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    liveness_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.livenessHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    longitude: {
      value: cdktf.numberToHclTerraform(struct!.longitude),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin_id: {
      value: cdktf.stringToHclTerraform(struct!.originId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percent: {
      value: cdktf.numberToHclTerraform(struct!.percent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state_or_province: {
      value: cdktf.stringToHclTerraform(struct!.stateOrProvince),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudletsApplicationLoadBalancerDataCentersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudletsApplicationLoadBalancerDataCenters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._cloudServerHostHeaderOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudServerHostHeaderOverride = this._cloudServerHostHeaderOverride;
    }
    if (this._cloudService !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudService = this._cloudService;
    }
    if (this._continent !== undefined) {
      hasAnyValues = true;
      internalValueResult.continent = this._continent;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._latitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitude = this._latitude;
    }
    if (this._livenessHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessHosts = this._livenessHosts;
    }
    if (this._longitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitude = this._longitude;
    }
    if (this._originId !== undefined) {
      hasAnyValues = true;
      internalValueResult.originId = this._originId;
    }
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    if (this._stateOrProvince !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateOrProvince = this._stateOrProvince;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudletsApplicationLoadBalancerDataCenters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._city = undefined;
      this._cloudServerHostHeaderOverride = undefined;
      this._cloudService = undefined;
      this._continent = undefined;
      this._country = undefined;
      this._hostname = undefined;
      this._latitude = undefined;
      this._livenessHosts = undefined;
      this._longitude = undefined;
      this._originId = undefined;
      this._percent = undefined;
      this._stateOrProvince = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._city = value.city;
      this._cloudServerHostHeaderOverride = value.cloudServerHostHeaderOverride;
      this._cloudService = value.cloudService;
      this._continent = value.continent;
      this._country = value.country;
      this._hostname = value.hostname;
      this._latitude = value.latitude;
      this._livenessHosts = value.livenessHosts;
      this._longitude = value.longitude;
      this._originId = value.originId;
      this._percent = value.percent;
      this._stateOrProvince = value.stateOrProvince;
    }
  }

  // city - computed: false, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // cloud_server_host_header_override - computed: false, optional: true, required: false
  private _cloudServerHostHeaderOverride?: boolean | cdktf.IResolvable; 
  public get cloudServerHostHeaderOverride() {
    return this.getBooleanAttribute('cloud_server_host_header_override');
  }
  public set cloudServerHostHeaderOverride(value: boolean | cdktf.IResolvable) {
    this._cloudServerHostHeaderOverride = value;
  }
  public resetCloudServerHostHeaderOverride() {
    this._cloudServerHostHeaderOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudServerHostHeaderOverrideInput() {
    return this._cloudServerHostHeaderOverride;
  }

  // cloud_service - computed: false, optional: true, required: false
  private _cloudService?: boolean | cdktf.IResolvable; 
  public get cloudService() {
    return this.getBooleanAttribute('cloud_service');
  }
  public set cloudService(value: boolean | cdktf.IResolvable) {
    this._cloudService = value;
  }
  public resetCloudService() {
    this._cloudService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudServiceInput() {
    return this._cloudService;
  }

  // continent - computed: false, optional: false, required: true
  private _continent?: string; 
  public get continent() {
    return this.getStringAttribute('continent');
  }
  public set continent(value: string) {
    this._continent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get continentInput() {
    return this._continent;
  }

  // country - computed: false, optional: false, required: true
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // latitude - computed: false, optional: false, required: true
  private _latitude?: number; 
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }
  public set latitude(value: number) {
    this._latitude = value;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // liveness_hosts - computed: false, optional: true, required: false
  private _livenessHosts?: string[]; 
  public get livenessHosts() {
    return this.getListAttribute('liveness_hosts');
  }
  public set livenessHosts(value: string[]) {
    this._livenessHosts = value;
  }
  public resetLivenessHosts() {
    this._livenessHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessHostsInput() {
    return this._livenessHosts;
  }

  // longitude - computed: false, optional: false, required: true
  private _longitude?: number; 
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }
  public set longitude(value: number) {
    this._longitude = value;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }

  // origin_id - computed: false, optional: false, required: true
  private _originId?: string; 
  public get originId() {
    return this.getStringAttribute('origin_id');
  }
  public set originId(value: string) {
    this._originId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originIdInput() {
    return this._originId;
  }

  // percent - computed: false, optional: false, required: true
  private _percent?: number; 
  public get percent() {
    return this.getNumberAttribute('percent');
  }
  public set percent(value: number) {
    this._percent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent;
  }

  // state_or_province - computed: false, optional: true, required: false
  private _stateOrProvince?: string; 
  public get stateOrProvince() {
    return this.getStringAttribute('state_or_province');
  }
  public set stateOrProvince(value: string) {
    this._stateOrProvince = value;
  }
  public resetStateOrProvince() {
    this._stateOrProvince = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateOrProvinceInput() {
    return this._stateOrProvince;
  }
}

export class CloudletsApplicationLoadBalancerDataCentersList extends cdktf.ComplexList {
  public internalValue? : CloudletsApplicationLoadBalancerDataCenters[] | cdktf.IResolvable

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
  public get(index: number): CloudletsApplicationLoadBalancerDataCentersOutputReference {
    return new CloudletsApplicationLoadBalancerDataCentersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudletsApplicationLoadBalancerLivenessSettings {
  /**
  * Maps additional case-insensitive HTTP header names included to the liveness testing requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#additional_headers CloudletsApplicationLoadBalancer#additional_headers}
  */
  readonly additionalHeaders?: { [key: string]: string };
  /**
  * The Host header for the liveness HTTP request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#host_header CloudletsApplicationLoadBalancer#host_header}
  */
  readonly hostHeader?: string;
  /**
  * Describes how often the liveness test will be performed. Optional defaults to 60 seconds, minimum is 10 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#interval CloudletsApplicationLoadBalancer#interval}
  */
  readonly interval?: number;
  /**
  * The path to the test object used for liveness testing. The function of the test object is to help determine whether the data center is functioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#path CloudletsApplicationLoadBalancer#path}
  */
  readonly path: string;
  /**
  * Describes whether or not to validate the origin certificate for an HTTPS request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#peer_certificate_verification CloudletsApplicationLoadBalancer#peer_certificate_verification}
  */
  readonly peerCertificateVerification?: boolean | cdktf.IResolvable;
  /**
  * The port for the test object. The default port is 80, which is standard for HTTP. Enter 443 if you are using HTTPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#port CloudletsApplicationLoadBalancer#port}
  */
  readonly port: number;
  /**
  * The protocol or scheme for the database, either HTTP or HTTPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#protocol CloudletsApplicationLoadBalancer#protocol}
  */
  readonly protocol: string;
  /**
  * The request which will be used for TCP(S) tests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#request_string CloudletsApplicationLoadBalancer#request_string}
  */
  readonly requestString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#response_string CloudletsApplicationLoadBalancer#response_string}
  */
  readonly responseString?: string;
  /**
  * Set to true to mark the liveness test as failed when the request returns a 3xx (redirection) status code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#status_3xx_failure CloudletsApplicationLoadBalancer#status_3xx_failure}
  */
  readonly status3XxFailure?: boolean | cdktf.IResolvable;
  /**
  * Set to true to mark the liveness test as failed when the request returns a 4xx (client error) status code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#status_4xx_failure CloudletsApplicationLoadBalancer#status_4xx_failure}
  */
  readonly status4XxFailure?: boolean | cdktf.IResolvable;
  /**
  * Set to true to mark the liveness test as failed when the request returns a 5xx (server error) status code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#status_5xx_failure CloudletsApplicationLoadBalancer#status_5xx_failure}
  */
  readonly status5XxFailure?: boolean | cdktf.IResolvable;
  /**
  * The number of seconds the system waits before failing the liveness test. The default is 25 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#timeout CloudletsApplicationLoadBalancer#timeout}
  */
  readonly timeout?: number;
}

export function cloudletsApplicationLoadBalancerLivenessSettingsToTerraform(struct?: CloudletsApplicationLoadBalancerLivenessSettingsOutputReference | CloudletsApplicationLoadBalancerLivenessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalHeaders),
    host_header: cdktf.stringToTerraform(struct!.hostHeader),
    interval: cdktf.numberToTerraform(struct!.interval),
    path: cdktf.stringToTerraform(struct!.path),
    peer_certificate_verification: cdktf.booleanToTerraform(struct!.peerCertificateVerification),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    request_string: cdktf.stringToTerraform(struct!.requestString),
    response_string: cdktf.stringToTerraform(struct!.responseString),
    status_3xx_failure: cdktf.booleanToTerraform(struct!.status3XxFailure),
    status_4xx_failure: cdktf.booleanToTerraform(struct!.status4XxFailure),
    status_5xx_failure: cdktf.booleanToTerraform(struct!.status5XxFailure),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function cloudletsApplicationLoadBalancerLivenessSettingsToHclTerraform(struct?: CloudletsApplicationLoadBalancerLivenessSettingsOutputReference | CloudletsApplicationLoadBalancerLivenessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    host_header: {
      value: cdktf.stringToHclTerraform(struct!.hostHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_string: {
      value: cdktf.stringToHclTerraform(struct!.requestString),
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
    status_3xx_failure: {
      value: cdktf.booleanToHclTerraform(struct!.status3XxFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    status_4xx_failure: {
      value: cdktf.booleanToHclTerraform(struct!.status4XxFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    status_5xx_failure: {
      value: cdktf.booleanToHclTerraform(struct!.status5XxFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudletsApplicationLoadBalancerLivenessSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudletsApplicationLoadBalancerLivenessSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalHeaders = this._additionalHeaders;
    }
    if (this._hostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHeader = this._hostHeader;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._peerCertificateVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerCertificateVerification = this._peerCertificateVerification;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._requestString !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestString = this._requestString;
    }
    if (this._responseString !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseString = this._responseString;
    }
    if (this._status3XxFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.status3XxFailure = this._status3XxFailure;
    }
    if (this._status4XxFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.status4XxFailure = this._status4XxFailure;
    }
    if (this._status5XxFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.status5XxFailure = this._status5XxFailure;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudletsApplicationLoadBalancerLivenessSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalHeaders = undefined;
      this._hostHeader = undefined;
      this._interval = undefined;
      this._path = undefined;
      this._peerCertificateVerification = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._requestString = undefined;
      this._responseString = undefined;
      this._status3XxFailure = undefined;
      this._status4XxFailure = undefined;
      this._status5XxFailure = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalHeaders = value.additionalHeaders;
      this._hostHeader = value.hostHeader;
      this._interval = value.interval;
      this._path = value.path;
      this._peerCertificateVerification = value.peerCertificateVerification;
      this._port = value.port;
      this._protocol = value.protocol;
      this._requestString = value.requestString;
      this._responseString = value.responseString;
      this._status3XxFailure = value.status3XxFailure;
      this._status4XxFailure = value.status4XxFailure;
      this._status5XxFailure = value.status5XxFailure;
      this._timeout = value.timeout;
    }
  }

  // additional_headers - computed: false, optional: true, required: false
  private _additionalHeaders?: { [key: string]: string }; 
  public get additionalHeaders() {
    return this.getStringMapAttribute('additional_headers');
  }
  public set additionalHeaders(value: { [key: string]: string }) {
    this._additionalHeaders = value;
  }
  public resetAdditionalHeaders() {
    this._additionalHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalHeadersInput() {
    return this._additionalHeaders;
  }

  // host_header - computed: false, optional: true, required: false
  private _hostHeader?: string; 
  public get hostHeader() {
    return this.getStringAttribute('host_header');
  }
  public set hostHeader(value: string) {
    this._hostHeader = value;
  }
  public resetHostHeader() {
    this._hostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderInput() {
    return this._hostHeader;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
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

  // status_3xx_failure - computed: false, optional: true, required: false
  private _status3XxFailure?: boolean | cdktf.IResolvable; 
  public get status3XxFailure() {
    return this.getBooleanAttribute('status_3xx_failure');
  }
  public set status3XxFailure(value: boolean | cdktf.IResolvable) {
    this._status3XxFailure = value;
  }
  public resetStatus3XxFailure() {
    this._status3XxFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status3XxFailureInput() {
    return this._status3XxFailure;
  }

  // status_4xx_failure - computed: false, optional: true, required: false
  private _status4XxFailure?: boolean | cdktf.IResolvable; 
  public get status4XxFailure() {
    return this.getBooleanAttribute('status_4xx_failure');
  }
  public set status4XxFailure(value: boolean | cdktf.IResolvable) {
    this._status4XxFailure = value;
  }
  public resetStatus4XxFailure() {
    this._status4XxFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status4XxFailureInput() {
    return this._status4XxFailure;
  }

  // status_5xx_failure - computed: false, optional: true, required: false
  private _status5XxFailure?: boolean | cdktf.IResolvable; 
  public get status5XxFailure() {
    return this.getBooleanAttribute('status_5xx_failure');
  }
  public set status5XxFailure(value: boolean | cdktf.IResolvable) {
    this._status5XxFailure = value;
  }
  public resetStatus5XxFailure() {
    this._status5XxFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status5XxFailureInput() {
    return this._status5XxFailure;
  }

  // timeout - computed: false, optional: true, required: false
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer akamai_cloudlets_application_load_balancer}
*/
export class CloudletsApplicationLoadBalancer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_cloudlets_application_load_balancer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudletsApplicationLoadBalancer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudletsApplicationLoadBalancer to import
  * @param importFromId The id of the existing CloudletsApplicationLoadBalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudletsApplicationLoadBalancer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_cloudlets_application_load_balancer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer akamai_cloudlets_application_load_balancer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudletsApplicationLoadBalancerConfig
  */
  public constructor(scope: Construct, id: string, config: CloudletsApplicationLoadBalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_cloudlets_application_load_balancer',
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
    this._balancingType = config.balancingType;
    this._description = config.description;
    this._id = config.id;
    this._originDescription = config.originDescription;
    this._originId = config.originId;
    this._dataCenters.internalValue = config.dataCenters;
    this._livenessSettings.internalValue = config.livenessSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // balancing_type - computed: false, optional: true, required: false
  private _balancingType?: string; 
  public get balancingType() {
    return this.getStringAttribute('balancing_type');
  }
  public set balancingType(value: string) {
    this._balancingType = value;
  }
  public resetBalancingType() {
    this._balancingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get balancingTypeInput() {
    return this._balancingType;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // origin_description - computed: false, optional: true, required: false
  private _originDescription?: string; 
  public get originDescription() {
    return this.getStringAttribute('origin_description');
  }
  public set originDescription(value: string) {
    this._originDescription = value;
  }
  public resetOriginDescription() {
    this._originDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originDescriptionInput() {
    return this._originDescription;
  }

  // origin_id - computed: false, optional: false, required: true
  private _originId?: string; 
  public get originId() {
    return this.getStringAttribute('origin_id');
  }
  public set originId(value: string) {
    this._originId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originIdInput() {
    return this._originId;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // warnings - computed: true, optional: false, required: false
  public get warnings() {
    return this.getStringAttribute('warnings');
  }

  // data_centers - computed: false, optional: false, required: true
  private _dataCenters = new CloudletsApplicationLoadBalancerDataCentersList(this, "data_centers", true);
  public get dataCenters() {
    return this._dataCenters;
  }
  public putDataCenters(value: CloudletsApplicationLoadBalancerDataCenters[] | cdktf.IResolvable) {
    this._dataCenters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCentersInput() {
    return this._dataCenters.internalValue;
  }

  // liveness_settings - computed: false, optional: true, required: false
  private _livenessSettings = new CloudletsApplicationLoadBalancerLivenessSettingsOutputReference(this, "liveness_settings");
  public get livenessSettings() {
    return this._livenessSettings;
  }
  public putLivenessSettings(value: CloudletsApplicationLoadBalancerLivenessSettings) {
    this._livenessSettings.internalValue = value;
  }
  public resetLivenessSettings() {
    this._livenessSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessSettingsInput() {
    return this._livenessSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      balancing_type: cdktf.stringToTerraform(this._balancingType),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      origin_description: cdktf.stringToTerraform(this._originDescription),
      origin_id: cdktf.stringToTerraform(this._originId),
      data_centers: cdktf.listMapper(cloudletsApplicationLoadBalancerDataCentersToTerraform, true)(this._dataCenters.internalValue),
      liveness_settings: cloudletsApplicationLoadBalancerLivenessSettingsToTerraform(this._livenessSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      balancing_type: {
        value: cdktf.stringToHclTerraform(this._balancingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      origin_description: {
        value: cdktf.stringToHclTerraform(this._originDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_id: {
        value: cdktf.stringToHclTerraform(this._originId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_centers: {
        value: cdktf.listMapperHcl(cloudletsApplicationLoadBalancerDataCentersToHclTerraform, true)(this._dataCenters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudletsApplicationLoadBalancerDataCentersList",
      },
      liveness_settings: {
        value: cloudletsApplicationLoadBalancerLivenessSettingsToHclTerraform(this._livenessSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudletsApplicationLoadBalancerLivenessSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
