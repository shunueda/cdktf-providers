// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fmg_fabric_authorization_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFmgFabricAuthorizationTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fmg_fabric_authorization_template#adom ObjectFmgFabricAuthorizationTemplate#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fmg_fabric_authorization_template#description ObjectFmgFabricAuthorizationTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fmg_fabric_authorization_template#dynamic_sort_subtable ObjectFmgFabricAuthorizationTemplate#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fmg_fabric_authorization_template#extender_controller ObjectFmgFabricAuthorizationTemplate#extender_controller}
  */
  readonly extenderController?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fmg_fabric_authorization_template#id ObjectFmgFabricAuthorizationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fmg_fabric_authorization_template#name ObjectFmgFabricAuthorizationTemplate#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fmg_fabric_authorization_template#scopetype ObjectFmgFabricAuthorizationTemplate#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fmg_fabric_authorization_template#switch_controller ObjectFmgFabricAuthorizationTemplate#switch_controller}
  */
  readonly switchController?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fmg_fabric_authorization_template#wireless_controller ObjectFmgFabricAuthorizationTemplate#wireless_controller}
  */
  readonly wirelessController?: string;
  /**
  * platforms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fmg_fabric_authorization_template#platforms ObjectFmgFabricAuthorizationTemplate#platforms}
  */
  readonly platforms?: ObjectFmgFabricAuthorizationTemplatePlatforms[] | cdktf.IResolvable;
}
export interface ObjectFmgFabricAuthorizationTemplatePlatforms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fmg_fabric_authorization_template#count ObjectFmgFabricAuthorizationTemplate#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fmg_fabric_authorization_template#extension_type ObjectFmgFabricAuthorizationTemplate#extension_type}
  */
  readonly extensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fmg_fabric_authorization_template#fortilink ObjectFmgFabricAuthorizationTemplate#fortilink}
  */
  readonly fortilink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fmg_fabric_authorization_template#prefix ObjectFmgFabricAuthorizationTemplate#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fmg_fabric_authorization_template#type ObjectFmgFabricAuthorizationTemplate#type}
  */
  readonly type?: string;
}

export function objectFmgFabricAuthorizationTemplatePlatformsToTerraform(struct?: ObjectFmgFabricAuthorizationTemplatePlatforms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    extension_type: cdktf.stringToTerraform(struct!.extensionType),
    fortilink: cdktf.stringToTerraform(struct!.fortilink),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function objectFmgFabricAuthorizationTemplatePlatformsToHclTerraform(struct?: ObjectFmgFabricAuthorizationTemplatePlatforms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extension_type: {
      value: cdktf.stringToHclTerraform(struct!.extensionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortilink: {
      value: cdktf.stringToHclTerraform(struct!.fortilink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFmgFabricAuthorizationTemplatePlatformsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFmgFabricAuthorizationTemplatePlatforms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._extensionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionType = this._extensionType;
    }
    if (this._fortilink !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortilink = this._fortilink;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFmgFabricAuthorizationTemplatePlatforms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._extensionType = undefined;
      this._fortilink = undefined;
      this._prefix = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._extensionType = value.extensionType;
      this._fortilink = value.fortilink;
      this._prefix = value.prefix;
      this._type = value.type;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // extension_type - computed: true, optional: true, required: false
  private _extensionType?: string; 
  public get extensionType() {
    return this.getStringAttribute('extension_type');
  }
  public set extensionType(value: string) {
    this._extensionType = value;
  }
  public resetExtensionType() {
    this._extensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionTypeInput() {
    return this._extensionType;
  }

  // fortilink - computed: false, optional: true, required: false
  private _fortilink?: string; 
  public get fortilink() {
    return this.getStringAttribute('fortilink');
  }
  public set fortilink(value: string) {
    this._fortilink = value;
  }
  public resetFortilink() {
    this._fortilink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortilinkInput() {
    return this._fortilink;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ObjectFmgFabricAuthorizationTemplatePlatformsList extends cdktf.ComplexList {
  public internalValue? : ObjectFmgFabricAuthorizationTemplatePlatforms[] | cdktf.IResolvable

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
  public get(index: number): ObjectFmgFabricAuthorizationTemplatePlatformsOutputReference {
    return new ObjectFmgFabricAuthorizationTemplatePlatformsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fmg_fabric_authorization_template fortimanager_object_fmg_fabric_authorization_template}
*/
export class ObjectFmgFabricAuthorizationTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_fmg_fabric_authorization_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFmgFabricAuthorizationTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFmgFabricAuthorizationTemplate to import
  * @param importFromId The id of the existing ObjectFmgFabricAuthorizationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fmg_fabric_authorization_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFmgFabricAuthorizationTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_fmg_fabric_authorization_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fmg_fabric_authorization_template fortimanager_object_fmg_fabric_authorization_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFmgFabricAuthorizationTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectFmgFabricAuthorizationTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_fmg_fabric_authorization_template',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._description = config.description;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._extenderController = config.extenderController;
    this._id = config.id;
    this._name = config.name;
    this._scopetype = config.scopetype;
    this._switchController = config.switchController;
    this._wirelessController = config.wirelessController;
    this._platforms.internalValue = config.platforms;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // extender_controller - computed: false, optional: true, required: false
  private _extenderController?: string; 
  public get extenderController() {
    return this.getStringAttribute('extender_controller');
  }
  public set extenderController(value: string) {
    this._extenderController = value;
  }
  public resetExtenderController() {
    this._extenderController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extenderControllerInput() {
    return this._extenderController;
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

  // name - computed: false, optional: true, required: false
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

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // switch_controller - computed: false, optional: true, required: false
  private _switchController?: string; 
  public get switchController() {
    return this.getStringAttribute('switch_controller');
  }
  public set switchController(value: string) {
    this._switchController = value;
  }
  public resetSwitchController() {
    this._switchController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerInput() {
    return this._switchController;
  }

  // wireless_controller - computed: false, optional: true, required: false
  private _wirelessController?: string; 
  public get wirelessController() {
    return this.getStringAttribute('wireless_controller');
  }
  public set wirelessController(value: string) {
    this._wirelessController = value;
  }
  public resetWirelessController() {
    this._wirelessController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wirelessControllerInput() {
    return this._wirelessController;
  }

  // platforms - computed: false, optional: true, required: false
  private _platforms = new ObjectFmgFabricAuthorizationTemplatePlatformsList(this, "platforms", false);
  public get platforms() {
    return this._platforms;
  }
  public putPlatforms(value: ObjectFmgFabricAuthorizationTemplatePlatforms[] | cdktf.IResolvable) {
    this._platforms.internalValue = value;
  }
  public resetPlatforms() {
    this._platforms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformsInput() {
    return this._platforms.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      description: cdktf.stringToTerraform(this._description),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      extender_controller: cdktf.stringToTerraform(this._extenderController),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      switch_controller: cdktf.stringToTerraform(this._switchController),
      wireless_controller: cdktf.stringToTerraform(this._wirelessController),
      platforms: cdktf.listMapper(objectFmgFabricAuthorizationTemplatePlatformsToTerraform, true)(this._platforms.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extender_controller: {
        value: cdktf.stringToHclTerraform(this._extenderController),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_controller: {
        value: cdktf.stringToHclTerraform(this._switchController),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wireless_controller: {
        value: cdktf.stringToHclTerraform(this._wirelessController),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platforms: {
        value: cdktf.listMapperHcl(objectFmgFabricAuthorizationTemplatePlatformsToHclTerraform, true)(this._platforms.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFmgFabricAuthorizationTemplatePlatformsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
