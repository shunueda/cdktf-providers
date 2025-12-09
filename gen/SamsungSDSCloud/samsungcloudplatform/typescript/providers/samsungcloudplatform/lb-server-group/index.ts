// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/lb_server_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbServerGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Balancing algorithm. (ROUND_ROBIN, WEIGHTED_ROUND_ROBIN, LEAST_CONNECTION, WEIGHTED_LEAST_CONNECTION, IP_HASH)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/lb_server_group#algorithm LbServerGroup#algorithm}
  */
  readonly algorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/lb_server_group#id LbServerGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Load-Balancer id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/lb_server_group#lb_id LbServerGroup#lb_id}
  */
  readonly lbId: string;
  /**
  * Monitor count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/lb_server_group#monitor_count LbServerGroup#monitor_count}
  */
  readonly monitorCount: number;
  /**
  * Monitor http method. (Only HTTP monitor_protocol. GET, POST)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/lb_server_group#monitor_http_method LbServerGroup#monitor_http_method}
  */
  readonly monitorHttpMethod?: string;
  /**
  * Request body content. (Only POST monitor_http_method. 0 to 300 byte characters)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/lb_server_group#monitor_http_request_body LbServerGroup#monitor_http_request_body}
  */
  readonly monitorHttpRequestBody?: string;
  /**
  * Response body content. (Only HTTP monitor_protocol. 0 to 300 byte characters)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/lb_server_group#monitor_http_response_body LbServerGroup#monitor_http_response_body}
  */
  readonly monitorHttpResponseBody?: string;
  /**
  * Monitor http url path. (Only HTTP monitor_protocol. 0 to 50 alpha-numeric characters with period, dash, underscore)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/lb_server_group#monitor_http_url LbServerGroup#monitor_http_url}
  */
  readonly monitorHttpUrl?: string;
  /**
  * Monitor http version. (Only HTTP monitor_protocol. 1.0, 1.1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/lb_server_group#monitor_http_version LbServerGroup#monitor_http_version}
  */
  readonly monitorHttpVersion?: string;
  /**
  * Monitor interval time(s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/lb_server_group#monitor_interval_sec LbServerGroup#monitor_interval_sec}
  */
  readonly monitorIntervalSec: number;
  /**
  * Monitor port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/lb_server_group#monitor_port LbServerGroup#monitor_port}
  */
  readonly monitorPort: number;
  /**
  * Monitor protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/lb_server_group#monitor_protocol LbServerGroup#monitor_protocol}
  */
  readonly monitorProtocol: string;
  /**
  * Monitor timeout second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/lb_server_group#monitor_timeout_sec LbServerGroup#monitor_timeout_sec}
  */
  readonly monitorTimeoutSec: number;
  /**
  * Load-Balancer server group name. (3 to 20 characters with dash in middle)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/lb_server_group#name LbServerGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/lb_server_group#tags LbServerGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * server_group_member block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/lb_server_group#server_group_member LbServerGroup#server_group_member}
  */
  readonly serverGroupMember?: LbServerGroupServerGroupMember[] | cdktf.IResolvable;
}
export interface LbServerGroupServerGroupMember {
  /**
  * Target service joining state. (ENABLED, DISABLED, GRACEFUL_DISABLED)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/lb_server_group#join_state LbServerGroup#join_state}
  */
  readonly joinState: string;
  /**
  * Target object id (VM server or BareMetal server). This can not be set with 'object_ipv4'. Input resource should be in the same VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/lb_server_group#object_id LbServerGroup#object_id}
  */
  readonly objectId?: string;
  /**
  * Target object ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/lb_server_group#object_ip_address LbServerGroup#object_ip_address}
  */
  readonly objectIpAddress?: string;
  /**
  * Target object port for manual setting. (1 to 65535)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/lb_server_group#object_port LbServerGroup#object_port}
  */
  readonly objectPort?: number;
  /**
  * Target object type. (INSTANCE, BAREMETAL, MANUAL)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/lb_server_group#object_type LbServerGroup#object_type}
  */
  readonly objectType: string;
  /**
  * Balancing weight. This is used with when weighted algorithm is set. (1 to 256)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/lb_server_group#weight LbServerGroup#weight}
  */
  readonly weight: number;
}

