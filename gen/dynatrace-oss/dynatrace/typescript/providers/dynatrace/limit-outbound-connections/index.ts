// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/limit_outbound_connections
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LimitOutboundConnectionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/limit_outbound_connections#id LimitOutboundConnections#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * allowed_outbound_connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/limit_outbound_connections#allowed_outbound_connections LimitOutboundConnections#allowed_outbound_connections}
  */
  readonly allowedOutboundConnections: LimitOutboundConnectionsAllowedOutboundConnections;
}
export interface LimitOutboundConnectionsAllowedOutboundConnections {
  /**
  * If enabled, the Dynatrace JavaScript runtime will only be able to connect to the specified hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/limit_outbound_connections#enforced LimitOutboundConnections#enforced}
  */
  readonly enforced: boolean | cdktf.IResolvable;
  /**
  * The Dynatrace JavaScript runtime will only be to connect to these hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/limit_outbound_connections#host_list LimitOutboundConnections#host_list}
  */
  readonly hostList?: string[];
}

export function limitOutboundConnectionsAllowedOutboundConnectionsToTerraform(struct?: LimitOutboundConnectionsAllowedOutboundConnectionsOutputReference | LimitOutboundConnectionsAllowedOutboundConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforced: cdktf.booleanToTerraform(struct!.enforced),
    host_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostList),
  }
}


export function limitOutboundConnectionsAllowedOutboundConnectionsToHclTerraform(struct?: LimitOutboundConnectionsAllowedOutboundConnectionsOutputReference | LimitOutboundConnectionsAllowedOutboundConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforced: {
      value: cdktf.booleanToHclTerraform(struct!.enforced),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LimitOutboundConnectionsAllowedOutboundConnectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LimitOutboundConnectionsAllowedOutboundConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforced !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforced = this._enforced;
    }
    if (this._hostList !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostList = this._hostList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LimitOutboundConnectionsAllowedOutboundConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enforced = undefined;
      this._hostList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enforced = value.enforced;
      this._hostList = value.hostList;
    }
  }

  // enforced - computed: false, optional: false, required: true
  private _enforced?: boolean | cdktf.IResolvable; 
  public get enforced() {
    return this.getBooleanAttribute('enforced');
  }
  public set enforced(value: boolean | cdktf.IResolvable) {
    this._enforced = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedInput() {
    return this._enforced;
  }

  // host_list - computed: false, optional: true, required: false
  private _hostList?: string[]; 
  public get hostList() {
    return cdktf.Fn.tolist(this.getListAttribute('host_list'));
  }
  public set hostList(value: string[]) {
    this._hostList = value;
  }
  public resetHostList() {
    this._hostList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostListInput() {
    return this._hostList;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/limit_outbound_connections dynatrace_limit_outbound_connections}
*/
export class LimitOutboundConnections extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_limit_outbound_connections";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LimitOutboundConnections resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LimitOutboundConnections to import
  * @param importFromId The id of the existing LimitOutboundConnections that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/limit_outbound_connections#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LimitOutboundConnections to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_limit_outbound_connections", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/limit_outbound_connections dynatrace_limit_outbound_connections} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LimitOutboundConnectionsConfig
  */
  public constructor(scope: Construct, id: string, config: LimitOutboundConnectionsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_limit_outbound_connections',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
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
    this._allowedOutboundConnections.internalValue = config.allowedOutboundConnections;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // allowed_outbound_connections - computed: false, optional: false, required: true
  private _allowedOutboundConnections = new LimitOutboundConnectionsAllowedOutboundConnectionsOutputReference(this, "allowed_outbound_connections");
  public get allowedOutboundConnections() {
    return this._allowedOutboundConnections;
  }
  public putAllowedOutboundConnections(value: LimitOutboundConnectionsAllowedOutboundConnections) {
    this._allowedOutboundConnections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOutboundConnectionsInput() {
    return this._allowedOutboundConnections.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      allowed_outbound_connections: limitOutboundConnectionsAllowedOutboundConnectionsToTerraform(this._allowedOutboundConnections.internalValue),
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
      allowed_outbound_connections: {
        value: limitOutboundConnectionsAllowedOutboundConnectionsToHclTerraform(this._allowedOutboundConnections.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LimitOutboundConnectionsAllowedOutboundConnectionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
