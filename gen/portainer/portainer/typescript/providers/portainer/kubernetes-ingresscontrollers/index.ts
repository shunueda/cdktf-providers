// https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/kubernetes_ingresscontrollers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesIngresscontrollersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/kubernetes_ingresscontrollers#environment_id KubernetesIngresscontrollers#environment_id}
  */
  readonly environmentId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/kubernetes_ingresscontrollers#id KubernetesIngresscontrollers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * controllers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/kubernetes_ingresscontrollers#controllers KubernetesIngresscontrollers#controllers}
  */
  readonly controllers: KubernetesIngresscontrollersControllers[] | cdktf.IResolvable;
}
export interface KubernetesIngresscontrollersControllers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/kubernetes_ingresscontrollers#availability KubernetesIngresscontrollers#availability}
  */
  readonly availability: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/kubernetes_ingresscontrollers#class_name KubernetesIngresscontrollers#class_name}
  */
  readonly className: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/kubernetes_ingresscontrollers#name KubernetesIngresscontrollers#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/kubernetes_ingresscontrollers#new KubernetesIngresscontrollers#new}
  */
  readonly new: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/kubernetes_ingresscontrollers#type KubernetesIngresscontrollers#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/kubernetes_ingresscontrollers#used KubernetesIngresscontrollers#used}
  */
  readonly used: boolean | cdktf.IResolvable;
}

export function kubernetesIngresscontrollersControllersToTerraform(struct?: KubernetesIngresscontrollersControllers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktf.booleanToTerraform(struct!.availability),
    class_name: cdktf.stringToTerraform(struct!.className),
    name: cdktf.stringToTerraform(struct!.name),
    new: cdktf.booleanToTerraform(struct!.new),
    type: cdktf.stringToTerraform(struct!.type),
    used: cdktf.booleanToTerraform(struct!.used),
  }
}


export function kubernetesIngresscontrollersControllersToHclTerraform(struct?: KubernetesIngresscontrollersControllers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability: {
      value: cdktf.booleanToHclTerraform(struct!.availability),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    class_name: {
      value: cdktf.stringToHclTerraform(struct!.className),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new: {
      value: cdktf.booleanToHclTerraform(struct!.new),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    used: {
      value: cdktf.booleanToHclTerraform(struct!.used),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesIngresscontrollersControllersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesIngresscontrollersControllers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._className !== undefined) {
      hasAnyValues = true;
      internalValueResult.className = this._className;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._new !== undefined) {
      hasAnyValues = true;
      internalValueResult.new = this._new;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._used !== undefined) {
      hasAnyValues = true;
      internalValueResult.used = this._used;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesIngresscontrollersControllers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availability = undefined;
      this._className = undefined;
      this._name = undefined;
      this._new = undefined;
      this._type = undefined;
      this._used = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availability = value.availability;
      this._className = value.className;
      this._name = value.name;
      this._new = value.new;
      this._type = value.type;
      this._used = value.used;
    }
  }

  // availability - computed: false, optional: false, required: true
  private _availability?: boolean | cdktf.IResolvable; 
  public get availability() {
    return this.getBooleanAttribute('availability');
  }
  public set availability(value: boolean | cdktf.IResolvable) {
    this._availability = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability;
  }

  // class_name - computed: false, optional: false, required: true
  private _className?: string; 
  public get className() {
    return this.getStringAttribute('class_name');
  }
  public set className(value: string) {
    this._className = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classNameInput() {
    return this._className;
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

  // new - computed: false, optional: false, required: true
  private _new?: boolean | cdktf.IResolvable; 
  public get new() {
    return this.getBooleanAttribute('new');
  }
  public set new(value: boolean | cdktf.IResolvable) {
    this._new = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newInput() {
    return this._new;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // used - computed: false, optional: false, required: true
  private _used?: boolean | cdktf.IResolvable; 
  public get used() {
    return this.getBooleanAttribute('used');
  }
  public set used(value: boolean | cdktf.IResolvable) {
    this._used = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usedInput() {
    return this._used;
  }
}

export class KubernetesIngresscontrollersControllersList extends cdktf.ComplexList {
  public internalValue? : KubernetesIngresscontrollersControllers[] | cdktf.IResolvable

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
  public get(index: number): KubernetesIngresscontrollersControllersOutputReference {
    return new KubernetesIngresscontrollersControllersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/kubernetes_ingresscontrollers portainer_kubernetes_ingresscontrollers}
*/
export class KubernetesIngresscontrollers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_kubernetes_ingresscontrollers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesIngresscontrollers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesIngresscontrollers to import
  * @param importFromId The id of the existing KubernetesIngresscontrollers that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/kubernetes_ingresscontrollers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesIngresscontrollers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_kubernetes_ingresscontrollers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/kubernetes_ingresscontrollers portainer_kubernetes_ingresscontrollers} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesIngresscontrollersConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesIngresscontrollersConfig) {
    super(scope, id, {
      terraformResourceType: 'portainer_kubernetes_ingresscontrollers',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.17.0',
        providerVersionConstraint: '1.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentId = config.environmentId;
    this._id = config.id;
    this._controllers.internalValue = config.controllers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: number; 
  public get environmentId() {
    return this.getNumberAttribute('environment_id');
  }
  public set environmentId(value: number) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
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

  // controllers - computed: false, optional: false, required: true
  private _controllers = new KubernetesIngresscontrollersControllersList(this, "controllers", false);
  public get controllers() {
    return this._controllers;
  }
  public putControllers(value: KubernetesIngresscontrollersControllers[] | cdktf.IResolvable) {
    this._controllers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controllersInput() {
    return this._controllers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_id: cdktf.numberToTerraform(this._environmentId),
      id: cdktf.stringToTerraform(this._id),
      controllers: cdktf.listMapper(kubernetesIngresscontrollersControllersToTerraform, true)(this._controllers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_id: {
        value: cdktf.numberToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controllers: {
        value: cdktf.listMapperHcl(kubernetesIngresscontrollersControllersToHclTerraform, true)(this._controllers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesIngresscontrollersControllersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
