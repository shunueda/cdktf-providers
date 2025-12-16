// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_target#control_plane_id GatewayTarget#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_target#created_at GatewayTarget#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether to use this target only as backup or not. Default: false; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_target#failover GatewayTarget#failover}
  */
  readonly failover?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier). Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_target#id GatewayTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An optional set of strings associated with the Target for grouping and filtering. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_target#tags GatewayTarget#tags}
  */
  readonly tags?: string[];
  /**
  * The target address (ip or hostname) and port. If the hostname resolves to an SRV record, the `port` value will be overridden by the value from the DNS record. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_target#target GatewayTarget#target}
  */
  readonly target: string;
  /**
  * Unix epoch when the resource was last updated. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_target#updated_at GatewayTarget#updated_at}
  */
  readonly updatedAt?: number;
  /**
  * The unique identifier or the name of the upstream for which to update the target. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_target#upstream GatewayTarget#upstream}
  */
  readonly upstream?: GatewayTargetUpstream;
  /**
  * ID or target of the Target to lookup. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_target#upstream_id GatewayTarget#upstream_id}
  */
  readonly upstreamId: string;
  /**
  * The weight this target gets within the upstream loadbalancer (`0`-`65535`). If the hostname resolves to an SRV record, the `weight` value will be overridden by the value from the DNS record. Default: 100; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_target#weight GatewayTarget#weight}
  */
  readonly weight?: number;
}
export interface GatewayTargetUpstream {
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_target#id GatewayTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayTargetUpstreamToTerraform(struct?: GatewayTargetUpstream | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayTargetUpstreamToHclTerraform(struct?: GatewayTargetUpstream | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayTargetUpstreamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayTargetUpstream | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayTargetUpstream | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_target konnect_gateway_target}
*/
export class GatewayTarget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayTarget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayTarget to import
  * @param importFromId The id of the existing GatewayTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_target konnect_gateway_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayTargetConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_target',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._controlPlaneId = config.controlPlaneId;
    this._createdAt = config.createdAt;
    this._failover = config.failover;
    this._id = config.id;
    this._tags = config.tags;
    this._target = config.target;
    this._updatedAt = config.updatedAt;
    this._upstream.internalValue = config.upstream;
    this._upstreamId = config.upstreamId;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // control_plane_id - computed: false, optional: false, required: true
  private _controlPlaneId?: string; 
  public get controlPlaneId() {
    return this.getStringAttribute('control_plane_id');
  }
  public set controlPlaneId(value: string) {
    this._controlPlaneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneIdInput() {
    return this._controlPlaneId;
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: number; 
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }
  public set createdAt(value: number) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // failover - computed: true, optional: true, required: false
  private _failover?: boolean | cdktf.IResolvable; 
  public get failover() {
    return this.getBooleanAttribute('failover');
  }
  public set failover(value: boolean | cdktf.IResolvable) {
    this._failover = value;
  }
  public resetFailover() {
    this._failover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverInput() {
    return this._failover;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: number; 
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }
  public set updatedAt(value: number) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // upstream - computed: true, optional: true, required: false
  private _upstream = new GatewayTargetUpstreamOutputReference(this, "upstream");
  public get upstream() {
    return this._upstream;
  }
  public putUpstream(value: GatewayTargetUpstream) {
    this._upstream.internalValue = value;
  }
  public resetUpstream() {
    this._upstream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamInput() {
    return this._upstream.internalValue;
  }

  // upstream_id - computed: false, optional: false, required: true
  private _upstreamId?: string; 
  public get upstreamId() {
    return this.getStringAttribute('upstream_id');
  }
  public set upstreamId(value: string) {
    this._upstreamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamIdInput() {
    return this._upstreamId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      failover: cdktf.booleanToTerraform(this._failover),
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      target: cdktf.stringToTerraform(this._target),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
      upstream: gatewayTargetUpstreamToTerraform(this._upstream.internalValue),
      upstream_id: cdktf.stringToTerraform(this._upstreamId),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      control_plane_id: {
        value: cdktf.stringToHclTerraform(this._controlPlaneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_at: {
        value: cdktf.numberToHclTerraform(this._createdAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failover: {
        value: cdktf.booleanToHclTerraform(this._failover),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updated_at: {
        value: cdktf.numberToHclTerraform(this._updatedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      upstream: {
        value: gatewayTargetUpstreamToHclTerraform(this._upstream.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayTargetUpstream",
      },
      upstream_id: {
        value: cdktf.stringToHclTerraform(this._upstreamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
