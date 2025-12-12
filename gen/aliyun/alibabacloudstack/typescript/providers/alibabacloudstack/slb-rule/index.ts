// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/slb_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/slb_rule#cookie SlbRule#cookie}
  */
  readonly cookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/slb_rule#cookie_timeout SlbRule#cookie_timeout}
  */
  readonly cookieTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/slb_rule#delete_protection_validation SlbRule#delete_protection_validation}
  */
  readonly deleteProtectionValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/slb_rule#domain SlbRule#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/slb_rule#frontend_port SlbRule#frontend_port}
  */
  readonly frontendPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/slb_rule#health_check SlbRule#health_check}
  */
  readonly healthCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/slb_rule#health_check_connect_port SlbRule#health_check_connect_port}
  */
  readonly healthCheckConnectPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/slb_rule#health_check_domain SlbRule#health_check_domain}
  */
  readonly healthCheckDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/slb_rule#health_check_http_code SlbRule#health_check_http_code}
  */
  readonly healthCheckHttpCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/slb_rule#health_check_interval SlbRule#health_check_interval}
  */
  readonly healthCheckInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/slb_rule#health_check_timeout SlbRule#health_check_timeout}
  */
  readonly healthCheckTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/slb_rule#health_check_uri SlbRule#health_check_uri}
  */
  readonly healthCheckUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/slb_rule#healthy_threshold SlbRule#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/slb_rule#id SlbRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/slb_rule#listener_sync SlbRule#listener_sync}
  */
  readonly listenerSync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/slb_rule#load_balancer_id SlbRule#load_balancer_id}
  */
  readonly loadBalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/slb_rule#name SlbRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/slb_rule#rule_name SlbRule#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/slb_rule#scheduler SlbRule#scheduler}
  */
  readonly scheduler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/slb_rule#server_group_id SlbRule#server_group_id}
  */
  readonly serverGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/slb_rule#sticky_session SlbRule#sticky_session}
  */
  readonly stickySession?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/slb_rule#sticky_session_type SlbRule#sticky_session_type}
  */
  readonly stickySessionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/slb_rule#unhealthy_threshold SlbRule#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/slb_rule#url SlbRule#url}
  */
  readonly url?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/slb_rule alibabacloudstack_slb_rule}
