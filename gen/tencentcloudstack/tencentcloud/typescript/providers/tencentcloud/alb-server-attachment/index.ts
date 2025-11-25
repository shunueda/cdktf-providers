// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/alb_server_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlbServerAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/alb_server_attachment#id AlbServerAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * listener ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/alb_server_attachment#listener_id AlbServerAttachment#listener_id}
  */
  readonly listenerId: string;
  /**
  * loadbalancer ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/alb_server_attachment#loadbalancer_id AlbServerAttachment#loadbalancer_id}
  */
  readonly loadbalancerId: string;
  /**
  * location ID, only support for layer 7 loadbalancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/alb_server_attachment#location_id AlbServerAttachment#location_id}
  */
  readonly locationId?: string;
  /**
  * backends block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/alb_server_attachment#backends AlbServerAttachment#backends}
  */
  readonly backends: AlbServerAttachmentBackends[] | cdktf.IResolvable;
}
export interface AlbServerAttachmentBackends {
  /**
  * A list backend instance ID (CVM instance ID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/alb_server_attachment#instance_id AlbServerAttachment#instance_id}
  */
  readonly instanceId: string;
  /**
  * The port used by the backend server. Valid value range: [1-65535].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/alb_server_attachment#port AlbServerAttachment#port}
  */
  readonly port: number;
  /**
  * Weight of the backend server. Valid value range: [0-100]. Default to 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/alb_server_attachment#weight AlbServerAttachment#weight}
  */
  readonly weight?: number;
}

export function albServerAttachmentBackendsToTerraform(struct?: AlbServerAttachmentBackends | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    port: cdktf.numberToTerraform(struct!.port),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function albServerAttachmentBackendsToHclTerraform(struct?: AlbServerAttachmentBackends | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class AlbServerAttachmentBackendsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbServerAttachmentBackends | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbServerAttachmentBackends | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._port = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._port = value.port;
      this._weight = value.weight;
    }
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class AlbServerAttachmentBackendsList extends cdktf.ComplexList {
  public internalValue? : AlbServerAttachmentBackends[] | cdktf.IResolvable

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
  public get(index: number): AlbServerAttachmentBackendsOutputReference {
    return new AlbServerAttachmentBackendsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/alb_server_attachment tencentcloud_alb_server_attachment}
*/
export class AlbServerAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_alb_server_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlbServerAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlbServerAttachment to import
  * @param importFromId The id of the existing AlbServerAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/alb_server_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlbServerAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_alb_server_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/alb_server_attachment tencentcloud_alb_server_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlbServerAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: AlbServerAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_alb_server_attachment',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
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
    this._listenerId = config.listenerId;
    this._loadbalancerId = config.loadbalancerId;
    this._locationId = config.locationId;
    this._backends.internalValue = config.backends;
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

  // listener_id - computed: false, optional: false, required: true
  private _listenerId?: string; 
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }
  public set listenerId(value: string) {
    this._listenerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIdInput() {
    return this._listenerId;
  }

  // loadbalancer_id - computed: false, optional: false, required: true
  private _loadbalancerId?: string; 
  public get loadbalancerId() {
    return this.getStringAttribute('loadbalancer_id');
  }
  public set loadbalancerId(value: string) {
    this._loadbalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerIdInput() {
    return this._loadbalancerId;
  }

  // location_id - computed: true, optional: true, required: false
  private _locationId?: string; 
  public get locationId() {
    return this.getStringAttribute('location_id');
  }
  public set locationId(value: string) {
    this._locationId = value;
  }
  public resetLocationId() {
    this._locationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
  }

  // protocol_type - computed: true, optional: false, required: false
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }

  // backends - computed: false, optional: false, required: true
  private _backends = new AlbServerAttachmentBackendsList(this, "backends", true);
  public get backends() {
    return this._backends;
  }
  public putBackends(value: AlbServerAttachmentBackends[] | cdktf.IResolvable) {
    this._backends.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendsInput() {
    return this._backends.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      listener_id: cdktf.stringToTerraform(this._listenerId),
      loadbalancer_id: cdktf.stringToTerraform(this._loadbalancerId),
      location_id: cdktf.stringToTerraform(this._locationId),
      backends: cdktf.listMapper(albServerAttachmentBackendsToTerraform, true)(this._backends.internalValue),
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
      listener_id: {
        value: cdktf.stringToHclTerraform(this._listenerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loadbalancer_id: {
        value: cdktf.stringToHclTerraform(this._loadbalancerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location_id: {
        value: cdktf.stringToHclTerraform(this._locationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backends: {
        value: cdktf.listMapperHcl(albServerAttachmentBackendsToHclTerraform, true)(this._backends.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlbServerAttachmentBackendsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
