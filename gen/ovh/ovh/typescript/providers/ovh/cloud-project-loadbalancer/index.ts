// https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudProjectLoadbalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the loadbalancer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#description CloudProjectLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Loadbalancer flavor id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#flavor_id CloudProjectLoadbalancer#flavor_id}
  */
  readonly flavorId: string;
  /**
  * Listeners to create with the loadbalancer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#listeners CloudProjectLoadbalancer#listeners}
  */
  readonly listeners?: CloudProjectLoadbalancerListeners[] | cdktf.IResolvable;
  /**
  * Name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#name CloudProjectLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Network information to create the loadbalancer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#network CloudProjectLoadbalancer#network}
  */
  readonly network: CloudProjectLoadbalancerNetwork;
  /**
  * Region name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#region_name CloudProjectLoadbalancer#region_name}
  */
  readonly regionName: string;
  /**
  * Service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#service_name CloudProjectLoadbalancer#service_name}
  */
  readonly serviceName: string;
}
export interface CloudProjectLoadbalancerFloatingIp {
}

export function cloudProjectLoadbalancerFloatingIpToTerraform(struct?: CloudProjectLoadbalancerFloatingIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudProjectLoadbalancerFloatingIpToHclTerraform(struct?: CloudProjectLoadbalancerFloatingIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudProjectLoadbalancerFloatingIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudProjectLoadbalancerFloatingIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectLoadbalancerFloatingIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }
}
export interface CloudProjectLoadbalancerListenersPoolHealthMonitorHttpConfiguration {
  /**
  * Domain name, which be injected into the HTTP Host Header to the backend server for HTTP health check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#domain_name CloudProjectLoadbalancer#domain_name}
  */
  readonly domainName?: string;
  /**
  * Status codes expected in response from the member to declare it healthy; The list of HTTP status codes expected in response from the member to declare it healthy. Specify one of the following values: * A single value, such as 200; * A list, such as 200, 202; * A range, such as 200-204
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#expected_codes CloudProjectLoadbalancer#expected_codes}
  */
  readonly expectedCodes?: string;
  /**
  * HTTP method that the health monitor uses for requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#http_method CloudProjectLoadbalancer#http_method}
  */
  readonly httpMethod?: string;
  /**
  * HTTP version that the health monitor uses for requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#http_version CloudProjectLoadbalancer#http_version}
  */
  readonly httpVersion?: string;
  /**
  * HTTP URL path of the request sent by the monitor to test the health of a backend member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#url_path CloudProjectLoadbalancer#url_path}
  */
  readonly urlPath?: string;
}

export function cloudProjectLoadbalancerListenersPoolHealthMonitorHttpConfigurationToTerraform(struct?: CloudProjectLoadbalancerListenersPoolHealthMonitorHttpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    expected_codes: cdktf.stringToTerraform(struct!.expectedCodes),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    http_version: cdktf.stringToTerraform(struct!.httpVersion),
    url_path: cdktf.stringToTerraform(struct!.urlPath),
  }
}


