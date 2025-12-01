// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/expressconnect_bgp_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExpressconnectBgpGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/expressconnect_bgp_group#auth_key ExpressconnectBgpGroup#auth_key}
  */
  readonly authKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/expressconnect_bgp_group#bgp_group_id ExpressconnectBgpGroup#bgp_group_id}
  */
  readonly bgpGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/expressconnect_bgp_group#bgp_group_name ExpressconnectBgpGroup#bgp_group_name}
  */
  readonly bgpGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/expressconnect_bgp_group#description ExpressconnectBgpGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/expressconnect_bgp_group#id ExpressconnectBgpGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/expressconnect_bgp_group#ip_version ExpressconnectBgpGroup#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/expressconnect_bgp_group#local_asn ExpressconnectBgpGroup#local_asn}
  */
  readonly localAsn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/expressconnect_bgp_group#peer_asn ExpressconnectBgpGroup#peer_asn}
  */
  readonly peerAsn: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/expressconnect_bgp_group#router_id ExpressconnectBgpGroup#router_id}
  */
  readonly routerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/expressconnect_bgp_group#status ExpressconnectBgpGroup#status}
  */
  readonly status?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/expressconnect_bgp_group#timeouts ExpressconnectBgpGroup#timeouts}
  */
  readonly timeouts?: ExpressconnectBgpGroupTimeouts;
}
export interface ExpressconnectBgpGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/expressconnect_bgp_group#create ExpressconnectBgpGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/expressconnect_bgp_group#delete ExpressconnectBgpGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/expressconnect_bgp_group#update ExpressconnectBgpGroup#update}
  */
  readonly update?: string;
}

export function expressconnectBgpGroupTimeoutsToTerraform(struct?: ExpressconnectBgpGroupTimeouts | cdktf.IResolvable): any {
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


export function expressconnectBgpGroupTimeoutsToHclTerraform(struct?: ExpressconnectBgpGroupTimeouts | cdktf.IResolvable): any {
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

export class ExpressconnectBgpGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExpressconnectBgpGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ExpressconnectBgpGroupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/expressconnect_bgp_group alibabacloudstack_expressconnect_bgp_group}
*/
export class ExpressconnectBgpGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_expressconnect_bgp_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExpressconnectBgpGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExpressconnectBgpGroup to import
  * @param importFromId The id of the existing ExpressconnectBgpGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/expressconnect_bgp_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExpressconnectBgpGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_expressconnect_bgp_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/expressconnect_bgp_group alibabacloudstack_expressconnect_bgp_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExpressconnectBgpGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ExpressconnectBgpGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_expressconnect_bgp_group',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authKey = config.authKey;
    this._bgpGroupId = config.bgpGroupId;
    this._bgpGroupName = config.bgpGroupName;
    this._description = config.description;
    this._id = config.id;
    this._ipVersion = config.ipVersion;
    this._localAsn = config.localAsn;
    this._peerAsn = config.peerAsn;
    this._routerId = config.routerId;
    this._status = config.status;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_key - computed: false, optional: true, required: false
  private _authKey?: string; 
  public get authKey() {
    return this.getStringAttribute('auth_key');
  }
  public set authKey(value: string) {
    this._authKey = value;
  }
  public resetAuthKey() {
    this._authKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyInput() {
    return this._authKey;
  }

  // bgp_group_id - computed: true, optional: true, required: false
  private _bgpGroupId?: string; 
  public get bgpGroupId() {
    return this.getStringAttribute('bgp_group_id');
  }
  public set bgpGroupId(value: string) {
    this._bgpGroupId = value;
  }
  public resetBgpGroupId() {
    this._bgpGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpGroupIdInput() {
    return this._bgpGroupId;
  }

  // bgp_group_name - computed: false, optional: true, required: false
  private _bgpGroupName?: string; 
  public get bgpGroupName() {
    return this.getStringAttribute('bgp_group_name');
  }
  public set bgpGroupName(value: string) {
    this._bgpGroupName = value;
  }
  public resetBgpGroupName() {
    this._bgpGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpGroupNameInput() {
    return this._bgpGroupName;
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

  // hold - computed: true, optional: false, required: false
  public get hold() {
    return this.getNumberAttribute('hold');
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

  // ip_version - computed: true, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // is_fake - computed: true, optional: false, required: false
  public get isFake() {
    return this.getBooleanAttribute('is_fake');
  }

  // keepalive - computed: true, optional: false, required: false
  public get keepalive() {
    return this.getNumberAttribute('keepalive');
  }

  // local_asn - computed: false, optional: true, required: false
  private _localAsn?: number; 
  public get localAsn() {
    return this.getNumberAttribute('local_asn');
  }
  public set localAsn(value: number) {
    this._localAsn = value;
  }
  public resetLocalAsn() {
    this._localAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsnInput() {
    return this._localAsn;
  }

  // peer_asn - computed: false, optional: false, required: true
  private _peerAsn?: number; 
  public get peerAsn() {
    return this.getNumberAttribute('peer_asn');
  }
  public set peerAsn(value: number) {
    this._peerAsn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAsnInput() {
    return this._peerAsn;
  }

  // route_limit - computed: true, optional: false, required: false
  public get routeLimit() {
    return this.getNumberAttribute('route_limit');
  }

  // router_id - computed: false, optional: false, required: true
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ExpressconnectBgpGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ExpressconnectBgpGroupTimeouts) {
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
      auth_key: cdktf.stringToTerraform(this._authKey),
      bgp_group_id: cdktf.stringToTerraform(this._bgpGroupId),
      bgp_group_name: cdktf.stringToTerraform(this._bgpGroupName),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      local_asn: cdktf.numberToTerraform(this._localAsn),
      peer_asn: cdktf.numberToTerraform(this._peerAsn),
      router_id: cdktf.stringToTerraform(this._routerId),
      status: cdktf.stringToTerraform(this._status),
      timeouts: expressconnectBgpGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_key: {
        value: cdktf.stringToHclTerraform(this._authKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_group_id: {
        value: cdktf.stringToHclTerraform(this._bgpGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_group_name: {
        value: cdktf.stringToHclTerraform(this._bgpGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      ip_version: {
        value: cdktf.stringToHclTerraform(this._ipVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_asn: {
        value: cdktf.numberToHclTerraform(this._localAsn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      peer_asn: {
        value: cdktf.numberToHclTerraform(this._peerAsn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      router_id: {
        value: cdktf.stringToHclTerraform(this._routerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: expressconnectBgpGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ExpressconnectBgpGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