export function lbServerGroupServerGroupMemberToTerraform(struct?: LbServerGroupServerGroupMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    join_state: cdktf.stringToTerraform(struct!.joinState),
    object_id: cdktf.stringToTerraform(struct!.objectId),
    object_ip_address: cdktf.stringToTerraform(struct!.objectIpAddress),
    object_port: cdktf.numberToTerraform(struct!.objectPort),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function lbServerGroupServerGroupMemberToHclTerraform(struct?: LbServerGroupServerGroupMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    join_state: {
      value: cdktf.stringToHclTerraform(struct!.joinState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_id: {
      value: cdktf.stringToHclTerraform(struct!.objectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.objectIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_port: {
      value: cdktf.numberToHclTerraform(struct!.objectPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbServerGroupServerGroupMemberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LbServerGroupServerGroupMember | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._joinState !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinState = this._joinState;
    }
    if (this._objectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectId = this._objectId;
    }
    if (this._objectIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectIpAddress = this._objectIpAddress;
    }
    if (this._objectPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectPort = this._objectPort;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbServerGroupServerGroupMember | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._joinState = undefined;
      this._objectId = undefined;
      this._objectIpAddress = undefined;
      this._objectPort = undefined;
      this._objectType = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._joinState = value.joinState;
      this._objectId = value.objectId;
      this._objectIpAddress = value.objectIpAddress;
      this._objectPort = value.objectPort;
      this._objectType = value.objectType;
      this._weight = value.weight;
    }
  }

  // join_state - computed: false, optional: false, required: true
  private _joinState?: string; 
  public get joinState() {
    return this.getStringAttribute('join_state');
  }
  public set joinState(value: string) {
    this._joinState = value;
  }
  // Temporarily expose input value. Use with caution.
  public get joinStateInput() {
    return this._joinState;
  }

  // object_id - computed: false, optional: true, required: false
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  public resetObjectId() {
    this._objectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // object_ip_address - computed: false, optional: true, required: false
  private _objectIpAddress?: string; 
  public get objectIpAddress() {
    return this.getStringAttribute('object_ip_address');
  }
  public set objectIpAddress(value: string) {
    this._objectIpAddress = value;
  }
  public resetObjectIpAddress() {
    this._objectIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIpAddressInput() {
    return this._objectIpAddress;
  }

  // object_port - computed: false, optional: true, required: false
  private _objectPort?: number; 
  public get objectPort() {
    return this.getNumberAttribute('object_port');
  }
  public set objectPort(value: number) {
    this._objectPort = value;
  }
  public resetObjectPort() {
    this._objectPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectPortInput() {
    return this._objectPort;
  }

  // object_type - computed: false, optional: false, required: true
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class LbServerGroupServerGroupMemberList extends cdktf.ComplexList {
  public internalValue? : LbServerGroupServerGroupMember[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LbServerGroupServerGroupMemberOutputReference {
    return new LbServerGroupServerGroupMemberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/lb_server_group samsungcloudplatform_lb_server_group}
*/
export class LbServerGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_lb_server_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbServerGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbServerGroup to import
  * @param importFromId The id of the existing LbServerGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/lb_server_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbServerGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_lb_server_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/lb_server_group samsungcloudplatform_lb_server_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbServerGroupConfig
  */
  public constructor(scope: Construct, id: string, config: LbServerGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_lb_server_group',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.16.0',
        providerVersionConstraint: '3.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._algorithm = config.algorithm;
    this._id = config.id;
    this._lbId = config.lbId;
    this._monitorCount = config.monitorCount;
    this._monitorHttpMethod = config.monitorHttpMethod;
    this._monitorHttpRequestBody = config.monitorHttpRequestBody;
    this._monitorHttpResponseBody = config.monitorHttpResponseBody;
    this._monitorHttpUrl = config.monitorHttpUrl;
    this._monitorHttpVersion = config.monitorHttpVersion;
    this._monitorIntervalSec = config.monitorIntervalSec;
    this._monitorPort = config.monitorPort;
    this._monitorProtocol = config.monitorProtocol;
    this._monitorTimeoutSec = config.monitorTimeoutSec;
    this._name = config.name;
    this._tags = config.tags;
    this._serverGroupMember.internalValue = config.serverGroupMember;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
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

  // lb_id - computed: false, optional: false, required: true
  private _lbId?: string; 
  public get lbId() {
    return this.getStringAttribute('lb_id');
  }
  public set lbId(value: string) {
    this._lbId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbIdInput() {
    return this._lbId;
  }

  // monitor_count - computed: false, optional: false, required: true
  private _monitorCount?: number; 
  public get monitorCount() {
    return this.getNumberAttribute('monitor_count');
  }
  public set monitorCount(value: number) {
    this._monitorCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorCountInput() {
    return this._monitorCount;
  }

  // monitor_http_method - computed: false, optional: true, required: false
  private _monitorHttpMethod?: string; 
  public get monitorHttpMethod() {
    return this.getStringAttribute('monitor_http_method');
  }
  public set monitorHttpMethod(value: string) {
    this._monitorHttpMethod = value;
  }
  public resetMonitorHttpMethod() {
    this._monitorHttpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorHttpMethodInput() {
    return this._monitorHttpMethod;
  }

  // monitor_http_request_body - computed: false, optional: true, required: false
  private _monitorHttpRequestBody?: string; 
  public get monitorHttpRequestBody() {
    return this.getStringAttribute('monitor_http_request_body');
  }
  public set monitorHttpRequestBody(value: string) {
    this._monitorHttpRequestBody = value;
  }
  public resetMonitorHttpRequestBody() {
    this._monitorHttpRequestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorHttpRequestBodyInput() {
    return this._monitorHttpRequestBody;
  }

  // monitor_http_response_body - computed: false, optional: true, required: false
  private _monitorHttpResponseBody?: string; 
  public get monitorHttpResponseBody() {
    return this.getStringAttribute('monitor_http_response_body');
  }
  public set monitorHttpResponseBody(value: string) {
    this._monitorHttpResponseBody = value;
  }
  public resetMonitorHttpResponseBody() {
    this._monitorHttpResponseBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorHttpResponseBodyInput() {
    return this._monitorHttpResponseBody;
  }

  // monitor_http_url - computed: false, optional: true, required: false
  private _monitorHttpUrl?: string; 
  public get monitorHttpUrl() {
    return this.getStringAttribute('monitor_http_url');
  }
  public set monitorHttpUrl(value: string) {
    this._monitorHttpUrl = value;
  }
  public resetMonitorHttpUrl() {
    this._monitorHttpUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorHttpUrlInput() {
    return this._monitorHttpUrl;
  }

  // monitor_http_version - computed: false, optional: true, required: false
  private _monitorHttpVersion?: string; 
  public get monitorHttpVersion() {
    return this.getStringAttribute('monitor_http_version');
  }
  public set monitorHttpVersion(value: string) {
    this._monitorHttpVersion = value;
  }
  public resetMonitorHttpVersion() {
    this._monitorHttpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorHttpVersionInput() {
    return this._monitorHttpVersion;
  }

  // monitor_id - computed: true, optional: false, required: false
  public get monitorId() {
    return this.getStringAttribute('monitor_id');
  }

  // monitor_interval_sec - computed: false, optional: false, required: true
  private _monitorIntervalSec?: number; 
  public get monitorIntervalSec() {
    return this.getNumberAttribute('monitor_interval_sec');
  }
  public set monitorIntervalSec(value: number) {
    this._monitorIntervalSec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorIntervalSecInput() {
    return this._monitorIntervalSec;
  }

  // monitor_port - computed: false, optional: false, required: true
  private _monitorPort?: number; 
  public get monitorPort() {
    return this.getNumberAttribute('monitor_port');
  }
  public set monitorPort(value: number) {
    this._monitorPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorPortInput() {
    return this._monitorPort;
  }

  // monitor_protocol - computed: false, optional: false, required: true
  private _monitorProtocol?: string; 
  public get monitorProtocol() {
    return this.getStringAttribute('monitor_protocol');
  }
  public set monitorProtocol(value: string) {
    this._monitorProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorProtocolInput() {
    return this._monitorProtocol;
  }

  // monitor_timeout_sec - computed: false, optional: false, required: true
  private _monitorTimeoutSec?: number; 
  public get monitorTimeoutSec() {
    return this.getNumberAttribute('monitor_timeout_sec');
  }
  public set monitorTimeoutSec(value: number) {
    this._monitorTimeoutSec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTimeoutSecInput() {
    return this._monitorTimeoutSec;
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

  // server_group_member - computed: false, optional: true, required: false
  private _serverGroupMember = new LbServerGroupServerGroupMemberList(this, "server_group_member", false);
  public get serverGroupMember() {
    return this._serverGroupMember;
  }
  public putServerGroupMember(value: LbServerGroupServerGroupMember[] | cdktf.IResolvable) {
    this._serverGroupMember.internalValue = value;
  }
  public resetServerGroupMember() {
    this._serverGroupMember.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupMemberInput() {
    return this._serverGroupMember.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm: cdktf.stringToTerraform(this._algorithm),
      id: cdktf.stringToTerraform(this._id),
      lb_id: cdktf.stringToTerraform(this._lbId),
      monitor_count: cdktf.numberToTerraform(this._monitorCount),
      monitor_http_method: cdktf.stringToTerraform(this._monitorHttpMethod),
      monitor_http_request_body: cdktf.stringToTerraform(this._monitorHttpRequestBody),
      monitor_http_response_body: cdktf.stringToTerraform(this._monitorHttpResponseBody),
      monitor_http_url: cdktf.stringToTerraform(this._monitorHttpUrl),
      monitor_http_version: cdktf.stringToTerraform(this._monitorHttpVersion),
      monitor_interval_sec: cdktf.numberToTerraform(this._monitorIntervalSec),
      monitor_port: cdktf.numberToTerraform(this._monitorPort),
      monitor_protocol: cdktf.stringToTerraform(this._monitorProtocol),
      monitor_timeout_sec: cdktf.numberToTerraform(this._monitorTimeoutSec),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      server_group_member: cdktf.listMapper(lbServerGroupServerGroupMemberToTerraform, true)(this._serverGroupMember.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
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
      lb_id: {
        value: cdktf.stringToHclTerraform(this._lbId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_count: {
        value: cdktf.numberToHclTerraform(this._monitorCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_http_method: {
        value: cdktf.stringToHclTerraform(this._monitorHttpMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_http_request_body: {
        value: cdktf.stringToHclTerraform(this._monitorHttpRequestBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_http_response_body: {
        value: cdktf.stringToHclTerraform(this._monitorHttpResponseBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_http_url: {
        value: cdktf.stringToHclTerraform(this._monitorHttpUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_http_version: {
        value: cdktf.stringToHclTerraform(this._monitorHttpVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_interval_sec: {
        value: cdktf.numberToHclTerraform(this._monitorIntervalSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_port: {
        value: cdktf.numberToHclTerraform(this._monitorPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_protocol: {
        value: cdktf.stringToHclTerraform(this._monitorProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_timeout_sec: {
        value: cdktf.numberToHclTerraform(this._monitorTimeoutSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      server_group_member: {
        value: cdktf.listMapperHcl(lbServerGroupServerGroupMemberToHclTerraform, true)(this._serverGroupMember.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LbServerGroupServerGroupMemberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
