// https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/data-sources/active_active_private_link_endpoint_script
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRediscloudActiveActivePrivateLinkEndpointScriptConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/data-sources/active_active_private_link_endpoint_script#id DataRediscloudActiveActivePrivateLinkEndpointScript#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of an Active Active subscription region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/data-sources/active_active_private_link_endpoint_script#region_id DataRediscloudActiveActivePrivateLinkEndpointScript#region_id}
  */
  readonly regionId: number;
  /**
  * The ID of an Active Active subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/data-sources/active_active_private_link_endpoint_script#subscription_id DataRediscloudActiveActivePrivateLinkEndpointScript#subscription_id}
  */
  readonly subscriptionId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/data-sources/active_active_private_link_endpoint_script rediscloud_active_active_private_link_endpoint_script}
*/
export class DataRediscloudActiveActivePrivateLinkEndpointScript extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rediscloud_active_active_private_link_endpoint_script";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRediscloudActiveActivePrivateLinkEndpointScript resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRediscloudActiveActivePrivateLinkEndpointScript to import
  * @param importFromId The id of the existing DataRediscloudActiveActivePrivateLinkEndpointScript that should be imported. Refer to the {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/data-sources/active_active_private_link_endpoint_script#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRediscloudActiveActivePrivateLinkEndpointScript to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rediscloud_active_active_private_link_endpoint_script", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/data-sources/active_active_private_link_endpoint_script rediscloud_active_active_private_link_endpoint_script} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRediscloudActiveActivePrivateLinkEndpointScriptConfig
  */
  public constructor(scope: Construct, id: string, config: DataRediscloudActiveActivePrivateLinkEndpointScriptConfig) {
    super(scope, id, {
      terraformResourceType: 'rediscloud_active_active_private_link_endpoint_script',
      terraformGeneratorMetadata: {
        providerName: 'rediscloud',
        providerVersion: '2.9.0',
        providerVersionConstraint: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._regionId = config.regionId;
    this._subscriptionId = config.subscriptionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint_script - computed: true, optional: false, required: false
  public get endpointScript() {
    return this.getStringAttribute('endpoint_script');
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

  // region_id - computed: false, optional: false, required: true
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      region_id: cdktf.numberToTerraform(this._regionId),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.numberToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
