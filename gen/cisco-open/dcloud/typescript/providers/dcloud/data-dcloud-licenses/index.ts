// https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/data-sources/licenses
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDcloudLicensesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/data-sources/licenses#id DataDcloudLicenses#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/data-sources/licenses#topology_uid DataDcloudLicenses#topology_uid}
  */
  readonly topologyUid: string;
}
export interface DataDcloudLicensesLicenses {
}

export function dataDcloudLicensesLicensesToTerraform(struct?: DataDcloudLicensesLicenses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDcloudLicensesLicensesToHclTerraform(struct?: DataDcloudLicensesLicenses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDcloudLicensesLicensesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDcloudLicensesLicenses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDcloudLicensesLicenses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inventory_license_id - computed: true, optional: false, required: false
  public get inventoryLicenseId() {
    return this.getStringAttribute('inventory_license_id');
  }

  // inventory_license_name - computed: true, optional: false, required: false
  public get inventoryLicenseName() {
    return this.getStringAttribute('inventory_license_name');
  }

  // quantity - computed: true, optional: false, required: false
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }

  // topology_uid - computed: true, optional: false, required: false
  public get topologyUid() {
    return this.getStringAttribute('topology_uid');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataDcloudLicensesLicensesList extends cdktf.ComplexList {

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
  public get(index: number): DataDcloudLicensesLicensesOutputReference {
    return new DataDcloudLicensesLicensesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/data-sources/licenses dcloud_licenses}
*/
export class DataDcloudLicenses extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dcloud_licenses";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDcloudLicenses resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDcloudLicenses to import
  * @param importFromId The id of the existing DataDcloudLicenses that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/data-sources/licenses#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDcloudLicenses to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dcloud_licenses", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/data-sources/licenses dcloud_licenses} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDcloudLicensesConfig
  */
  public constructor(scope: Construct, id: string, config: DataDcloudLicensesConfig) {
    super(scope, id, {
      terraformResourceType: 'dcloud_licenses',
      terraformGeneratorMetadata: {
        providerName: 'dcloud',
        providerVersion: '0.1.29'
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
    this._topologyUid = config.topologyUid;
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

  // licenses - computed: true, optional: false, required: false
  private _licenses = new DataDcloudLicensesLicensesList(this, "licenses", false);
  public get licenses() {
    return this._licenses;
  }

  // topology_uid - computed: false, optional: false, required: true
  private _topologyUid?: string; 
  public get topologyUid() {
    return this.getStringAttribute('topology_uid');
  }
  public set topologyUid(value: string) {
    this._topologyUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyUidInput() {
    return this._topologyUid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      topology_uid: cdktf.stringToTerraform(this._topologyUid),
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
      topology_uid: {
        value: cdktf.stringToHclTerraform(this._topologyUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
