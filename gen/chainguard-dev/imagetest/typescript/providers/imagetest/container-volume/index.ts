// https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/container_volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerVolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The inventory this volume belongs to. This is received as a direct input from a data.imagetest_inventory data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/container_volume#inventory ContainerVolume#inventory}
  */
  readonly inventory: ContainerVolumeInventory;
  /**
  * A name for this volume resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/container_volume#name ContainerVolume#name}
  */
  readonly name: string;
}
export interface ContainerVolumeInventory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/container_volume#seed ContainerVolume#seed}
  */
  readonly seed: string;
}

export function containerVolumeInventoryToTerraform(struct?: ContainerVolumeInventory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    seed: cdktf.stringToTerraform(struct!.seed),
  }
}


export function containerVolumeInventoryToHclTerraform(struct?: ContainerVolumeInventory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    seed: {
      value: cdktf.stringToHclTerraform(struct!.seed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerVolumeInventoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ContainerVolumeInventory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seed !== undefined) {
      hasAnyValues = true;
      internalValueResult.seed = this._seed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerVolumeInventory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seed = value.seed;
    }
  }

  // seed - computed: false, optional: false, required: true
  private _seed?: string; 
  public get seed() {
    return this.getStringAttribute('seed');
  }
  public set seed(value: string) {
    this._seed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seedInput() {
    return this._seed;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/container_volume imagetest_container_volume}
*/
export class ContainerVolume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "imagetest_container_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContainerVolume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContainerVolume to import
  * @param importFromId The id of the existing ContainerVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/container_volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContainerVolume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "imagetest_container_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.109/docs/resources/container_volume imagetest_container_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerVolumeConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'imagetest_container_volume',
      terraformGeneratorMetadata: {
        providerName: 'imagetest',
        providerVersion: '0.0.109',
        providerVersionConstraint: '0.0.109'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._inventory.internalValue = config.inventory;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inventory - computed: false, optional: false, required: true
  private _inventory = new ContainerVolumeInventoryOutputReference(this, "inventory");
  public get inventory() {
    return this._inventory;
  }
  public putInventory(value: ContainerVolumeInventory) {
    this._inventory.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryInput() {
    return this._inventory.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      inventory: containerVolumeInventoryToTerraform(this._inventory.internalValue),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      inventory: {
        value: containerVolumeInventoryToHclTerraform(this._inventory.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ContainerVolumeInventory",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
