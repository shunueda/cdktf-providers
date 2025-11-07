// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_routing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalanceContentRoutingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_routing#comments LoadBalanceContentRouting#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_routing#connection_pool LoadBalanceContentRouting#connection_pool}
  */
  readonly connectionPool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_routing#connection_pool_inherit LoadBalanceContentRouting#connection_pool_inherit}
  */
  readonly connectionPoolInherit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_routing#id LoadBalanceContentRouting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_routing#ip LoadBalanceContentRouting#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_routing#ip6 LoadBalanceContentRouting#ip6}
  */
  readonly ip6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_routing#method LoadBalanceContentRouting#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_routing#method_inherit LoadBalanceContentRouting#method_inherit}
  */
  readonly methodInherit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_routing#mkey LoadBalanceContentRouting#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_routing#packet_fwd_method LoadBalanceContentRouting#packet_fwd_method}
  */
  readonly packetFwdMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_routing#persistence LoadBalanceContentRouting#persistence}
  */
  readonly persistence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_routing#persistence_inherit LoadBalanceContentRouting#persistence_inherit}
  */
  readonly persistenceInherit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_routing#pool LoadBalanceContentRouting#pool}
  */
  readonly pool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_routing#schedule_list LoadBalanceContentRouting#schedule_list}
  */
  readonly scheduleList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_routing#schedule_pool_list LoadBalanceContentRouting#schedule_pool_list}
  */
  readonly schedulePoolList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_routing#source_pool_list LoadBalanceContentRouting#source_pool_list}
  */
  readonly sourcePoolList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_routing#type LoadBalanceContentRouting#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_routing#vdom LoadBalanceContentRouting#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_routing fortiadc_load_balance_content_routing}
