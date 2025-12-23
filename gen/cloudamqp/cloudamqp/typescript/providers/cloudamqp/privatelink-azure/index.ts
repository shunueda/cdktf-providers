// https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/resources/privatelink_azure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivatelinkAzureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Approved subscriptions to access the endpoint service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/resources/privatelink_azure#approved_subscriptions PrivatelinkAzure#approved_subscriptions}
  */
  readonly approvedSubscriptions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/resources/privatelink_azure#id PrivatelinkAzure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The CloudAMQP instance identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/resources/privatelink_azure#instance_id PrivatelinkAzure#instance_id}
  */
  readonly instanceId: number;
  /**
  * Configurable sleep in seconds between retries when enable PrivateLink
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/resources/privatelink_azure#sleep PrivatelinkAzure#sleep}
  */
  readonly sleep?: number;
  /**
  * Configurable timeout in seconds when enable PrivateLink
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/resources/privatelink_azure#timeout PrivatelinkAzure#timeout}
  */
  readonly timeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/resources/privatelink_azure cloudamqp_privatelink_azure}
*/
export class PrivatelinkAzure extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudamqp_privatelink_azure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivatelinkAzure resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivatelinkAzure to import
  * @param importFromId The id of the existing PrivatelinkAzure that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/resources/privatelink_azure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivatelinkAzure to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudamqp_privatelink_azure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/resources/privatelink_azure cloudamqp_privatelink_azure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivatelinkAzureConfig
  */
  public constructor(scope: Construct, id: string, config: PrivatelinkAzureConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudamqp_privatelink_azure',
      terraformGeneratorMetadata: {
        providerName: 'cloudamqp',
        providerVersion: '1.41.0',
        providerVersionConstraint: '1.41.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._approvedSubscriptions = config.approvedSubscriptions;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._sleep = config.sleep;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approved_subscriptions - computed: false, optional: false, required: true
  private _approvedSubscriptions?: string[]; 
  public get approvedSubscriptions() {
    return this.getListAttribute('approved_subscriptions');
  }
  public set approvedSubscriptions(value: string[]) {
    this._approvedSubscriptions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approvedSubscriptionsInput() {
    return this._approvedSubscriptions;
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

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // sleep - computed: false, optional: true, required: false
  private _sleep?: number; 
  public get sleep() {
    return this.getNumberAttribute('sleep');
  }
  public set sleep(value: number) {
    this._sleep = value;
  }
  public resetSleep() {
    this._sleep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sleepInput() {
    return this._sleep;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      approved_subscriptions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._approvedSubscriptions),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.numberToTerraform(this._instanceId),
      sleep: cdktf.numberToTerraform(this._sleep),
      timeout: cdktf.numberToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      approved_subscriptions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._approvedSubscriptions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      sleep: {
        value: cdktf.numberToHclTerraform(this._sleep),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
