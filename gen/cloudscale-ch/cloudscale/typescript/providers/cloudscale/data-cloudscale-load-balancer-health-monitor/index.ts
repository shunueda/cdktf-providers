// https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/data-sources/load_balancer_health_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudscaleLoadBalancerHealthMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/data-sources/load_balancer_health_monitor#delay_s DataCloudscaleLoadBalancerHealthMonitor#delay_s}
  */
  readonly delayS?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/data-sources/load_balancer_health_monitor#down_threshold DataCloudscaleLoadBalancerHealthMonitor#down_threshold}
  */
  readonly downThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/data-sources/load_balancer_health_monitor#http_expected_codes DataCloudscaleLoadBalancerHealthMonitor#http_expected_codes}
  */
  readonly httpExpectedCodes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/data-sources/load_balancer_health_monitor#http_host DataCloudscaleLoadBalancerHealthMonitor#http_host}
  */
  readonly httpHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/data-sources/load_balancer_health_monitor#http_method DataCloudscaleLoadBalancerHealthMonitor#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/data-sources/load_balancer_health_monitor#http_url_path DataCloudscaleLoadBalancerHealthMonitor#http_url_path}
  */
  readonly httpUrlPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/data-sources/load_balancer_health_monitor#http_version DataCloudscaleLoadBalancerHealthMonitor#http_version}
  */
  readonly httpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/data-sources/load_balancer_health_monitor#id DataCloudscaleLoadBalancerHealthMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/data-sources/load_balancer_health_monitor#pool_uuid DataCloudscaleLoadBalancerHealthMonitor#pool_uuid}
  */
  readonly poolUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/data-sources/load_balancer_health_monitor#tags DataCloudscaleLoadBalancerHealthMonitor#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/data-sources/load_balancer_health_monitor#timeout_s DataCloudscaleLoadBalancerHealthMonitor#timeout_s}
  */
  readonly timeoutS?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/data-sources/load_balancer_health_monitor#up_threshold DataCloudscaleLoadBalancerHealthMonitor#up_threshold}
  */
  readonly upThreshold?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/data-sources/load_balancer_health_monitor cloudscale_load_balancer_health_monitor}
