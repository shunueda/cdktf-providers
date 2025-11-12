// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_params
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DuploServiceParamsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The DNS prefix to assign to this service's load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_params#dns_prfx DuploServiceParams#dns_prfx}
  */
  readonly dnsPrfx?: string;
  /**
  * Whether or not to drop invalid HTTP headers received by the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_params#drop_invalid_headers DuploServiceParams#drop_invalid_headers}
  */
  readonly dropInvalidHeaders?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to enable access logs.  When enabled, Duplo will send access logs to a centralized S3 bucket per plan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_params#enable_access_logs DuploServiceParams#enable_access_logs}
  */
  readonly enableAccessLogs?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to enable http to https redirection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_params#http_to_https_redirect DuploServiceParams#http_to_https_redirect}
  */
  readonly httpToHttpsRedirect?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_params#id DuploServiceParams#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The time in seconds that the connection is allowed to be idle. Only valid for Load Balancers of type `application`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_params#idle_timeout DuploServiceParams#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * The name of the duplo service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_params#replication_controller_name DuploServiceParams#replication_controller_name}
  */
  readonly replicationControllerName: string;
  /**
  * The GUID of the tenant that hosts the duplo service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_params#tenant_id DuploServiceParams#tenant_id}
  */
  readonly tenantId: string;
  /**
  * The ARN of a web application firewall to associate this load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_params#webaclid DuploServiceParams#webaclid}
  */
  readonly webaclid?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_params#timeouts DuploServiceParams#timeouts}
  */
  readonly timeouts?: DuploServiceParamsTimeouts;
}
export interface DuploServiceParamsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_params#create DuploServiceParams#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_params#delete DuploServiceParams#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_params#update DuploServiceParams#update}
  */
  readonly update?: string;
}

export function duploServiceParamsTimeoutsToTerraform(struct?: DuploServiceParamsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function duploServiceParamsTimeoutsToHclTerraform(struct?: DuploServiceParamsTimeouts | cdktf.IResolvable): any {
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

export class DuploServiceParamsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DuploServiceParamsTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DuploServiceParamsTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_params duplocloud_duplo_service_params}
*/
export class DuploServiceParams extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_duplo_service_params";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DuploServiceParams resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DuploServiceParams to import
  * @param importFromId The id of the existing DuploServiceParams that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_params#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DuploServiceParams to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_duplo_service_params", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/duplo_service_params duplocloud_duplo_service_params} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DuploServiceParamsConfig
  */
  public constructor(scope: Construct, id: string, config: DuploServiceParamsConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_duplo_service_params',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.28',
        providerVersionConstraint: '0.11.28'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dnsPrfx = config.dnsPrfx;
    this._dropInvalidHeaders = config.dropInvalidHeaders;
    this._enableAccessLogs = config.enableAccessLogs;
    this._httpToHttpsRedirect = config.httpToHttpsRedirect;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._replicationControllerName = config.replicationControllerName;
    this._tenantId = config.tenantId;
    this._webaclid = config.webaclid;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_prfx - computed: true, optional: true, required: false
  private _dnsPrfx?: string; 
  public get dnsPrfx() {
    return this.getStringAttribute('dns_prfx');
  }
  public set dnsPrfx(value: string) {
    this._dnsPrfx = value;
  }
  public resetDnsPrfx() {
    this._dnsPrfx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPrfxInput() {
    return this._dnsPrfx;
  }

  // drop_invalid_headers - computed: true, optional: true, required: false
  private _dropInvalidHeaders?: boolean | cdktf.IResolvable; 
  public get dropInvalidHeaders() {
    return this.getBooleanAttribute('drop_invalid_headers');
  }
  public set dropInvalidHeaders(value: boolean | cdktf.IResolvable) {
    this._dropInvalidHeaders = value;
  }
  public resetDropInvalidHeaders() {
    this._dropInvalidHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInvalidHeadersInput() {
    return this._dropInvalidHeaders;
  }

  // enable_access_logs - computed: true, optional: true, required: false
  private _enableAccessLogs?: boolean | cdktf.IResolvable; 
  public get enableAccessLogs() {
    return this.getBooleanAttribute('enable_access_logs');
  }
  public set enableAccessLogs(value: boolean | cdktf.IResolvable) {
    this._enableAccessLogs = value;
  }
  public resetEnableAccessLogs() {
    this._enableAccessLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccessLogsInput() {
    return this._enableAccessLogs;
  }

  // http_to_https_redirect - computed: true, optional: true, required: false
  private _httpToHttpsRedirect?: boolean | cdktf.IResolvable; 
  public get httpToHttpsRedirect() {
    return this.getBooleanAttribute('http_to_https_redirect');
  }
  public set httpToHttpsRedirect(value: boolean | cdktf.IResolvable) {
    this._httpToHttpsRedirect = value;
  }
  public resetHttpToHttpsRedirect() {
    this._httpToHttpsRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpToHttpsRedirectInput() {
    return this._httpToHttpsRedirect;
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

  // idle_timeout - computed: true, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // load_balancer_arn - computed: true, optional: false, required: false
  public get loadBalancerArn() {
    return this.getStringAttribute('load_balancer_arn');
  }

  // load_balancer_name - computed: true, optional: false, required: false
  public get loadBalancerName() {
    return this.getStringAttribute('load_balancer_name');
  }

  // replication_controller_name - computed: false, optional: false, required: true
  private _replicationControllerName?: string; 
  public get replicationControllerName() {
    return this.getStringAttribute('replication_controller_name');
  }
  public set replicationControllerName(value: string) {
    this._replicationControllerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationControllerNameInput() {
    return this._replicationControllerName;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // webaclid - computed: true, optional: true, required: false
  private _webaclid?: string; 
  public get webaclid() {
    return this.getStringAttribute('webaclid');
  }
  public set webaclid(value: string) {
    this._webaclid = value;
  }
  public resetWebaclid() {
    this._webaclid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webaclidInput() {
    return this._webaclid;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DuploServiceParamsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DuploServiceParamsTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_prfx: cdktf.stringToTerraform(this._dnsPrfx),
      drop_invalid_headers: cdktf.booleanToTerraform(this._dropInvalidHeaders),
      enable_access_logs: cdktf.booleanToTerraform(this._enableAccessLogs),
      http_to_https_redirect: cdktf.booleanToTerraform(this._httpToHttpsRedirect),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      replication_controller_name: cdktf.stringToTerraform(this._replicationControllerName),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      webaclid: cdktf.stringToTerraform(this._webaclid),
      timeouts: duploServiceParamsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_prfx: {
        value: cdktf.stringToHclTerraform(this._dnsPrfx),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drop_invalid_headers: {
        value: cdktf.booleanToHclTerraform(this._dropInvalidHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_access_logs: {
        value: cdktf.booleanToHclTerraform(this._enableAccessLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http_to_https_redirect: {
        value: cdktf.booleanToHclTerraform(this._httpToHttpsRedirect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_timeout: {
        value: cdktf.numberToHclTerraform(this._idleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replication_controller_name: {
        value: cdktf.stringToHclTerraform(this._replicationControllerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webaclid: {
        value: cdktf.stringToHclTerraform(this._webaclid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: duploServiceParamsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DuploServiceParamsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
