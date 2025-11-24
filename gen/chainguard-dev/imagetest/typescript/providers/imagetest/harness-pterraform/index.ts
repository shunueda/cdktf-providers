// https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.104/docs/resources/harness_pterraform
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HarnessPterraformConfig extends cdktf.TerraformMetaArguments {
  /**
  * The inventory this harness belongs to. This is received as a direct input from a data.imagetest_inventory data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.104/docs/resources/harness_pterraform#inventory HarnessPterraform#inventory}
  */
  readonly inventory: HarnessPterraformInventory;
  /**
  * The name of the harness. This must be unique within the scope of the provided inventory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.104/docs/resources/harness_pterraform#name HarnessPterraform#name}
  */
  readonly name: string;
  /**
  * The path to the terraform source directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.104/docs/resources/harness_pterraform#path HarnessPterraform#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.104/docs/resources/harness_pterraform#timeouts HarnessPterraform#timeouts}
  */
  readonly timeouts?: HarnessPterraformTimeouts;
  /**
  * A json encoded string of variables to pass to the terraform invocation. This will be passed in as a .tfvars.json var file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.104/docs/resources/harness_pterraform#vars HarnessPterraform#vars}
  */
  readonly vars?: string;
}
export interface HarnessPterraformInventory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.104/docs/resources/harness_pterraform#seed HarnessPterraform#seed}
  */
  readonly seed: string;
}

export function harnessPterraformInventoryToTerraform(struct?: HarnessPterraformInventory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    seed: cdktf.stringToTerraform(struct!.seed),
  }
}


export function harnessPterraformInventoryToHclTerraform(struct?: HarnessPterraformInventory | cdktf.IResolvable): any {
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

export class HarnessPterraformInventoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HarnessPterraformInventory | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HarnessPterraformInventory | cdktf.IResolvable | undefined) {
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
export interface HarnessPterraformTimeouts {
  /**
  * The maximum time to wait for the k3s harness to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.104/docs/resources/harness_pterraform#create HarnessPterraform#create}
  */
  readonly create?: string;
}

export function harnessPterraformTimeoutsToTerraform(struct?: HarnessPterraformTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function harnessPterraformTimeoutsToHclTerraform(struct?: HarnessPterraformTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HarnessPterraformTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HarnessPterraformTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HarnessPterraformTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.104/docs/resources/harness_pterraform imagetest_harness_pterraform}
*/
export class HarnessPterraform extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "imagetest_harness_pterraform";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HarnessPterraform resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HarnessPterraform to import
  * @param importFromId The id of the existing HarnessPterraform that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.104/docs/resources/harness_pterraform#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HarnessPterraform to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "imagetest_harness_pterraform", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.104/docs/resources/harness_pterraform imagetest_harness_pterraform} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HarnessPterraformConfig
  */
  public constructor(scope: Construct, id: string, config: HarnessPterraformConfig) {
    super(scope, id, {
      terraformResourceType: 'imagetest_harness_pterraform',
      terraformGeneratorMetadata: {
        providerName: 'imagetest',
        providerVersion: '0.0.104',
        providerVersionConstraint: '0.0.104'
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
    this._path = config.path;
    this._timeouts.internalValue = config.timeouts;
    this._vars = config.vars;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inventory - computed: false, optional: false, required: true
  private _inventory = new HarnessPterraformInventoryOutputReference(this, "inventory");
  public get inventory() {
    return this._inventory;
  }
  public putInventory(value: HarnessPterraformInventory) {
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new HarnessPterraformTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: HarnessPterraformTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vars - computed: false, optional: true, required: false
  private _vars?: string; 
  public get vars() {
    return this.getStringAttribute('vars');
  }
  public set vars(value: string) {
    this._vars = value;
  }
  public resetVars() {
    this._vars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varsInput() {
    return this._vars;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      inventory: harnessPterraformInventoryToTerraform(this._inventory.internalValue),
      name: cdktf.stringToTerraform(this._name),
      path: cdktf.stringToTerraform(this._path),
      timeouts: harnessPterraformTimeoutsToTerraform(this._timeouts.internalValue),
      vars: cdktf.stringToTerraform(this._vars),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      inventory: {
        value: harnessPterraformInventoryToHclTerraform(this._inventory.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HarnessPterraformInventory",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: harnessPterraformTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HarnessPterraformTimeouts",
      },
      vars: {
        value: cdktf.stringToHclTerraform(this._vars),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
