// https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/data-sources/addons
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHerokuxAddonsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/data-sources/addons#addon_name_regex DataHerokuxAddons#addon_name_regex}
  */
  readonly addonNameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/data-sources/addons#app_name_regex DataHerokuxAddons#app_name_regex}
  */
  readonly appNameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/data-sources/addons#id DataHerokuxAddons#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataHerokuxAddonsAddons {
}

export function dataHerokuxAddonsAddonsToTerraform(struct?: DataHerokuxAddonsAddons): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHerokuxAddonsAddonsToHclTerraform(struct?: DataHerokuxAddonsAddons): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHerokuxAddonsAddonsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHerokuxAddonsAddons | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHerokuxAddonsAddons | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // app_name - computed: true, optional: false, required: false
  public get appName() {
    return this.getStringAttribute('app_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataHerokuxAddonsAddonsList extends cdktf.ComplexList {

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
  public get(index: number): DataHerokuxAddonsAddonsOutputReference {
    return new DataHerokuxAddonsAddonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/data-sources/addons herokux_addons}
*/
export class DataHerokuxAddons extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "herokux_addons";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHerokuxAddons resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHerokuxAddons to import
  * @param importFromId The id of the existing DataHerokuxAddons that should be imported. Refer to the {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/data-sources/addons#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHerokuxAddons to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "herokux_addons", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/data-sources/addons herokux_addons} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHerokuxAddonsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataHerokuxAddonsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'herokux_addons',
      terraformGeneratorMetadata: {
        providerName: 'herokux',
        providerVersion: '1.4.7',
        providerVersionConstraint: '1.4.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addonNameRegex = config.addonNameRegex;
    this._appNameRegex = config.appNameRegex;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addon_name_regex - computed: false, optional: true, required: false
  private _addonNameRegex?: string; 
  public get addonNameRegex() {
    return this.getStringAttribute('addon_name_regex');
  }
  public set addonNameRegex(value: string) {
    this._addonNameRegex = value;
  }
  public resetAddonNameRegex() {
    this._addonNameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonNameRegexInput() {
    return this._addonNameRegex;
  }

  // addons - computed: true, optional: false, required: false
  private _addons = new DataHerokuxAddonsAddonsList(this, "addons", false);
  public get addons() {
    return this._addons;
  }

  // app_name_regex - computed: false, optional: true, required: false
  private _appNameRegex?: string; 
  public get appNameRegex() {
    return this.getStringAttribute('app_name_regex');
  }
  public set appNameRegex(value: string) {
    this._appNameRegex = value;
  }
  public resetAppNameRegex() {
    this._appNameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameRegexInput() {
    return this._appNameRegex;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addon_name_regex: cdktf.stringToTerraform(this._addonNameRegex),
      app_name_regex: cdktf.stringToTerraform(this._appNameRegex),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addon_name_regex: {
        value: cdktf.stringToHclTerraform(this._addonNameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_name_regex: {
        value: cdktf.stringToHclTerraform(this._appNameRegex),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
