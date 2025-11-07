// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_properties
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiCloudwrapperPropertiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of contract IDs with Cloud Wrapper entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_properties#contract_ids DataAkamaiCloudwrapperProperties#contract_ids}
  */
  readonly contractIds?: string[];
  /**
  * Specify whether the response should contain only unused properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_properties#unused DataAkamaiCloudwrapperProperties#unused}
  */
  readonly unused?: boolean | cdktf.IResolvable;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_properties#properties DataAkamaiCloudwrapperProperties#properties}
  */
  readonly properties?: DataAkamaiCloudwrapperPropertiesProperties[] | cdktf.IResolvable;
}
export interface DataAkamaiCloudwrapperPropertiesProperties {
}

export function dataAkamaiCloudwrapperPropertiesPropertiesToTerraform(struct?: DataAkamaiCloudwrapperPropertiesProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiCloudwrapperPropertiesPropertiesToHclTerraform(struct?: DataAkamaiCloudwrapperPropertiesProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiCloudwrapperPropertiesPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiCloudwrapperPropertiesProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCloudwrapperPropertiesProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // contract_id - computed: true, optional: false, required: false
  public get contractId() {
    return this.getStringAttribute('contract_id');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // property_id - computed: true, optional: false, required: false
  public get propertyId() {
    return this.getNumberAttribute('property_id');
  }

  // property_name - computed: true, optional: false, required: false
  public get propertyName() {
    return this.getStringAttribute('property_name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAkamaiCloudwrapperPropertiesPropertiesList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiCloudwrapperPropertiesProperties[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiCloudwrapperPropertiesPropertiesOutputReference {
    return new DataAkamaiCloudwrapperPropertiesPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_properties akamai_cloudwrapper_properties}
*/
export class DataAkamaiCloudwrapperProperties extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_cloudwrapper_properties";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiCloudwrapperProperties resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiCloudwrapperProperties to import
  * @param importFromId The id of the existing DataAkamaiCloudwrapperProperties that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_properties#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiCloudwrapperProperties to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_cloudwrapper_properties", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_properties akamai_cloudwrapper_properties} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiCloudwrapperPropertiesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiCloudwrapperPropertiesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'akamai_cloudwrapper_properties',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contractIds = config.contractIds;
    this._unused = config.unused;
    this._properties.internalValue = config.properties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contract_ids - computed: false, optional: true, required: false
  private _contractIds?: string[]; 
  public get contractIds() {
    return this.getListAttribute('contract_ids');
  }
  public set contractIds(value: string[]) {
    this._contractIds = value;
  }
  public resetContractIds() {
    this._contractIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractIdsInput() {
    return this._contractIds;
  }

  // unused - computed: false, optional: true, required: false
  private _unused?: boolean | cdktf.IResolvable; 
  public get unused() {
    return this.getBooleanAttribute('unused');
  }
  public set unused(value: boolean | cdktf.IResolvable) {
    this._unused = value;
  }
  public resetUnused() {
    this._unused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unusedInput() {
    return this._unused;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new DataAkamaiCloudwrapperPropertiesPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: DataAkamaiCloudwrapperPropertiesProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contract_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contractIds),
      unused: cdktf.booleanToTerraform(this._unused),
      properties: cdktf.listMapper(dataAkamaiCloudwrapperPropertiesPropertiesToTerraform, true)(this._properties.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contract_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contractIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      unused: {
        value: cdktf.booleanToHclTerraform(this._unused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      properties: {
        value: cdktf.listMapperHcl(dataAkamaiCloudwrapperPropertiesPropertiesToHclTerraform, true)(this._properties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkamaiCloudwrapperPropertiesPropertiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