export function cloudProjectLoadbalancerListenersPoolHealthMonitorHttpConfigurationToHclTerraform(struct?: CloudProjectLoadbalancerListenersPoolHealthMonitorHttpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expected_codes: {
      value: cdktf.stringToHclTerraform(struct!.expectedCodes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_version: {
      value: cdktf.stringToHclTerraform(struct!.httpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_path: {
      value: cdktf.stringToHclTerraform(struct!.urlPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectLoadbalancerListenersPoolHealthMonitorHttpConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudProjectLoadbalancerListenersPoolHealthMonitorHttpConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._expectedCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedCodes = this._expectedCodes;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._httpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpVersion = this._httpVersion;
    }
    if (this._urlPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlPath = this._urlPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectLoadbalancerListenersPoolHealthMonitorHttpConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainName = undefined;
      this._expectedCodes = undefined;
      this._httpMethod = undefined;
      this._httpVersion = undefined;
      this._urlPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainName = value.domainName;
      this._expectedCodes = value.expectedCodes;
      this._httpMethod = value.httpMethod;
      this._httpVersion = value.httpVersion;
      this._urlPath = value.urlPath;
    }
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // expected_codes - computed: false, optional: true, required: false
  private _expectedCodes?: string; 
  public get expectedCodes() {
    return this.getStringAttribute('expected_codes');
  }
  public set expectedCodes(value: string) {
    this._expectedCodes = value;
  }
  public resetExpectedCodes() {
    this._expectedCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedCodesInput() {
    return this._expectedCodes;
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

  // http_version - computed: false, optional: true, required: false
  private _httpVersion?: string; 
  public get httpVersion() {
    return this.getStringAttribute('http_version');
  }
  public set httpVersion(value: string) {
    this._httpVersion = value;
  }
  public resetHttpVersion() {
    this._httpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVersionInput() {
    return this._httpVersion;
  }

  // url_path - computed: false, optional: true, required: false
  private _urlPath?: string; 
  public get urlPath() {
    return this.getStringAttribute('url_path');
  }
  public set urlPath(value: string) {
    this._urlPath = value;
  }
  public resetUrlPath() {
    this._urlPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPathInput() {
    return this._urlPath;
  }
}
export interface CloudProjectLoadbalancerListenersPoolHealthMonitor {
  /**
  * Duration between sending probes to members, in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#delay CloudProjectLoadbalancer#delay}
  */
  readonly delay?: number;
  /**
  * Monitor HTTP configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#http_configuration CloudProjectLoadbalancer#http_configuration}
  */
  readonly httpConfiguration?: CloudProjectLoadbalancerListenersPoolHealthMonitorHttpConfiguration;
  /**
  * Number of successful checks before changing the operating status of the member to ONLINE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#max_retries CloudProjectLoadbalancer#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Number of allowed check failures before changing the operating status of the member to ERROR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#max_retries_down CloudProjectLoadbalancer#max_retries_down}
  */
  readonly maxRetriesDown?: number;
  /**
  * Type of the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#monitor_type CloudProjectLoadbalancer#monitor_type}
  */
  readonly monitorType?: string;
  /**
  * The name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#name CloudProjectLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * The operating status of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#operating_status CloudProjectLoadbalancer#operating_status}
  */
  readonly operatingStatus?: string;
  /**
  * The provisioning status of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#provisioning_status CloudProjectLoadbalancer#provisioning_status}
  */
  readonly provisioningStatus?: string;
  /**
  * Maximum time, in seconds, that a monitor waits to connect before it times out. This value must be less than the delay value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#timeout CloudProjectLoadbalancer#timeout}
  */
  readonly timeout?: number;
}

export function cloudProjectLoadbalancerListenersPoolHealthMonitorToTerraform(struct?: CloudProjectLoadbalancerListenersPoolHealthMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay: cdktf.numberToTerraform(struct!.delay),
    http_configuration: cloudProjectLoadbalancerListenersPoolHealthMonitorHttpConfigurationToTerraform(struct!.httpConfiguration),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    max_retries_down: cdktf.numberToTerraform(struct!.maxRetriesDown),
    monitor_type: cdktf.stringToTerraform(struct!.monitorType),
    name: cdktf.stringToTerraform(struct!.name),
    operating_status: cdktf.stringToTerraform(struct!.operatingStatus),
    provisioning_status: cdktf.stringToTerraform(struct!.provisioningStatus),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function cloudProjectLoadbalancerListenersPoolHealthMonitorToHclTerraform(struct?: CloudProjectLoadbalancerListenersPoolHealthMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay: {
      value: cdktf.numberToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_configuration: {
      value: cloudProjectLoadbalancerListenersPoolHealthMonitorHttpConfigurationToHclTerraform(struct!.httpConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudProjectLoadbalancerListenersPoolHealthMonitorHttpConfiguration",
    },
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_retries_down: {
      value: cdktf.numberToHclTerraform(struct!.maxRetriesDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_type: {
      value: cdktf.stringToHclTerraform(struct!.monitorType),
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
    operating_status: {
      value: cdktf.stringToHclTerraform(struct!.operatingStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provisioning_status: {
      value: cdktf.stringToHclTerraform(struct!.provisioningStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class CloudProjectLoadbalancerListenersPoolHealthMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudProjectLoadbalancerListenersPoolHealthMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._httpConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpConfiguration = this._httpConfiguration?.internalValue;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._maxRetriesDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetriesDown = this._maxRetriesDown;
    }
    if (this._monitorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorType = this._monitorType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operatingStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingStatus = this._operatingStatus;
    }
    if (this._provisioningStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisioningStatus = this._provisioningStatus;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectLoadbalancerListenersPoolHealthMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delay = undefined;
      this._httpConfiguration.internalValue = undefined;
      this._maxRetries = undefined;
      this._maxRetriesDown = undefined;
      this._monitorType = undefined;
      this._name = undefined;
      this._operatingStatus = undefined;
      this._provisioningStatus = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delay = value.delay;
      this._httpConfiguration.internalValue = value.httpConfiguration;
      this._maxRetries = value.maxRetries;
      this._maxRetriesDown = value.maxRetriesDown;
      this._monitorType = value.monitorType;
      this._name = value.name;
      this._operatingStatus = value.operatingStatus;
      this._provisioningStatus = value.provisioningStatus;
      this._timeout = value.timeout;
    }
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // http_configuration - computed: false, optional: true, required: false
  private _httpConfiguration = new CloudProjectLoadbalancerListenersPoolHealthMonitorHttpConfigurationOutputReference(this, "http_configuration");
  public get httpConfiguration() {
    return this._httpConfiguration;
  }
  public putHttpConfiguration(value: CloudProjectLoadbalancerListenersPoolHealthMonitorHttpConfiguration) {
    this._httpConfiguration.internalValue = value;
  }
  public resetHttpConfiguration() {
    this._httpConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConfigurationInput() {
    return this._httpConfiguration.internalValue;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // max_retries_down - computed: false, optional: true, required: false
  private _maxRetriesDown?: number; 
  public get maxRetriesDown() {
    return this.getNumberAttribute('max_retries_down');
  }
  public set maxRetriesDown(value: number) {
    this._maxRetriesDown = value;
  }
  public resetMaxRetriesDown() {
    this._maxRetriesDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesDownInput() {
    return this._maxRetriesDown;
  }

  // monitor_type - computed: false, optional: true, required: false
  private _monitorType?: string; 
  public get monitorType() {
    return this.getStringAttribute('monitor_type');
  }
  public set monitorType(value: string) {
    this._monitorType = value;
  }
  public resetMonitorType() {
    this._monitorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTypeInput() {
    return this._monitorType;
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

  // operating_status - computed: false, optional: true, required: false
  private _operatingStatus?: string; 
  public get operatingStatus() {
    return this.getStringAttribute('operating_status');
  }
  public set operatingStatus(value: string) {
    this._operatingStatus = value;
  }
  public resetOperatingStatus() {
    this._operatingStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingStatusInput() {
    return this._operatingStatus;
  }

  // provisioning_status - computed: false, optional: true, required: false
  private _provisioningStatus?: string; 
  public get provisioningStatus() {
    return this.getStringAttribute('provisioning_status');
  }
  public set provisioningStatus(value: string) {
    this._provisioningStatus = value;
  }
  public resetProvisioningStatus() {
    this._provisioningStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningStatusInput() {
    return this._provisioningStatus;
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
export interface CloudProjectLoadbalancerListenersPoolMembers {
  /**
  * IP address of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#address CloudProjectLoadbalancer#address}
  */
  readonly address?: string;
  /**
  * Name of the member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#name CloudProjectLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Protocol port number for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#protocol_port CloudProjectLoadbalancer#protocol_port}
  */
  readonly protocolPort?: number;
  /**
  * Weight of a member determines the portion of requests or connections it services compared to the other members of the pool. Between 1 and 256.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#weight CloudProjectLoadbalancer#weight}
  */
  readonly weight?: number;
}

export function cloudProjectLoadbalancerListenersPoolMembersToTerraform(struct?: CloudProjectLoadbalancerListenersPoolMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    name: cdktf.stringToTerraform(struct!.name),
    protocol_port: cdktf.numberToTerraform(struct!.protocolPort),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function cloudProjectLoadbalancerListenersPoolMembersToHclTerraform(struct?: CloudProjectLoadbalancerListenersPoolMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
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
    protocol_port: {
      value: cdktf.numberToHclTerraform(struct!.protocolPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class CloudProjectLoadbalancerListenersPoolMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProjectLoadbalancerListenersPoolMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocolPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolPort = this._protocolPort;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectLoadbalancerListenersPoolMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._name = undefined;
      this._protocolPort = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._name = value.name;
      this._protocolPort = value.protocolPort;
      this._weight = value.weight;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
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

  // protocol_port - computed: false, optional: true, required: false
  private _protocolPort?: number; 
  public get protocolPort() {
    return this.getNumberAttribute('protocol_port');
  }
  public set protocolPort(value: number) {
    this._protocolPort = value;
  }
  public resetProtocolPort() {
    this._protocolPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolPortInput() {
    return this._protocolPort;
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

export class CloudProjectLoadbalancerListenersPoolMembersList extends cdktf.ComplexList {
  public internalValue? : CloudProjectLoadbalancerListenersPoolMembers[] | cdktf.IResolvable

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
  public get(index: number): CloudProjectLoadbalancerListenersPoolMembersOutputReference {
    return new CloudProjectLoadbalancerListenersPoolMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudProjectLoadbalancerListenersPoolSessionPersistence {
  /**
  * Cookie name, only applicable to session persistence through cookie
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#cookie_name CloudProjectLoadbalancer#cookie_name}
  */
  readonly cookieName?: string;
  /**
  * Type of session persistence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#type CloudProjectLoadbalancer#type}
  */
  readonly type?: string;
}

export function cloudProjectLoadbalancerListenersPoolSessionPersistenceToTerraform(struct?: CloudProjectLoadbalancerListenersPoolSessionPersistence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_name: cdktf.stringToTerraform(struct!.cookieName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cloudProjectLoadbalancerListenersPoolSessionPersistenceToHclTerraform(struct?: CloudProjectLoadbalancerListenersPoolSessionPersistence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.cookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class CloudProjectLoadbalancerListenersPoolSessionPersistenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudProjectLoadbalancerListenersPoolSessionPersistence | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieName = this._cookieName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectLoadbalancerListenersPoolSessionPersistence | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookieName = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookieName = value.cookieName;
      this._type = value.type;
    }
  }

  // cookie_name - computed: false, optional: true, required: false
  private _cookieName?: string; 
  public get cookieName() {
    return this.getStringAttribute('cookie_name');
  }
  public set cookieName(value: string) {
    this._cookieName = value;
  }
  public resetCookieName() {
    this._cookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameInput() {
    return this._cookieName;
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
export interface CloudProjectLoadbalancerListenersPool {
  /**
  * Pool algorithm to split traffic between members
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#algorithm CloudProjectLoadbalancer#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Pool health monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#health_monitor CloudProjectLoadbalancer#health_monitor}
  */
  readonly healthMonitor?: CloudProjectLoadbalancerListenersPoolHealthMonitor;
  /**
  * Pool members
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#members CloudProjectLoadbalancer#members}
  */
  readonly members?: CloudProjectLoadbalancerListenersPoolMembers[] | cdktf.IResolvable;
  /**
  * Name of the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#name CloudProjectLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Protocol for the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#protocol CloudProjectLoadbalancer#protocol}
  */
  readonly protocol?: string;
  /**
  * Pool session persistence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#session_persistence CloudProjectLoadbalancer#session_persistence}
  */
  readonly sessionPersistence?: CloudProjectLoadbalancerListenersPoolSessionPersistence;
}

export function cloudProjectLoadbalancerListenersPoolToTerraform(struct?: CloudProjectLoadbalancerListenersPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    health_monitor: cloudProjectLoadbalancerListenersPoolHealthMonitorToTerraform(struct!.healthMonitor),
    members: cdktf.listMapper(cloudProjectLoadbalancerListenersPoolMembersToTerraform, false)(struct!.members),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    session_persistence: cloudProjectLoadbalancerListenersPoolSessionPersistenceToTerraform(struct!.sessionPersistence),
  }
}


export function cloudProjectLoadbalancerListenersPoolToHclTerraform(struct?: CloudProjectLoadbalancerListenersPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_monitor: {
      value: cloudProjectLoadbalancerListenersPoolHealthMonitorToHclTerraform(struct!.healthMonitor),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudProjectLoadbalancerListenersPoolHealthMonitor",
    },
    members: {
      value: cdktf.listMapperHcl(cloudProjectLoadbalancerListenersPoolMembersToHclTerraform, false)(struct!.members),
      isBlock: true,
      type: "list",
      storageClassType: "CloudProjectLoadbalancerListenersPoolMembersList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_persistence: {
      value: cloudProjectLoadbalancerListenersPoolSessionPersistenceToHclTerraform(struct!.sessionPersistence),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudProjectLoadbalancerListenersPoolSessionPersistence",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectLoadbalancerListenersPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudProjectLoadbalancerListenersPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._healthMonitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthMonitor = this._healthMonitor?.internalValue;
    }
    if (this._members?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sessionPersistence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionPersistence = this._sessionPersistence?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectLoadbalancerListenersPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._healthMonitor.internalValue = undefined;
      this._members.internalValue = undefined;
      this._name = undefined;
      this._protocol = undefined;
      this._sessionPersistence.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._healthMonitor.internalValue = value.healthMonitor;
      this._members.internalValue = value.members;
      this._name = value.name;
      this._protocol = value.protocol;
      this._sessionPersistence.internalValue = value.sessionPersistence;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // health_monitor - computed: false, optional: true, required: false
  private _healthMonitor = new CloudProjectLoadbalancerListenersPoolHealthMonitorOutputReference(this, "health_monitor");
  public get healthMonitor() {
    return this._healthMonitor;
  }
  public putHealthMonitor(value: CloudProjectLoadbalancerListenersPoolHealthMonitor) {
    this._healthMonitor.internalValue = value;
  }
  public resetHealthMonitor() {
    this._healthMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMonitorInput() {
    return this._healthMonitor.internalValue;
  }

  // members - computed: false, optional: true, required: false
  private _members = new CloudProjectLoadbalancerListenersPoolMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: CloudProjectLoadbalancerListenersPoolMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // session_persistence - computed: false, optional: true, required: false
  private _sessionPersistence = new CloudProjectLoadbalancerListenersPoolSessionPersistenceOutputReference(this, "session_persistence");
  public get sessionPersistence() {
    return this._sessionPersistence;
  }
  public putSessionPersistence(value: CloudProjectLoadbalancerListenersPoolSessionPersistence) {
    this._sessionPersistence.internalValue = value;
  }
  public resetSessionPersistence() {
    this._sessionPersistence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPersistenceInput() {
    return this._sessionPersistence.internalValue;
  }
}
export interface CloudProjectLoadbalancerListeners {
  /**
  * The allowed CIDRs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#allowed_cidrs CloudProjectLoadbalancer#allowed_cidrs}
  */
  readonly allowedCidrs?: string[];
  /**
  * The description of the listener
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#description CloudProjectLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Name of the listener
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#name CloudProjectLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Listener pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#pool CloudProjectLoadbalancer#pool}
  */
  readonly pool?: CloudProjectLoadbalancerListenersPool;
  /**
  * Listener port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#port CloudProjectLoadbalancer#port}
  */
  readonly port: number;
  /**
  * Protocol for the listener
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#protocol CloudProjectLoadbalancer#protocol}
  */
  readonly protocol: string;
  /**
  * Secret ID to get certificate for SSL listener creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#secret_id CloudProjectLoadbalancer#secret_id}
  */
  readonly secretId?: string;
  /**
  * Timeout client data of the listener
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#timeout_client_data CloudProjectLoadbalancer#timeout_client_data}
  */
  readonly timeoutClientData?: number;
  /**
  * Timeout member data of the listener
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#timeout_member_data CloudProjectLoadbalancer#timeout_member_data}
  */
  readonly timeoutMemberData?: number;
  /**
  * TLS versions of the listener
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#tls_versions CloudProjectLoadbalancer#tls_versions}
  */
  readonly tlsVersions?: string[];
}

export function cloudProjectLoadbalancerListenersToTerraform(struct?: CloudProjectLoadbalancerListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedCidrs),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    pool: cloudProjectLoadbalancerListenersPoolToTerraform(struct!.pool),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    secret_id: cdktf.stringToTerraform(struct!.secretId),
    timeout_client_data: cdktf.numberToTerraform(struct!.timeoutClientData),
    timeout_member_data: cdktf.numberToTerraform(struct!.timeoutMemberData),
    tls_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tlsVersions),
  }
}


export function cloudProjectLoadbalancerListenersToHclTerraform(struct?: CloudProjectLoadbalancerListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedCidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    pool: {
      value: cloudProjectLoadbalancerListenersPoolToHclTerraform(struct!.pool),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudProjectLoadbalancerListenersPool",
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
    secret_id: {
      value: cdktf.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_client_data: {
      value: cdktf.numberToHclTerraform(struct!.timeoutClientData),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_member_data: {
      value: cdktf.numberToHclTerraform(struct!.timeoutMemberData),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tlsVersions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectLoadbalancerListenersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProjectLoadbalancerListeners | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedCidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedCidrs = this._allowedCidrs;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._timeoutClientData !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutClientData = this._timeoutClientData;
    }
    if (this._timeoutMemberData !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMemberData = this._timeoutMemberData;
    }
    if (this._tlsVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsVersions = this._tlsVersions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectLoadbalancerListeners | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedCidrs = undefined;
      this._description = undefined;
      this._name = undefined;
      this._pool.internalValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._secretId = undefined;
      this._timeoutClientData = undefined;
      this._timeoutMemberData = undefined;
      this._tlsVersions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedCidrs = value.allowedCidrs;
      this._description = value.description;
      this._name = value.name;
      this._pool.internalValue = value.pool;
      this._port = value.port;
      this._protocol = value.protocol;
      this._secretId = value.secretId;
      this._timeoutClientData = value.timeoutClientData;
      this._timeoutMemberData = value.timeoutMemberData;
      this._tlsVersions = value.tlsVersions;
    }
  }

  // allowed_cidrs - computed: false, optional: true, required: false
  private _allowedCidrs?: string[]; 
  public get allowedCidrs() {
    return this.getListAttribute('allowed_cidrs');
  }
  public set allowedCidrs(value: string[]) {
    this._allowedCidrs = value;
  }
  public resetAllowedCidrs() {
    this._allowedCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCidrsInput() {
    return this._allowedCidrs;
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

  // pool - computed: false, optional: true, required: false
  private _pool = new CloudProjectLoadbalancerListenersPoolOutputReference(this, "pool");
  public get pool() {
    return this._pool;
  }
  public putPool(value: CloudProjectLoadbalancerListenersPool) {
    this._pool.internalValue = value;
  }
  public resetPool() {
    this._pool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool.internalValue;
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

  // secret_id - computed: false, optional: true, required: false
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // timeout_client_data - computed: false, optional: true, required: false
  private _timeoutClientData?: number; 
  public get timeoutClientData() {
    return this.getNumberAttribute('timeout_client_data');
  }
  public set timeoutClientData(value: number) {
    this._timeoutClientData = value;
  }
  public resetTimeoutClientData() {
    this._timeoutClientData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutClientDataInput() {
    return this._timeoutClientData;
  }

  // timeout_member_data - computed: false, optional: true, required: false
  private _timeoutMemberData?: number; 
  public get timeoutMemberData() {
    return this.getNumberAttribute('timeout_member_data');
  }
  public set timeoutMemberData(value: number) {
    this._timeoutMemberData = value;
  }
  public resetTimeoutMemberData() {
    this._timeoutMemberData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMemberDataInput() {
    return this._timeoutMemberData;
  }

  // tls_versions - computed: false, optional: true, required: false
  private _tlsVersions?: string[]; 
  public get tlsVersions() {
    return this.getListAttribute('tls_versions');
  }
  public set tlsVersions(value: string[]) {
    this._tlsVersions = value;
  }
  public resetTlsVersions() {
    this._tlsVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVersionsInput() {
    return this._tlsVersions;
  }
}

export class CloudProjectLoadbalancerListenersList extends cdktf.ComplexList {
  public internalValue? : CloudProjectLoadbalancerListeners[] | cdktf.IResolvable

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
  public get(index: number): CloudProjectLoadbalancerListenersOutputReference {
    return new CloudProjectLoadbalancerListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudProjectLoadbalancerNetworkPrivateFloatingIp {
  /**
  * ID of the floatingIp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#id CloudProjectLoadbalancer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function cloudProjectLoadbalancerNetworkPrivateFloatingIpToTerraform(struct?: CloudProjectLoadbalancerNetworkPrivateFloatingIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function cloudProjectLoadbalancerNetworkPrivateFloatingIpToHclTerraform(struct?: CloudProjectLoadbalancerNetworkPrivateFloatingIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectLoadbalancerNetworkPrivateFloatingIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudProjectLoadbalancerNetworkPrivateFloatingIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectLoadbalancerNetworkPrivateFloatingIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
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
}
export interface CloudProjectLoadbalancerNetworkPrivateFloatingIpCreate {
  /**
  * Description for the floatingIp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#description CloudProjectLoadbalancer#description}
  */
  readonly description?: string;
}

export function cloudProjectLoadbalancerNetworkPrivateFloatingIpCreateToTerraform(struct?: CloudProjectLoadbalancerNetworkPrivateFloatingIpCreate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
  }
}


export function cloudProjectLoadbalancerNetworkPrivateFloatingIpCreateToHclTerraform(struct?: CloudProjectLoadbalancerNetworkPrivateFloatingIpCreate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectLoadbalancerNetworkPrivateFloatingIpCreateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudProjectLoadbalancerNetworkPrivateFloatingIpCreate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectLoadbalancerNetworkPrivateFloatingIpCreate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
    }
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
}
export interface CloudProjectLoadbalancerNetworkPrivateGateway {
  /**
  * ID of the gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#id CloudProjectLoadbalancer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function cloudProjectLoadbalancerNetworkPrivateGatewayToTerraform(struct?: CloudProjectLoadbalancerNetworkPrivateGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function cloudProjectLoadbalancerNetworkPrivateGatewayToHclTerraform(struct?: CloudProjectLoadbalancerNetworkPrivateGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectLoadbalancerNetworkPrivateGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudProjectLoadbalancerNetworkPrivateGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectLoadbalancerNetworkPrivateGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
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
}
export interface CloudProjectLoadbalancerNetworkPrivateGatewayCreate {
  /**
  * Model of the gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#model CloudProjectLoadbalancer#model}
  */
  readonly model?: string;
  /**
  * Name of the gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#name CloudProjectLoadbalancer#name}
  */
  readonly name?: string;
}

export function cloudProjectLoadbalancerNetworkPrivateGatewayCreateToTerraform(struct?: CloudProjectLoadbalancerNetworkPrivateGatewayCreate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model: cdktf.stringToTerraform(struct!.model),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cloudProjectLoadbalancerNetworkPrivateGatewayCreateToHclTerraform(struct?: CloudProjectLoadbalancerNetworkPrivateGatewayCreate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectLoadbalancerNetworkPrivateGatewayCreateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudProjectLoadbalancerNetworkPrivateGatewayCreate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectLoadbalancerNetworkPrivateGatewayCreate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._model = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._model = value.model;
      this._name = value.name;
    }
  }

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
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
}
export interface CloudProjectLoadbalancerNetworkPrivateNetwork {
  /**
  * Private network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#id CloudProjectLoadbalancer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Subnet ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#subnet_id CloudProjectLoadbalancer#subnet_id}
  */
  readonly subnetId: string;
}

export function cloudProjectLoadbalancerNetworkPrivateNetworkToTerraform(struct?: CloudProjectLoadbalancerNetworkPrivateNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function cloudProjectLoadbalancerNetworkPrivateNetworkToHclTerraform(struct?: CloudProjectLoadbalancerNetworkPrivateNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectLoadbalancerNetworkPrivateNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudProjectLoadbalancerNetworkPrivateNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectLoadbalancerNetworkPrivateNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._subnetId = value.subnetId;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}
export interface CloudProjectLoadbalancerNetworkPrivate {
  /**
  * Floating IP to associate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#floating_ip CloudProjectLoadbalancer#floating_ip}
  */
  readonly floatingIp?: CloudProjectLoadbalancerNetworkPrivateFloatingIp;
  /**
  * Floating IP to create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#floating_ip_create CloudProjectLoadbalancer#floating_ip_create}
  */
  readonly floatingIpCreate?: CloudProjectLoadbalancerNetworkPrivateFloatingIpCreate;
  /**
  * Gateway to associate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#gateway CloudProjectLoadbalancer#gateway}
  */
  readonly gateway?: CloudProjectLoadbalancerNetworkPrivateGateway;
  /**
  * Gateway to create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#gateway_create CloudProjectLoadbalancer#gateway_create}
  */
  readonly gatewayCreate?: CloudProjectLoadbalancerNetworkPrivateGatewayCreate;
  /**
  * Network to associate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#network CloudProjectLoadbalancer#network}
  */
  readonly network: CloudProjectLoadbalancerNetworkPrivateNetwork;
}

export function cloudProjectLoadbalancerNetworkPrivateToTerraform(struct?: CloudProjectLoadbalancerNetworkPrivate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    floating_ip: cloudProjectLoadbalancerNetworkPrivateFloatingIpToTerraform(struct!.floatingIp),
    floating_ip_create: cloudProjectLoadbalancerNetworkPrivateFloatingIpCreateToTerraform(struct!.floatingIpCreate),
    gateway: cloudProjectLoadbalancerNetworkPrivateGatewayToTerraform(struct!.gateway),
    gateway_create: cloudProjectLoadbalancerNetworkPrivateGatewayCreateToTerraform(struct!.gatewayCreate),
    network: cloudProjectLoadbalancerNetworkPrivateNetworkToTerraform(struct!.network),
  }
}


export function cloudProjectLoadbalancerNetworkPrivateToHclTerraform(struct?: CloudProjectLoadbalancerNetworkPrivate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    floating_ip: {
      value: cloudProjectLoadbalancerNetworkPrivateFloatingIpToHclTerraform(struct!.floatingIp),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudProjectLoadbalancerNetworkPrivateFloatingIp",
    },
    floating_ip_create: {
      value: cloudProjectLoadbalancerNetworkPrivateFloatingIpCreateToHclTerraform(struct!.floatingIpCreate),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudProjectLoadbalancerNetworkPrivateFloatingIpCreate",
    },
    gateway: {
      value: cloudProjectLoadbalancerNetworkPrivateGatewayToHclTerraform(struct!.gateway),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudProjectLoadbalancerNetworkPrivateGateway",
    },
    gateway_create: {
      value: cloudProjectLoadbalancerNetworkPrivateGatewayCreateToHclTerraform(struct!.gatewayCreate),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudProjectLoadbalancerNetworkPrivateGatewayCreate",
    },
    network: {
      value: cloudProjectLoadbalancerNetworkPrivateNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudProjectLoadbalancerNetworkPrivateNetwork",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectLoadbalancerNetworkPrivateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudProjectLoadbalancerNetworkPrivate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._floatingIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIp = this._floatingIp?.internalValue;
    }
    if (this._floatingIpCreate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIpCreate = this._floatingIpCreate?.internalValue;
    }
    if (this._gateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway?.internalValue;
    }
    if (this._gatewayCreate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayCreate = this._gatewayCreate?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectLoadbalancerNetworkPrivate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._floatingIp.internalValue = undefined;
      this._floatingIpCreate.internalValue = undefined;
      this._gateway.internalValue = undefined;
      this._gatewayCreate.internalValue = undefined;
      this._network.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._floatingIp.internalValue = value.floatingIp;
      this._floatingIpCreate.internalValue = value.floatingIpCreate;
      this._gateway.internalValue = value.gateway;
      this._gatewayCreate.internalValue = value.gatewayCreate;
      this._network.internalValue = value.network;
    }
  }

  // floating_ip - computed: false, optional: true, required: false
  private _floatingIp = new CloudProjectLoadbalancerNetworkPrivateFloatingIpOutputReference(this, "floating_ip");
  public get floatingIp() {
    return this._floatingIp;
  }
  public putFloatingIp(value: CloudProjectLoadbalancerNetworkPrivateFloatingIp) {
    this._floatingIp.internalValue = value;
  }
  public resetFloatingIp() {
    this._floatingIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpInput() {
    return this._floatingIp.internalValue;
  }

  // floating_ip_create - computed: false, optional: true, required: false
  private _floatingIpCreate = new CloudProjectLoadbalancerNetworkPrivateFloatingIpCreateOutputReference(this, "floating_ip_create");
  public get floatingIpCreate() {
    return this._floatingIpCreate;
  }
  public putFloatingIpCreate(value: CloudProjectLoadbalancerNetworkPrivateFloatingIpCreate) {
    this._floatingIpCreate.internalValue = value;
  }
  public resetFloatingIpCreate() {
    this._floatingIpCreate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpCreateInput() {
    return this._floatingIpCreate.internalValue;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway = new CloudProjectLoadbalancerNetworkPrivateGatewayOutputReference(this, "gateway");
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: CloudProjectLoadbalancerNetworkPrivateGateway) {
    this._gateway.internalValue = value;
  }
  public resetGateway() {
    this._gateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway.internalValue;
  }

  // gateway_create - computed: false, optional: true, required: false
  private _gatewayCreate = new CloudProjectLoadbalancerNetworkPrivateGatewayCreateOutputReference(this, "gateway_create");
  public get gatewayCreate() {
    return this._gatewayCreate;
  }
  public putGatewayCreate(value: CloudProjectLoadbalancerNetworkPrivateGatewayCreate) {
    this._gatewayCreate.internalValue = value;
  }
  public resetGatewayCreate() {
    this._gatewayCreate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayCreateInput() {
    return this._gatewayCreate.internalValue;
  }

  // network - computed: false, optional: false, required: true
  private _network = new CloudProjectLoadbalancerNetworkPrivateNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: CloudProjectLoadbalancerNetworkPrivateNetwork) {
    this._network.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }
}
export interface CloudProjectLoadbalancerNetwork {
  /**
  * Information to private network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#private CloudProjectLoadbalancer#private}
  */
  readonly private: CloudProjectLoadbalancerNetworkPrivate;
}

export function cloudProjectLoadbalancerNetworkToTerraform(struct?: CloudProjectLoadbalancerNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private: cloudProjectLoadbalancerNetworkPrivateToTerraform(struct!.private),
  }
}


export function cloudProjectLoadbalancerNetworkToHclTerraform(struct?: CloudProjectLoadbalancerNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private: {
      value: cloudProjectLoadbalancerNetworkPrivateToHclTerraform(struct!.private),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudProjectLoadbalancerNetworkPrivate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectLoadbalancerNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudProjectLoadbalancerNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._private?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.private = this._private?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectLoadbalancerNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._private.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._private.internalValue = value.private;
    }
  }

  // private - computed: false, optional: false, required: true
  private _private = new CloudProjectLoadbalancerNetworkPrivateOutputReference(this, "private");
  public get private() {
    return this._private;
  }
  public putPrivate(value: CloudProjectLoadbalancerNetworkPrivate) {
    this._private.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateInput() {
    return this._private.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer ovh_cloud_project_loadbalancer}
*/
export class CloudProjectLoadbalancer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_cloud_project_loadbalancer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudProjectLoadbalancer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudProjectLoadbalancer to import
  * @param importFromId The id of the existing CloudProjectLoadbalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudProjectLoadbalancer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_cloud_project_loadbalancer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_loadbalancer ovh_cloud_project_loadbalancer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudProjectLoadbalancerConfig
  */
  public constructor(scope: Construct, id: string, config: CloudProjectLoadbalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_cloud_project_loadbalancer',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.10.0',
        providerVersionConstraint: '2.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._flavorId = config.flavorId;
    this._listeners.internalValue = config.listeners;
    this._name = config.name;
    this._network.internalValue = config.network;
    this._regionName = config.regionName;
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // flavor_id - computed: false, optional: false, required: true
  private _flavorId?: string; 
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
  }
  public set flavorId(value: string) {
    this._flavorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorIdInput() {
    return this._flavorId;
  }

  // floating_ip - computed: true, optional: false, required: false
  private _floatingIp = new CloudProjectLoadbalancerFloatingIpOutputReference(this, "floating_ip");
  public get floatingIp() {
    return this._floatingIp;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // listeners - computed: false, optional: true, required: false
  private _listeners = new CloudProjectLoadbalancerListenersList(this, "listeners", false);
  public get listeners() {
    return this._listeners;
  }
  public putListeners(value: CloudProjectLoadbalancerListeners[] | cdktf.IResolvable) {
    this._listeners.internalValue = value;
  }
  public resetListeners() {
    this._listeners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenersInput() {
    return this._listeners.internalValue;
  }

  // name - computed: true, optional: true, required: false
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

  // network - computed: false, optional: false, required: true
  private _network = new CloudProjectLoadbalancerNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: CloudProjectLoadbalancerNetwork) {
    this._network.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // operating_status - computed: true, optional: false, required: false
  public get operatingStatus() {
    return this.getStringAttribute('operating_status');
  }

  // provisioning_status - computed: true, optional: false, required: false
  public get provisioningStatus() {
    return this.getStringAttribute('provisioning_status');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // region_name - computed: false, optional: false, required: true
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // vip_address - computed: true, optional: false, required: false
  public get vipAddress() {
    return this.getStringAttribute('vip_address');
  }

  // vip_network_id - computed: true, optional: false, required: false
  public get vipNetworkId() {
    return this.getStringAttribute('vip_network_id');
  }

  // vip_subnet_id - computed: true, optional: false, required: false
  public get vipSubnetId() {
    return this.getStringAttribute('vip_subnet_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      flavor_id: cdktf.stringToTerraform(this._flavorId),
      listeners: cdktf.listMapper(cloudProjectLoadbalancerListenersToTerraform, false)(this._listeners.internalValue),
      name: cdktf.stringToTerraform(this._name),
      network: cloudProjectLoadbalancerNetworkToTerraform(this._network.internalValue),
      region_name: cdktf.stringToTerraform(this._regionName),
      service_name: cdktf.stringToTerraform(this._serviceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flavor_id: {
        value: cdktf.stringToHclTerraform(this._flavorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listeners: {
        value: cdktf.listMapperHcl(cloudProjectLoadbalancerListenersToHclTerraform, false)(this._listeners.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudProjectLoadbalancerListenersList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cloudProjectLoadbalancerNetworkToHclTerraform(this._network.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudProjectLoadbalancerNetwork",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
