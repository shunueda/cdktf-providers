// https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/clos
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClosConfig extends cdktf.TerraformMetaArguments {
  /**
  * Container name for leaf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/clos#cv_container_name Clos#cv_container_name}
  */
  readonly cvContainerName?: string;
  /**
  * full_mesh or hub_spoke
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/clos#fabric Clos#fabric}
  */
  readonly fabric?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/clos#id Clos#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/clos#leaf_encryption Clos#leaf_encryption}
  */
  readonly leafEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/clos#leaf_to_edge_igw Clos#leaf_to_edge_igw}
  */
  readonly leafToEdgeIgw?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/clos#leaf_to_edge_peering Clos#leaf_to_edge_peering}
  */
  readonly leafToEdgePeering?: boolean | cdktf.IResolvable;
  /**
  * Clos topology name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/clos#name Clos#name}
  */
  readonly name: string;
  /**
  * Base topology name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/clos#topology_name Clos#topology_name}
  */
  readonly topologyName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/clos#timeouts Clos#timeouts}
  */
  readonly timeouts?: ClosTimeouts;
}
export interface ClosTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/clos#delete Clos#delete}
  */
  readonly delete?: string;
}

export function closTimeoutsToTerraform(struct?: ClosTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function closTimeoutsToHclTerraform(struct?: ClosTimeouts | cdktf.IResolvable): any {
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

export class ClosTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClosTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClosTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/clos cloudeos_clos}
*/
export class Clos extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudeos_clos";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Clos resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Clos to import
  * @param importFromId The id of the existing Clos that should be imported. Refer to the {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/clos#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Clos to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudeos_clos", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/clos cloudeos_clos} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClosConfig
  */
  public constructor(scope: Construct, id: string, config: ClosConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudeos_clos',
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
    this._fabric = config.fabric;
    this._id = config.id;
    this._leafEncryption = config.leafEncryption;
    this._leafToEdgeIgw = config.leafToEdgeIgw;
    this._leafToEdgePeering = config.leafToEdgePeering;
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

  // fabric - computed: false, optional: true, required: false
  private _fabric?: string; 
  public get fabric() {
    return this.getStringAttribute('fabric');
  }
  public set fabric(value: string) {
    this._fabric = value;
  }
  public resetFabric() {
    this._fabric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricInput() {
    return this._fabric;
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

  // leaf_encryption - computed: false, optional: true, required: false
  private _leafEncryption?: boolean | cdktf.IResolvable; 
  public get leafEncryption() {
    return this.getBooleanAttribute('leaf_encryption');
  }
  public set leafEncryption(value: boolean | cdktf.IResolvable) {
    this._leafEncryption = value;
  }
  public resetLeafEncryption() {
    this._leafEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leafEncryptionInput() {
    return this._leafEncryption;
  }

  // leaf_to_edge_igw - computed: false, optional: true, required: false
  private _leafToEdgeIgw?: boolean | cdktf.IResolvable; 
  public get leafToEdgeIgw() {
    return this.getBooleanAttribute('leaf_to_edge_igw');
  }
  public set leafToEdgeIgw(value: boolean | cdktf.IResolvable) {
    this._leafToEdgeIgw = value;
  }
  public resetLeafToEdgeIgw() {
    this._leafToEdgeIgw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leafToEdgeIgwInput() {
    return this._leafToEdgeIgw;
  }

  // leaf_to_edge_peering - computed: false, optional: true, required: false
  private _leafToEdgePeering?: boolean | cdktf.IResolvable; 
  public get leafToEdgePeering() {
    return this.getBooleanAttribute('leaf_to_edge_peering');
  }
  public set leafToEdgePeering(value: boolean | cdktf.IResolvable) {
    this._leafToEdgePeering = value;
  }
  public resetLeafToEdgePeering() {
    this._leafToEdgePeering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leafToEdgePeeringInput() {
    return this._leafToEdgePeering;
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
  private _timeouts = new ClosTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClosTimeouts) {
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
      fabric: cdktf.stringToTerraform(this._fabric),
      id: cdktf.stringToTerraform(this._id),
      leaf_encryption: cdktf.booleanToTerraform(this._leafEncryption),
      leaf_to_edge_igw: cdktf.booleanToTerraform(this._leafToEdgeIgw),
      leaf_to_edge_peering: cdktf.booleanToTerraform(this._leafToEdgePeering),
      name: cdktf.stringToTerraform(this._name),
      topology_name: cdktf.stringToTerraform(this._topologyName),
      timeouts: closTimeoutsToTerraform(this._timeouts.internalValue),
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
      fabric: {
        value: cdktf.stringToHclTerraform(this._fabric),
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
      leaf_encryption: {
        value: cdktf.booleanToHclTerraform(this._leafEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      leaf_to_edge_igw: {
        value: cdktf.booleanToHclTerraform(this._leafToEdgeIgw),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      leaf_to_edge_peering: {
        value: cdktf.booleanToHclTerraform(this._leafToEdgePeering),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
        value: closTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClosTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
