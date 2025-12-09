// https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/data-sources/application_spaces
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIndykiteApplicationSpacesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier of Customer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/data-sources/application_spaces#customer_id DataIndykiteApplicationSpaces#customer_id}
  */
  readonly customerId: string;
  /**
  * Filter customers based on given names. Using 'exact name match' strategy to find customer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/data-sources/application_spaces#filter DataIndykiteApplicationSpaces#filter}
  */
  readonly filter: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/data-sources/application_spaces#id DataIndykiteApplicationSpaces#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/data-sources/application_spaces#timeouts DataIndykiteApplicationSpaces#timeouts}
  */
  readonly timeouts?: DataIndykiteApplicationSpacesTimeouts;
}
export interface DataIndykiteApplicationSpacesAppSpaces {
}

export function dataIndykiteApplicationSpacesAppSpacesToTerraform(struct?: DataIndykiteApplicationSpacesAppSpaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIndykiteApplicationSpacesAppSpacesToHclTerraform(struct?: DataIndykiteApplicationSpacesAppSpaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIndykiteApplicationSpacesAppSpacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIndykiteApplicationSpacesAppSpaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIndykiteApplicationSpacesAppSpaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // customer_id - computed: true, optional: false, required: false
  public get customerId() {
    return this.getStringAttribute('customer_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ikg_size - computed: true, optional: false, required: false
  public get ikgSize() {
    return this.getStringAttribute('ikg_size');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // replica_region - computed: true, optional: false, required: false
  public get replicaRegion() {
    return this.getStringAttribute('replica_region');
  }
}

export class DataIndykiteApplicationSpacesAppSpacesList extends cdktf.ComplexList {

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
  public get(index: number): DataIndykiteApplicationSpacesAppSpacesOutputReference {
    return new DataIndykiteApplicationSpacesAppSpacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIndykiteApplicationSpacesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/data-sources/application_spaces#default DataIndykiteApplicationSpaces#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/data-sources/application_spaces#read DataIndykiteApplicationSpaces#read}
  */
  readonly read?: string;
}

export function dataIndykiteApplicationSpacesTimeoutsToTerraform(struct?: DataIndykiteApplicationSpacesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataIndykiteApplicationSpacesTimeoutsToHclTerraform(struct?: DataIndykiteApplicationSpacesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIndykiteApplicationSpacesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIndykiteApplicationSpacesTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIndykiteApplicationSpacesTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._read = value.read;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/data-sources/application_spaces indykite_application_spaces}
*/
export class DataIndykiteApplicationSpaces extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "indykite_application_spaces";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIndykiteApplicationSpaces resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIndykiteApplicationSpaces to import
  * @param importFromId The id of the existing DataIndykiteApplicationSpaces that should be imported. Refer to the {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/data-sources/application_spaces#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIndykiteApplicationSpaces to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "indykite_application_spaces", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/data-sources/application_spaces indykite_application_spaces} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIndykiteApplicationSpacesConfig
  */
  public constructor(scope: Construct, id: string, config: DataIndykiteApplicationSpacesConfig) {
    super(scope, id, {
      terraformResourceType: 'indykite_application_spaces',
      terraformGeneratorMetadata: {
        providerName: 'indykite',
        providerVersion: '0.29.0',
        providerVersionConstraint: '0.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customerId = config.customerId;
    this._filter = config.filter;
    this._id = config.id;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_spaces - computed: true, optional: false, required: false
  private _appSpaces = new DataIndykiteApplicationSpacesAppSpacesList(this, "app_spaces", false);
  public get appSpaces() {
    return this._appSpaces;
  }

  // customer_id - computed: false, optional: false, required: true
  private _customerId?: string; 
  public get customerId() {
    return this.getStringAttribute('customer_id');
  }
  public set customerId(value: string) {
    this._customerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerIdInput() {
    return this._customerId;
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string[]; 
  public get filter() {
    return this.getListAttribute('filter');
  }
  public set filter(value: string[]) {
    this._filter = value;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataIndykiteApplicationSpacesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataIndykiteApplicationSpacesTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      customer_id: cdktf.stringToTerraform(this._customerId),
      filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filter),
      id: cdktf.stringToTerraform(this._id),
      timeouts: dataIndykiteApplicationSpacesTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      customer_id: {
        value: cdktf.stringToHclTerraform(this._customerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filter),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataIndykiteApplicationSpacesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataIndykiteApplicationSpacesTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
