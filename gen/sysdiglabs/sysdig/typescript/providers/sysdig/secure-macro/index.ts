// https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_macro
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecureMacroConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_macro#append SecureMacro#append}
  */
  readonly append?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_macro#condition SecureMacro#condition}
  */
  readonly condition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_macro#id SecureMacro#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_macro#minimum_engine_version SecureMacro#minimum_engine_version}
  */
  readonly minimumEngineVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_macro#name SecureMacro#name}
  */
  readonly name: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_macro#timeouts SecureMacro#timeouts}
  */
  readonly timeouts?: SecureMacroTimeouts;
}
export interface SecureMacroTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_macro#create SecureMacro#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_macro#delete SecureMacro#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_macro#read SecureMacro#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_macro#update SecureMacro#update}
  */
  readonly update?: string;
}

export function secureMacroTimeoutsToTerraform(struct?: SecureMacroTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function secureMacroTimeoutsToHclTerraform(struct?: SecureMacroTimeouts | cdktf.IResolvable): any {
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

export class SecureMacroTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecureMacroTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecureMacroTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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
* Represents a {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_macro sysdig_secure_macro}
*/
export class SecureMacro extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sysdig_secure_macro";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecureMacro resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecureMacro to import
  * @param importFromId The id of the existing SecureMacro that should be imported. Refer to the {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_macro#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecureMacro to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sysdig_secure_macro", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_macro sysdig_secure_macro} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecureMacroConfig
  */
  public constructor(scope: Construct, id: string, config: SecureMacroConfig) {
    super(scope, id, {
      terraformResourceType: 'sysdig_secure_macro',
      terraformGeneratorMetadata: {
        providerName: 'sysdig',
        providerVersion: '3.3.1',
        providerVersionConstraint: '3.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._append = config.append;
    this._condition = config.condition;
    this._id = config.id;
    this._minimumEngineVersion = config.minimumEngineVersion;
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // append - computed: false, optional: true, required: false
  private _append?: boolean | cdktf.IResolvable; 
  public get append() {
    return this.getBooleanAttribute('append');
  }
  public set append(value: boolean | cdktf.IResolvable) {
    this._append = value;
  }
  public resetAppend() {
    this._append = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
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

  // minimum_engine_version - computed: false, optional: true, required: false
  private _minimumEngineVersion?: number; 
  public get minimumEngineVersion() {
    return this.getNumberAttribute('minimum_engine_version');
  }
  public set minimumEngineVersion(value: number) {
    this._minimumEngineVersion = value;
  }
  public resetMinimumEngineVersion() {
    this._minimumEngineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumEngineVersionInput() {
    return this._minimumEngineVersion;
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SecureMacroTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SecureMacroTimeouts) {
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
      append: cdktf.booleanToTerraform(this._append),
      condition: cdktf.stringToTerraform(this._condition),
      id: cdktf.stringToTerraform(this._id),
      minimum_engine_version: cdktf.numberToTerraform(this._minimumEngineVersion),
      name: cdktf.stringToTerraform(this._name),
      timeouts: secureMacroTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      append: {
        value: cdktf.booleanToHclTerraform(this._append),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      condition: {
        value: cdktf.stringToHclTerraform(this._condition),
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
      minimum_engine_version: {
        value: cdktf.numberToHclTerraform(this._minimumEngineVersion),
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
      timeouts: {
        value: secureMacroTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecureMacroTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
