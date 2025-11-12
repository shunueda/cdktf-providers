// https://registry.terraform.io/providers/versa-networks/versadirector/0.0.1/docs/data-sources/addresses
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVersadirectorAddressesConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of configured addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/versa-networks/versadirector/0.0.1/docs/data-sources/addresses#address DataVersadirectorAddresses#address}
  */
  readonly address?: DataVersadirectorAddressesAddress[] | cdktf.IResolvable;
  /**
  * Device name to be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/versa-networks/versadirector/0.0.1/docs/data-sources/addresses#device_name DataVersadirectorAddresses#device_name}
  */
  readonly deviceName: string;
  /**
  * Organization name for the device to be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/versa-networks/versadirector/0.0.1/docs/data-sources/addresses#organization_name DataVersadirectorAddresses#organization_name}
  */
  readonly organizationName: string;
}
export interface DataVersadirectorAddressesAddress {
  /**
  * FQDN for the address object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/versa-networks/versadirector/0.0.1/docs/data-sources/addresses#fqdn DataVersadirectorAddresses#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Name of the address object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/versa-networks/versadirector/0.0.1/docs/data-sources/addresses#name DataVersadirectorAddresses#name}
  */
  readonly name?: string;
}

export function dataVersadirectorAddressesAddressToTerraform(struct?: DataVersadirectorAddressesAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataVersadirectorAddressesAddressToHclTerraform(struct?: DataVersadirectorAddressesAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataVersadirectorAddressesAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVersadirectorAddressesAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVersadirectorAddressesAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn = value.fqdn;
      this._name = value.name;
    }
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
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
}

export class DataVersadirectorAddressesAddressList extends cdktf.ComplexList {
  public internalValue? : DataVersadirectorAddressesAddress[] | cdktf.IResolvable

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
  public get(index: number): DataVersadirectorAddressesAddressOutputReference {
    return new DataVersadirectorAddressesAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/versa-networks/versadirector/0.0.1/docs/data-sources/addresses versadirector_addresses}
*/
export class DataVersadirectorAddresses extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "versadirector_addresses";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVersadirectorAddresses resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVersadirectorAddresses to import
  * @param importFromId The id of the existing DataVersadirectorAddresses that should be imported. Refer to the {@link https://registry.terraform.io/providers/versa-networks/versadirector/0.0.1/docs/data-sources/addresses#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVersadirectorAddresses to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "versadirector_addresses", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/versa-networks/versadirector/0.0.1/docs/data-sources/addresses versadirector_addresses} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVersadirectorAddressesConfig
  */
  public constructor(scope: Construct, id: string, config: DataVersadirectorAddressesConfig) {
    super(scope, id, {
      terraformResourceType: 'versadirector_addresses',
      terraformGeneratorMetadata: {
        providerName: 'versadirector',
        providerVersion: '0.0.1',
        providerVersionConstraint: '0.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address.internalValue = config.address;
    this._deviceName = config.deviceName;
    this._organizationName = config.organizationName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: true, required: false
  private _address = new DataVersadirectorAddressesAddressList(this, "address", false);
  public get address() {
    return this._address;
  }
  public putAddress(value: DataVersadirectorAddressesAddress[] | cdktf.IResolvable) {
    this._address.internalValue = value;
  }
  public resetAddress() {
    this._address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address.internalValue;
  }

  // device_name - computed: false, optional: false, required: true
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // organization_name - computed: false, optional: false, required: true
  private _organizationName?: string; 
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }
  public set organizationName(value: string) {
    this._organizationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationNameInput() {
    return this._organizationName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.listMapper(dataVersadirectorAddressesAddressToTerraform, false)(this._address.internalValue),
      device_name: cdktf.stringToTerraform(this._deviceName),
      organization_name: cdktf.stringToTerraform(this._organizationName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.listMapperHcl(dataVersadirectorAddressesAddressToHclTerraform, false)(this._address.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataVersadirectorAddressesAddressList",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_name: {
        value: cdktf.stringToHclTerraform(this._organizationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
