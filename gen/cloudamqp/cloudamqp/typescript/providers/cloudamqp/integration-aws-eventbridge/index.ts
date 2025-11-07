// https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_aws_eventbridge
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationAwsEventbridgeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The 12 digit AWS Account ID where you want the events to be sent to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_aws_eventbridge#aws_account_id IntegrationAwsEventbridge#aws_account_id}
  */
  readonly awsAccountId: string;
  /**
  * The AWS region where you the events to be sent to. (e.g. us-west-1, us-west-2, ..., etc.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_aws_eventbridge#aws_region IntegrationAwsEventbridge#aws_region}
  */
  readonly awsRegion: string;
  /**
  * Instance identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_aws_eventbridge#instance_id IntegrationAwsEventbridge#instance_id}
  */
  readonly instanceId: number;
  /**
  * Number of messages to prefetch. Default set to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_aws_eventbridge#prefetch IntegrationAwsEventbridge#prefetch}
  */
  readonly prefetch?: number;
  /**
  * A (durable) queue on your RabbitMQ instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_aws_eventbridge#queue IntegrationAwsEventbridge#queue}
  */
  readonly queue: string;
  /**
  * The VHost the queue resides in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_aws_eventbridge#vhost IntegrationAwsEventbridge#vhost}
  */
  readonly vhost: string;
  /**
  * Include message headers in the event data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_aws_eventbridge#with_headers IntegrationAwsEventbridge#with_headers}
  */
  readonly withHeaders: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_aws_eventbridge cloudamqp_integration_aws_eventbridge}
*/
export class IntegrationAwsEventbridge extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudamqp_integration_aws_eventbridge";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationAwsEventbridge resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationAwsEventbridge to import
  * @param importFromId The id of the existing IntegrationAwsEventbridge that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_aws_eventbridge#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationAwsEventbridge to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudamqp_integration_aws_eventbridge", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/integration_aws_eventbridge cloudamqp_integration_aws_eventbridge} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationAwsEventbridgeConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationAwsEventbridgeConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudamqp_integration_aws_eventbridge',
      terraformGeneratorMetadata: {
        providerName: 'cloudamqp',
        providerVersion: '1.38.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsAccountId = config.awsAccountId;
    this._awsRegion = config.awsRegion;
    this._instanceId = config.instanceId;
    this._prefetch = config.prefetch;
    this._queue = config.queue;
    this._vhost = config.vhost;
    this._withHeaders = config.withHeaders;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_account_id - computed: false, optional: false, required: true
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // aws_region - computed: false, optional: false, required: true
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // prefetch - computed: true, optional: true, required: false
  private _prefetch?: number; 
  public get prefetch() {
    return this.getNumberAttribute('prefetch');
  }
  public set prefetch(value: number) {
    this._prefetch = value;
  }
  public resetPrefetch() {
    this._prefetch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefetchInput() {
    return this._prefetch;
  }

  // queue - computed: false, optional: false, required: true
  private _queue?: string; 
  public get queue() {
    return this.getStringAttribute('queue');
  }
  public set queue(value: string) {
    this._queue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vhost - computed: false, optional: false, required: true
  private _vhost?: string; 
  public get vhost() {
    return this.getStringAttribute('vhost');
  }
  public set vhost(value: string) {
    this._vhost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vhostInput() {
    return this._vhost;
  }

  // with_headers - computed: false, optional: false, required: true
  private _withHeaders?: boolean | cdktf.IResolvable; 
  public get withHeaders() {
    return this.getBooleanAttribute('with_headers');
  }
  public set withHeaders(value: boolean | cdktf.IResolvable) {
    this._withHeaders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get withHeadersInput() {
    return this._withHeaders;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      aws_region: cdktf.stringToTerraform(this._awsRegion),
      instance_id: cdktf.numberToTerraform(this._instanceId),
      prefetch: cdktf.numberToTerraform(this._prefetch),
      queue: cdktf.stringToTerraform(this._queue),
      vhost: cdktf.stringToTerraform(this._vhost),
      with_headers: cdktf.booleanToTerraform(this._withHeaders),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_account_id: {
        value: cdktf.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_region: {
        value: cdktf.stringToHclTerraform(this._awsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.numberToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prefetch: {
        value: cdktf.numberToHclTerraform(this._prefetch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue: {
        value: cdktf.stringToHclTerraform(this._queue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vhost: {
        value: cdktf.stringToHclTerraform(this._vhost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      with_headers: {
        value: cdktf.booleanToHclTerraform(this._withHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
