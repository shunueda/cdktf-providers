// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_pool_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LtmPoolAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies a maximum established connection limit for a pool member or node. When the current connections count reaches this number, the system does not send additional connections to that pool member or node. The default is 0, meaning that there is no limit to the number of connections. When used with the weighted least connections load balancing methods, the system uses connection limits to determine the proportional load of each pool member or node. This must be a value other than 0 when specified for the weighted least connections load balancing methods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_pool_attachment#connection_limit LtmPoolAttachment#connection_limit}
  */
  readonly connectionLimit?: number;
  /**
  * Specifies the maximum number of connections-per-second allowed for a pool member. When the number of connections-per-second reaches the limit for a given pool member, the system drops (UDP) or resets (TCP) additional connection requests. This helps detect Denial of Service attacks, where connection requests flood a pool member. Setting this to 0 turns off connection limits. The default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_pool_attachment#connection_rate_limit LtmPoolAttachment#connection_rate_limit}
  */
  readonly connectionRateLimit?: string;
  /**
  * Sets the dynamic ratio number for the node. Used for dynamic ratio load balancing. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_pool_attachment#dynamic_ratio LtmPoolAttachment#dynamic_ratio}
  */
  readonly dynamicRatio?: number;
  /**
  * Specifies whether the node should scale to the IP address set returned by DNS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_pool_attachment#fqdn_autopopulate LtmPoolAttachment#fqdn_autopopulate}
  */
  readonly fqdnAutopopulate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_pool_attachment#id LtmPoolAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the health monitors that the system uses to monitor this pool member,value can be `none` (or) `default` (or) list of monitors joined with and ( ex: `/Common/test_monitor_pa_tc1 and /Common/gateway_icmp`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_pool_attachment#monitor LtmPoolAttachment#monitor}
  */
  readonly monitor?: string;
  /**
  * Poolmember to add/remove to/from the pool. Format node_address:port. e.g 1.1.1.1:80
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_pool_attachment#node LtmPoolAttachment#node}
  */
  readonly nodeAttribute: string;
  /**
  * Name of the pool to be attached with pool members
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_pool_attachment#pool LtmPoolAttachment#pool}
  */
  readonly pool: string;
  /**
  * Specifies a number representing the priority group for the pool member. The default is 0, meaning that the member has no priority. To specify a priority, you must activate priority group usage when you create a new pool or when adding or removing pool members. When activated, the system load balances traffic according to the priority group number assigned to the pool member. The higher the number, the higher the priority, so a member with a priority of 3 has higher priority than a member with a priority of 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_pool_attachment#priority_group LtmPoolAttachment#priority_group}
  */
  readonly priorityGroup?: number;
  /**
  * Specifies the ratio weight to assign to the pool member. Valid values range from 1 through 65535. The default is 1, which means that each pool member has an equal ratio proportion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_pool_attachment#ratio LtmPoolAttachment#ratio}
  */
  readonly ratio?: number;
  /**
  * Specifies the state the pool member should be in, value can be `enabled` (or) `disabled` (or) forced_offline
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_pool_attachment#state LtmPoolAttachment#state}
  */
  readonly state?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_pool_attachment bigip_ltm_pool_attachment}