*/
export class SlbRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_slb_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbRule to import
  * @param importFromId The id of the existing SlbRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/slb_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_slb_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/slb_rule alibabacloudstack_slb_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SlbRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_slb_rule',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cookie = config.cookie;
    this._cookieTimeout = config.cookieTimeout;
    this._deleteProtectionValidation = config.deleteProtectionValidation;
    this._domain = config.domain;
    this._frontendPort = config.frontendPort;
    this._healthCheck = config.healthCheck;
    this._healthCheckConnectPort = config.healthCheckConnectPort;
    this._healthCheckDomain = config.healthCheckDomain;
    this._healthCheckHttpCode = config.healthCheckHttpCode;
    this._healthCheckInterval = config.healthCheckInterval;
    this._healthCheckTimeout = config.healthCheckTimeout;
    this._healthCheckUri = config.healthCheckUri;
    this._healthyThreshold = config.healthyThreshold;
    this._id = config.id;
    this._listenerSync = config.listenerSync;
    this._loadBalancerId = config.loadBalancerId;
    this._name = config.name;
    this._ruleName = config.ruleName;
    this._scheduler = config.scheduler;
    this._serverGroupId = config.serverGroupId;
    this._stickySession = config.stickySession;
    this._stickySessionType = config.stickySessionType;
    this._unhealthyThreshold = config.unhealthyThreshold;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cookie - computed: false, optional: true, required: false
  private _cookie?: string; 
  public get cookie() {
    return this.getStringAttribute('cookie');
  }
  public set cookie(value: string) {
    this._cookie = value;
  }
  public resetCookie() {
    this._cookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie;
  }

  // cookie_timeout - computed: false, optional: true, required: false
  private _cookieTimeout?: number; 
  public get cookieTimeout() {
    return this.getNumberAttribute('cookie_timeout');
  }
  public set cookieTimeout(value: number) {
    this._cookieTimeout = value;
  }
  public resetCookieTimeout() {
    this._cookieTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieTimeoutInput() {
    return this._cookieTimeout;
  }

  // delete_protection_validation - computed: false, optional: true, required: false
  private _deleteProtectionValidation?: boolean | cdktf.IResolvable; 
  public get deleteProtectionValidation() {
    return this.getBooleanAttribute('delete_protection_validation');
  }
  public set deleteProtectionValidation(value: boolean | cdktf.IResolvable) {
    this._deleteProtectionValidation = value;
  }
  public resetDeleteProtectionValidation() {
    this._deleteProtectionValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionValidationInput() {
    return this._deleteProtectionValidation;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // frontend_port - computed: false, optional: false, required: true
  private _frontendPort?: number; 
  public get frontendPort() {
    return this.getNumberAttribute('frontend_port');
  }
  public set frontendPort(value: number) {
    this._frontendPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendPortInput() {
    return this._frontendPort;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: string; 
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }
  public set healthCheck(value: string) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // health_check_connect_port - computed: true, optional: true, required: false
  private _healthCheckConnectPort?: number; 
  public get healthCheckConnectPort() {
    return this.getNumberAttribute('health_check_connect_port');
  }
  public set healthCheckConnectPort(value: number) {
    this._healthCheckConnectPort = value;
  }
  public resetHealthCheckConnectPort() {
    this._healthCheckConnectPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckConnectPortInput() {
    return this._healthCheckConnectPort;
  }

  // health_check_domain - computed: false, optional: true, required: false
  private _healthCheckDomain?: string; 
  public get healthCheckDomain() {
    return this.getStringAttribute('health_check_domain');
  }
  public set healthCheckDomain(value: string) {
    this._healthCheckDomain = value;
  }
  public resetHealthCheckDomain() {
    this._healthCheckDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckDomainInput() {
    return this._healthCheckDomain;
  }

  // health_check_http_code - computed: false, optional: true, required: false
  private _healthCheckHttpCode?: string; 
  public get healthCheckHttpCode() {
    return this.getStringAttribute('health_check_http_code');
  }
  public set healthCheckHttpCode(value: string) {
    this._healthCheckHttpCode = value;
  }
  public resetHealthCheckHttpCode() {
    this._healthCheckHttpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckHttpCodeInput() {
    return this._healthCheckHttpCode;
  }

  // health_check_interval - computed: false, optional: true, required: false
  private _healthCheckInterval?: number; 
  public get healthCheckInterval() {
    return this.getNumberAttribute('health_check_interval');
  }
  public set healthCheckInterval(value: number) {
    this._healthCheckInterval = value;
  }
  public resetHealthCheckInterval() {
    this._healthCheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckIntervalInput() {
    return this._healthCheckInterval;
  }

  // health_check_timeout - computed: false, optional: true, required: false
  private _healthCheckTimeout?: number; 
  public get healthCheckTimeout() {
    return this.getNumberAttribute('health_check_timeout');
  }
  public set healthCheckTimeout(value: number) {
    this._healthCheckTimeout = value;
  }
  public resetHealthCheckTimeout() {
    this._healthCheckTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTimeoutInput() {
    return this._healthCheckTimeout;
  }

  // health_check_uri - computed: false, optional: true, required: false
  private _healthCheckUri?: string; 
  public get healthCheckUri() {
    return this.getStringAttribute('health_check_uri');
  }
  public set healthCheckUri(value: string) {
    this._healthCheckUri = value;
  }
  public resetHealthCheckUri() {
    this._healthCheckUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckUriInput() {
    return this._healthCheckUri;
  }

  // healthy_threshold - computed: false, optional: true, required: false
  private _healthyThreshold?: number; 
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number) {
    this._healthyThreshold = value;
  }
  public resetHealthyThreshold() {
    this._healthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdInput() {
    return this._healthyThreshold;
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

  // listener_sync - computed: false, optional: true, required: false
  private _listenerSync?: string; 
  public get listenerSync() {
    return this.getStringAttribute('listener_sync');
  }
  public set listenerSync(value: string) {
    this._listenerSync = value;
  }
  public resetListenerSync() {
    this._listenerSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerSyncInput() {
    return this._listenerSync;
  }

  // load_balancer_id - computed: false, optional: false, required: true
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
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

  // rule_name - computed: true, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // scheduler - computed: false, optional: true, required: false
  private _scheduler?: string; 
  public get scheduler() {
    return this.getStringAttribute('scheduler');
  }
  public set scheduler(value: string) {
    this._scheduler = value;
  }
  public resetScheduler() {
    this._scheduler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerInput() {
    return this._scheduler;
  }

  // server_group_id - computed: false, optional: false, required: true
  private _serverGroupId?: string; 
  public get serverGroupId() {
    return this.getStringAttribute('server_group_id');
  }
  public set serverGroupId(value: string) {
    this._serverGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupIdInput() {
    return this._serverGroupId;
  }

  // sticky_session - computed: false, optional: true, required: false
  private _stickySession?: string; 
  public get stickySession() {
    return this.getStringAttribute('sticky_session');
  }
  public set stickySession(value: string) {
    this._stickySession = value;
  }
  public resetStickySession() {
    this._stickySession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickySessionInput() {
    return this._stickySession;
  }

  // sticky_session_type - computed: false, optional: true, required: false
  private _stickySessionType?: string; 
  public get stickySessionType() {
    return this.getStringAttribute('sticky_session_type');
  }
  public set stickySessionType(value: string) {
    this._stickySessionType = value;
  }
  public resetStickySessionType() {
    this._stickySessionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickySessionTypeInput() {
    return this._stickySessionType;
  }

  // unhealthy_threshold - computed: false, optional: true, required: false
  private _unhealthyThreshold?: number; 
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
  public set unhealthyThreshold(value: number) {
    this._unhealthyThreshold = value;
  }
  public resetUnhealthyThreshold() {
    this._unhealthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdInput() {
    return this._unhealthyThreshold;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cookie: cdktf.stringToTerraform(this._cookie),
      cookie_timeout: cdktf.numberToTerraform(this._cookieTimeout),
      delete_protection_validation: cdktf.booleanToTerraform(this._deleteProtectionValidation),
      domain: cdktf.stringToTerraform(this._domain),
      frontend_port: cdktf.numberToTerraform(this._frontendPort),
      health_check: cdktf.stringToTerraform(this._healthCheck),
      health_check_connect_port: cdktf.numberToTerraform(this._healthCheckConnectPort),
      health_check_domain: cdktf.stringToTerraform(this._healthCheckDomain),
      health_check_http_code: cdktf.stringToTerraform(this._healthCheckHttpCode),
      health_check_interval: cdktf.numberToTerraform(this._healthCheckInterval),
      health_check_timeout: cdktf.numberToTerraform(this._healthCheckTimeout),
      health_check_uri: cdktf.stringToTerraform(this._healthCheckUri),
      healthy_threshold: cdktf.numberToTerraform(this._healthyThreshold),
      id: cdktf.stringToTerraform(this._id),
      listener_sync: cdktf.stringToTerraform(this._listenerSync),
      load_balancer_id: cdktf.stringToTerraform(this._loadBalancerId),
      name: cdktf.stringToTerraform(this._name),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      scheduler: cdktf.stringToTerraform(this._scheduler),
      server_group_id: cdktf.stringToTerraform(this._serverGroupId),
      sticky_session: cdktf.stringToTerraform(this._stickySession),
      sticky_session_type: cdktf.stringToTerraform(this._stickySessionType),
      unhealthy_threshold: cdktf.numberToTerraform(this._unhealthyThreshold),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cookie: {
        value: cdktf.stringToHclTerraform(this._cookie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_timeout: {
        value: cdktf.numberToHclTerraform(this._cookieTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_protection_validation: {
        value: cdktf.booleanToHclTerraform(this._deleteProtectionValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frontend_port: {
        value: cdktf.numberToHclTerraform(this._frontendPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check: {
        value: cdktf.stringToHclTerraform(this._healthCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_connect_port: {
        value: cdktf.numberToHclTerraform(this._healthCheckConnectPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_domain: {
        value: cdktf.stringToHclTerraform(this._healthCheckDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_http_code: {
        value: cdktf.stringToHclTerraform(this._healthCheckHttpCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_interval: {
        value: cdktf.numberToHclTerraform(this._healthCheckInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_timeout: {
        value: cdktf.numberToHclTerraform(this._healthCheckTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_uri: {
        value: cdktf.stringToHclTerraform(this._healthCheckUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      healthy_threshold: {
        value: cdktf.numberToHclTerraform(this._healthyThreshold),
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
      listener_sync: {
        value: cdktf.stringToHclTerraform(this._listenerSync),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_id: {
        value: cdktf.stringToHclTerraform(this._loadBalancerId),
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
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduler: {
        value: cdktf.stringToHclTerraform(this._scheduler),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_group_id: {
        value: cdktf.stringToHclTerraform(this._serverGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sticky_session: {
        value: cdktf.stringToHclTerraform(this._stickySession),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sticky_session_type: {
        value: cdktf.stringToHclTerraform(this._stickySessionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unhealthy_threshold: {
        value: cdktf.numberToHclTerraform(this._unhealthyThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