*/
export class LoadBalanceContentRouting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_load_balance_content_routing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadBalanceContentRouting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadBalanceContentRouting to import
  * @param importFromId The id of the existing LoadBalanceContentRouting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_routing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalanceContentRouting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_load_balance_content_routing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_routing fortiadc_load_balance_content_routing} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalanceContentRoutingConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalanceContentRoutingConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_load_balance_content_routing',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comments = config.comments;
    this._connectionPool = config.connectionPool;
    this._connectionPoolInherit = config.connectionPoolInherit;
    this._id = config.id;
    this._ip = config.ip;
    this._ip6 = config.ip6;
    this._method = config.method;
    this._methodInherit = config.methodInherit;
    this._mkey = config.mkey;
    this._packetFwdMethod = config.packetFwdMethod;
    this._persistence = config.persistence;
    this._persistenceInherit = config.persistenceInherit;
    this._pool = config.pool;
    this._scheduleList = config.scheduleList;
    this._schedulePoolList = config.schedulePoolList;
    this._sourcePoolList = config.sourcePoolList;
    this._type = config.type;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comments - computed: true, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // connection_pool - computed: true, optional: true, required: false
  private _connectionPool?: string; 
  public get connectionPool() {
    return this.getStringAttribute('connection_pool');
  }
  public set connectionPool(value: string) {
    this._connectionPool = value;
  }
  public resetConnectionPool() {
    this._connectionPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolInput() {
    return this._connectionPool;
  }

  // connection_pool_inherit - computed: true, optional: true, required: false
  private _connectionPoolInherit?: string; 
  public get connectionPoolInherit() {
    return this.getStringAttribute('connection_pool_inherit');
  }
  public set connectionPoolInherit(value: string) {
    this._connectionPoolInherit = value;
  }
  public resetConnectionPoolInherit() {
    this._connectionPoolInherit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolInheritInput() {
    return this._connectionPoolInherit;
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

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip6 - computed: true, optional: true, required: false
  private _ip6?: string; 
  public get ip6() {
    return this.getStringAttribute('ip6');
  }
  public set ip6(value: string) {
    this._ip6 = value;
  }
  public resetIp6() {
    this._ip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Input() {
    return this._ip6;
  }

  // method - computed: true, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // method_inherit - computed: true, optional: true, required: false
  private _methodInherit?: string; 
  public get methodInherit() {
    return this.getStringAttribute('method_inherit');
  }
  public set methodInherit(value: string) {
    this._methodInherit = value;
  }
  public resetMethodInherit() {
    this._methodInherit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInheritInput() {
    return this._methodInherit;
  }

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // packet_fwd_method - computed: true, optional: true, required: false
  private _packetFwdMethod?: string; 
  public get packetFwdMethod() {
    return this.getStringAttribute('packet_fwd_method');
  }
  public set packetFwdMethod(value: string) {
    this._packetFwdMethod = value;
  }
  public resetPacketFwdMethod() {
    this._packetFwdMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetFwdMethodInput() {
    return this._packetFwdMethod;
  }

  // persistence - computed: true, optional: true, required: false
  private _persistence?: string; 
  public get persistence() {
    return this.getStringAttribute('persistence');
  }
  public set persistence(value: string) {
    this._persistence = value;
  }
  public resetPersistence() {
    this._persistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceInput() {
    return this._persistence;
  }

  // persistence_inherit - computed: true, optional: true, required: false
  private _persistenceInherit?: string; 
  public get persistenceInherit() {
    return this.getStringAttribute('persistence_inherit');
  }
  public set persistenceInherit(value: string) {
    this._persistenceInherit = value;
  }
  public resetPersistenceInherit() {
    this._persistenceInherit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceInheritInput() {
    return this._persistenceInherit;
  }

  // pool - computed: true, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // schedule_list - computed: true, optional: true, required: false
  private _scheduleList?: string; 
  public get scheduleList() {
    return this.getStringAttribute('schedule_list');
  }
  public set scheduleList(value: string) {
    this._scheduleList = value;
  }
  public resetScheduleList() {
    this._scheduleList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleListInput() {
    return this._scheduleList;
  }

  // schedule_pool_list - computed: true, optional: true, required: false
  private _schedulePoolList?: string; 
  public get schedulePoolList() {
    return this.getStringAttribute('schedule_pool_list');
  }
  public set schedulePoolList(value: string) {
    this._schedulePoolList = value;
  }
  public resetSchedulePoolList() {
    this._schedulePoolList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulePoolListInput() {
    return this._schedulePoolList;
  }

  // source_pool_list - computed: true, optional: true, required: false
  private _sourcePoolList?: string; 
  public get sourcePoolList() {
    return this.getStringAttribute('source_pool_list');
  }
  public set sourcePoolList(value: string) {
    this._sourcePoolList = value;
  }
  public resetSourcePoolList() {
    this._sourcePoolList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePoolListInput() {
    return this._sourcePoolList;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comments: cdktf.stringToTerraform(this._comments),
      connection_pool: cdktf.stringToTerraform(this._connectionPool),
      connection_pool_inherit: cdktf.stringToTerraform(this._connectionPoolInherit),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      ip6: cdktf.stringToTerraform(this._ip6),
      method: cdktf.stringToTerraform(this._method),
      method_inherit: cdktf.stringToTerraform(this._methodInherit),
      mkey: cdktf.stringToTerraform(this._mkey),
      packet_fwd_method: cdktf.stringToTerraform(this._packetFwdMethod),
      persistence: cdktf.stringToTerraform(this._persistence),
      persistence_inherit: cdktf.stringToTerraform(this._persistenceInherit),
      pool: cdktf.stringToTerraform(this._pool),
      schedule_list: cdktf.stringToTerraform(this._scheduleList),
      schedule_pool_list: cdktf.stringToTerraform(this._schedulePoolList),
      source_pool_list: cdktf.stringToTerraform(this._sourcePoolList),
      type: cdktf.stringToTerraform(this._type),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_pool: {
        value: cdktf.stringToHclTerraform(this._connectionPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_pool_inherit: {
        value: cdktf.stringToHclTerraform(this._connectionPoolInherit),
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6: {
        value: cdktf.stringToHclTerraform(this._ip6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      method: {
        value: cdktf.stringToHclTerraform(this._method),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      method_inherit: {
        value: cdktf.stringToHclTerraform(this._methodInherit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_fwd_method: {
        value: cdktf.stringToHclTerraform(this._packetFwdMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistence: {
        value: cdktf.stringToHclTerraform(this._persistence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistence_inherit: {
        value: cdktf.stringToHclTerraform(this._persistenceInherit),
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
      schedule_list: {
        value: cdktf.stringToHclTerraform(this._scheduleList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_pool_list: {
        value: cdktf.stringToHclTerraform(this._schedulePoolList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_pool_list: {
        value: cdktf.stringToHclTerraform(this._sourcePoolList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
