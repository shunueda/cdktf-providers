// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/access_list_standard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeAccessListStandardConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/access_list_standard#device DataIosxeAccessListStandard#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/access_list_standard#name DataIosxeAccessListStandard#name}
  */
  readonly name: string;
}
export interface DataIosxeAccessListStandardEntries {
}

export function dataIosxeAccessListStandardEntriesToTerraform(struct?: DataIosxeAccessListStandardEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeAccessListStandardEntriesToHclTerraform(struct?: DataIosxeAccessListStandardEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeAccessListStandardEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeAccessListStandardEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeAccessListStandardEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deny_any - computed: true, optional: false, required: false
  public get denyAny() {
    return this.getBooleanAttribute('deny_any');
  }

  // deny_host - computed: true, optional: false, required: false
  public get denyHost() {
    return this.getStringAttribute('deny_host');
  }

  // deny_log - computed: true, optional: false, required: false
  public get denyLog() {
    return this.getBooleanAttribute('deny_log');
  }

  // deny_prefix - computed: true, optional: false, required: false
  public get denyPrefix() {
    return this.getStringAttribute('deny_prefix');
  }

  // deny_prefix_mask - computed: true, optional: false, required: false
  public get denyPrefixMask() {
    return this.getStringAttribute('deny_prefix_mask');
  }

  // permit_any - computed: true, optional: false, required: false
  public get permitAny() {
    return this.getBooleanAttribute('permit_any');
  }

  // permit_host - computed: true, optional: false, required: false
  public get permitHost() {
    return this.getStringAttribute('permit_host');
  }

  // permit_log - computed: true, optional: false, required: false
  public get permitLog() {
    return this.getBooleanAttribute('permit_log');
  }

  // permit_prefix - computed: true, optional: false, required: false
  public get permitPrefix() {
    return this.getStringAttribute('permit_prefix');
  }

  // permit_prefix_mask - computed: true, optional: false, required: false
  public get permitPrefixMask() {
    return this.getStringAttribute('permit_prefix_mask');
  }

  // remark - computed: true, optional: false, required: false
  public get remark() {
    return this.getStringAttribute('remark');
  }

  // sequence - computed: true, optional: false, required: false
  public get sequence() {
    return this.getNumberAttribute('sequence');
  }
}

export class DataIosxeAccessListStandardEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeAccessListStandardEntriesOutputReference {
    return new DataIosxeAccessListStandardEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/access_list_standard iosxe_access_list_standard}
*/
export class DataIosxeAccessListStandard extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_access_list_standard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeAccessListStandard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeAccessListStandard to import
  * @param importFromId The id of the existing DataIosxeAccessListStandard that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/access_list_standard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeAccessListStandard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_access_list_standard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/access_list_standard iosxe_access_list_standard} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeAccessListStandardConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxeAccessListStandardConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_access_list_standard',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // entries - computed: true, optional: false, required: false
  private _entries = new DataIosxeAccessListStandardEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      device: cdktf.stringToTerraform(this._device),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
