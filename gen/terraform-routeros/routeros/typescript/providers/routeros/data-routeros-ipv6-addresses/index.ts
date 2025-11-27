// https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/data-sources/ipv6_addresses
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRouterosIpv6AddressesConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/data-sources/ipv6_addresses#___path___ DataRouterosIpv6Addresses#___path___}
  */
  readonly path?: string;
  /**
  * Additional request filtering options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/data-sources/ipv6_addresses#filter DataRouterosIpv6Addresses#filter}
  */
  readonly filter?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/data-sources/ipv6_addresses#id DataRouterosIpv6Addresses#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataRouterosIpv6AddressesAddresses {
}

export function dataRouterosIpv6AddressesAddressesToTerraform(struct?: DataRouterosIpv6AddressesAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRouterosIpv6AddressesAddressesToHclTerraform(struct?: DataRouterosIpv6AddressesAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRouterosIpv6AddressesAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRouterosIpv6AddressesAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRouterosIpv6AddressesAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actual_interface - computed: true, optional: false, required: false
  public get actualInterface() {
    return this.getStringAttribute('actual_interface');
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // advertise - computed: true, optional: false, required: false
  public get advertise() {
    return this.getBooleanAttribute('advertise');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // deprecated - computed: true, optional: false, required: false
  public get deprecated() {
    return this.getBooleanAttribute('deprecated');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
  }

  // eui_64 - computed: true, optional: false, required: false
  public get eui64() {
    return this.getBooleanAttribute('eui_64');
  }

  // from_pool - computed: true, optional: false, required: false
  public get fromPool() {
    return this.getStringAttribute('from_pool');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // invalid - computed: true, optional: false, required: false
  public get invalid() {
    return this.getBooleanAttribute('invalid');
  }

  // link_local - computed: true, optional: false, required: false
  public get linkLocal() {
    return this.getBooleanAttribute('link_local');
  }

  // no_dad - computed: true, optional: false, required: false
  public get noDad() {
    return this.getBooleanAttribute('no_dad');
  }

  // slave - computed: true, optional: false, required: false
  public get slave() {
    return this.getBooleanAttribute('slave');
  }
}

export class DataRouterosIpv6AddressesAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataRouterosIpv6AddressesAddressesOutputReference {
    return new DataRouterosIpv6AddressesAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/data-sources/ipv6_addresses routeros_ipv6_addresses}
*/
export class DataRouterosIpv6Addresses extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ipv6_addresses";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRouterosIpv6Addresses resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRouterosIpv6Addresses to import
  * @param importFromId The id of the existing DataRouterosIpv6Addresses that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/data-sources/ipv6_addresses#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRouterosIpv6Addresses to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ipv6_addresses", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/data-sources/ipv6_addresses routeros_ipv6_addresses} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRouterosIpv6AddressesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRouterosIpv6AddressesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_ipv6_addresses',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.93.0',
        providerVersionConstraint: '1.93.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._filter = config.filter;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // addresses - computed: true, optional: false, required: false
  private _addresses = new DataRouterosIpv6AddressesAddressesList(this, "addresses", false);
  public get addresses() {
    return this._addresses;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: { [key: string]: string }; 
  public get filter() {
    return this.getStringMapAttribute('filter');
  }
  public set filter(value: { [key: string]: string }) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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
      ___path___: cdktf.stringToTerraform(this._path),
      filter: cdktf.hashMapper(cdktf.stringToTerraform)(this._filter),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filter),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
