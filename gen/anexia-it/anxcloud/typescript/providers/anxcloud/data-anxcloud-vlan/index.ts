// https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/data-sources/vlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAnxcloudVlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * The VLAN ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/data-sources/vlan#id DataAnxcloudVlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * VLAN name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/data-sources/vlan#name DataAnxcloudVlan#name}
  */
  readonly name?: string;
}
export interface DataAnxcloudVlanLocations {
}

export function dataAnxcloudVlanLocationsToTerraform(struct?: DataAnxcloudVlanLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAnxcloudVlanLocationsToHclTerraform(struct?: DataAnxcloudVlanLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAnxcloudVlanLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAnxcloudVlanLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAnxcloudVlanLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // city_code - computed: true, optional: false, required: false
  public get cityCode() {
    return this.getStringAttribute('city_code');
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // lat - computed: true, optional: false, required: false
  public get lat() {
    return this.getStringAttribute('lat');
  }

  // lon - computed: true, optional: false, required: false
  public get lon() {
    return this.getStringAttribute('lon');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAnxcloudVlanLocationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAnxcloudVlanLocationsOutputReference {
    return new DataAnxcloudVlanLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/data-sources/vlan anxcloud_vlan}
*/
export class DataAnxcloudVlan extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "anxcloud_vlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAnxcloudVlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAnxcloudVlan to import
  * @param importFromId The id of the existing DataAnxcloudVlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/data-sources/vlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAnxcloudVlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "anxcloud_vlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/data-sources/vlan anxcloud_vlan} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAnxcloudVlanConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAnxcloudVlanConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'anxcloud_vlan',
      terraformGeneratorMetadata: {
        providerName: 'anxcloud',
        providerVersion: '0.7.4'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description_customer - computed: true, optional: false, required: false
  public get descriptionCustomer() {
    return this.getStringAttribute('description_customer');
  }

  // description_internal - computed: true, optional: false, required: false
  public get descriptionInternal() {
    return this.getStringAttribute('description_internal');
  }

  // id - computed: false, optional: true, required: false
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

  // location_id - computed: true, optional: false, required: false
  public get locationId() {
    return this.getStringAttribute('location_id');
  }

  // locations - computed: true, optional: false, required: false
  private _locations = new DataAnxcloudVlanLocationsList(this, "locations", false);
  public get locations() {
    return this._locations;
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

  // role_text - computed: true, optional: false, required: false
  public get roleText() {
    return this.getStringAttribute('role_text');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vm_provisioning - computed: true, optional: false, required: false
  public get vmProvisioning() {
    return this.getBooleanAttribute('vm_provisioning');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
