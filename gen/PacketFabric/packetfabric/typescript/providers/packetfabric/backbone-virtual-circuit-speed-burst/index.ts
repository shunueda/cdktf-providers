// https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit_speed_burst
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackboneVirtualCircuitSpeedBurstConfig extends cdktf.TerraformMetaArguments {
  /**
  * Speed in Mbps of the burst. This bandwidth will be added to the existing circuit speed. If an existing burst exists, this speed burst will replace the existing one. Must be a multiple of 100Mbps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit_speed_burst#speed BackboneVirtualCircuitSpeedBurst#speed}
  */
  readonly speed: string;
  /**
  * The circuit ID of the virtual circuit that you are bursting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit_speed_burst#vc_circuit_id BackboneVirtualCircuitSpeedBurst#vc_circuit_id}
  */
  readonly vcCircuitId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit_speed_burst#timeouts BackboneVirtualCircuitSpeedBurst#timeouts}
  */
  readonly timeouts?: BackboneVirtualCircuitSpeedBurstTimeouts;
}
export interface BackboneVirtualCircuitSpeedBurstTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit_speed_burst#create BackboneVirtualCircuitSpeedBurst#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit_speed_burst#delete BackboneVirtualCircuitSpeedBurst#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit_speed_burst#read BackboneVirtualCircuitSpeedBurst#read}
  */
  readonly read?: string;
}

export function backboneVirtualCircuitSpeedBurstTimeoutsToTerraform(struct?: BackboneVirtualCircuitSpeedBurstTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function backboneVirtualCircuitSpeedBurstTimeoutsToHclTerraform(struct?: BackboneVirtualCircuitSpeedBurstTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackboneVirtualCircuitSpeedBurstTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BackboneVirtualCircuitSpeedBurstTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackboneVirtualCircuitSpeedBurstTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit_speed_burst packetfabric_backbone_virtual_circuit_speed_burst}
*/
export class BackboneVirtualCircuitSpeedBurst extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packetfabric_backbone_virtual_circuit_speed_burst";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BackboneVirtualCircuitSpeedBurst resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BackboneVirtualCircuitSpeedBurst to import
  * @param importFromId The id of the existing BackboneVirtualCircuitSpeedBurst that should be imported. Refer to the {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit_speed_burst#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BackboneVirtualCircuitSpeedBurst to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packetfabric_backbone_virtual_circuit_speed_burst", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/backbone_virtual_circuit_speed_burst packetfabric_backbone_virtual_circuit_speed_burst} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackboneVirtualCircuitSpeedBurstConfig
  */
  public constructor(scope: Construct, id: string, config: BackboneVirtualCircuitSpeedBurstConfig) {
    super(scope, id, {
      terraformResourceType: 'packetfabric_backbone_virtual_circuit_speed_burst',
      terraformGeneratorMetadata: {
        providerName: 'packetfabric',
        providerVersion: '1.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._speed = config.speed;
    this._vcCircuitId = config.vcCircuitId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // speed - computed: false, optional: false, required: true
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // vc_circuit_id - computed: false, optional: false, required: true
  private _vcCircuitId?: string; 
  public get vcCircuitId() {
    return this.getStringAttribute('vc_circuit_id');
  }
  public set vcCircuitId(value: string) {
    this._vcCircuitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcCircuitIdInput() {
    return this._vcCircuitId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BackboneVirtualCircuitSpeedBurstTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BackboneVirtualCircuitSpeedBurstTimeouts) {
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
      speed: cdktf.stringToTerraform(this._speed),
      vc_circuit_id: cdktf.stringToTerraform(this._vcCircuitId),
      timeouts: backboneVirtualCircuitSpeedBurstTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      speed: {
        value: cdktf.stringToHclTerraform(this._speed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vc_circuit_id: {
        value: cdktf.stringToHclTerraform(this._vcCircuitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: backboneVirtualCircuitSpeedBurstTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BackboneVirtualCircuitSpeedBurstTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