*/
export class DataCloudscaleLoadBalancerHealthMonitor extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudscale_load_balancer_health_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudscaleLoadBalancerHealthMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudscaleLoadBalancerHealthMonitor to import
  * @param importFromId The id of the existing DataCloudscaleLoadBalancerHealthMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/data-sources/load_balancer_health_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudscaleLoadBalancerHealthMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudscale_load_balancer_health_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/data-sources/load_balancer_health_monitor cloudscale_load_balancer_health_monitor} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudscaleLoadBalancerHealthMonitorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCloudscaleLoadBalancerHealthMonitorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudscale_load_balancer_health_monitor',
      terraformGeneratorMetadata: {
        providerName: 'cloudscale',
        providerVersion: '5.0.0',
        providerVersionConstraint: '5.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._delayS = config.delayS;
    this._downThreshold = config.downThreshold;
    this._httpExpectedCodes = config.httpExpectedCodes;
    this._httpHost = config.httpHost;
    this._httpMethod = config.httpMethod;
    this._httpUrlPath = config.httpUrlPath;
    this._httpVersion = config.httpVersion;
    this._id = config.id;
    this._poolUuid = config.poolUuid;
    this._tags = config.tags;
    this._timeoutS = config.timeoutS;
    this._upThreshold = config.upThreshold;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delay_s - computed: true, optional: true, required: false
  private _delayS?: number; 
  public get delayS() {
    return this.getNumberAttribute('delay_s');
  }
  public set delayS(value: number) {
    this._delayS = value;
  }
  public resetDelayS() {
    this._delayS = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delaySInput() {
    return this._delayS;
  }

  // down_threshold - computed: true, optional: true, required: false
  private _downThreshold?: number; 
  public get downThreshold() {
    return this.getNumberAttribute('down_threshold');
  }
  public set downThreshold(value: number) {
    this._downThreshold = value;
  }
  public resetDownThreshold() {
    this._downThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downThresholdInput() {
    return this._downThreshold;
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // http_expected_codes - computed: true, optional: true, required: false
  private _httpExpectedCodes?: string[]; 
  public get httpExpectedCodes() {
    return this.getListAttribute('http_expected_codes');
  }
  public set httpExpectedCodes(value: string[]) {
    this._httpExpectedCodes = value;
  }
  public resetHttpExpectedCodes() {
    this._httpExpectedCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpExpectedCodesInput() {
    return this._httpExpectedCodes;
  }

  // http_host - computed: true, optional: true, required: false
  private _httpHost?: string; 
  public get httpHost() {
    return this.getStringAttribute('http_host');
  }
  public set httpHost(value: string) {
    this._httpHost = value;
  }
  public resetHttpHost() {
    this._httpHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHostInput() {
    return this._httpHost;
  }

  // http_method - computed: true, optional: true, required: false
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

  // http_url_path - computed: true, optional: true, required: false
  private _httpUrlPath?: string; 
  public get httpUrlPath() {
    return this.getStringAttribute('http_url_path');
  }
  public set httpUrlPath(value: string) {
    this._httpUrlPath = value;
  }
  public resetHttpUrlPath() {
    this._httpUrlPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpUrlPathInput() {
    return this._httpUrlPath;
  }

  // http_version - computed: true, optional: true, required: false
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

  // pool_href - computed: true, optional: false, required: false
  public get poolHref() {
    return this.getStringAttribute('pool_href');
  }

  // pool_name - computed: true, optional: false, required: false
  public get poolName() {
    return this.getStringAttribute('pool_name');
  }

  // pool_uuid - computed: false, optional: true, required: false
  private _poolUuid?: string; 
  public get poolUuid() {
    return this.getStringAttribute('pool_uuid');
  }
  public set poolUuid(value: string) {
    this._poolUuid = value;
  }
  public resetPoolUuid() {
    this._poolUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolUuidInput() {
    return this._poolUuid;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // timeout_s - computed: true, optional: true, required: false
  private _timeoutS?: number; 
  public get timeoutS() {
    return this.getNumberAttribute('timeout_s');
  }
  public set timeoutS(value: number) {
    this._timeoutS = value;
  }
  public resetTimeoutS() {
    this._timeoutS = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSInput() {
    return this._timeoutS;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // up_threshold - computed: true, optional: true, required: false
  private _upThreshold?: number; 
  public get upThreshold() {
    return this.getNumberAttribute('up_threshold');
  }
  public set upThreshold(value: number) {
    this._upThreshold = value;
  }
  public resetUpThreshold() {
    this._upThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upThresholdInput() {
    return this._upThreshold;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delay_s: cdktf.numberToTerraform(this._delayS),
      down_threshold: cdktf.numberToTerraform(this._downThreshold),
      http_expected_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._httpExpectedCodes),
      http_host: cdktf.stringToTerraform(this._httpHost),
      http_method: cdktf.stringToTerraform(this._httpMethod),
      http_url_path: cdktf.stringToTerraform(this._httpUrlPath),
      http_version: cdktf.stringToTerraform(this._httpVersion),
      id: cdktf.stringToTerraform(this._id),
      pool_uuid: cdktf.stringToTerraform(this._poolUuid),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeout_s: cdktf.numberToTerraform(this._timeoutS),
      up_threshold: cdktf.numberToTerraform(this._upThreshold),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delay_s: {
        value: cdktf.numberToHclTerraform(this._delayS),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      down_threshold: {
        value: cdktf.numberToHclTerraform(this._downThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_expected_codes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._httpExpectedCodes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      http_host: {
        value: cdktf.stringToHclTerraform(this._httpHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_method: {
        value: cdktf.stringToHclTerraform(this._httpMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_url_path: {
        value: cdktf.stringToHclTerraform(this._httpUrlPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_version: {
        value: cdktf.stringToHclTerraform(this._httpVersion),
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
      pool_uuid: {
        value: cdktf.stringToHclTerraform(this._poolUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeout_s: {
        value: cdktf.numberToHclTerraform(this._timeoutS),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      up_threshold: {
        value: cdktf.numberToHclTerraform(this._upThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
