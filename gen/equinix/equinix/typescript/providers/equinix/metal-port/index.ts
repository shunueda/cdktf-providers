// https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetalPortConfig extends cdktf.TerraformMetaArguments {
  /**
  * Flag indicating whether the port should be bonded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_port#bonded MetalPort#bonded}
  */
  readonly bonded: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_port#id MetalPort#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Flag indicating whether the port is in layer2 (or layer3) mode. The `layer2` flag can be set only for bond ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_port#layer2 MetalPort#layer2}
  */
  readonly layer2?: boolean | cdktf.IResolvable;
  /**
  * UUID of native VLAN of the port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_port#native_vlan_id MetalPort#native_vlan_id}
  */
  readonly nativeVlanId?: string;
  /**
  * UUID of the port to lookup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_port#port_id MetalPort#port_id}
  */
  readonly portId: string;
  /**
  * Behavioral setting to reset the port to default settings (layer3 bonded mode without any vlan attached) before delete/destroy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_port#reset_on_delete MetalPort#reset_on_delete}
  */
  readonly resetOnDelete?: boolean | cdktf.IResolvable;
  /**
  * UUIDs VLANs to attach. To avoid jitter, use the UUID and not the VXLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_port#vlan_ids MetalPort#vlan_ids}
  */
  readonly vlanIds?: string[];
  /**
  * VLAN VXLAN ids to attach (example: [1000])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_port#vxlan_ids MetalPort#vxlan_ids}
  */
  readonly vxlanIds?: number[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_port#timeouts MetalPort#timeouts}
  */
  readonly timeouts?: MetalPortTimeouts;
}
export interface MetalPortTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_port#create MetalPort#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_port#delete MetalPort#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_port#update MetalPort#update}
  */
  readonly update?: string;
}

export function metalPortTimeoutsToTerraform(struct?: MetalPortTimeouts | cdktf.IResolvable): any {
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


export function metalPortTimeoutsToHclTerraform(struct?: MetalPortTimeouts | cdktf.IResolvable): any {
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

export class MetalPortTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MetalPortTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MetalPortTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_port equinix_metal_port}
*/
export class MetalPort extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_metal_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetalPort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetalPort to import
  * @param importFromId The id of the existing MetalPort that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetalPort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_metal_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_port equinix_metal_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetalPortConfig
  */
  public constructor(scope: Construct, id: string, config: MetalPortConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_metal_port',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.11.1',
        providerVersionConstraint: '4.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bonded = config.bonded;
    this._id = config.id;
    this._layer2 = config.layer2;
    this._nativeVlanId = config.nativeVlanId;
    this._portId = config.portId;
    this._resetOnDelete = config.resetOnDelete;
    this._vlanIds = config.vlanIds;
    this._vxlanIds = config.vxlanIds;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bond_id - computed: true, optional: false, required: false
  public get bondId() {
    return this.getStringAttribute('bond_id');
  }

  // bond_name - computed: true, optional: false, required: false
  public get bondName() {
    return this.getStringAttribute('bond_name');
  }

  // bonded - computed: false, optional: false, required: true
  private _bonded?: boolean | cdktf.IResolvable; 
  public get bonded() {
    return this.getBooleanAttribute('bonded');
  }
  public set bonded(value: boolean | cdktf.IResolvable) {
    this._bonded = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bondedInput() {
    return this._bonded;
  }

  // disbond_supported - computed: true, optional: false, required: false
  public get disbondSupported() {
    return this.getBooleanAttribute('disbond_supported');
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

  // layer2 - computed: false, optional: true, required: false
  private _layer2?: boolean | cdktf.IResolvable; 
  public get layer2() {
    return this.getBooleanAttribute('layer2');
  }
  public set layer2(value: boolean | cdktf.IResolvable) {
    this._layer2 = value;
  }
  public resetLayer2() {
    this._layer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layer2Input() {
    return this._layer2;
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // native_vlan_id - computed: false, optional: true, required: false
  private _nativeVlanId?: string; 
  public get nativeVlanId() {
    return this.getStringAttribute('native_vlan_id');
  }
  public set nativeVlanId(value: string) {
    this._nativeVlanId = value;
  }
  public resetNativeVlanId() {
    this._nativeVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeVlanIdInput() {
    return this._nativeVlanId;
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // port_id - computed: false, optional: false, required: true
  private _portId?: string; 
  public get portId() {
    return this.getStringAttribute('port_id');
  }
  public set portId(value: string) {
    this._portId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portIdInput() {
    return this._portId;
  }

  // reset_on_delete - computed: false, optional: true, required: false
  private _resetOnDelete?: boolean | cdktf.IResolvable; 
  public get resetOnDelete() {
    return this.getBooleanAttribute('reset_on_delete');
  }
  public set resetOnDelete(value: boolean | cdktf.IResolvable) {
    this._resetOnDelete = value;
  }
  public resetResetOnDelete() {
    this._resetOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetOnDeleteInput() {
    return this._resetOnDelete;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vlan_ids - computed: true, optional: true, required: false
  private _vlanIds?: string[]; 
  public get vlanIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vlan_ids'));
  }
  public set vlanIds(value: string[]) {
    this._vlanIds = value;
  }
  public resetVlanIds() {
    this._vlanIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdsInput() {
    return this._vlanIds;
  }

  // vxlan_ids - computed: true, optional: true, required: false
  private _vxlanIds?: number[]; 
  public get vxlanIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('vxlan_ids')));
  }
  public set vxlanIds(value: number[]) {
    this._vxlanIds = value;
  }
  public resetVxlanIds() {
    this._vxlanIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanIdsInput() {
    return this._vxlanIds;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MetalPortTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MetalPortTimeouts) {
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
      bonded: cdktf.booleanToTerraform(this._bonded),
      id: cdktf.stringToTerraform(this._id),
      layer2: cdktf.booleanToTerraform(this._layer2),
      native_vlan_id: cdktf.stringToTerraform(this._nativeVlanId),
      port_id: cdktf.stringToTerraform(this._portId),
      reset_on_delete: cdktf.booleanToTerraform(this._resetOnDelete),
      vlan_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vlanIds),
      vxlan_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._vxlanIds),
      timeouts: metalPortTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bonded: {
        value: cdktf.booleanToHclTerraform(this._bonded),
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
      layer2: {
        value: cdktf.booleanToHclTerraform(this._layer2),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      native_vlan_id: {
        value: cdktf.stringToHclTerraform(this._nativeVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_id: {
        value: cdktf.stringToHclTerraform(this._portId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reset_on_delete: {
        value: cdktf.booleanToHclTerraform(this._resetOnDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vlan_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vlanIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vxlan_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._vxlanIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      timeouts: {
        value: metalPortTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MetalPortTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
