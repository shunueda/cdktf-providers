// https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_health
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElbHealthConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_health#healthcheck_connect_port ElbHealth#healthcheck_connect_port}
  */
  readonly healthcheckConnectPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_health#healthcheck_interval ElbHealth#healthcheck_interval}
  */
  readonly healthcheckInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_health#healthcheck_protocol ElbHealth#healthcheck_protocol}
  */
  readonly healthcheckProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_health#healthcheck_timeout ElbHealth#healthcheck_timeout}
  */
  readonly healthcheckTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_health#healthcheck_uri ElbHealth#healthcheck_uri}
  */
  readonly healthcheckUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_health#healthy_threshold ElbHealth#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_health#id ElbHealth#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_health#listener_id ElbHealth#listener_id}
  */
  readonly listenerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_health#region ElbHealth#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_health#unhealthy_threshold ElbHealth#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_health#timeouts ElbHealth#timeouts}
  */
  readonly timeouts?: ElbHealthTimeouts;
}
export interface ElbHealthTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_health#create ElbHealth#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_health#delete ElbHealth#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_health#update ElbHealth#update}
  */
  readonly update?: string;
}

export function elbHealthTimeoutsToTerraform(struct?: ElbHealthTimeouts | cdktf.IResolvable): any {
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


export function elbHealthTimeoutsToHclTerraform(struct?: ElbHealthTimeouts | cdktf.IResolvable): any {
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

export class ElbHealthTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElbHealthTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ElbHealthTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_health flexibleengine_elb_health}
*/
export class ElbHealth extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flexibleengine_elb_health";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElbHealth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElbHealth to import
  * @param importFromId The id of the existing ElbHealth that should be imported. Refer to the {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_health#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElbHealth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flexibleengine_elb_health", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_health flexibleengine_elb_health} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElbHealthConfig
  */
  public constructor(scope: Construct, id: string, config: ElbHealthConfig) {
    super(scope, id, {
      terraformResourceType: 'flexibleengine_elb_health',
      terraformGeneratorMetadata: {
        providerName: 'flexibleengine',
        providerVersion: '1.46.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._healthcheckConnectPort = config.healthcheckConnectPort;
    this._healthcheckInterval = config.healthcheckInterval;
    this._healthcheckProtocol = config.healthcheckProtocol;
    this._healthcheckTimeout = config.healthcheckTimeout;
    this._healthcheckUri = config.healthcheckUri;
    this._healthyThreshold = config.healthyThreshold;
    this._id = config.id;
    this._listenerId = config.listenerId;
    this._region = config.region;
    this._unhealthyThreshold = config.unhealthyThreshold;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // healthcheck_connect_port - computed: false, optional: true, required: false
  private _healthcheckConnectPort?: number; 
  public get healthcheckConnectPort() {
    return this.getNumberAttribute('healthcheck_connect_port');
  }
  public set healthcheckConnectPort(value: number) {
    this._healthcheckConnectPort = value;
  }
  public resetHealthcheckConnectPort() {
    this._healthcheckConnectPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckConnectPortInput() {
    return this._healthcheckConnectPort;
  }

  // healthcheck_interval - computed: false, optional: true, required: false
  private _healthcheckInterval?: number; 
  public get healthcheckInterval() {
    return this.getNumberAttribute('healthcheck_interval');
  }
  public set healthcheckInterval(value: number) {
    this._healthcheckInterval = value;
  }
  public resetHealthcheckInterval() {
    this._healthcheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckIntervalInput() {
    return this._healthcheckInterval;
  }

  // healthcheck_protocol - computed: false, optional: true, required: false
  private _healthcheckProtocol?: string; 
  public get healthcheckProtocol() {
    return this.getStringAttribute('healthcheck_protocol');
  }
  public set healthcheckProtocol(value: string) {
    this._healthcheckProtocol = value;
  }
  public resetHealthcheckProtocol() {
    this._healthcheckProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckProtocolInput() {
    return this._healthcheckProtocol;
  }

  // healthcheck_timeout - computed: false, optional: true, required: false
  private _healthcheckTimeout?: number; 
  public get healthcheckTimeout() {
    return this.getNumberAttribute('healthcheck_timeout');
  }
  public set healthcheckTimeout(value: number) {
    this._healthcheckTimeout = value;
  }
  public resetHealthcheckTimeout() {
    this._healthcheckTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckTimeoutInput() {
    return this._healthcheckTimeout;
  }

  // healthcheck_uri - computed: false, optional: true, required: false
  private _healthcheckUri?: string; 
  public get healthcheckUri() {
    return this.getStringAttribute('healthcheck_uri');
  }
  public set healthcheckUri(value: string) {
    this._healthcheckUri = value;
  }
  public resetHealthcheckUri() {
    this._healthcheckUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckUriInput() {
    return this._healthcheckUri;
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

  // listener_id - computed: false, optional: false, required: true
  private _listenerId?: string; 
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }
  public set listenerId(value: string) {
    this._listenerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIdInput() {
    return this._listenerId;
  }

  // region - computed: true, optional: true, required: false
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

  // unhealthy_threshold - computed: true, optional: true, required: false
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ElbHealthTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ElbHealthTimeouts) {
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
      healthcheck_connect_port: cdktf.numberToTerraform(this._healthcheckConnectPort),
      healthcheck_interval: cdktf.numberToTerraform(this._healthcheckInterval),
      healthcheck_protocol: cdktf.stringToTerraform(this._healthcheckProtocol),
      healthcheck_timeout: cdktf.numberToTerraform(this._healthcheckTimeout),
      healthcheck_uri: cdktf.stringToTerraform(this._healthcheckUri),
      healthy_threshold: cdktf.numberToTerraform(this._healthyThreshold),
      id: cdktf.stringToTerraform(this._id),
      listener_id: cdktf.stringToTerraform(this._listenerId),
      region: cdktf.stringToTerraform(this._region),
      unhealthy_threshold: cdktf.numberToTerraform(this._unhealthyThreshold),
      timeouts: elbHealthTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      healthcheck_connect_port: {
        value: cdktf.numberToHclTerraform(this._healthcheckConnectPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      healthcheck_interval: {
        value: cdktf.numberToHclTerraform(this._healthcheckInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      healthcheck_protocol: {
        value: cdktf.stringToHclTerraform(this._healthcheckProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      healthcheck_timeout: {
        value: cdktf.numberToHclTerraform(this._healthcheckTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      healthcheck_uri: {
        value: cdktf.stringToHclTerraform(this._healthcheckUri),
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
      listener_id: {
        value: cdktf.stringToHclTerraform(this._listenerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
      timeouts: {
        value: elbHealthTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ElbHealthTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
