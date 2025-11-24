// https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/data-sources/pullzone_access_lists
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBunnynetPullzoneAccessListsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Select custom or curated Access Lists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/data-sources/pullzone_access_lists#custom DataBunnynetPullzoneAccessLists#custom}
  */
  readonly custom: boolean | cdktf.IResolvable;
  /**
  * The ID of the linked pullzone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/data-sources/pullzone_access_lists#pullzone DataBunnynetPullzoneAccessLists#pullzone}
  */
  readonly pullzone: number;
}
export interface DataBunnynetPullzoneAccessListsData {
}

export function dataBunnynetPullzoneAccessListsDataToTerraform(struct?: DataBunnynetPullzoneAccessListsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBunnynetPullzoneAccessListsDataToHclTerraform(struct?: DataBunnynetPullzoneAccessListsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBunnynetPullzoneAccessListsDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataBunnynetPullzoneAccessListsData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBunnynetPullzoneAccessListsData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataBunnynetPullzoneAccessListsDataMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataBunnynetPullzoneAccessListsDataOutputReference {
    return new DataBunnynetPullzoneAccessListsDataOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/data-sources/pullzone_access_lists bunnynet_pullzone_access_lists}
*/
export class DataBunnynetPullzoneAccessLists extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bunnynet_pullzone_access_lists";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBunnynetPullzoneAccessLists resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBunnynetPullzoneAccessLists to import
  * @param importFromId The id of the existing DataBunnynetPullzoneAccessLists that should be imported. Refer to the {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/data-sources/pullzone_access_lists#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBunnynetPullzoneAccessLists to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bunnynet_pullzone_access_lists", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/data-sources/pullzone_access_lists bunnynet_pullzone_access_lists} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBunnynetPullzoneAccessListsConfig
  */
  public constructor(scope: Construct, id: string, config: DataBunnynetPullzoneAccessListsConfig) {
    super(scope, id, {
      terraformResourceType: 'bunnynet_pullzone_access_lists',
      terraformGeneratorMetadata: {
        providerName: 'bunnynet',
        providerVersion: '0.11.3',
        providerVersionConstraint: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._custom = config.custom;
    this._pullzone = config.pullzone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom - computed: false, optional: false, required: true
  private _custom?: boolean | cdktf.IResolvable; 
  public get custom() {
    return this.getBooleanAttribute('custom');
  }
  public set custom(value: boolean | cdktf.IResolvable) {
    this._custom = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom;
  }

  // data - computed: true, optional: false, required: false
  private _data = new DataBunnynetPullzoneAccessListsDataMap(this, "data");
  public get data() {
    return this._data;
  }

  // pullzone - computed: false, optional: false, required: true
  private _pullzone?: number; 
  public get pullzone() {
    return this.getNumberAttribute('pullzone');
  }
  public set pullzone(value: number) {
    this._pullzone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pullzoneInput() {
    return this._pullzone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom: cdktf.booleanToTerraform(this._custom),
      pullzone: cdktf.numberToTerraform(this._pullzone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom: {
        value: cdktf.booleanToHclTerraform(this._custom),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pullzone: {
        value: cdktf.numberToHclTerraform(this._pullzone),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
