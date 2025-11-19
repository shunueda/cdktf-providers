// https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/peering_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PeeringGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/peering_group#id PeeringGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique human-readable name of the PeeringGroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/peering_group#name PeeringGroup#name}
  */
  readonly name?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/peering_group#timeouts PeeringGroup#timeouts}
  */
  readonly timeouts?: PeeringGroupTimeouts;
}
export interface PeeringGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/peering_group#create PeeringGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/peering_group#default PeeringGroup#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/peering_group#delete PeeringGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/peering_group#read PeeringGroup#read}
  */
  readonly read?: string;
}

export function peeringGroupTimeoutsToTerraform(struct?: PeeringGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function peeringGroupTimeoutsToHclTerraform(struct?: PeeringGroupTimeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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

export class PeeringGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PeeringGroupTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
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

  public set internalValue(value: PeeringGroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
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
      this._default = value.default;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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
* Represents a {@link https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/peering_group sdm_peering_group}
*/
export class PeeringGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdm_peering_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PeeringGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PeeringGroup to import
  * @param importFromId The id of the existing PeeringGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/peering_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PeeringGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdm_peering_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/peering_group sdm_peering_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PeeringGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PeeringGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdm_peering_group',
      terraformGeneratorMetadata: {
        providerName: 'sdm',
        providerVersion: '15.33.0',
        providerVersionConstraint: '15.33.0'
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
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PeeringGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PeeringGroupTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      timeouts: peeringGroupTimeoutsToTerraform(this._timeouts.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: peeringGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PeeringGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
