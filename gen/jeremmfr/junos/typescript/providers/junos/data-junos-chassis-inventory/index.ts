// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/data-sources/chassis_inventory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataJunosChassisInventoryConfig extends cdktf.TerraformMetaArguments {
}
export interface DataJunosChassisInventoryChassisModuleSubModuleSubSubModule {
}

export function dataJunosChassisInventoryChassisModuleSubModuleSubSubModuleToTerraform(struct?: DataJunosChassisInventoryChassisModuleSubModuleSubSubModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosChassisInventoryChassisModuleSubModuleSubSubModuleToHclTerraform(struct?: DataJunosChassisInventoryChassisModuleSubModuleSubSubModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosChassisInventoryChassisModuleSubModuleSubSubModuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataJunosChassisInventoryChassisModuleSubModuleSubSubModule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosChassisInventoryChassisModuleSubModuleSubSubModule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clei_code - computed: true, optional: false, required: false
  public get cleiCode() {
    return this.getStringAttribute('clei_code');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // model_number - computed: true, optional: false, required: false
  public get modelNumber() {
    return this.getStringAttribute('model_number');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // part_number - computed: true, optional: false, required: false
  public get partNumber() {
    return this.getStringAttribute('part_number');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataJunosChassisInventoryChassisModuleSubModuleSubSubModuleList extends cdktf.ComplexList {

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
  public get(index: number): DataJunosChassisInventoryChassisModuleSubModuleSubSubModuleOutputReference {
    return new DataJunosChassisInventoryChassisModuleSubModuleSubSubModuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataJunosChassisInventoryChassisModuleSubModule {
}

export function dataJunosChassisInventoryChassisModuleSubModuleToTerraform(struct?: DataJunosChassisInventoryChassisModuleSubModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosChassisInventoryChassisModuleSubModuleToHclTerraform(struct?: DataJunosChassisInventoryChassisModuleSubModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosChassisInventoryChassisModuleSubModuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataJunosChassisInventoryChassisModuleSubModule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosChassisInventoryChassisModuleSubModule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clei_code - computed: true, optional: false, required: false
  public get cleiCode() {
    return this.getStringAttribute('clei_code');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // model_number - computed: true, optional: false, required: false
  public get modelNumber() {
    return this.getStringAttribute('model_number');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // part_number - computed: true, optional: false, required: false
  public get partNumber() {
    return this.getStringAttribute('part_number');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // sub_sub_module - computed: true, optional: false, required: false
  private _subSubModule = new DataJunosChassisInventoryChassisModuleSubModuleSubSubModuleList(this, "sub_sub_module", false);
  public get subSubModule() {
    return this._subSubModule;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataJunosChassisInventoryChassisModuleSubModuleList extends cdktf.ComplexList {

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
  public get(index: number): DataJunosChassisInventoryChassisModuleSubModuleOutputReference {
    return new DataJunosChassisInventoryChassisModuleSubModuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataJunosChassisInventoryChassisModule {
}

export function dataJunosChassisInventoryChassisModuleToTerraform(struct?: DataJunosChassisInventoryChassisModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosChassisInventoryChassisModuleToHclTerraform(struct?: DataJunosChassisInventoryChassisModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosChassisInventoryChassisModuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataJunosChassisInventoryChassisModule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosChassisInventoryChassisModule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clei_code - computed: true, optional: false, required: false
  public get cleiCode() {
    return this.getStringAttribute('clei_code');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // model_number - computed: true, optional: false, required: false
  public get modelNumber() {
    return this.getStringAttribute('model_number');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // part_number - computed: true, optional: false, required: false
  public get partNumber() {
    return this.getStringAttribute('part_number');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // sub_module - computed: true, optional: false, required: false
  private _subModule = new DataJunosChassisInventoryChassisModuleSubModuleList(this, "sub_module", false);
  public get subModule() {
    return this._subModule;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataJunosChassisInventoryChassisModuleList extends cdktf.ComplexList {

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
  public get(index: number): DataJunosChassisInventoryChassisModuleOutputReference {
    return new DataJunosChassisInventoryChassisModuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataJunosChassisInventoryChassis {
}

export function dataJunosChassisInventoryChassisToTerraform(struct?: DataJunosChassisInventoryChassis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosChassisInventoryChassisToHclTerraform(struct?: DataJunosChassisInventoryChassis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosChassisInventoryChassisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataJunosChassisInventoryChassis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosChassisInventoryChassis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clei_code - computed: true, optional: false, required: false
  public get cleiCode() {
    return this.getStringAttribute('clei_code');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // model_number - computed: true, optional: false, required: false
  public get modelNumber() {
    return this.getStringAttribute('model_number');
  }

  // module - computed: true, optional: false, required: false
  private _module = new DataJunosChassisInventoryChassisModuleList(this, "module", false);
  public get module() {
    return this._module;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // part_number - computed: true, optional: false, required: false
  public get partNumber() {
    return this.getStringAttribute('part_number');
  }

  // re_name - computed: true, optional: false, required: false
  public get reName() {
    return this.getStringAttribute('re_name');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataJunosChassisInventoryChassisList extends cdktf.ComplexList {

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
  public get(index: number): DataJunosChassisInventoryChassisOutputReference {
    return new DataJunosChassisInventoryChassisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/data-sources/chassis_inventory junos_chassis_inventory}
*/
export class DataJunosChassisInventory extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_chassis_inventory";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataJunosChassisInventory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataJunosChassisInventory to import
  * @param importFromId The id of the existing DataJunosChassisInventory that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/data-sources/chassis_inventory#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataJunosChassisInventory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_chassis_inventory", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/data-sources/chassis_inventory junos_chassis_inventory} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataJunosChassisInventoryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataJunosChassisInventoryConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'junos_chassis_inventory',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // chassis - computed: true, optional: false, required: false
  private _chassis = new DataJunosChassisInventoryChassisList(this, "chassis", false);
  public get chassis() {
    return this._chassis;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
