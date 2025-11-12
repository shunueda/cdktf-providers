// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LtmNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Address of the node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_node#address LtmNode#address}
  */
  readonly address: string;
  /**
  * Specifies the maximum number of connections allowed for the node or node address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_node#connection_limit LtmNode#connection_limit}
  */
  readonly connectionLimit?: number;
  /**
  * User defined description of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_node#description LtmNode#description}
  */
  readonly description?: string;
  /**
  * Sets the dynamic ratio number for the node. Used for dynamic ratio load balancing. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_node#dynamic_ratio LtmNode#dynamic_ratio}
  */
  readonly dynamicRatio?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_node#id LtmNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the name of the monitor or monitor rule that you want to associate with the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_node#monitor LtmNode#monitor}
  */
  readonly monitor?: string;
  /**
  * Name of the node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_node#name LtmNode#name}
  */
  readonly name: string;
  /**
  * Specifies the maximum number of connections per second allowed for a node or node address. The default value is 'disabled'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_node#rate_limit LtmNode#rate_limit}
  */
  readonly rateLimit?: string;
  /**
  * Sets the ratio number for the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_node#ratio LtmNode#ratio}
  */
  readonly ratio?: number;
  /**
  * Enables or disables the node for new sessions. The default value is user-enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_node#session LtmNode#session}
  */
  readonly session?: string;
  /**
  * Marks the node up or down. The default value is user-up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_node#state LtmNode#state}
  */
  readonly state?: string;
  /**
  * fqdn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_node#fqdn LtmNode#fqdn}
  */
  readonly fqdn?: LtmNodeFqdn;
}
export interface LtmNodeFqdn {
  /**
  * Specifies the node's address family. The default is 'unspecified', or IP-agnostic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_node#address_family LtmNode#address_family}
  */
  readonly addressFamily?: string;
  /**
  * Specifies whether the node should scale to the IP address set returned by DNS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_node#autopopulate LtmNode#autopopulate}
  */
  readonly autopopulate?: string;
  /**
  * Specifies the number of attempts to resolve a domain name. The default is 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_node#downinterval LtmNode#downinterval}
  */
  readonly downinterval?: number;
  /**
  * Specifies the amount of time before sending the next DNS query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_node#interval LtmNode#interval}
  */
  readonly interval?: string;
  /**
  * Specifies the fully qualified domain name of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_node#name LtmNode#name}
  */
  readonly name?: string;
}

export function ltmNodeFqdnToTerraform(struct?: LtmNodeFqdnOutputReference | LtmNodeFqdn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_family: cdktf.stringToTerraform(struct!.addressFamily),
    autopopulate: cdktf.stringToTerraform(struct!.autopopulate),
    downinterval: cdktf.numberToTerraform(struct!.downinterval),
    interval: cdktf.stringToTerraform(struct!.interval),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ltmNodeFqdnToHclTerraform(struct?: LtmNodeFqdnOutputReference | LtmNodeFqdn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_family: {
      value: cdktf.stringToHclTerraform(struct!.addressFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autopopulate: {
      value: cdktf.stringToHclTerraform(struct!.autopopulate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    downinterval: {
      value: cdktf.numberToHclTerraform(struct!.downinterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LtmNodeFqdnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LtmNodeFqdn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressFamily = this._addressFamily;
    }
    if (this._autopopulate !== undefined) {
      hasAnyValues = true;
      internalValueResult.autopopulate = this._autopopulate;
    }
    if (this._downinterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.downinterval = this._downinterval;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LtmNodeFqdn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressFamily = undefined;
      this._autopopulate = undefined;
      this._downinterval = undefined;
      this._interval = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressFamily = value.addressFamily;
      this._autopopulate = value.autopopulate;
      this._downinterval = value.downinterval;
      this._interval = value.interval;
      this._name = value.name;
    }
  }

  // address_family - computed: true, optional: true, required: false
  private _addressFamily?: string; 
  public get addressFamily() {
    return this.getStringAttribute('address_family');
  }
  public set addressFamily(value: string) {
    this._addressFamily = value;
  }
  public resetAddressFamily() {
    this._addressFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyInput() {
    return this._addressFamily;
  }

  // autopopulate - computed: true, optional: true, required: false
  private _autopopulate?: string; 
  public get autopopulate() {
    return this.getStringAttribute('autopopulate');
  }
  public set autopopulate(value: string) {
    this._autopopulate = value;
  }
  public resetAutopopulate() {
    this._autopopulate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autopopulateInput() {
    return this._autopopulate;
  }

  // downinterval - computed: true, optional: true, required: false
  private _downinterval?: number; 
  public get downinterval() {
    return this.getNumberAttribute('downinterval');
  }
  public set downinterval(value: number) {
    this._downinterval = value;
  }
  public resetDowninterval() {
    this._downinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downintervalInput() {
    return this._downinterval;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_node bigip_ltm_node}
*/
export class LtmNode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_ltm_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LtmNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LtmNode to import
  * @param importFromId The id of the existing LtmNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LtmNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_ltm_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_node bigip_ltm_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LtmNodeConfig
  */
  public constructor(scope: Construct, id: string, config: LtmNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_ltm_node',
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
    this._address = config.address;
    this._connectionLimit = config.connectionLimit;
    this._description = config.description;
    this._dynamicRatio = config.dynamicRatio;
    this._id = config.id;
    this._monitor = config.monitor;
    this._name = config.name;
    this._rateLimit = config.rateLimit;
    this._ratio = config.ratio;
    this._session = config.session;
    this._state = config.state;
    this._fqdn.internalValue = config.fqdn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

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

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // monitor - computed: false, optional: true, required: false
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // rate_limit - computed: true, optional: true, required: false
  private _rateLimit?: string; 
  public get rateLimit() {
    return this.getStringAttribute('rate_limit');
  }
  public set rateLimit(value: string) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
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

  // session - computed: true, optional: true, required: false
  private _session?: string; 
  public get session() {
    return this.getStringAttribute('session');
  }
  public set session(value: string) {
    this._session = value;
  }
  public resetSession() {
    this._session = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionInput() {
    return this._session;
  }

  // state - computed: true, optional: true, required: false
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

  // fqdn - computed: false, optional: true, required: false
  private _fqdn = new LtmNodeFqdnOutputReference(this, "fqdn");
  public get fqdn() {
    return this._fqdn;
  }
  public putFqdn(value: LtmNodeFqdn) {
    this._fqdn.internalValue = value;
  }
  public resetFqdn() {
    this._fqdn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      connection_limit: cdktf.numberToTerraform(this._connectionLimit),
      description: cdktf.stringToTerraform(this._description),
      dynamic_ratio: cdktf.numberToTerraform(this._dynamicRatio),
      id: cdktf.stringToTerraform(this._id),
      monitor: cdktf.stringToTerraform(this._monitor),
      name: cdktf.stringToTerraform(this._name),
      rate_limit: cdktf.stringToTerraform(this._rateLimit),
      ratio: cdktf.numberToTerraform(this._ratio),
      session: cdktf.stringToTerraform(this._session),
      state: cdktf.stringToTerraform(this._state),
      fqdn: ltmNodeFqdnToTerraform(this._fqdn.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_limit: {
        value: cdktf.numberToHclTerraform(this._connectionLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_limit: {
        value: cdktf.stringToHclTerraform(this._rateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ratio: {
        value: cdktf.numberToHclTerraform(this._ratio),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session: {
        value: cdktf.stringToHclTerraform(this._session),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fqdn: {
        value: ltmNodeFqdnToHclTerraform(this._fqdn.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LtmNodeFqdnList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