*/
export class LtmPoolAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_ltm_pool_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LtmPoolAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LtmPoolAttachment to import
  * @param importFromId The id of the existing LtmPoolAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_pool_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LtmPoolAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_ltm_pool_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_pool_attachment bigip_ltm_pool_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LtmPoolAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: LtmPoolAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_ltm_pool_attachment',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1',
        providerVersionConstraint: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionLimit = config.connectionLimit;
    this._connectionRateLimit = config.connectionRateLimit;
    this._dynamicRatio = config.dynamicRatio;
    this._fqdnAutopopulate = config.fqdnAutopopulate;
    this._id = config.id;
    this._monitor = config.monitor;
    this._node = config.nodeAttribute;
    this._pool = config.pool;
    this._priorityGroup = config.priorityGroup;
    this._ratio = config.ratio;
    this._state = config.state;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_limit - computed: true, optional: true, required: false
  private _connectionLimit?: number; 
  public get connectionLimit() {
    return this.getNumberAttribute('connection_limit');
  }
  public set connectionLimit(value: number) {
    this._connectionLimit = value;
  }
  public resetConnectionLimit() {
    this._connectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitInput() {
    return this._connectionLimit;
  }

  // connection_rate_limit - computed: true, optional: true, required: false
  private _connectionRateLimit?: string; 
  public get connectionRateLimit() {
    return this.getStringAttribute('connection_rate_limit');
  }
  public set connectionRateLimit(value: string) {
    this._connectionRateLimit = value;
  }
  public resetConnectionRateLimit() {
    this._connectionRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRateLimitInput() {
    return this._connectionRateLimit;
  }

  // dynamic_ratio - computed: true, optional: true, required: false
  private _dynamicRatio?: number; 
  public get dynamicRatio() {
    return this.getNumberAttribute('dynamic_ratio');
  }
  public set dynamicRatio(value: number) {
    this._dynamicRatio = value;
  }
  public resetDynamicRatio() {
    this._dynamicRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicRatioInput() {
    return this._dynamicRatio;
  }

  // fqdn_autopopulate - computed: false, optional: true, required: false
  private _fqdnAutopopulate?: string; 
  public get fqdnAutopopulate() {
    return this.getStringAttribute('fqdn_autopopulate');
  }
  public set fqdnAutopopulate(value: string) {
    this._fqdnAutopopulate = value;
  }
  public resetFqdnAutopopulate() {
    this._fqdnAutopopulate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnAutopopulateInput() {
    return this._fqdnAutopopulate;
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

  // monitor - computed: true, optional: true, required: false
  private _monitor?: string; 
  public get monitor() {
    return this.getStringAttribute('monitor');
  }
  public set monitor(value: string) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
  }

  // node - computed: false, optional: false, required: true
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // pool - computed: false, optional: false, required: true
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // priority_group - computed: true, optional: true, required: false
  private _priorityGroup?: number; 
  public get priorityGroup() {
    return this.getNumberAttribute('priority_group');
  }
  public set priorityGroup(value: number) {
    this._priorityGroup = value;
  }
  public resetPriorityGroup() {
    this._priorityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityGroupInput() {
    return this._priorityGroup;
  }

  // ratio - computed: true, optional: true, required: false
  private _ratio?: number; 
  public get ratio() {
    return this.getNumberAttribute('ratio');
  }
  public set ratio(value: number) {
    this._ratio = value;
  }
  public resetRatio() {
    this._ratio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratioInput() {
    return this._ratio;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_limit: cdktf.numberToTerraform(this._connectionLimit),
      connection_rate_limit: cdktf.stringToTerraform(this._connectionRateLimit),
      dynamic_ratio: cdktf.numberToTerraform(this._dynamicRatio),
      fqdn_autopopulate: cdktf.stringToTerraform(this._fqdnAutopopulate),
      id: cdktf.stringToTerraform(this._id),
      monitor: cdktf.stringToTerraform(this._monitor),
      node: cdktf.stringToTerraform(this._node),
      pool: cdktf.stringToTerraform(this._pool),
      priority_group: cdktf.numberToTerraform(this._priorityGroup),
      ratio: cdktf.numberToTerraform(this._ratio),
      state: cdktf.stringToTerraform(this._state),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_limit: {
        value: cdktf.numberToHclTerraform(this._connectionLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connection_rate_limit: {
        value: cdktf.stringToHclTerraform(this._connectionRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_ratio: {
        value: cdktf.numberToHclTerraform(this._dynamicRatio),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fqdn_autopopulate: {
        value: cdktf.stringToHclTerraform(this._fqdnAutopopulate),
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
      monitor: {
        value: cdktf.stringToHclTerraform(this._monitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node: {
        value: cdktf.stringToHclTerraform(this._node),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool: {
        value: cdktf.stringToHclTerraform(this._pool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority_group: {
        value: cdktf.numberToHclTerraform(this._priorityGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ratio: {
        value: cdktf.numberToHclTerraform(this._ratio),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
