// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_recursive_dns_resolution_gateway_health_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Dns_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_recursive_dns_resolution_gateway_health_check#dns_name SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckA#dns_name}
  */
  readonly dnsName: string;
  /**
  * 'disabled': Disable NS Cache Lookup; 'enabled': Enable NS Cache Lookup;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_recursive_dns_resolution_gateway_health_check#gwhc_ns_cache_lookup SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckA#gwhc_ns_cache_lookup}
  */
  readonly gwhcNsCacheLookup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_recursive_dns_resolution_gateway_health_check#id SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify the health check interval, default is 10 sec (Interval value, in seconds (default 10))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_recursive_dns_resolution_gateway_health_check#interval SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckA#interval}
  */
  readonly interval?: number;
  /**
  * Other record type value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_recursive_dns_resolution_gateway_health_check#num_query_type SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckA#num_query_type}
  */
  readonly numQueryType?: number;
  /**
  * Specify the query name used in probe queries, default "a10networks.com"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_recursive_dns_resolution_gateway_health_check#query_name SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckA#query_name}
  */
  readonly queryName?: string;
  /**
  * Maximum number of DNS query retries at each server level before health check fails, default 6 (Retry count (default 6))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_recursive_dns_resolution_gateway_health_check#retry SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckA#retry}
  */
  readonly retry?: number;
  /**
  * Specify number of times that health check consecutively fails before declaring gateway DOWN, default 1 (retry-multi count (default 1))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_recursive_dns_resolution_gateway_health_check#retry_multi SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckA#retry_multi}
  */
  readonly retryMulti?: number;
  /**
  * 'A': Address record; 'AAAA': IPv6 Address record; 'CNAME': Canonical name record; 'MX': Mail exchange record; 'NS': Name server record; 'SRV': Service locator; 'PTR': PTR resource record; 'SOA': Start of authority record; 'TXT': Text record;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_recursive_dns_resolution_gateway_health_check#str_query_type SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckA#str_query_type}
  */
  readonly strQueryType?: string;
  /**
  * Specify the health check timeout before retrying or finish, default is 5 sec (Timeout value, in seconds (default 5))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_recursive_dns_resolution_gateway_health_check#timeout SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckA#timeout}
  */
  readonly timeout?: number;
  /**
  * Specify number of times that health check consecutively passes before declaring gateway UP, default 1 (up-retry count (default 1))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_recursive_dns_resolution_gateway_health_check#up_retry SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckA#up_retry}
  */
  readonly upRetry?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_recursive_dns_resolution_gateway_health_check#uuid SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_recursive_dns_resolution_gateway_health_check thunder_slb_template_dns_recursive_dns_resolution_gateway_health_check}
*/
export class SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_dns_recursive_dns_resolution_gateway_health_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckA to import
  * @param importFromId The id of the existing SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_recursive_dns_resolution_gateway_health_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_dns_recursive_dns_resolution_gateway_health_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_recursive_dns_resolution_gateway_health_check thunder_slb_template_dns_recursive_dns_resolution_gateway_health_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckAConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_dns_recursive_dns_resolution_gateway_health_check',
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
    this._dnsName = config.dnsName;
    this._gwhcNsCacheLookup = config.gwhcNsCacheLookup;
    this._id = config.id;
    this._interval = config.interval;
    this._numQueryType = config.numQueryType;
    this._queryName = config.queryName;
    this._retry = config.retry;
    this._retryMulti = config.retryMulti;
    this._strQueryType = config.strQueryType;
    this._timeout = config.timeout;
    this._upRetry = config.upRetry;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_name - computed: false, optional: false, required: true
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
  }

  // gwhc_ns_cache_lookup - computed: false, optional: true, required: false
  private _gwhcNsCacheLookup?: string; 
  public get gwhcNsCacheLookup() {
    return this.getStringAttribute('gwhc_ns_cache_lookup');
  }
  public set gwhcNsCacheLookup(value: string) {
    this._gwhcNsCacheLookup = value;
  }
  public resetGwhcNsCacheLookup() {
    this._gwhcNsCacheLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwhcNsCacheLookupInput() {
    return this._gwhcNsCacheLookup;
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

  // num_query_type - computed: false, optional: true, required: false
  private _numQueryType?: number; 
  public get numQueryType() {
    return this.getNumberAttribute('num_query_type');
  }
  public set numQueryType(value: number) {
    this._numQueryType = value;
  }
  public resetNumQueryType() {
    this._numQueryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numQueryTypeInput() {
    return this._numQueryType;
  }

  // query_name - computed: false, optional: true, required: false
  private _queryName?: string; 
  public get queryName() {
    return this.getStringAttribute('query_name');
  }
  public set queryName(value: string) {
    this._queryName = value;
  }
  public resetQueryName() {
    this._queryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryNameInput() {
    return this._queryName;
  }

  // retry - computed: false, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // retry_multi - computed: false, optional: true, required: false
  private _retryMulti?: number; 
  public get retryMulti() {
    return this.getNumberAttribute('retry_multi');
  }
  public set retryMulti(value: number) {
    this._retryMulti = value;
  }
  public resetRetryMulti() {
    this._retryMulti = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryMultiInput() {
    return this._retryMulti;
  }

  // str_query_type - computed: false, optional: true, required: false
  private _strQueryType?: string; 
  public get strQueryType() {
    return this.getStringAttribute('str_query_type');
  }
  public set strQueryType(value: string) {
    this._strQueryType = value;
  }
  public resetStrQueryType() {
    this._strQueryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strQueryTypeInput() {
    return this._strQueryType;
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

  // up_retry - computed: false, optional: true, required: false
  private _upRetry?: number; 
  public get upRetry() {
    return this.getNumberAttribute('up_retry');
  }
  public set upRetry(value: number) {
    this._upRetry = value;
  }
  public resetUpRetry() {
    this._upRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upRetryInput() {
    return this._upRetry;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_name: cdktf.stringToTerraform(this._dnsName),
      gwhc_ns_cache_lookup: cdktf.stringToTerraform(this._gwhcNsCacheLookup),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      num_query_type: cdktf.numberToTerraform(this._numQueryType),
      query_name: cdktf.stringToTerraform(this._queryName),
      retry: cdktf.numberToTerraform(this._retry),
      retry_multi: cdktf.numberToTerraform(this._retryMulti),
      str_query_type: cdktf.stringToTerraform(this._strQueryType),
      timeout: cdktf.numberToTerraform(this._timeout),
      up_retry: cdktf.numberToTerraform(this._upRetry),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_name: {
        value: cdktf.stringToHclTerraform(this._dnsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gwhc_ns_cache_lookup: {
        value: cdktf.stringToHclTerraform(this._gwhcNsCacheLookup),
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
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_query_type: {
        value: cdktf.numberToHclTerraform(this._numQueryType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      query_name: {
        value: cdktf.stringToHclTerraform(this._queryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry: {
        value: cdktf.numberToHclTerraform(this._retry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_multi: {
        value: cdktf.numberToHclTerraform(this._retryMulti),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      str_query_type: {
        value: cdktf.stringToHclTerraform(this._strQueryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      up_retry: {
        value: cdktf.numberToHclTerraform(this._upRetry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
