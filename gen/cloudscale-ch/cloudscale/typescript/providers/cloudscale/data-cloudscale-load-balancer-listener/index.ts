// https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs/data-sources/load_balancer_listener
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudscaleLoadBalancerListenerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs/data-sources/load_balancer_listener#allowed_cidrs DataCloudscaleLoadBalancerListener#allowed_cidrs}
  */
  readonly allowedCidrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs/data-sources/load_balancer_listener#id DataCloudscaleLoadBalancerListener#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs/data-sources/load_balancer_listener#name DataCloudscaleLoadBalancerListener#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs/data-sources/load_balancer_listener#pool_uuid DataCloudscaleLoadBalancerListener#pool_uuid}
  */
  readonly poolUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs/data-sources/load_balancer_listener#tags DataCloudscaleLoadBalancerListener#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs/data-sources/load_balancer_listener#timeout_client_data_ms DataCloudscaleLoadBalancerListener#timeout_client_data_ms}
  */
  readonly timeoutClientDataMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs/data-sources/load_balancer_listener#timeout_member_connect_ms DataCloudscaleLoadBalancerListener#timeout_member_connect_ms}
  */
  readonly timeoutMemberConnectMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs/data-sources/load_balancer_listener#timeout_member_data_ms DataCloudscaleLoadBalancerListener#timeout_member_data_ms}
  */
  readonly timeoutMemberDataMs?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs/data-sources/load_balancer_listener cloudscale_load_balancer_listener}
*/
export class DataCloudscaleLoadBalancerListener extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudscale_load_balancer_listener";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudscaleLoadBalancerListener resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudscaleLoadBalancerListener to import
  * @param importFromId The id of the existing DataCloudscaleLoadBalancerListener that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs/data-sources/load_balancer_listener#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudscaleLoadBalancerListener to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudscale_load_balancer_listener", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs/data-sources/load_balancer_listener cloudscale_load_balancer_listener} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudscaleLoadBalancerListenerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCloudscaleLoadBalancerListenerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudscale_load_balancer_listener',
      terraformGeneratorMetadata: {
        providerName: 'cloudscale',
        providerVersion: '5.0.1',
        providerVersionConstraint: '5.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedCidrs = config.allowedCidrs;
    this._id = config.id;
    this._name = config.name;
    this._poolUuid = config.poolUuid;
    this._tags = config.tags;
    this._timeoutClientDataMs = config.timeoutClientDataMs;
    this._timeoutMemberConnectMs = config.timeoutMemberConnectMs;
    this._timeoutMemberDataMs = config.timeoutMemberDataMs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_cidrs - computed: true, optional: true, required: false
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

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
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

  // pool_href - computed: true, optional: false, required: false
  public get poolHref() {
    return this.getStringAttribute('pool_href');
  }

  // pool_name - computed: true, optional: false, required: false
  public get poolName() {
    return this.getStringAttribute('pool_name');
  }

  // pool_uuid - computed: true, optional: true, required: false
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

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // protocol_port - computed: true, optional: false, required: false
  public get protocolPort() {
    return this.getNumberAttribute('protocol_port');
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

  // timeout_client_data_ms - computed: true, optional: true, required: false
  private _timeoutClientDataMs?: number; 
  public get timeoutClientDataMs() {
    return this.getNumberAttribute('timeout_client_data_ms');
  }
  public set timeoutClientDataMs(value: number) {
    this._timeoutClientDataMs = value;
  }
  public resetTimeoutClientDataMs() {
    this._timeoutClientDataMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutClientDataMsInput() {
    return this._timeoutClientDataMs;
  }

  // timeout_member_connect_ms - computed: true, optional: true, required: false
  private _timeoutMemberConnectMs?: number; 
  public get timeoutMemberConnectMs() {
    return this.getNumberAttribute('timeout_member_connect_ms');
  }
  public set timeoutMemberConnectMs(value: number) {
    this._timeoutMemberConnectMs = value;
  }
  public resetTimeoutMemberConnectMs() {
    this._timeoutMemberConnectMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMemberConnectMsInput() {
    return this._timeoutMemberConnectMs;
  }

  // timeout_member_data_ms - computed: true, optional: true, required: false
  private _timeoutMemberDataMs?: number; 
  public get timeoutMemberDataMs() {
    return this.getNumberAttribute('timeout_member_data_ms');
  }
  public set timeoutMemberDataMs(value: number) {
    this._timeoutMemberDataMs = value;
  }
  public resetTimeoutMemberDataMs() {
    this._timeoutMemberDataMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMemberDataMsInput() {
    return this._timeoutMemberDataMs;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedCidrs),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      pool_uuid: cdktf.stringToTerraform(this._poolUuid),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeout_client_data_ms: cdktf.numberToTerraform(this._timeoutClientDataMs),
      timeout_member_connect_ms: cdktf.numberToTerraform(this._timeoutMemberConnectMs),
      timeout_member_data_ms: cdktf.numberToTerraform(this._timeoutMemberDataMs),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedCidrs),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      timeout_client_data_ms: {
        value: cdktf.numberToHclTerraform(this._timeoutClientDataMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout_member_connect_ms: {
        value: cdktf.numberToHclTerraform(this._timeoutMemberConnectMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout_member_data_ms: {
        value: cdktf.numberToHclTerraform(this._timeoutMemberDataMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
