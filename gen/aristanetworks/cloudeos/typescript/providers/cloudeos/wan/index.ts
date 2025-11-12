// https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/wan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Container name for edge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/wan#cv_container_name Wan#cv_container_name}
  */
  readonly cvContainerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/wan#edge_to_edge_dedicated_connect Wan#edge_to_edge_dedicated_connect}
  */
  readonly edgeToEdgeDedicatedConnect?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/wan#edge_to_edge_igw Wan#edge_to_edge_igw}
  */
  readonly edgeToEdgeIgw?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/wan#edge_to_edge_peering Wan#edge_to_edge_peering}
  */
  readonly edgeToEdgePeering?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/wan#id Wan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Wan fabric name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/wan#name Wan#name}
  */
  readonly name: string;
  /**
  * Base topology name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/wan#topology_name Wan#topology_name}
  */
  readonly topologyName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/wan#timeouts Wan#timeouts}
  */
  readonly timeouts?: WanTimeouts;
}
export interface WanTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/wan#delete Wan#delete}
  */
  readonly delete?: string;
}

export function wanTimeoutsToTerraform(struct?: WanTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function wanTimeoutsToHclTerraform(struct?: WanTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WanTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WanTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WanTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delete = value.delete;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/wan cloudeos_wan}
*/
export class Wan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudeos_wan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Wan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Wan to import
  * @param importFromId The id of the existing Wan that should be imported. Refer to the {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/wan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Wan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudeos_wan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/wan cloudeos_wan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WanConfig
  */
  public constructor(scope: Construct, id: string, config: WanConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudeos_wan',
      terraformGeneratorMetadata: {
        providerName: 'cloudeos',
        providerVersion: '1.2.2',
        providerVersionConstraint: '1.2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cvContainerName = config.cvContainerName;
    this._edgeToEdgeDedicatedConnect = config.edgeToEdgeDedicatedConnect;
    this._edgeToEdgeIgw = config.edgeToEdgeIgw;
    this._edgeToEdgePeering = config.edgeToEdgePeering;
    this._id = config.id;
    this._name = config.name;
    this._topologyName = config.topologyName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cv_container_name - computed: false, optional: true, required: false
  private _cvContainerName?: string; 
  public get cvContainerName() {
    return this.getStringAttribute('cv_container_name');
  }
  public set cvContainerName(value: string) {
    this._cvContainerName = value;
  }
  public resetCvContainerName() {
    this._cvContainerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvContainerNameInput() {
    return this._cvContainerName;
  }

  // edge_to_edge_dedicated_connect - computed: false, optional: true, required: false
  private _edgeToEdgeDedicatedConnect?: boolean | cdktf.IResolvable; 
  public get edgeToEdgeDedicatedConnect() {
    return this.getBooleanAttribute('edge_to_edge_dedicated_connect');
  }
  public set edgeToEdgeDedicatedConnect(value: boolean | cdktf.IResolvable) {
    this._edgeToEdgeDedicatedConnect = value;
  }
  public resetEdgeToEdgeDedicatedConnect() {
    this._edgeToEdgeDedicatedConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeToEdgeDedicatedConnectInput() {
    return this._edgeToEdgeDedicatedConnect;
  }

  // edge_to_edge_igw - computed: false, optional: true, required: false
  private _edgeToEdgeIgw?: boolean | cdktf.IResolvable; 
  public get edgeToEdgeIgw() {
    return this.getBooleanAttribute('edge_to_edge_igw');
  }
  public set edgeToEdgeIgw(value: boolean | cdktf.IResolvable) {
    this._edgeToEdgeIgw = value;
  }
  public resetEdgeToEdgeIgw() {
    this._edgeToEdgeIgw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeToEdgeIgwInput() {
    return this._edgeToEdgeIgw;
  }

  // edge_to_edge_peering - computed: false, optional: true, required: false
  private _edgeToEdgePeering?: boolean | cdktf.IResolvable; 
  public get edgeToEdgePeering() {
    return this.getBooleanAttribute('edge_to_edge_peering');
  }
  public set edgeToEdgePeering(value: boolean | cdktf.IResolvable) {
    this._edgeToEdgePeering = value;
  }
  public resetEdgeToEdgePeering() {
    this._edgeToEdgePeering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeToEdgePeeringInput() {
    return this._edgeToEdgePeering;
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

  // tf_id - computed: true, optional: false, required: false
  public get tfId() {
    return this.getStringAttribute('tf_id');
  }

  // topology_name - computed: false, optional: false, required: true
  private _topologyName?: string; 
  public get topologyName() {
    return this.getStringAttribute('topology_name');
  }
  public set topologyName(value: string) {
    this._topologyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyNameInput() {
    return this._topologyName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WanTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WanTimeouts) {
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
      cv_container_name: cdktf.stringToTerraform(this._cvContainerName),
      edge_to_edge_dedicated_connect: cdktf.booleanToTerraform(this._edgeToEdgeDedicatedConnect),
      edge_to_edge_igw: cdktf.booleanToTerraform(this._edgeToEdgeIgw),
      edge_to_edge_peering: cdktf.booleanToTerraform(this._edgeToEdgePeering),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      topology_name: cdktf.stringToTerraform(this._topologyName),
      timeouts: wanTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cv_container_name: {
        value: cdktf.stringToHclTerraform(this._cvContainerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_to_edge_dedicated_connect: {
        value: cdktf.booleanToHclTerraform(this._edgeToEdgeDedicatedConnect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      edge_to_edge_igw: {
        value: cdktf.booleanToHclTerraform(this._edgeToEdgeIgw),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      edge_to_edge_peering: {
        value: cdktf.booleanToHclTerraform(this._edgeToEdgePeering),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topology_name: {
        value: cdktf.stringToHclTerraform(this._topologyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: wanTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WanTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
