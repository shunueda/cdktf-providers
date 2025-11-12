// https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable or disable all listener bindings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_binding#enabled RepositoryBinding#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_binding#id RepositoryBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the repository that will be bound to the sidecar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_binding#repository_id RepositoryBinding#repository_id}
  */
  readonly repositoryId: string;
  /**
  * ID of the sidecar that will be bound to the given repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_binding#sidecar_id RepositoryBinding#sidecar_id}
  */
  readonly sidecarId: string;
  /**
  * listener_binding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_binding#listener_binding RepositoryBinding#listener_binding}
  */
  readonly listenerBinding: RepositoryBindingListenerBinding[] | cdktf.IResolvable;
}
export interface RepositoryBindingListenerBinding {
  /**
  * The sidecar listener that this binding is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_binding#listener_id RepositoryBinding#listener_id}
  */
  readonly listenerId: string;
  /**
  * The index of the repo node that this binding is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_binding#node_index RepositoryBinding#node_index}
  */
  readonly nodeIndex?: number;
}

export function repositoryBindingListenerBindingToTerraform(struct?: RepositoryBindingListenerBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listener_id: cdktf.stringToTerraform(struct!.listenerId),
    node_index: cdktf.numberToTerraform(struct!.nodeIndex),
  }
}


export function repositoryBindingListenerBindingToHclTerraform(struct?: RepositoryBindingListenerBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listener_id: {
      value: cdktf.stringToHclTerraform(struct!.listenerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_index: {
      value: cdktf.numberToHclTerraform(struct!.nodeIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryBindingListenerBindingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RepositoryBindingListenerBinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listenerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerId = this._listenerId;
    }
    if (this._nodeIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeIndex = this._nodeIndex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryBindingListenerBinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listenerId = undefined;
      this._nodeIndex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._listenerId = value.listenerId;
      this._nodeIndex = value.nodeIndex;
    }
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

  // node_index - computed: false, optional: true, required: false
  private _nodeIndex?: number; 
  public get nodeIndex() {
    return this.getNumberAttribute('node_index');
  }
  public set nodeIndex(value: number) {
    this._nodeIndex = value;
  }
  public resetNodeIndex() {
    this._nodeIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIndexInput() {
    return this._nodeIndex;
  }
}

export class RepositoryBindingListenerBindingList extends cdktf.ComplexList {
  public internalValue? : RepositoryBindingListenerBinding[] | cdktf.IResolvable

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
  public get(index: number): RepositoryBindingListenerBindingOutputReference {
    return new RepositoryBindingListenerBindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_binding cyral_repository_binding}
*/
export class RepositoryBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cyral_repository_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryBinding to import
  * @param importFromId The id of the existing RepositoryBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cyral_repository_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_binding cyral_repository_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryBindingConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'cyral_repository_binding',
      terraformGeneratorMetadata: {
        providerName: 'cyral',
        providerVersion: '4.16.3',
        providerVersionConstraint: '4.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._repositoryId = config.repositoryId;
    this._sidecarId = config.sidecarId;
    this._listenerBinding.internalValue = config.listenerBinding;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // binding_id - computed: true, optional: false, required: false
  public get bindingId() {
    return this.getStringAttribute('binding_id');
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // repository_id - computed: false, optional: false, required: true
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // sidecar_id - computed: false, optional: false, required: true
  private _sidecarId?: string; 
  public get sidecarId() {
    return this.getStringAttribute('sidecar_id');
  }
  public set sidecarId(value: string) {
    this._sidecarId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sidecarIdInput() {
    return this._sidecarId;
  }

  // listener_binding - computed: false, optional: false, required: true
  private _listenerBinding = new RepositoryBindingListenerBindingList(this, "listener_binding", false);
  public get listenerBinding() {
    return this._listenerBinding;
  }
  public putListenerBinding(value: RepositoryBindingListenerBinding[] | cdktf.IResolvable) {
    this._listenerBinding.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerBindingInput() {
    return this._listenerBinding.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      repository_id: cdktf.stringToTerraform(this._repositoryId),
      sidecar_id: cdktf.stringToTerraform(this._sidecarId),
      listener_binding: cdktf.listMapper(repositoryBindingListenerBindingToTerraform, true)(this._listenerBinding.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      repository_id: {
        value: cdktf.stringToHclTerraform(this._repositoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sidecar_id: {
        value: cdktf.stringToHclTerraform(this._sidecarId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listener_binding: {
        value: cdktf.listMapperHcl(repositoryBindingListenerBindingToHclTerraform, true)(this._listenerBinding.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryBindingListenerBindingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
