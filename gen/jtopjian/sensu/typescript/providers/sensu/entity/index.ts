// https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/entity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EntityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/entity#annotations Entity#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/entity#class Entity#class}
  */
  readonly class: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/entity#deregister Entity#deregister}
  */
  readonly deregister?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/entity#id Entity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/entity#labels Entity#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/entity#name Entity#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/entity#namespace Entity#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/entity#redact Entity#redact}
  */
  readonly redact?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/entity#subscriptions Entity#subscriptions}
  */
  readonly subscriptions?: string[];
  /**
  * deregistration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/entity#deregistration Entity#deregistration}
  */
  readonly deregistration?: EntityDeregistration;
}
export interface EntitySystemNetworkInterfaces {
}

export function entitySystemNetworkInterfacesToTerraform(struct?: EntitySystemNetworkInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function entitySystemNetworkInterfacesToHclTerraform(struct?: EntitySystemNetworkInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EntitySystemNetworkInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EntitySystemNetworkInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EntitySystemNetworkInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addresses - computed: true, optional: false, required: false
  public get addresses() {
    return this.getListAttribute('addresses');
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class EntitySystemNetworkInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): EntitySystemNetworkInterfacesOutputReference {
    return new EntitySystemNetworkInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EntitySystem {
}

export function entitySystemToTerraform(struct?: EntitySystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function entitySystemToHclTerraform(struct?: EntitySystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EntitySystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EntitySystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EntitySystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arch - computed: true, optional: false, required: false
  public get arch() {
    return this.getStringAttribute('arch');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // network_interfaces - computed: true, optional: false, required: false
  private _networkInterfaces = new EntitySystemNetworkInterfacesList(this, "network_interfaces", false);
  public get networkInterfaces() {
    return this._networkInterfaces;
  }

  // os - computed: true, optional: false, required: false
  public get os() {
    return this.getStringAttribute('os');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // platform_family - computed: true, optional: false, required: false
  public get platformFamily() {
    return this.getStringAttribute('platform_family');
  }

  // platform_version - computed: true, optional: false, required: false
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }
}

export class EntitySystemList extends cdktf.ComplexList {

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
  public get(index: number): EntitySystemOutputReference {
    return new EntitySystemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EntityDeregistration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/entity#handler Entity#handler}
  */
  readonly handler: string;
}

export function entityDeregistrationToTerraform(struct?: EntityDeregistrationOutputReference | EntityDeregistration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    handler: cdktf.stringToTerraform(struct!.handler),
  }
}


export function entityDeregistrationToHclTerraform(struct?: EntityDeregistrationOutputReference | EntityDeregistration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    handler: {
      value: cdktf.stringToHclTerraform(struct!.handler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EntityDeregistrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EntityDeregistration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._handler !== undefined) {
      hasAnyValues = true;
      internalValueResult.handler = this._handler;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EntityDeregistration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._handler = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._handler = value.handler;
    }
  }

  // handler - computed: false, optional: false, required: true
  private _handler?: string; 
  public get handler() {
    return this.getStringAttribute('handler');
  }
  public set handler(value: string) {
    this._handler = value;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerInput() {
    return this._handler;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/entity sensu_entity}
*/
export class Entity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sensu_entity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Entity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Entity to import
  * @param importFromId The id of the existing Entity that should be imported. Refer to the {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/entity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Entity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sensu_entity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/entity sensu_entity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EntityConfig
  */
  public constructor(scope: Construct, id: string, config: EntityConfig) {
    super(scope, id, {
      terraformResourceType: 'sensu_entity',
      terraformGeneratorMetadata: {
        providerName: 'sensu',
        providerVersion: '0.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._class = config.class;
    this._deregister = config.deregister;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._redact = config.redact;
    this._subscriptions = config.subscriptions;
    this._deregistration.internalValue = config.deregistration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // class - computed: false, optional: false, required: true
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // deregister - computed: false, optional: true, required: false
  private _deregister?: boolean | cdktf.IResolvable; 
  public get deregister() {
    return this.getBooleanAttribute('deregister');
  }
  public set deregister(value: boolean | cdktf.IResolvable) {
    this._deregister = value;
  }
  public resetDeregister() {
    this._deregister = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deregisterInput() {
    return this._deregister;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // last_seen - computed: true, optional: false, required: false
  public get lastSeen() {
    return this.getNumberAttribute('last_seen');
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

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // redact - computed: false, optional: true, required: false
  private _redact?: string[]; 
  public get redact() {
    return this.getListAttribute('redact');
  }
  public set redact(value: string[]) {
    this._redact = value;
  }
  public resetRedact() {
    this._redact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactInput() {
    return this._redact;
  }

  // subscriptions - computed: false, optional: true, required: false
  private _subscriptions?: string[]; 
  public get subscriptions() {
    return this.getListAttribute('subscriptions');
  }
  public set subscriptions(value: string[]) {
    this._subscriptions = value;
  }
  public resetSubscriptions() {
    this._subscriptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionsInput() {
    return this._subscriptions;
  }

  // system - computed: true, optional: false, required: false
  private _system = new EntitySystemList(this, "system", false);
  public get systemAttribute() {
    return this._system;
  }

  // deregistration - computed: false, optional: true, required: false
  private _deregistration = new EntityDeregistrationOutputReference(this, "deregistration");
  public get deregistration() {
    return this._deregistration;
  }
  public putDeregistration(value: EntityDeregistration) {
    this._deregistration.internalValue = value;
  }
  public resetDeregistration() {
    this._deregistration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deregistrationInput() {
    return this._deregistration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      class: cdktf.stringToTerraform(this._class),
      deregister: cdktf.booleanToTerraform(this._deregister),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      redact: cdktf.listMapper(cdktf.stringToTerraform, false)(this._redact),
      subscriptions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subscriptions),
      deregistration: entityDeregistrationToTerraform(this._deregistration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      class: {
        value: cdktf.stringToHclTerraform(this._class),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deregister: {
        value: cdktf.booleanToHclTerraform(this._deregister),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redact: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._redact),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      subscriptions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subscriptions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      deregistration: {
        value: entityDeregistrationToHclTerraform(this._deregistration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EntityDeregistrationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
